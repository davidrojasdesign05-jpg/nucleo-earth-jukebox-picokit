/* Núcleo · motor de sonido (WebAudio). Mismo sonido que el laboratorio de firmas:
   cuatro voces (bajo, arpegio/melodía, pulso, canto), lecho de ruido rosa filtrado y
   capa de presión (máquina o calor grave). La lógica de qué golpe vive viene de core.cjs. */
import C from "./core.cjs";
import DATA from "./presets.json";

const STEPS = C.STEPS, PENTA = C.PENTA;
export const PRESETS = DATA.presets;
export const ORDER = ["gases", "hielo", "jungla"];

export class NucleoSynth {
  constructor() {
    this.dash = "hielo";
    this.idx = 0;                      // 0 = lugar intacto, 1..N = años del dato
    this.derived = null; this.reference = null;
    this.ctx = null; this.nodes = null; this.timer = null;
    this.playing = false; this.step = 0; this.bar = 0; this.nextTime = 0; this.arpIndex = 0;
    this.level = 0.55;
    this.rich = true;                  // sonido enriquecido: más espacio, eco, lecho armónico y voces más cálidas (TUNING.sonidoRico)
    this.onStep = null;                // (step, audioTime, derived, reference)
    this.onBar = null;                 // (bar)
    this._derive();
  }
  get preset() { return PRESETS[this.dash]; }
  get count() { return this.preset.years.length; }
  get entry() { return this.idx === 0 ? this.preset.reference : this.preset.years[this.idx - 1]; }
  _derive() {
    const sig = this.preset.signature;
    this.derived = C.derive(sig, this.entry.vital);
    this.reference = C.derive(sig, C.REFERENCE);
  }
  setDashboard(id) {
    if (!PRESETS[id]) return;
    const changed = id !== this.dash;
    this.dash = id; this.idx = 0; this._derive();
    if (this.ctx) { this._continuous(false); if (changed && this.playing) this._restartClock(); }
  }
  setIndex(i) {
    i = Math.max(0, Math.min(this.count, Math.round(i)));
    if (i === this.idx) return;
    this.idx = i; this._derive(); this._continuous(false);
  }
  setLevel(v) { this.level = v; if (this.nodes) this.nodes.master.gain.setTargetAtTime(v, this.ctx.currentTime, 0.3); }

  async play() {
    if (!this.ctx) this._init();
    await this.ctx.resume();
    if (this.playing) return;
    this._restartClock();
    this.timer = setInterval(() => this._pump(), 25); this._pump();
    this.playing = true;
  }
  async stop() {
    clearInterval(this.timer); this.timer = null; this.playing = false;
    if (this.ctx) await this.ctx.suspend();
  }
  /** Tic corto de interfaz (detente de la esfera, cambio de sector). */
  tick(hz = 1800, gain = 0.05) {
    if (!this.ctx || this.ctx.state !== "running") return;
    const t = this.ctx.currentTime, o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = "sine"; o.frequency.value = hz; o.connect(g); g.connect(this.nodes.master);
    this._env(g, t, gain, 0.001, 0.04); o.start(t); o.stop(t + 0.08);
  }
  /** Energía 0..1 de lo que suena, para animar la escena. */
  energy() {
    if (!this.nodes) return 0;
    const w = this.nodes.wave; this.nodes.analyser.getFloatTimeDomainData(w);
    let s = 0; for (let i = 0; i < w.length; i += 4) s += w[i] * w[i];
    return Math.min(1, Math.sqrt(s / (w.length / 4)) * 4);
  }

