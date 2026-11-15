/* Núcleo · núcleo del algoritmo de firmas sonoras.
   Lógica pura, sin audio: la comparten el laboratorio web, el generador de presets y,
   reescrita línea por línea, el componente de Unreal (NucleoSoundscape.cpp).
   Todo es determinista y usa solo enteros de 32 bits donde importa, para que el mismo
   preset produzca exactamente los mismos golpes en JavaScript y en C++. */
const NucleoCore = (() => {
  const STEPS = 16;
  const PENTA = [0, 2, 4, 7, 9];
  // Orden en que se conservan las voces al bajar la diversidad (la última es la primera en perderse).
  const KEEP_ORDER = ["bajo", "arpegio", "pulso", "canto"];

  // Firmas: cómo suena cada lugar sano. Cada voz ocupa su banda (nicho acústico) y su
  // lugar en el compás (ritmo euclidiano k golpes en 16 pasos, desfasado `rot`).
  // haptic: cómo se siente esa voz en el mando (Hz reales del actuador, amplitud 0..1, duración en ms).
  const SIGNATURES = {
    jungla: {
      label: "Jungla", tempo: 104,
      geo: { type: "lowpass", hz: 900, q: 0.4, swellHz: 0.23, depth: 0.25, gain: 0.16 },
      voices: [
        { id: "bajo", name: "Bajo", band: "90–200 Hz", k: 3, rot: 0, hz: 165, haptic: { hz: 70, amp: 0.85, ms: 40 } },
        { id: "arpegio", name: "Arpegio", band: "2.3–4 kHz", k: 5, rot: 2, rootMidi: 98, haptic: { hz: 200, amp: 0.45, ms: 20 } },
        { id: "pulso", name: "Pulso", band: "5.6 kHz", k: 9, rot: 1, hz: 5600, amHz: 22, haptic: { hz: 320, amp: 0.3, ms: 12 } },
        { id: "canto", name: "Canto", band: "500–900 Hz", k: 1, rot: 12, hz: 620, haptic: { hz: 120, amp: 0.6, ms: 150 } }
      ]
    },
    hielo: {
      label: "Hielo marino", tempo: 52,
      // En el hielo la presión es la temperatura: un grave cálido y continuo que crece y se agita, sin pulso de máquina.
      pressure: { type: "heat", hz: 55 },
      geo: { type: "bandpass", hz: 520, q: 1.1, swellHz: 0.07, depth: 0.6, gain: 0.3 },
      voices: [
        { id: "bajo", name: "Bajo", band: "60–90 Hz", k: 2, rot: 0, hz: 88, haptic: { hz: 60, amp: 0.85, ms: 60 } },
        { id: "arpegio", name: "Arpegio", band: "2.4–3.6 kHz", k: 3, rot: 5, rootMidi: 99, haptic: { hz: 220, amp: 0.4, ms: 24 } },
        { id: "pulso", name: "Pulso", band: "6.2 kHz", k: 5, rot: 2, hz: 6200, amHz: 0, haptic: { hz: 340, amp: 0.3, ms: 10 } },
        { id: "canto", name: "Canto", band: "600–800 Hz", k: 1, rot: 10, hz: 660, haptic: { hz: 110, amp: 0.55, ms: 220 } }
      ]
    },
    gases: {
      // La atmósfera respira: un compás es un año. El bajo marca la inhalación y la exhalación.
      label: "Gases de efecto invernadero", tempo: 60,
      geo: { type: "lowpass", hz: 480, q: 0.5, swellHz: 0.25, depth: 0.8, gain: 0.3 },
      voices: [
        { id: "bajo", name: "Bajo", band: "70–100 Hz", k: 2, rot: 0, hz: 98, haptic: { hz: 60, amp: 0.85, ms: 90 } },
        // Melodía de la respiración: sube cinco notas (el CO₂ se acumula de otoño a primavera) y baja en tres
        // (las plantas lo absorben en verano). Cada casilla cubre dos pasos; el grado se recorta a la escala
        // disponible, así que al perder diversidad la melodía se aplana: la respiración se vuelve corta.
        { id: "arpegio", name: "Melodía", band: "520–880 Hz", k: 8, rot: 0, rootMidi: 72, melody: [0, 1, 2, 3, 4, 3, 1, 0], haptic: { hz: 150, amp: 0.45, ms: 30 } },
        { id: "pulso", name: "Pulso", band: "5 kHz", k: 7, rot: 1, hz: 5000, amHz: 0, haptic: { hz: 310, amp: 0.28, ms: 10 } },
        { id: "canto", name: "Canto", band: "390–590 Hz", k: 1, rot: 12, hz: 392, haptic: { hz: 100, amp: 0.6, ms: 240 } }
      ]
    }
  };

  const clamp01 = (x) => Math.min(1, Math.max(0, x));
  const midiHz = (m) => 440 * Math.pow(2, (m - 69) / 12);

  /** Hash entero de 32 bits → [0,1). Idéntico bit a bit en C++ con uint32. */
  function hash01(a, b) {
    let h = (Math.imul(a >>> 0, 374761393) + Math.imul(b >>> 0, 668265263)) >>> 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177) >>> 0;
    h = (h ^ (h >>> 16)) >>> 0;
    return h / 4294967296;
  }
  /** Ritmo euclidiano: k golpes repartidos en n pasos, girado rot pasos. */
  function euclid(k, n, rot) {
    const base = [];
    for (let i = 0; i < n; i++) base.push(((i * k) % n) < k);
    return base.map((_, i) => base[(((i - rot) % n) + n) % n]);
  }
  const maskOf = (bools) => bools.reduce((m, on, i) => (on ? m | (1 << i) : m), 0);

  /**
   * De los signos vitales (0..100) a lo que se toca.
   * vital: { vit, div, est, pre, fever } — fever en cents: subida de tono (solo gases).
   * Umbrales enteros (0..1000) para que JS y C++ decidan igual cada golpe.
   */
  function derive(signatureId, vital) {
    const sig = SIGNATURES[signatureId];
    const v = clamp01(vital.vit / 100), d = clamp01(vital.div / 100), s = clamp01(vital.est / 100), p = clamp01(vital.pre / 100);
    const activeCount = Math.max(1, Math.round(d * 4));
    const lock = clamp01((s - 0.2) / 0.5);          // reparto del tiempo: 1 intacto, 0 todas las voces alineadas
    const probMil = Math.round((0.25 + 0.75 * v) * 1000);
    const voices = sig.voices.map((vc, vi) => {
      const active = KEEP_ORDER.indexOf(vc.id) < activeCount;
      const rot = Math.round(vc.rot * lock);
      const pattern = euclid(vc.k, STEPS, rot);
      // Cada golpe tiene una "fuerza" fija (0..999). Sobrevive si está bajo el umbral de vitalidad;
      // el más fuerte de la voz nunca se apaga mientras la voz exista, para que no quede muda.
      const strength = pattern.map((on, i) => (on ? Math.floor(hash01(vi + 1, i + 1) * 1000) : 1000));
      const strongest = Math.min(...strength);
      const alive = pattern.map((on, i) => on && (strength[i] < probMil || strength[i] === strongest));
      return { ...vc, active, rot, pattern, alive, patternMask: maskOf(pattern), mask: active ? maskOf(alive) : 0 };
    });
    return {
      signatureId, tempo: sig.tempo, voices, v, d, s, p,
      feverCents: vital.fever || 0,
      scaleSize: 2 + Math.round(d * 3),
      jitterMs: Math.round((1 - s) * 70),
      detuneCents: Math.round((1 - s) * 40),
      bioCutoffHz: Math.round(12000 * Math.pow(2200 / 12000, p)),
      reverbWet: Math.round((0.34 - 0.26 * p) * 1000) / 1000,
      anthroGain: Math.round(p * p * 0.55 * 1000) / 1000,
      velocity: Math.round((0.5 + 0.5 * v) * 1000) / 1000
    };
  }

  /* ---------- De los datos a los signos vitales (una función por tablero) ---------- */
  const mean = (a) => a.reduce((x, y) => x + y, 0) / a.length;
  const DASHBOARDS = {
    jungla: {
      label: "Jungla", signature: "jungla", unit: "km² talados ese año", source: "INPE PRODES, Amazonia Legal",
      // Lo talado no vuelve: vitalidad y diversidad siguen la pérdida acumulada.
      // La máquina y el desorden siguen el ritmo de tala de ese año: puede callarse, pero las voces no regresan.
      vitals(series) {
        const max = Math.max(...series.map((r) => r.value)), total = series.reduce((x, r) => x + r.value, 0);
        let cum = 0;
        return series.map((r) => {
          cum += r.value;
          const cumN = cum / total, rateN = r.value / max;
          return { year: r.year, value: r.value, vit: 95 - 55 * cumN, div: 100 - 50 * cumN, est: 92 - 50 * rateN, pre: 5 + 80 * rateN, fever: 0 };
        });
      }
    },
    hielo: {
      label: "Hielo marino", signature: "hielo", unit: "millones de km² en septiembre", source: "NSIDC Sea Ice Index, Ártico",
      // x: cuánto hielo falta respecto a la primera década. La estabilidad cae además con los saltos entre años.
      vitals(series) {
        const base = mean(series.slice(0, 10).map((r) => r.value));
        return series.map((r, i) => {
          const x = clamp01((base - r.value) / (base - 3.0));
          const jump = i === 0 ? 0 : clamp01(Math.abs(r.value - series[i - 1].value) / 1.5);
          // pre: la temperatura, estimada aquí a partir del hielo que falta (sustituible por una serie de temperatura del Ártico).
          return { year: r.year, value: r.value, vit: 95 - 60 * x, div: 100 - 55 * x, est: 95 - 30 * x - 35 * jump, pre: 5 + 75 * x, fever: 0 };
        });
      }
    },
    gases: {
      label: "Gases de efecto invernadero", signature: "gases", unit: "ppm de CO₂ en Mauna Loa", source: "NOAA Global Monitoring Laboratory",
      // x: CO₂ acumulado respecto al primer año. g: cuánto subió ese año (las emisiones que no se absorbieron).
      // Fuentes = la máquina (sigue a g). Sumideros = las voces vivas (se apagan con x).
      // Subida de tono: cada respiración empieza más arriba y no vuelve.
      vitals(series) {
        const first = series[0].value, top = Math.max(...series.map((r) => r.value));
        const growth = series.map((r, i) => (i === 0 ? series[1].value - r.value : r.value - series[i - 1].value));
        const gMax = Math.max(...growth);
        return series.map((r, i) => {
          const x = clamp01((r.value - first) / (top - first)), g = clamp01(growth[i] / gMax);
          const swing = i === 0 ? 0 : clamp01(Math.abs(growth[i] - growth[i - 1]) / 1.5);
          return { year: r.year, value: r.value, vit: 95 - 45 * x, div: 100 - 45 * x, est: 95 - 35 * x - 20 * swing, pre: 5 + 75 * g, fever: 50 * x };
        });
      }
    }
  };

  /** Grado de la melodía en un paso (o -1 si la voz no tiene melodía), recortado a la escala disponible. */
  function melodyDegree(voice, step, scaleSize) {
    if (!voice.melody) return -1;
    const slot = Math.floor((step * voice.melody.length) / STEPS);
    return Math.min(voice.melody[slot], scaleSize - 1);
  }
  const pressureOf = (signatureId) => SIGNATURES[signatureId].pressure || { type: "machine" };

  /** Mando: en cada paso suena como mucho un toque por mano, el de la voz más grave que esté viva. */
  const HAPTIC_PRIORITY = ["bajo", "canto", "arpegio", "pulso"];
  function hapticForStep(derived, step) {
    for (const id of HAPTIC_PRIORITY) {
      const vc = derived.voices.find((x) => x.id === id);
      if (vc && (vc.mask >> step) & 1) return { voice: id, hz: vc.haptic.hz, amp: Math.round(vc.haptic.amp * derived.velocity * 1000) / 1000, ms: vc.haptic.ms };
    }
    return null;
  }

  const REFERENCE = { vit: 95, div: 100, est: 95, pre: 5, fever: 0 }; // la firma sana: la memoria del lugar
  return { REFERENCE, STEPS, PENTA, KEEP_ORDER, HAPTIC_PRIORITY, SIGNATURES, DASHBOARDS, clamp01, midiHz, hash01, euclid, maskOf, derive, hapticForStep, melodyDegree, pressureOf };
})();
if (typeof module !== "undefined") module.exports = NucleoCore;
