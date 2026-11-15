/* Núcleo · sonidos de interfaz y leitmotiv. Todo es síntesis en vivo (nada grabado), en re menor, la misma escala del aro.
   Cada sonido es una función (ctx, dest, t, opciones): ctx = AudioContext, dest = nodo de salida, t = cuándo empieza. */
const NOTE = { D2: 73.42, A2: 110, D3: 146.83, F3: 174.61, A3: 220, C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392, A4: 440, C5: 523.25, D5: 587.33, F5: 698.46, A5: 880 };
const SCALE = [NOTE.D4, NOTE.E4, NOTE.F4, NOTE.G4, NOTE.A4, NOTE.C5, NOTE.D5];

/** Nota con ataque y caída exponencial. partials: [múltiplo, nivel]. glideTo: desliza la frecuencia hasta ese valor. */
function tone(ctx, dest, hz, t, { attack = 0.008, decay = 0.9, gain = 0.05, partials = [[1, 1], [2, 0.4], [3, 0.16]], glideTo = 0 } = {}) {
  const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay); g.connect(dest);
  for (const [mul, amp] of partials) {
    const o = ctx.createOscillator(), og = ctx.createGain(); o.type = "sine"; o.frequency.setValueAtTime(hz * mul, t);
    if (glideTo) o.frequency.exponentialRampToValueAtTime(glideTo * mul, t + attack + decay);
    og.gain.value = amp; o.connect(og); og.connect(g); o.start(t); o.stop(t + attack + decay + 0.05);
  }
}
let noiseBuf = null;
function noiseBuffer(ctx) {
  if (!noiseBuf || noiseBuf.sampleRate !== ctx.sampleRate) { noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
  return noiseBuf;
}
/** Soplo: ruido filtrado cuyo filtro viaja de f0 a f1. attack = fracción de la duración que tarda en llegar al máximo. */
function breath(ctx, dest, t, { dur = 0.6, gain = 0.03, f0 = 400, f1 = 3000, q = 1.2, attack = 0.5 } = {}) {
  const src = ctx.createBufferSource(); src.buffer = noiseBuffer(ctx); src.loop = true;
  const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.Q.value = q; bp.frequency.setValueAtTime(f0, t); bp.frequency.exponentialRampToValueAtTime(f1, t + dur);
  const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + dur * attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(bp); bp.connect(g); g.connect(dest); src.start(t); src.stop(t + dur + 0.05);
}

/* Sonidos de interfaz. Cortos y suaves: acompañan, no compiten con la música del dato. */
export const SFX = {
  /** Invitación a girar (lobby en reposo): tres campanas que suben y se van hacia un lado, con un soplo que las sigue. dir = -1 izquierda, 1 derecha. */
  invitar(ctx, dest, t, { dir = 1 } = {}) {
    const at = (pan) => { const g = ctx.createGain(); if (ctx.createStereoPanner) { const pn = ctx.createStereoPanner(); pn.pan.value = pan; g.connect(pn); pn.connect(dest); } else g.connect(dest); return g; };
    [[NOTE.D4, 0.1], [NOTE.A4, 0.5], [NOTE.D5, 0.95]].forEach(([hz, pan], i) => tone(ctx, at(pan * dir), hz, t + i * 0.24, { attack: 0.01, decay: 1.3, gain: 0.03, partials: [[1, 1], [2, 0.25]] }));
    const sw = ctx.createGain(); if (ctx.createStereoPanner) { const pn = ctx.createStereoPanner(); pn.pan.setValueAtTime(0, t); pn.pan.linearRampToValueAtTime(dir, t + 0.9); sw.connect(pn); pn.connect(dest); } else sw.connect(dest);
    breath(ctx, sw, t, { dur: 1.0, gain: 0.012, f0: 500, f1: 2400, attack: 0.5, q: 1.5 });
  },
  /** Apertura: algo se abre o aparece (la isla del dato, las descripciones). Soplo que sube y una quinta ascendente. */
  apertura(ctx, dest, t, { mini = false } = {}) {
    if (mini) { tone(ctx, dest, NOTE.D4, t, { decay: 0.16, gain: 0.02, partials: [[1, 1], [2, 0.2]] }); tone(ctx, dest, NOTE.A4, t + 0.06, { decay: 0.2, gain: 0.02, partials: [[1, 1], [2, 0.2]] }); return; }   // mini: abrir las manos
    breath(ctx, dest, t, { dur: 0.7, gain: 0.022, f0: 300, f1: 2600 }); tone(ctx, dest, NOTE.D4, t + 0.05, { decay: 0.7, gain: 0.032 }); tone(ctx, dest, NOTE.A4, t + 0.17, { decay: 0.9, gain: 0.032 });
  },
  /** Cierre: algo se cierra o termina (ocultar el dato, volver al lobby, fin del recorrido). El espejo de la apertura. */
  cierre(ctx, dest, t, { mini = false } = {}) {
    if (mini) { tone(ctx, dest, NOTE.A4, t, { decay: 0.16, gain: 0.02, partials: [[1, 1], [2, 0.2]] }); tone(ctx, dest, NOTE.D4, t + 0.06, { decay: 0.2, gain: 0.02, partials: [[1, 1], [2, 0.2]] }); return; }   // mini: cerrar las manos
    breath(ctx, dest, t, { dur: 0.6, gain: 0.02, f0: 2400, f1: 280, attack: 0.2 }); tone(ctx, dest, NOTE.A4, t, { decay: 0.6, gain: 0.03 }); tone(ctx, dest, NOTE.D4, t + 0.12, { decay: 0.9, gain: 0.032 });
  },
  /** Transición: cambiar de lugar. Un soplo largo que se abre, un grave que sube una octava y una nota alta que queda al llegar. */
  transicion(ctx, dest, t) {
    breath(ctx, dest, t, { dur: 1.4, gain: 0.032, f0: 180, f1: 4200, attack: 0.7, q: 0.8 });
    tone(ctx, dest, NOTE.D2, t, { attack: 0.25, decay: 1.2, gain: 0.05, partials: [[1, 1], [2, 0.25]], glideTo: NOTE.D3 });
    tone(ctx, dest, NOTE.A5, t + 1.15, { decay: 1.3, gain: 0.018, partials: [[1, 1], [2, 0.2]] });
  },
  /** Giro: un retén al girar el mundo. Roce breve y una nota apagada que sube o baja con el campo (step). */
  giro(ctx, dest, t, { step = 0 } = {}) {
    breath(ctx, dest, t, { dur: 0.09, gain: 0.018, f0: 1800, f1: 900, q: 3, attack: 0.1 });
    tone(ctx, dest, SCALE[((step % SCALE.length) + SCALE.length) % SCALE.length] / 2, t, { decay: 0.24, gain: 0.024, partials: [[1, 1], [2, 0.2]] });
  },
  /** Confirmación: elegir algo. Tres notas ascendentes (re, la, re) muy juntas: se siente como un sí. */
  confirmacion(ctx, dest, t) { tone(ctx, dest, NOTE.D4, t, { decay: 0.5, gain: 0.04 }); tone(ctx, dest, NOTE.A4, t + 0.09, { decay: 0.6, gain: 0.036 }); tone(ctx, dest, NOTE.D5, t + 0.18, { decay: 0.9, gain: 0.028 }); },
  /** Avance: pasar de año. Un toc corto cuyo tono sube a lo largo de la línea de tiempo (pos de 0 a 1). */
  avance(ctx, dest, t, { pos = 0 } = {}) { const hz = 520 + 520 * Math.min(1, Math.max(0, pos)); tone(ctx, dest, hz, t, { attack: 0.004, decay: 0.12, gain: 0.026, partials: [[1, 1]] }); tone(ctx, dest, hz * 2, t, { attack: 0.002, decay: 0.05, gain: 0.008, partials: [[1, 1]] }); },
};

/* Leitmotiv: la firma sonora de la herramienta. Cuatro opciones; play devuelve cuánto dura en segundos. */
export const LEITMOTIV = {
  orbita: {
    name: "Órbita", desc: "Cuatro notas que suben y se abren (re, la, fa, re agudo) sobre un grave que sostiene. Luminoso, de bienvenida.",
    play(ctx, dest, t) {
      tone(ctx, dest, NOTE.D3, t, { attack: 0.4, decay: 2.6, gain: 0.028, partials: [[1, 1], [2, 0.3]] });
      [NOTE.D4, NOTE.A4, NOTE.F4, NOTE.D5].forEach((hz, i) => tone(ctx, dest, hz, t + i * 0.28, { decay: 1.7, gain: 0.042 }));
      return 3.2;
    },
  },
  pulso: {
    name: "Pulso", desc: "Dos latidos graves y, después, una sola nota de cristal muy alta. Mínimo: un corazón y una señal.",
    play(ctx, dest, t) {
      tone(ctx, dest, NOTE.D2, t, { attack: 0.005, decay: 0.3, gain: 0.12, partials: [[1, 1]], glideTo: 55 });
      tone(ctx, dest, NOTE.D2, t + 0.32, { attack: 0.005, decay: 0.3, gain: 0.08, partials: [[1, 1]], glideTo: 55 });
      tone(ctx, dest, NOTE.A5, t + 0.95, { decay: 1.9, gain: 0.03, partials: [[1, 1], [2.01, 0.3], [3.02, 0.1]] });
      return 3.0;
    },
  },
  marea: {
    name: "Marea", desc: "Una ola que cruza de un oído al otro desde lo muy grave, rompe con un golpe profundo y abre en re mayor: cuatro notas que suben (re, fa♯, la, re) repartidas a los lados, un acorde luminoso y destellos que se alejan.",
    play(ctx, dest, t) {
      // espacio: eco que rebota de un lado al otro
      const bus = ctx.createGain(); bus.connect(dest);
      const dL = ctx.createDelay(1.0), dR = ctx.createDelay(1.0), fb = ctx.createGain(), lp = ctx.createBiquadFilter(), wet = ctx.createGain(), mix = ctx.createChannelMerger(2), send = ctx.createGain();
      dL.delayTime.value = 0.31; dR.delayTime.value = 0.31; fb.gain.value = 0.42; lp.type = "lowpass"; lp.frequency.value = 2200; wet.gain.value = 0.5;
      send.connect(dL); dL.connect(lp); lp.connect(dR); dR.connect(fb); fb.connect(dL); lp.connect(mix, 0, 0); dR.connect(mix, 0, 1); mix.connect(wet); wet.connect(dest);
      /** Salida colocada en el estéreo; si se da "to", viaja hasta ahí en "dur" segundos desde "at". echo: cuánto va al eco. */
      const out = (pan, { to, at = t, dur = 1, echo = 0.5 } = {}) => {
        const g = ctx.createGain(); if (echo) { const e = ctx.createGain(); e.gain.value = echo; g.connect(e); e.connect(send); }
        if (ctx.createStereoPanner) { const pn = ctx.createStereoPanner(); pn.pan.setValueAtTime(pan, at); if (to !== undefined) pn.pan.linearRampToValueAtTime(to, at + dur); g.connect(pn); pn.connect(bus); } else g.connect(bus);
        return g;
      };
      const Fs3 = 185.0, Fs4 = 369.99, D6 = 1174.66, Fs6 = 1479.98;
      // la ola: el soplo cruza de izquierda a derecha sobre un re muy grave; la quinta y la tercera mayor esperan a los lados
      breath(ctx, out(-0.95, { to: 0.95, dur: 2.0, echo: 0.2 }), t, { dur: 2.6, gain: 0.045, f0: 90, f1: 2600, attack: 0.66, q: 0.6 });
      tone(ctx, out(0, { echo: 0 }), NOTE.D2 / 2, t, { attack: 1.6, decay: 3.2, gain: 0.1, partials: [[1, 1], [2, 0.55], [3, 0.12]] });
      tone(ctx, out(-0.7), NOTE.A2, t, { attack: 1.5, decay: 3.0, gain: 0.034, partials: [[1, 1], [2, 0.25]] });
      tone(ctx, out(0.7), Fs3, t, { attack: 1.5, decay: 3.0, gain: 0.028, partials: [[1, 1], [2, 0.2]] });
      // el impacto: la ola rompe, con cuerpo en el grave y espuma a los dos lados
      const hit = t + 1.85;
      tone(ctx, out(0, { echo: 0.15 }), NOTE.D2, hit, { attack: 0.005, decay: 1.8, gain: 0.26, partials: [[1, 1], [2, 0.35], [3, 0.08]], glideTo: 36.7 });
      tone(ctx, out(0, { echo: 0 }), 58, hit, { attack: 0.004, decay: 0.5, gain: 0.2, partials: [[1, 1]], glideTo: 30 });
      breath(ctx, out(-0.2, { to: -1, at: hit, dur: 0.9, echo: 0.3 }), hit, { dur: 1.0, gain: 0.05, f0: 3600, f1: 200, attack: 0.03, q: 0.5 });
      breath(ctx, out(0.2, { to: 1, at: hit, dur: 0.9, echo: 0.3 }), hit, { dur: 1.0, gain: 0.05, f0: 3000, f1: 160, attack: 0.03, q: 0.5 });
      // la melodía sube en re mayor, alternando lados; cada nota lleva su octava en el lado contrario
      [[NOTE.D4, -0.65], [Fs4, 0.65], [NOTE.A4, -0.35], [NOTE.D5, 0.2]].forEach(([hz, pan], i) => {
        const at = hit + 0.12 + i * 0.4;
        tone(ctx, out(pan), hz, at, { decay: 1.8, gain: 0.06 }); tone(ctx, out(-pan, { echo: 0.7 }), hz * 2, at, { decay: 1.2, gain: 0.016, partials: [[1, 1]] });
      });
      // llegada: acorde de re mayor abierto, con un bajo que lo sostiene
      const fin = hit + 0.12 + 4 * 0.4;
      tone(ctx, out(0, { echo: 0 }), NOTE.D2, fin, { attack: 0.02, decay: 3.2, gain: 0.13, partials: [[1, 1], [2, 0.45], [3, 0.12]] });
      tone(ctx, out(0, { echo: 0 }), NOTE.D2 / 2, fin, { attack: 0.05, decay: 3.0, gain: 0.09, partials: [[1, 1]] });
      [[NOTE.D3, -0.5, 0.045], [NOTE.A3, 0.5, 0.04], [Fs4, -0.3, 0.036], [NOTE.A4, 0.3, 0.03], [NOTE.D5, 0, 0.034]].forEach(([hz, pan, gain]) => tone(ctx, out(pan), hz, fin, { attack: 0.03, decay: 3.0, gain, partials: [[1, 1], [2, 0.3]] }));
      // destellos que se alejan, muy a los lados
      [[NOTE.A5, -0.95], [D6, 0.95], [Fs6, -0.8]].forEach(([hz, pan], i) => tone(ctx, out(pan, { echo: 0.9 }), hz, fin + 0.45 + i * 0.3, { attack: 0.004, decay: 1.1, gain: 0.012, partials: [[1, 1]] }));
      return 7.4;
    },
  },
  senal: {
    name: "Señal", desc: "Tres pitidos secos (la, la, re) con eco que se aleja, como un instrumento que encuentra su dato. Corto y técnico.",
    play(ctx, dest, t) {
      const blips = [[NOTE.A4, 0, 0.18], [NOTE.A4, 0.16, 0.18], [NOTE.D5, 0.36, 1.1]];
      for (const [k, g] of [[0, 1], [1, 0.4], [2, 0.16]]) for (const [hz, dt, decay] of blips) tone(ctx, dest, hz, t + dt + k * 0.42, { attack: 0.004, decay, gain: 0.05 * g, partials: [[1, 1], [2, 0.15]] });
      return 2.4;
    },
  },
};

/** Roce continuo: un soplo que sigue al gesto. Mientras la mano gira el mundo o la esfera, suena más cuanto más rápido,
    se abre (más agudo) con la velocidad y se va hacia el lado al que mueves la mano. Quieto, calla. */
export class Roce {
  constructor() { this.ctx = null; }
  ensure(ctx, dest) {
    if (this.ctx === ctx) return true;
    try {
      const src = ctx.createBufferSource(); src.buffer = noiseBuffer(ctx); src.loop = true;
      this.bp = ctx.createBiquadFilter(); this.bp.type = "bandpass"; this.bp.Q.value = 2.6; this.bp.frequency.value = 500;
      this.g = ctx.createGain(); this.g.gain.value = 0;
      this.pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
      src.connect(this.bp); this.bp.connect(this.g); if (this.pan) { this.g.connect(this.pan); this.pan.connect(dest); } else this.g.connect(dest);
      src.start(); this.ctx = ctx; return true;
    } catch (e) { return false; }
  }
  /** level 0..1 (velocidad del gesto), bright 0..1 (qué tan abierto suena), pan −1..1 (lado). */
  set(ctx, dest, level, bright = 0.5, pan = 0) {
    if (!this.ensure(ctx, dest)) return; const t = ctx.currentTime, lv = Math.min(1, Math.max(0, level));
    this.g.gain.setTargetAtTime(lv * 0.026, t, 0.05); this.bp.frequency.setTargetAtTime(350 + 2600 * Math.min(1, Math.max(0, bright)), t, 0.06);
    if (this.pan) this.pan.pan.setTargetAtTime(Math.min(1, Math.max(-1, pan)), t, 0.08);
  }
}