  _init() {
    const AC = window.AudioContext || window.webkitAudioContext;
    const ctx = this.ctx = new AC();
    const master = ctx.createGain(); master.gain.value = this.level;
    const limiter = ctx.createDynamicsCompressor();
    limiter.threshold.value = -12; limiter.knee.value = 6; limiter.ratio.value = 12; limiter.attack.value = 0.003; limiter.release.value = 0.18;
    const analyser = ctx.createAnalyser(); analyser.fftSize = 2048;
    master.connect(limiter); limiter.connect(analyser); analyser.connect(ctx.destination);

    const bioIn = ctx.createGain();
    const bioLP = ctx.createBiquadFilter(); bioLP.type = "lowpass"; bioLP.frequency.value = 12000; bioLP.Q.value = 0.3;
    const reverb = ctx.createConvolver(); reverb.buffer = this._impulse(this.rich ? 3.8 : 2.8);
    const wet = ctx.createGain(); wet.gain.value = 0.3;
    const air = ctx.createBiquadFilter(); air.type = "highshelf"; air.frequency.value = 6500; air.gain.value = this.rich ? -2.5 : 0;   // quita filo a los agudos
    bioIn.connect(bioLP); bioLP.connect(air); air.connect(master); bioLP.connect(reverb); reverb.connect(wet); wet.connect(master);
    // Eco suave en estéreo: la melodía y el canto se repiten a un lado y al otro, cada vez más lejos.
    const echoIn = ctx.createGain(); echoIn.gain.value = 0;
    const dL = ctx.createDelay(1.5), dR = ctx.createDelay(1.5), echoFb = ctx.createGain(), echoLP = ctx.createBiquadFilter(), echoWet = ctx.createGain(), echoMix = ctx.createChannelMerger(2);
    echoLP.type = "lowpass"; echoLP.frequency.value = 2400; echoFb.gain.value = 0.25; echoWet.gain.value = 0.5;
    echoIn.connect(dL); dL.connect(echoLP); echoLP.connect(dR); dR.connect(echoFb); echoFb.connect(dL);
    echoLP.connect(echoMix, 0, 0); dR.connect(echoMix, 0, 1); echoMix.connect(echoWet); echoWet.connect(master); echoWet.connect(reverb);
    // Lecho armónico, siempre en registro grave: fundamental, quinta, octava y tercera mayor. La tercera (lo "alegre") se apaga con la
    // vitalidad; al final queda solo la quinta, hueca. Todo en la escala del lugar: nada desafina.
    const pad = ctx.createGain(); pad.gain.value = 0;
    const padLP = ctx.createBiquadFilter(); padLP.type = "lowpass"; padLP.frequency.value = 1100; padLP.Q.value = 0.3;
    const padG = [], padOsc = [1, 0.5, 0.28, 0].map((lv, i) => { const o = ctx.createOscillator(), g = ctx.createGain(); o.type = "sine"; o.frequency.value = 110; g.gain.value = lv; o.connect(g); g.connect(padLP); o.start(); padG.push(g); return o; });
    const padLfo = ctx.createOscillator(), padLfoG = ctx.createGain(); padLfo.frequency.value = 0.07; padLfoG.gain.value = 220; padLfo.connect(padLfoG); padLfoG.connect(padLP.frequency); padLfo.start();
    padLP.connect(pad); pad.connect(bioIn);
    // Pedal de presión: en vez de ruido o zumbido, la presión es una nota grave (fundamental y su quinta) que crece bajo la melodía.
    const pedal = ctx.createGain(); pedal.gain.value = 0;
    const pedalLP = ctx.createBiquadFilter(); pedalLP.type = "lowpass"; pedalLP.frequency.value = 320;
    const pedalOsc = [1, 0.35, 0.25].map((lv, i) => { const o = ctx.createOscillator(), g = ctx.createGain(); o.type = i === 2 ? "triangle" : "sine"; o.frequency.value = 55; g.gain.value = lv; o.connect(g); g.connect(pedalLP); o.start(); return o; });
    pedalLP.connect(pedal); pedal.connect(master);

    const noiseBuf = this._noise();
    const geoSrc = ctx.createBufferSource(); geoSrc.buffer = noiseBuf; geoSrc.loop = true;
    const geoFilter = ctx.createBiquadFilter();
    const geoGain = ctx.createGain(); geoGain.gain.value = 0.0001;
    const swell = ctx.createOscillator(); swell.type = "sine";
    const swellDepth = ctx.createGain(); swellDepth.gain.value = 0;
    swell.connect(swellDepth); swellDepth.connect(geoGain.gain);
    geoSrc.connect(geoFilter); geoFilter.connect(geoGain); geoGain.connect(master);
    geoSrc.start(); swell.start();

    const anthro = ctx.createGain(); anthro.gain.value = 0; anthro.connect(master);
    const hum = ctx.createOscillator(); hum.type = "sawtooth"; hum.frequency.value = 120;
    const humLP = ctx.createBiquadFilter(); humLP.type = "lowpass"; humLP.frequency.value = 480;
    const humGain = ctx.createGain(); humGain.gain.value = 0.22;
    hum.connect(humLP); humLP.connect(humGain); humGain.connect(anthro); hum.start();
    const floorSrc = ctx.createBufferSource(); floorSrc.buffer = noiseBuf; floorSrc.loop = true;
    const floorBP = ctx.createBiquadFilter(); floorBP.type = "bandpass"; floorBP.frequency.value = 1500; floorBP.Q.value = 1.1;
    const floorGain = ctx.createGain(); floorGain.gain.value = 0.5;
    floorSrc.connect(floorBP); floorBP.connect(floorGain); floorGain.connect(anthro); floorSrc.start();

    // Calor: grave cálido de dos senos que baten entre sí, más un armónico para bocinas pequeñas.
    const heatA = ctx.createOscillator(), heatB = ctx.createOscillator(), heatC = ctx.createOscillator();
    heatA.type = "sine"; heatB.type = "sine"; heatC.type = "triangle";
    heatA.frequency.value = 55; heatB.frequency.value = 55.4; heatC.frequency.value = 110;
    const heatCGain = ctx.createGain(); heatCGain.gain.value = 0.22;
    const heatLP = ctx.createBiquadFilter(); heatLP.type = "lowpass"; heatLP.frequency.value = 220;
    const heat = ctx.createGain(); heat.gain.value = 0;
    heatA.connect(heatLP); heatB.connect(heatLP); heatC.connect(heatCGain); heatCGain.connect(heatLP); heatLP.connect(heat); heat.connect(master);
    heatA.start(); heatB.start(); heatC.start();

    this.nodes = { master, analyser, wave: new Float32Array(2048), bioIn, bioLP, wet, echoIn, dL, dR, pad, padOsc, padG, pedal, pedalOsc, geoFilter, geoGain, swell, swellDepth, anthro, heat, heatA, heatB, heatC };
    this._continuous(true);
  }
  _noise() {
    const ac = this.ctx, len = ac.sampleRate * 2, buf = ac.createBuffer(1, len, ac.sampleRate), d = buf.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      b0 = 0.99765 * b0 + w * 0.0990460; b1 = 0.96300 * b1 + w * 0.2965164; b2 = 0.57000 * b2 + w * 1.0526913;
      d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.22;
    }
    return buf;
  }
  _impulse(seconds) {
    const ac = this.ctx, len = Math.floor(ac.sampleRate * seconds), buf = ac.createBuffer(2, len, ac.sampleRate), fadeIn = Math.floor(ac.sampleRate * 0.012);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c); let lp = 0;
      for (let i = 0; i < len; i++) {
        const k = i / len, w = Math.random() * 2 - 1;
        if (!this.rich) { d[i] = w * Math.pow(1 - k, 2.6); continue; }
        lp += (w - lp) * Math.max(0.05, 0.6 - 0.58 * k);                      // el filtro se cierra con el tiempo: la cola pierde brillo
        d[i] = lp * Math.exp(-4.4 * k) * (i < fadeIn ? i / fadeIn : 1) * 2.1;
      }
    }
    return buf;
  }
  /** Parámetros que no dependen del compás: lecho, máscara, espacio, presión. */
  _continuous(immediate) {
    const n = this.nodes; if (!n) return;
    const t = this.ctx.currentTime, tc = immediate ? 0.01 : 0.25, d = this.derived, sig = this.preset.signature, g = C.SIGNATURES[sig].geo;
    n.geoFilter.type = g.type;
    n.geoFilter.frequency.setTargetAtTime(g.hz, t, tc);
    n.geoFilter.Q.setTargetAtTime(g.q, t, tc);
    const bed = this.rich ? 0.3 : 1;                         // el lecho de ruido queda como un aliento, no como un soplo constante
    n.geoGain.gain.setTargetAtTime(g.gain * bed, t, tc);
    n.swell.frequency.setTargetAtTime(g.swellHz, t, tc);
    n.swellDepth.gain.setTargetAtTime(g.gain * g.depth * bed, t, tc);
    n.bioLP.frequency.setTargetAtTime(d.bioCutoffHz, t, tc);
    n.wet.gain.setTargetAtTime(d.reverbWet, t, tc);
    const beat = 60 / d.tempo, arp = d.voices.find((v) => v.id === "arpegio"), bajo = d.voices.find((v) => v.id === "bajo");
    n.dL.delayTime.setTargetAtTime(Math.min(1.4, beat * 0.75), t, 0.2); n.dR.delayTime.setTargetAtTime(Math.min(1.4, beat * 0.75), t, 0.2);
    n.echoIn.gain.setTargetAtTime(this.rich ? 0.13 : 0, t, tc);
    const v01 = Math.max(0, Math.min(1, d.v ?? 1)), root = this._padRoot(), pt = immediate ? 0.05 : 1.2;
    [1, 1.5, 2, 2 * Math.pow(2, 4 / 12)].forEach((m, i) => n.padOsc[i].frequency.setTargetAtTime(root * m, t, pt));
    n.padG[3].gain.setTargetAtTime(0.3 * v01 * v01, t, immediate ? 0.3 : 2);                 // la tercera mayor: lo alegre, que se pierde
    n.pad.gain.setTargetAtTime(this.rich ? 0.05 * (0.4 + 0.6 * v01) : 0, t, immediate ? 0.3 : 1.5);
    [0.5, 0.75, 1].forEach((m, i) => n.pedalOsc[i].frequency.setTargetAtTime(root * m, t, pt));
    n.pedal.gain.setTargetAtTime(this.rich ? 0.11 * d.p : 0, t, immediate ? 0.3 : 1.5);
    const pr = C.pressureOf(sig), isHeat = pr.type === "heat";
    n.anthro.gain.setTargetAtTime(isHeat || this.rich ? 0 : d.anthroGain, t, tc);
    n.heat.gain.setTargetAtTime(isHeat && !this.rich ? d.p * d.p : 0, t, tc);
    if (isHeat) {
      n.heatA.frequency.setTargetAtTime(pr.hz, t, tc);
      n.heatB.frequency.setTargetAtTime(pr.hz + 0.4 + 3.5 * d.p, t, tc);
      n.heatC.frequency.setTargetAtTime(pr.hz * 2, t, tc);
    }
  }
  _env(g, t, peak, attack, decay) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(peak, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
  }
  _tone(type, t, dur, pan, echo = false) {
    const ctx = this.ctx, osc = ctx.createOscillator(); osc.type = type;
    const g = ctx.createGain(), p = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    osc.connect(g);
    if (p) { p.pan.value = pan; g.connect(p); p.connect(this.nodes.bioIn); } else g.connect(this.nodes.bioIn);
    if (echo && this.rich) g.connect(this.nodes.echoIn);
    osc.start(t); osc.stop(t + dur + 0.05);
    return { osc, g };
  }
  _tuned(hz) { const d = this.derived, k = this.rich ? 0.15 : 1; return hz * Math.pow(2, ((d.feverCents + (Math.random() * 2 - 1) * d.detuneCents) * k) / 1200); }
  _rootMidi() { const arp = this.derived.voices.find((v) => v.id === "arpegio"); return arp && arp.rootMidi ? arp.rootMidi : 60; }
  /** Fundamental del lugar llevada al registro grave (98 a 196 Hz) para el lecho y el pedal. */
  _padRoot() { let hz = C.midiHz(this._rootMidi()); while (hz > 196) hz /= 2; while (hz < 98) hz *= 2; return hz; }
  /** La nota de la escala del lugar más cercana a hz. */
  _inKey(hz) {
    const root = this._rootMidi(), m = 69 + 12 * Math.log2(hz / 440); let best = m, bd = 99;
    for (let o = -6; o <= 6; o++) for (const p of PENTA) { const c = root + p + 12 * o, dd = Math.abs(c - m); if (dd < bd) { bd = dd; best = c; } }
    return C.midiHz(best);
  }
  /** Baja una nota por octavas hasta un registro cálido (para las capas melódicas). */
  _warm(hz, top = 880) { while (hz > top) hz /= 2; return hz; }

  _voice(vc, t0, stepOf) {
    const d = this.derived, place = this.preset.signature, vel = d.velocity, ctx = this.ctx;
    const t = t0 + Math.random() * (d.jitterMs / 1000);
    if (vc.id === "bajo") {
      const dur = place === "jungla" ? 0.16 : 0.5;
      const { osc, g } = this._tone("sine", t, dur, 0);
      const top = this._tuned(vc.hz);
      osc.frequency.setValueAtTime(top, t);
      osc.frequency.exponentialRampToValueAtTime(top * 0.62, t + dur);
      this._env(g, t, 0.5 * vel, 0.006, dur);
      if (this.rich) { const h = this._tone("triangle", t, dur, 0); h.osc.frequency.setValueAtTime(top * 2, t); h.osc.frequency.exponentialRampToValueAtTime(top * 1.24, t + dur); this._env(h.g, t, 0.05 * vel, 0.01, dur * 0.8); }
    } else if (vc.id === "arpegio") {
      const size = d.scaleSize, i = this.arpIndex++ % (size * 2 - 2 || 1);
      const deg = C.melodyDegree(vc, stepOf, size);
      const idx = deg >= 0 ? deg : i < size ? i : size * 2 - 2 - i;
      const hz = this._tuned(C.midiHz(vc.rootMidi + PENTA[idx % 5]));
      const dur = place === "jungla" ? 0.14 : place === "gases" ? 0.42 : 0.9;
      const { osc, g } = this._tone(place === "jungla" ? "triangle" : "sine", t, dur, (idx / 4) * 1.2 - 0.6, true);
      osc.frequency.setValueAtTime(place === "jungla" ? hz * 1.07 : hz, t);
      if (place === "jungla") osc.frequency.exponentialRampToValueAtTime(hz, t + 0.05);
      this._env(g, t, (place === "gases" ? 0.22 : 0.16) * vel, place === "gases" ? 0.02 : 0.004, dur);
      if (this.rich) {                                        // capas melódicas: todas salen de la misma nota y de la misma escala
        const v01 = Math.max(0, Math.min(1, d.v ?? 1)), dv = Math.max(0, Math.min(1, d.d ?? 1)), peak = (place === "gases" ? 0.22 : 0.16) * vel, low = this._warm(hz);
        const bell = (f, tt, len, pk, pn) => { const x = this._tone("sine", tt, len, pn, true); x.osc.frequency.setValueAtTime(f, tt); this._env(x.g, tt, pk, 0.012, len); };
        if (low < hz * 0.99) bell(low, t, 0.7, peak * 0.5, 0.5 - (idx / 4));                                   // la misma melodía, grave y redonda
        else { const w = this._tone("sine", t, dur * 1.1, 0); w.osc.frequency.setValueAtTime(hz / 2, t); this._env(w.g, t, peak * 0.22, 0.02, dur * 1.1); }
        if (v01 > 0.45 && stepOf % 2 === 0) {                                                                   // contracanto: una tercera de la escala arriba; se va con la vitalidad
          const j = idx + 2, f2 = this._warm(this._tuned(C.midiHz(vc.rootMidi + PENTA[j % 5] + 12 * Math.floor(j / 5))));
          bell(f2, t + 0.01, 0.9, peak * 0.42 * ((v01 - 0.45) / 0.55), (idx / 4) - 0.5);
        }
        if (dv > 0.6 && stepOf % 8 === 4) bell(this._warm(hz, 1760) * (low < hz * 0.99 ? 1 : 2), t, 1.3, peak * 0.3 * ((dv - 0.6) / 0.4), 0);   // campana: se va con la diversidad
      }
      if (this.rich && place === "gases") this._gasFx(vc, hz, idx, t, stepOf, vel);
      if (place === "gases" && !this.rich) { const a = this._tone("sine", t, dur * 0.7, -0.2); a.osc.frequency.setValueAtTime(hz * 4, t); this._env(a.g, t, 0.035 * vel, 0.006, dur * 0.7); }
      if (place === "hielo") { const b = this._tone("sine", t, dur * 0.6, 0.3); b.osc.frequency.setValueAtTime(Math.min(hz * 2.76, 9000), t); this._env(b.g, t, 0.05 * vel, 0.003, dur * 0.6); }
    } else if (vc.id === "pulso") {
      const stepSec = 60 / d.tempo / 4, dur = vc.amHz ? stepSec * 0.85 : 0.03;
      const { osc, g } = this._tone("sine", t, dur, C.hash01(stepOf + 1, 9) * 1.6 - 0.8);
      osc.frequency.setValueAtTime(this._tuned(this.rich ? this._inKey(vc.hz) : vc.hz), t);
      const peak = 0.05 * vel;
      if (vc.amHz) {
        g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(peak, t + 0.01);
        g.gain.setValueAtTime(peak, t + dur - 0.02); g.gain.linearRampToValueAtTime(0.0001, t + dur);
        const am = ctx.createOscillator(), amG = ctx.createGain(); am.frequency.value = vc.amHz; amG.gain.value = peak * 0.8;
        am.connect(amG); amG.connect(g.gain); am.start(t); am.stop(t + dur + 0.05);
      } else this._env(g, t, peak * 1.6, 0.002, dur);
    } else if (vc.id === "canto") {
      if (this.bar % 2 === 1) return;
      const pan = (this.bar / 2) % 2 === 0 ? -0.7 : 0.7;
      const base = this._tuned(vc.hz), key = (f) => (this.rich ? this._inKey(f) : f);   // en modo rico cada nota del canto cae en la escala
      const shape = place === "gases" ? [[1, 1.5, 1.6], [1.5, 1, 1.6]] : place === "jungla" ? [[1, 1.33, 0.22], [1.33, 1.5, 0.22], [1.5, 1.12, 0.3]] : [[1, 1.02, 1.8], [1.2, 1.18, 1.6]];
      let at = t;
      for (const [a, b, dur] of shape) {
        const { osc, g } = this._tone("sine", at, dur, pan, true);
        osc.frequency.setValueAtTime(key(base * a), at);
        osc.frequency.exponentialRampToValueAtTime(key(base * b), at + dur);
        if (this.rich && dur > 0.5) {
          const vib = ctx.createOscillator(), vibG = ctx.createGain(); vib.frequency.value = 4.6; vibG.gain.setValueAtTime(0, at); vibG.gain.linearRampToValueAtTime(base * a * 0.004, at + dur * 0.5);
          vib.connect(vibG); vibG.connect(osc.frequency); vib.start(at); vib.stop(at + dur + 0.05);
          const sh = this._tone("sine", at, dur, -pan * 0.5); sh.osc.frequency.setValueAtTime(key(base * a) / 2, at); sh.osc.frequency.exponentialRampToValueAtTime(key(base * b) / 2, at + dur);
          sh.g.gain.setValueAtTime(0.0001, at); sh.g.gain.linearRampToValueAtTime(0.045 * vel, at + dur * 0.35); sh.g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
        }
        g.gain.setValueAtTime(0.0001, at); g.gain.linearRampToValueAtTime(0.14 * vel, at + dur * 0.25);
        g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
        at += dur * 0.9;
      }
    }
  }
  /** Gases · efectos de la melodía, todos dentro de la escala: coro con trémolo (el aire vibra más rápido con la presión),
      vapor (la nota sube por la escala en ecos que se abren a los lados; se adelgaza con la vitalidad) y peso (una nota grave
      y lenta que aparece cuando el gas se acumula). */
  _gasFx(vc, hz, idx, t, stepOf, vel) {
    const d = this.derived, ctx = this.ctx, cl = (x) => Math.max(0, Math.min(1, x)), v = cl(d.v ?? 1), p = cl(d.p ?? 0), beat = 60 / d.tempo, peak = 0.22 * vel;
    for (const c of [-6, 6]) {
      const x = this._tone("sine", t, 0.75, c < 0 ? -0.55 : 0.55, true), pk = peak * 0.26;
      x.osc.frequency.setValueAtTime(hz * Math.pow(2, c / 1200), t);
      x.g.gain.setValueAtTime(0.0001, t); x.g.gain.linearRampToValueAtTime(pk, t + 0.09); x.g.gain.exponentialRampToValueAtTime(0.0001, t + 0.75);
      const am = ctx.createOscillator(), amG = ctx.createGain(); am.frequency.value = 3 + 5 * p + (c > 0 ? 0.4 : 0);
      amG.gain.setValueAtTime(0, t); amG.gain.linearRampToValueAtTime(pk * 0.4, t + 0.2); amG.gain.linearRampToValueAtTime(0, t + 0.65);
      am.connect(amG); amG.connect(x.g.gain); am.start(t); am.stop(t + 0.8);
    }
    if (stepOf % 2 === 0) {
      const n = v > 0.6 ? 3 : v > 0.3 ? 2 : 1;
      for (let k = 1; k <= n; k++) {
        const j = idx + 2 * k; let f = C.midiHz(vc.rootMidi + PENTA[j % 5] + 12 * Math.floor(j / 5)); while (f > 2100) f /= 2;
        const tt = t + k * beat * 0.25, x = this._tone("sine", tt, 0.9, (k % 2 ? 1 : -1) * (0.3 + 0.2 * k), true);
        x.osc.frequency.setValueAtTime(this._tuned(f), tt); this._env(x.g, tt, peak * 0.3 * Math.pow(0.7, k) * (0.35 + 0.65 * v), 0.03, 0.9);
      }
    }
    if (p > 0.35 && stepOf % 8 === 0) {
      let f = hz; while (f > 200) f /= 2;
      const x = this._tone("triangle", t, 2.2, 0), pk = (peak * 0.45 * (p - 0.35)) / 0.65; x.osc.frequency.setValueAtTime(f, t);
      x.g.gain.setValueAtTime(0.0001, t); x.g.gain.linearRampToValueAtTime(pk, t + 0.7); x.g.gain.exponentialRampToValueAtTime(0.0001, t + 2.2);
    }
  }
  /** Gases · respiración: cada dos compases un acorde de la escala se abre y se cierra con un filtro, y cruza de un lado al otro.
      Con vitalidad se abre brillante y lleva la tercera mayor; al final se abre poco y queda hueco. */
  _gasSwell(t) {
    const d = this.derived, ctx = this.ctx, v = Math.max(0, Math.min(1, d.v ?? 1)), dur = (60 / d.tempo) * 8 * 0.95, root = this._padRoot() * 2, side = (this.bar / 2) % 2 ? 1 : -1;
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.Q.value = 3.5;
    lp.frequency.setValueAtTime(240, t); lp.frequency.exponentialRampToValueAtTime(480 + 1900 * v, t + dur * 0.5); lp.frequency.exponentialRampToValueAtTime(240, t + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.02, t + dur * 0.45); g.gain.linearRampToValueAtTime(0.0001, t + dur);
    lp.connect(g);
    if (ctx.createStereoPanner) { const pn = ctx.createStereoPanner(); pn.pan.setValueAtTime(-0.6 * side, t); pn.pan.linearRampToValueAtTime(0.6 * side, t + dur); g.connect(pn); pn.connect(this.nodes.bioIn); } else g.connect(this.nodes.bioIn);
    [1, 1.5, v > 0.5 ? 2 * Math.pow(2, 4 / 12) : 2].forEach((m, i) => { const o = ctx.createOscillator(), og = ctx.createGain(); o.type = "sawtooth"; o.frequency.value = root * m; o.detune.value = (i - 1) * 4; og.gain.value = i ? 0.3 : 0.45; o.connect(og); og.connect(lp); o.start(t); o.stop(t + dur + 0.05); });
  }
  /** Jungla · capas, todas en la escala del lugar: marimba grave (el suelo), gotas (plinks con eco), grillos afinados y una
      respuesta al canto desde el lado contrario. Gotas y grillos se van con la diversidad; la respuesta, con la vitalidad.
      Al final queda la marimba casi sola. */
  _jungleFx(s, t) {
    const d = this.derived, cl = (x) => Math.max(0, Math.min(1, x)), v = cl(d.v ?? 1), dv = cl(d.d ?? 1), vel = d.velocity, root = this._rootMidi(), step = 60 / d.tempo / 4;
    const hz = (deg, oct) => this._tuned(C.midiHz(root + PENTA[((deg % 5) + 5) % 5] + 12 * (Math.floor(deg / 5) + oct)));
    const note = (type, f, tt, len, pk, pan, echo, att = 0.004) => { const x = this._tone(type, tt, len, pan, echo); x.osc.frequency.setValueAtTime(f, tt); this._env(x.g, tt, pk, att, len); };
    const mar = { 0: 0, 6: 2, 10: 1, 14: 3 }[s];
    if (mar !== undefined && (s !== 14 || v > 0.5)) { note("triangle", hz(mar, -4), t, 0.34, 0.085 * vel, s === 0 ? 0 : s === 6 ? -0.3 : 0.3, false); note("sine", hz(mar, -3), t, 0.12, 0.03 * vel, 0, true); }
    if (s % 2 === 1 && C.hash01(this.bar * 16 + s + 1, 3) < 0.22 * dv) note("sine", hz(Math.floor(C.hash01(this.bar + 1, s + 5) * 7), -2), t, 0.5, 0.034 * vel, C.hash01(s + 1, this.bar + 2) * 1.8 - 0.9, true);
    if (s % 4 === 2 && dv > 0.4) { const side = (s === 2 || s === 10 ? -1 : 1) * 0.85, f = hz(s % 8 === 2 ? 0 : 2, -1); for (let k = 0; k < 3; k++) note("sine", f, t + k * 0.045, 0.035, 0.011 * ((dv - 0.4) / 0.6), side, false, 0.003); }
    if (this.bar % 2 === 1 && s === 4 && v > 0.45) { const pan = ((this.bar - 1) / 2) % 2 === 0 ? 0.7 : -0.7; [2, 3, 4].forEach((dg, k) => note("sine", hz(dg, -2), t + k * step * 1.5, 0.3, 0.07 * vel * ((v - 0.45) / 0.55), pan, true, 0.02)); }
  }
  _machineTick(t) {
    if (this.rich) return;
    const osc = this.ctx.createOscillator(), g = this.ctx.createGain();
    osc.type = "square"; osc.frequency.value = 1500;
    osc.connect(g); g.connect(this.nodes.anthro);
    this._env(g, t, 0.12, 0.001, 0.03); osc.start(t); osc.stop(t + 0.08);
  }
  _schedule(s, t) {
    if (s === 0 && this.onBar) this.onBar(this.bar);   // puede cambiar el año antes de tocar el compás
    const d = this.derived;
    for (const vc of d.voices) if (vc.active && vc.alive[s]) this._voice(vc, t, s);
    if (s % 4 === 0 && d.p > 0.04 && C.pressureOf(this.preset.signature).type === "machine") this._machineTick(t);
    if (this.rich && s === 0 && this.bar % 2 === 0 && this.preset.signature === "gases") this._gasSwell(t);
    if (this.rich && this.preset.signature === "jungla") this._jungleFx(s, t);
    if (this.onStep) this.onStep(s, t, d, this.reference);
  }
  _pump() {
    while (this.nextTime < this.ctx.currentTime + 0.12) {
      this._schedule(this.step, this.nextTime);
      this.nextTime += 60 / this.derived.tempo / 4;
      this.step = (this.step + 1) % STEPS; if (this.step === 0) this.bar++;
    }
  }
  _restartClock() { this.step = 0; this.bar = 0; this.arpIndex = 0; this.nextTime = this.ctx.currentTime + 0.08; }
}
