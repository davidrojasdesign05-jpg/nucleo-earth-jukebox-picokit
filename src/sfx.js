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
    name: "Marea", desc: "Una ola que crece desde lo muy grave, rompe con un golpe profundo y deja tres notas que bajan (fa, mi, re) con eco. Lenta, con peso.",
    play(ctx, dest, t) {
      // espacio: una línea de eco con realimentación da la profundidad
      const bus = ctx.createGain(); bus.connect(dest);
      const dl = ctx.createDelay(1.0), fb = ctx.createGain(), lp = ctx.createBiquadFilter(), wet = ctx.createGain();
      dl.delayTime.value = 0.36; fb.gain.value = 0.5; lp.type = "lowpass"; lp.frequency.value = 1600; wet.gain.value = 0.55;
      bus.connect(dl); dl.connect(lp); lp.connect(fb); fb.connect(dl); lp.connect(wet); wet.connect(dest);
      // la ola: un soplo largo que sube desde lo grave, sobre un re muy bajo y su quinta
      breath(ctx, bus, t, { dur: 3.0, gain: 0.04, f0: 90, f1: 2200, attack: 0.62, q: 0.6 });
      tone(ctx, bus, NOTE.D2 / 2, t, { attack: 1.6, decay: 3.4, gain: 0.07, partials: [[1, 1], [2, 0.5]] });
      tone(ctx, bus, NOTE.D3, t, { attack: 1.5, decay: 3.2, gain: 0.034, partials: [[1, 1], [2, 0.25]] });
      tone(ctx, bus, NOTE.A3, t, { attack: 1.5, decay: 3.2, gain: 0.026, partials: [[1, 1], [2, 0.2]] });
      // el impacto: la ola rompe
      const hit = t + 1.85;
      tone(ctx, bus, NOTE.D2, hit, { attack: 0.006, decay: 1.6, gain: 0.2, partials: [[1, 1], [2, 0.3]], glideTo: 36.7 });
      breath(ctx, bus, hit, { dur: 0.9, gain: 0.06, f0: 3200, f1: 160, attack: 0.03, q: 0.5 });
      // la melodía: fa, mi, re, doblada una octava arriba, y un re grave que cierra
      [NOTE.F4, NOTE.E4, NOTE.D4].forEach((hz, i) => { tone(ctx, bus, hz, hit + 0.1 + i * 0.55, { decay: 1.9, gain: 0.05 }); tone(ctx, bus, hz * 2, hit + 0.1 + i * 0.55, { decay: 1.3, gain: 0.014, partials: [[1, 1]] }); });
      tone(ctx, bus, NOTE.D2, hit + 1.75, { attack: 0.02, decay: 2.6, gain: 0.09, partials: [[1, 1], [2, 0.4], [3, 0.1]] });
      return 6.5;
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
