/* Núcleo · hápticos WebXR. Una sola capa, hecha para que SÍ se sienta en el visor:
   busca los mandos en vivo en cada pulso, dispara todos los motores que el navegador exponga
   (hapticActuators[].pulse, vibrationActuator.playEffect y, de respaldo, navigator.getGamepads)
   y nunca manda pulsos tan cortos o débiles que el motor los ignore. */
/* Vocabulario táctil. Pocos patrones, cada uno con un significado fijo, para que se pueda navegar sin ver:
   [intensidad 0..1, milisegundos]; una intensidad 0 es una pausa. */
export const PATRONES = {
  tick:      [[0.25, 18]],                          // un diente fino del engrane (girar el mundo, tocar un campo)
  diente:    [[0.5, 60]],                           // el borde entre dos secciones de la plataforma
  boton:     [[0.9, 55], [0, 70], [0.9, 55]],       // llegaste a un lugar: aquí hay un botón, puedes avanzar
  faro:      [[0.3, 22]],                           // guía hacia el botón central: late más rápido cuanto más cerca está tu mano
  confirmar: [[1.0, 110]],                          // hecho: entraste, volviste, elegiste
  anio:      [[0.28, 18]],                          // pasó un año
  decada:    [[0.65, 45]],                          // pasó una década
  tope:      [[0.8, 40], [0, 60], [0.8, 40]],       // el principio o el final del tiempo: no hay más
  soltar:    [[0.5, 35]],                           // soltaste: el año queda fijo
};
export class Haptics {
  constructor() {
    this.level = 0.8;                                      // TUNING.comfort: 0 apaga, 1 es el máximo
    this.floor = 0.3; this.minMs = 40; this.maxMs = 220;   // por debajo de esto los motores del visor no responden
    this.busyUntil = { left: 0, right: 0 }; this.lastAt = { left: 0, right: 0 }; this.lastTex = { left: 0, right: 0 };
    this.session = null; this.fired = 0; this.errors = 0; this.lastError = "";
  }
  setSources(session) { this.session = session || null; }
  /** Mandos de esa mano, leídos en vivo de la sesión (o todos, si el visor no dice de qué mano son). */
  sourcesFor(hand) {
    const all = this.session ? Array.from(this.session.inputSources || []).filter((s) => s && s.gamepad) : [];
    const mine = all.filter((s) => s.handedness === hand);
    return mine.length ? mine : all.filter((s) => s.handedness !== "left" && s.handedness !== "right");
  }
  motors(gp) {
    const out = []; if (!gp) return out;
    const list = gp.hapticActuators; if (list && list.length) for (const a of Array.from(list)) if (a) out.push(a);
    if (gp.vibrationActuator && !out.includes(gp.vibrationActuator)) out.push(gp.vibrationActuator);
    return out;
  }
  available(hand) { return this.sourcesFor(hand).some((s) => this.motors(s.gamepad).length > 0); }
  describe() {
    if (!this.session) return "sin sesión VR";
    const all = Array.from(this.session.inputSources || []);
    if (!all.length) return "sin mandos";
    return all.map((s) => `${s.handedness || "?"}: ${s.gamepad ? (this.motors(s.gamepad).length ? "vibra" : "sin motor") : "sin gamepad"}`).join(" · ") + ` · pulsos ${this.fired}` + (this.errors ? ` · errores ${this.errors} ${this.lastError}` : "");
  }
  fire(act, a, dur) {
    try {
      let p = null;
      if (typeof act.pulse === "function") p = act.pulse(a, dur);
      else if (typeof act.playEffect === "function") p = act.playEffect("dual-rumble", { startDelay: 0, duration: dur, strongMagnitude: a, weakMagnitude: a });
      else return false;
      if (p && p.catch) p.catch((e) => { this.errors++; this.lastError = String((e && e.message) || e).slice(0, 40); });
      return true;
    } catch (e) { this.errors++; this.lastError = String((e && e.message) || e).slice(0, 40); return false; }
  }
  /** amp 0..1 (relativo), ms duración (relativa). priority=true puede interrumpir, pero nunca más de ~20 pulsos por segundo. */
  pulse(hand, amp, ms, priority = false) {
    if (this.level <= 0 || amp <= 0.01) return false;
    const now = performance.now();
    if (!priority && now < this.busyUntil[hand]) return false;
    if (now - this.lastAt[hand] < 45) return false;
    const a = Math.min(1, this.floor + amp * this.level * 0.9), dur = Math.min(this.maxMs, Math.max(this.minMs, ms * 2.5));
    let ok = false;
    for (const s of this.sourcesFor(hand)) for (const m of this.motors(s.gamepad)) ok = this.fire(m, a, dur) || ok;
    if (!ok && navigator.getGamepads) {                    // respaldo: algunos navegadores solo exponen el motor aquí
      for (const gp of Array.from(navigator.getGamepads() || [])) { if (!gp || (gp.hand && gp.hand !== hand)) continue; for (const m of this.motors(gp)) ok = this.fire(m, a, dur) || ok; }
    }
    if (ok) { this.busyUntil[hand] = now + dur + 20; this.lastAt[hand] = now; this.fired++; }
    return ok;
  }
  /** Valores exactos del kit del equipo (intensidad 0..1, milisegundos), sin remapear. */
  raw(hand, intensity, ms) {
    const now = performance.now(); if (this.level <= 0 || now - this.lastAt[hand] < 45) return false;
    const a = Math.min(1, Math.max(0.05, intensity)), dur = Math.min(this.maxMs, Math.max(20, ms)); let ok = false;
    for (const s of this.sourcesFor(hand)) for (const m of this.motors(s.gamepad)) ok = this.fire(m, a, dur) || ok;
    if (ok) { this.busyUntil[hand] = now + dur + 20; this.lastAt[hand] = now; this.fired++; }
    return ok;
  }
  _shot(hand, a, dur) {
    if (a < 0.04) return false; let ok = false;
    for (const s of this.sourcesFor(hand)) for (const m of this.motors(s.gamepad)) ok = this.fire(m, a, dur) || ok;
    if (!ok && navigator.getGamepads) for (const gp of Array.from(navigator.getGamepads() || [])) { if (!gp || (gp.hand && gp.hand !== hand)) continue; for (const m of this.motors(gp)) ok = this.fire(m, a, dur) || ok; }
    if (ok) this.fired++; return ok;
  }
  /** Toca un patrón del vocabulario en una mano. scale lo hace más leve o más firme. */
  play(hand, name, scale = 1) {
    const seq = PATRONES[name]; if (!seq || this.level <= 0 || !hand) return false;
    const now = performance.now(), light = name === "tick" || name === "anio" || name === "faro";
    if (light && now - this.lastAt[hand] < 40) return false;         // los toques finos nunca se enciman
    this.lastAt[hand] = now; let at = 0, any = false;
    for (const [amp, ms] of seq) {
      if (amp > 0) { const a = Math.min(1, amp * this.level * scale), d = ms; if (at === 0) any = this._shot(hand, a, d) || any; else setTimeout(() => this._shot(hand, a, d), at); }
      at += ms;
    }
    return any;
  }
  /** Textura continua (tocar la esfera): pulsos cortos, como mucho ~8 por segundo. */
  texture(hand, amp) {
    const now = performance.now(); if (now - this.lastTex[hand] < 120) return false;
    this.lastTex[hand] = now; return this.pulse(hand, amp, 16);
  }
  /** Toque en las dos manos (inicio y fin de un recorrido); repeatAfter lo repite una vez. */
  both(amp, ms, repeatAfter = 0) {
    this.pulse("left", amp, ms, true); this.pulse("right", amp, ms, true);
    if (repeatAfter) setTimeout(() => { this.pulse("left", amp, ms, true); this.pulse("right", amp, ms, true); }, repeatAfter + 120);
  }
}
