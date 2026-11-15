/* Núcleo · Earth Jukebox en WebXR. Tres pantallas (lobby, ambiente vivo, fin del recorrido),
   el motor de sonido, los hápticos y la esfera cinética como control. */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import PUNTOS from "./esfera-puntos.json";
import C from "./core.cjs";
import { NucleoSynth, PRESETS, ORDER } from "./synth.js";
import { Haptics } from "./haptics.js";
import { SFX, LEITMOTIV, Roce } from "./sfx.js";
import { AMBIENTES, LIFE_COLOR, GLB, TUNING } from "./config.js";

const DEG = Math.PI / 180, TAU = Math.PI * 2;
const polar = (azDeg, dist, y) => new THREE.Vector3(Math.sin(azDeg * DEG) * dist, y, -Math.cos(azDeg * DEG) * dist);
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const hex = (n) => "#" + n.toString(16).padStart(6, "0");

/* ---------- base ---------- */
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true;
renderer.xr.setReferenceSpaceType("local-floor");
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x080808);
/* Smog de gases: una neblina parda que crece con el CO₂ del año que suena. Lo cercano (esfera, aro, textos) casi no se toca; el fondo se vela. */
const SMOG = { color: new THREE.Color(TUNING.smogColor ?? 0x4a3c30), base: new THREE.Color(0x080808), k: 0 };
scene.fog = new THREE.FogExp2(SMOG.color.getHex(), 0);
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.05, 400);
camera.position.set(0, 1.6, 0); camera.rotation.order = "YXZ";
scene.add(camera);
scene.add(new THREE.HemisphereLight(0xffffff, 0x223344, 1.2));
const sun = new THREE.DirectionalLight(0xffffff, 1.2); sun.position.set(2, 5, 3); scene.add(sun);

const synth = new NucleoSynth(); synth.rich = TUNING.sonidoRico !== false;
const haptics = new Haptics(); haptics.level = TUNING.comfort;
/** Patrón táctil en una mano; sin mano (teclado, palanca sin dueño), en las dos. */
const hx = (hand, name, scale) => { if (hand) haptics.play(hand, name, scale); else { haptics.play("left", name, scale); haptics.play("right", name, scale); }  if ((name === "faro" || name === "tope") && hands.some((h) => h.isHand && (!hand || h.hand === hand))) synth.tick(name === "faro" ? 1700 : 420, name === "faro" ? 0.012 : 0.04); };   // con manos no hay vibración: el faro y el tope suenan

const app = { state: "inicio", info: false, desc: false, dash: "hielo", yearPos: 0, scale: 1, speed: 1, scrubbing: false, sensory: false, uiAlpha: 1, hover: null, xr: false, beat: 0 };
/* ---------- idioma: español / inglés. tx(es, en) elige el texto; los nombres, unidades y fuentes del dato cambian con él. ---------- */
app.lang = (() => { try { return localStorage.getItem("orbis-lang"); } catch (e) { return null; } })() === "en" ? "en" : "es";
const tx = (es, en) => (app.lang === "en" ? en : es), loc = () => (app.lang === "en" ? "en-US" : "es-MX");
const EN = { name: { gases: "Greenhouse gases", hielo: "Sea ice", jungla: "Rainforest" },
  unit: { gases: "ppm of CO₂ at Mauna Loa", hielo: "million km² in September", jungla: "km² cleared that year" },
  source: { gases: "NOAA Global Monitoring Laboratory", hielo: "NSIDC Sea Ice Index, Arctic", jungla: "INPE PRODES, Legal Amazon" },
  voz: { bajo: "bass", arpegio: "melody", pulso: "pulse", canto: "song" } };
for (const id of ORDER) {
  const a = AMBIENTES[id], p = PRESETS[id], es = { name: a.name, unit: p.unit, source: p.source };
  Object.defineProperty(a, "name", { get: () => tx(es.name, EN.name[id]) });
  Object.defineProperty(p, "unit", { get: () => tx(es.unit, EN.unit[id]) });
  Object.defineProperty(p, "source", { get: () => tx(es.source, EN.source[id]) });
}
window.__nucleo = { app, synth, haptics };
/** Sonido de interfaz (ver src/sfx.js): apertura, cierre, transicion, giro, confirmacion, avance. */
let inviteAt = Infinity, inviteDir = -1;
function sfx(name, opts) { const ctx = synth.ctx; if (!ctx || ctx.state !== "running" || !synth.nodes) return; try { const out = ctx.createGain(); out.gain.value = Math.min(4, 0.5 / Math.max(0.05, synth.level)) * ((opts && opts.vol) || 1); out.connect(synth.nodes.master); SFX[name](ctx, out, ctx.currentTime, opts); }   /* los sonidos de apoyo no bajan aunque la sala esté callada */ catch (e) { /* sin sonido de interfaz: la experiencia sigue */ } }

/* ---------- interfaz que se puede atenuar (modo sensorial) ---------- */
const uiMats = [];
function ui(mat, base = 1) { mat.transparent = true; mat.userData.base = base; mat.opacity = base; uiMats.push(mat); return mat; }
const interactives = [];
const LIFT = [], UIL = { lift: 0 };   // paneles colocados para una persona de pie (ojos a 1.6 m); se suben o bajan con la altura real de los ojos
function button(mesh, id, onSelect) { mesh.userData.hoverId = id; mesh.userData.onSelect = onSelect; interactives.push(mesh); return mesh; }

function wrap(g, text, x, y, maxW, lh) {
  let line = "";
  for (const w of text.split(" ")) {
    const test = line ? line + " " + w : w;
    if (g.measureText(test).width > maxW && line) { g.fillText(line, x, y); line = w; y += lh; } else line = test;
  }
  if (line) g.fillText(line, x, y);
  return y + lh;
}
const panels = [];
/** Panel con textura de lienzo. draw(g, w, h) pinta; panel.redraw() actualiza. */
function panel(wM, hM, pxW, pxH, draw) {
  const cv = document.createElement("canvas"); cv.width = pxW; cv.height = pxH;
  const g = cv.getContext("2d"), tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(wM, hM), ui(new THREE.MeshBasicMaterial({ map: tex, depthWrite: false, side: THREE.DoubleSide })));
  mesh.redraw = () => { g.clearRect(0, 0, pxW, pxH); g.save(); g.shadowColor = "rgba(0,0,0,.75)"; g.shadowBlur = 16; draw(g, pxW, pxH); g.restore(); tex.needsUpdate = true; };
  mesh.renderOrder = 10;   // el texto se pinta al final: ningún material translúcido del ambiente lo tapa
  mesh.redraw(); panels.push(mesh);
  return mesh;
}
/* ---------- sistema Núcleo (tema oscuro): una familia, panel negro, línea fina, el color como filamento ---------- */
const FONT = '"Manrope", "Helvetica Neue", Helvetica, Arial, sans-serif';
const N = { panel: "#141414", atmo1: "#131a21", atmo2: "#46525c", hairline: "#292929", track: "#262626", grey2: "#1f1f1f", tick: "#6e6e6e",
            ink: "#f5f5f5", muted: "#a8a8a8", signal: "#ff5a3c", orbit: "#5b8cff", live: "#3dff9a" };
const lit = (n) => ({ 0xff3b1f: N.signal, 0x2f6bff: N.orbit, 0x0fa958: N.live })[n] || hex(n);   // color 3D → su versión de luz sobre panel
const track = (g, px) => { try { g.letterSpacing = px + "px"; } catch (e) {} };
/** Filamento de luz: trazo corto de 2 px con halo. Nunca un punto. */
function filament(g, x, y, len, color) {
  g.save(); g.lineCap = "round"; g.strokeStyle = color;
  g.globalAlpha = 0.55; g.shadowColor = color; g.shadowBlur = 14; g.lineWidth = 10; g.beginPath(); g.moveTo(x, y); g.lineTo(x + len, y); g.stroke();
  g.globalAlpha = 1; g.shadowBlur = 0; g.lineWidth = 4; g.beginPath(); g.moveTo(x, y); g.lineTo(x + len, y); g.stroke(); g.restore();
}

/* ---------- escenario común: domo de alambre y piso ---------- */
const dome = new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(7, 3)), ui(new THREE.LineBasicMaterial({ color: 0x6e6e6e }), 0.06));
dome.position.y = 1.2; scene.add(dome);
const floor = new THREE.Mesh(new THREE.RingGeometry(0.35, 0.38, 64), ui(new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide }), 0.35));
floor.rotation.x = -Math.PI / 2; floor.position.y = 0.01; scene.add(floor);

const gLobby = new THREE.Group(), gAmb = new THREE.Group(), gFin = new THREE.Group();
scene.add(gLobby, gAmb, gFin);
const decor = { lobby: [], fin: [], amb: [] };   // lo que se oculta si llega un GLB con hideProcedural

/* ---------- pantalla 1: lobby (disco de tres sectores de 120°) ---------- */
const sectors = {};
for (const id of ORDER) {
  const a = AMBIENTES[id], p = PRESETS[id];
  const sec = new THREE.Mesh(new THREE.RingGeometry(0.55, 1.7, 48, 1, (90 - a.az - 58) * DEG, 116 * DEG), ui(new THREE.MeshBasicMaterial({ color: a.color, side: THREE.DoubleSide, depthWrite: false }), 0.28));
  sec.rotation.x = -Math.PI / 2; sec.position.y = 0.02;
  const pan = panel(1.7, 1.0, 1024, 602, (g, w, h) => {      // solo texto: número, nombre, periodo
    g.fillStyle = N.muted; g.font = `600 30px ${FONT}`; g.fillText(a.num, 56, 96);
    filament(g, 56 + g.measureText(a.num).width + 22, 86, 28, lit(a.color));
    g.fillStyle = N.ink; g.font = `700 ${a.name.length > 14 ? 68 : 104}px ${FONT}`; track(g, -2.5); const y = wrap(g, a.name, 52, a.name.length > 14 ? 196 : 216, w - 104, 76); track(g, 0);
    g.fillStyle = N.muted; g.font = `500 26px ${FONT}`;
    g.fillText(`${p.years[0].year}–${p.years[p.years.length - 1].year} · ${p.source}`, 56, y + 4);
  });
  pan.position.copy(polar(a.az, 2.6, 1.55)); pan.lookAt(0, 1.55, 0); LIFT.push(pan);
  const go = () => startAmbiente(id);
  button(sec, id, go); button(pan, id, go);
  gLobby.add(sec, pan); decor.lobby.push(pan);
  sectors[id] = { sec, pan };
}
const lobbyTitle = panel(1.5, 0.3, 1024, 205, (g, w, h) => {
  g.textAlign = "center"; g.fillStyle = N.ink; g.font = `700 72px ${FONT}`; track(g, -2); g.fillText("Orbe", w / 2, 88); track(g, 0);
  g.fillStyle = N.muted; g.font = `500 28px ${FONT}`; g.fillText(tx("Elige un lugar", "Choose a place"), w / 2, 150);
  if (TUNING.diagnostico) { g.font = `500 20px ${FONT}`; g.fillText(`${app.xr ? "VR" : tx("Pantalla", "Screen")} · ${haptics.describe()}`, w / 2, 192); }   // diagnóstico de mandos y vibración
  g.textAlign = "left";
});
lobbyTitle.position.copy(polar(0, 2.6, 2.35)); lobbyTitle.lookAt(0, 2.0, 0); gLobby.add(lobbyTitle); decor.lobby.push(lobbyTitle);

/* ---------- pantalla 2: ambiente vivo ---------- */
// Apoyo visual del sonido, como en las láminas: líneas finas que te rodean, nunca barras ni partículas.
// · Cada golpe de una voz es una traza corta sobre el anillo de su voz (el acimut es el paso del compás, la altura es la voz).
//   En reposo es tenue; cuando suena se vuelve cometa (cabeza brillante y estela); si la voz se apaga, casi desaparece.
// · La presión son anillos que se apilan sobre ti cuando el dato aprieta. En el piso, tres círculos de referencia.
const VOICE_Y = { bajo: 0.5, pulso: 0.85, arpegio: 1.2, canto: 1.55 }, TRACE_R = 3.4;
let onsets = [];
const traces = new THREE.Group(); gAmb.add(traces);
const tmpM = new THREE.Matrix4(), tmpC = new THREE.Color(), tmpV = new THREE.Vector3(), tmpQ = new THREE.Quaternion(), tmpS = new THREE.Vector3();
function onsetSteps(pattern) { const out = []; pattern.forEach((on, i) => on && out.push(i)); return out; }
/** Tira curva sobre un anillo. fade: el brillo crece de la cola (0) a la cabeza (1). */
function arcRibbon(r, a0, a1, h, seg, fade) {
  const pos = [], col = [], idx = [];
  for (let i = 0; i <= seg; i++) {
    const t = i / seg, a = lerp(a0, a1, t), x = Math.sin(a) * r, z = -Math.cos(a) * r, c = fade ? t * t : 1;
    pos.push(x, -h / 2, z, x, h / 2, z); col.push(c, c, c, c, c, c);
    if (i < seg) { const k = i * 2; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
  }
  const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute("color", new THREE.Float32BufferAttribute(col, 3)); g.setIndex(idx); return g;
}
const traceGeo = arcRibbon(TRACE_R, -15 * DEG, 0, 0.012, 15, true), headGeo = arcRibbon(TRACE_R, -1.4 * DEG, 0.2 * DEG, 0.028, 3, false);
const traceMat = () => new THREE.MeshBasicMaterial({ color: 0x000000, vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, side: THREE.DoubleSide });
function buildLights() {
  for (const o of onsets) { traces.remove(o.mesh, o.head); o.mesh.material.dispose(); o.head.material.dispose(); }
  onsets = [];
  synth.reference.voices.forEach((vc, vi) => onsetSteps(vc.pattern).forEach((s, j) => {
    const mesh = new THREE.Mesh(traceGeo, traceMat()), head = new THREE.Mesh(headGeo, traceMat());
    mesh.position.y = head.position.y = VOICE_Y[vc.id] ?? 1; mesh.frustumCulled = head.frustumCulled = false; traces.add(mesh, head);
    onsets.push({ voice: vc.id, vi, j, az: (s / 16) * 360, flash: 0, alive: true, mesh, head });
  }));
}
function aliveCount() { let n = 0; for (const o of onsets) if (o.alive) n++; return n; }
function refreshOnsets() {       // qué voz sigue viva y a qué paso se movió (el desajuste se ve)
  const d = synth.derived;
  for (const o of onsets) {
    const vc = d.voices[o.vi], cur = onsetSteps(vc.pattern)[o.j];
    o.step = cur; o.targetAz = (cur / 16) * 360; o.alive = vc.active && vc.alive[cur];
  }
}
const life = new THREE.Color(LIFE_COLOR), dead = new THREE.Color(0x363636), traceCol = new THREE.Color();
function drawLights(dt, dim) {
  traceCol.set(lit(AMBIENTES[app.dash].color));
  for (const o of onsets) {
    let da = ((o.targetAz - o.az + 540) % 360) - 180; o.az += da * Math.min(1, dt * 3);
    o.flash = Math.max(0, o.flash - dt * 1.8);
    o.mesh.rotation.y = o.head.rotation.y = -o.az * DEG;
    o.mesh.material.color.copy(traceCol).multiplyScalar((o.alive ? 0.2 + o.flash * 1.1 : 0.035) * dim);
    o.head.visible = o.alive && o.flash > 0.02; o.head.material.color.copy(traceCol).lerp(tmpC.set(0xffffff), 0.35).multiplyScalar(o.flash * 1.5 * dim);
  }
}
const ringLine = (r, y, color, base) => new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(Array.from({ length: 128 }, (_, i) => new THREE.Vector3(Math.sin((i / 128) * TAU) * r, y, -Math.cos((i / 128) * TAU) * r))), ui(new THREE.LineBasicMaterial({ color }), base));
const guideRings = Object.values(VOICE_Y).map((y) => { const l = ringLine(TRACE_R, y, 0xffffff, 0.07); gAmb.add(l); return l; });
const PRESS_N = 14, pressRings = Array.from({ length: PRESS_N }, (_, i) => { const l = ringLine(4.2, 2.3 + i * 0.16 + (i % 2) * 0.04, 0xff5a3c, 0); gAmb.add(l); return l; });
[3, 6, 9].forEach((r, i) => gAmb.add(ringLine(r, 0.014 - TUNING.platformLift, 0xffffff, [0.08, 0.055, 0.035][i])));
const playheadPivot = new THREE.Group(); gAmb.add(playheadPivot);
// Plataforma flotante: igual que en el lobby, en cada lugar estás de pie sobre un disco; el lugar queda TUNING.platformLift metros abajo.
// Discreta: disco oscuro, canto de una línea, doce marcas y un filamento al frente con el color del lugar.
const platform = new THREE.Group(); gAmb.add(platform);
const platBody = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.42, 0.07, 72), new THREE.MeshStandardMaterial({ color: 0x101010, roughness: 0.55, metalness: 0.5 }));
platBody.position.y = -0.036; platform.add(platBody, ringLine(1.5, 0.002, 0xf5f5f5, 0.3), ringLine(1.1, 0.002, 0xf5f5f5, 0.09));
platform.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(Array.from({ length: 12 }, (_, i) => [polar(i * 30, 1.54, 0.002), polar(i * 30, i % 3 === 0 ? 1.62 : 1.58, 0.002)]).flat()), ui(new THREE.LineBasicMaterial({ color: 0x6e6e6e }), 0.8)));
const platGlow = new THREE.Mesh(new THREE.RingGeometry(1.455, 1.49, 24, 1, 82 * DEG, 16 * DEG), new THREE.MeshBasicMaterial({ color: 0xffffff, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, side: THREE.DoubleSide }));
platGlow.rotation.x = -Math.PI / 2; platGlow.position.y = 0.003; platform.add(platGlow);

// Tablero vivo: año, dato y signos vitales.
const pct = (x) => `${Math.round(clamp(x, 0, 1) * 100)} %`;
const hud = panel(1.3, 0.62, 1280, 610, (g, w, h) => {     // isla del dato: pequeña por defecto; el detalle solo aparece si lo pides
  const a = AMBIENTES[app.dash], p = PRESETS[app.dash], e = synth.entry, d = synth.derived, c = lit(a.color), on = app.hover === "isla";
  g.fillStyle = N.muted; g.font = `600 30px ${FONT}`; g.fillText(`${a.num} · ${a.name}`, 52, 72);
  g.fillStyle = N.ink; g.font = `700 150px ${FONT}`; track(g, -4.5); g.fillText(synth.idx === 0 ? tx("Intacto", "Intact") : String(e.year), 44, 232); track(g, 0);
  const x0 = 52, x1 = app.info ? w - 52 : 700, y = 282, al = synth.idx / synth.count, xt = lerp(x0, x1, al);   // línea de tiempo
  g.fillStyle = "rgba(245,245,245,.22)"; g.fillRect(x0, y - 1, x1 - x0, 2);
  g.fillStyle = N.ink; g.fillRect(x0, y - 2, xt - x0, 4);
  filament(g, Math.max(x0, xt - 26), y, 26, c);
  const link = (text, yy) => { g.fillStyle = on ? N.ink : N.muted; g.font = `${on ? 700 : 600} 34px ${FONT}`; g.fillText(text, 52, yy); g.fillRect(52, yy + 12, g.measureText(text).width, on ? 4 : 2); };
  if (!app.info) { link(tx("Ver el dato", "See the data"), 362); return; }
  g.fillStyle = N.ink; g.font = `600 46px ${FONT}`;
  g.fillText(synth.idx === 0 ? tx("Así suena el lugar sano", "This is how the healthy place sounds") : `${Number(e.value).toLocaleString(loc())} ${p.unit}`, 52, 356);
  g.fillStyle = N.muted; g.font = `500 32px ${FONT}`;
  g.fillText(tx(`${aliveCount()} de ${onsets.length} voces vivas`, `${aliveCount()} of ${onsets.length} voices alive`), 52, 410);
  g.fillText(tx(`Vitalidad ${pct(d.v)} · Diversidad ${pct(d.d)} · Estabilidad ${pct(d.s)} · Presión ${pct(d.p)}`, `Vitality ${pct(d.v)} · Diversity ${pct(d.d)} · Stability ${pct(d.s)} · Pressure ${pct(d.p)}`), 52, 458);
  g.font = `500 26px ${FONT}`; g.fillText(`${p.years[0].year}–${p.years[p.years.length - 1].year} · ${tx("Fuente", "Source")}: ${p.source}`, 52, 504);
  link(tx("Ocultar", "Hide"), 568);
});
hud.position.copy(polar(26, 2.3, 1.72)); hud.lookAt(0, 1.6, 0); gAmb.add(hud); LIFT.push(hud); button(hud, "isla", () => toggleInfo());

/* ---------- descripciones: texto (y voz, si el navegador la tiene) solo si la persona las pide ---------- */
const lista = (xs) => (xs.length < 2 ? xs.join("") : xs.slice(0, -1).join(", ") + tx(" y ", " and ") + xs[xs.length - 1]);
function describe() {
  if (app.state === "lobby") {
    const lado = (id) => { const d = wrapPi(AMBIENTES[id].az * DEG - NAV.angle); return Math.abs(d) < 0.3 ? tx("al frente", "in front") : d > 0 ? tx("a tu derecha", "on your right") : tx("a tu izquierda", "on your left"); };
    const lugares = lista(ORDER.map((id) => `${AMBIENTES[id].name} ${lado(id)}`)), frente = AMBIENTES[NAV.front].name;
    return [tx(`Lobby. Tres lugares a tu alrededor: ${lugares}.`, `Lobby. Three places around you: ${lugares}.`), tx(`Al frente: ${frente}. Suena su firma.`, `In front: ${frente}. Its signature is playing.`),
      tx("Mantén el gatillo y mueve la mano para girar el mundo. Un toque corto entra al lugar del frente.", "Hold the trigger and move your hand to turn the world. A short press enters the place in front.")];
  }
  const a = AMBIENTES[app.dash], p = PRESETS[app.dash], e = synth.entry, d = synth.derived, quedan = tx(`Quedan ${aliveCount()} de ${onsets.length} voces.`, `${aliveCount()} of ${onsets.length} voices remain.`);
  if (app.state === "fin") return [tx(`Fin del recorrido en ${a.name}.`, `End of the journey in ${a.name}.`), quedan, tx("Toca el centro del aro para volver al lobby.", "Tap the centre of the ring to go back to the lobby.")];
  const voz = (v) => tx(v.id, EN.voz[v.id] || v.id), act = d.voices.filter((v) => v.active).map(voz), off = d.voices.filter((v) => !v.active).map(voz), val = Number(e.value).toLocaleString(loc());
  return [
    synth.idx === 0 ? tx(`${a.name}, lugar intacto. Así suena sano.`, `${a.name}, intact place. This is how it sounds when healthy.`) : tx(`${a.name}, año ${e.year}: ${val} ${p.unit}.`, `${a.name}, year ${e.year}: ${val} ${p.unit}.`),
    tx(`Suenan ${lista(act) || "muy pocas voces"}${off.length ? `. En silencio: ${lista(off)}` : ""}. ${aliveCount()} de ${onsets.length} voces vivas.`, `Playing: ${lista(act) || "very few voices"}${off.length ? `. Silent: ${lista(off)}` : ""}. ${aliveCount()} of ${onsets.length} voices alive.`),
    d.p < 0.33 ? tx("Sonido claro y estable.", "Clear, steady sound.") : d.p < 0.66 ? tx("El sonido se tensa: hay más presión.", "The sound tightens: pressure is rising.") : tx("Sonido denso y áspero: presión alta.", "Dense, rough sound: high pressure."),
    tx("Vibración: cada año es un toque; las décadas, uno más firme. Mantén el gatillo y gira la mano alrededor de la esfera para moverte en el tiempo.", "Vibration: each year is one tap; decades, a firmer one. Hold the trigger and move your hand around the sphere to travel in time."),
  ];
}
/* Narración: una sola pista. Lo que se pide decir espera a que dejes de moverte (así, al girar la esfera, no se enciman voces);
   solo entonces calla lo anterior y habla, frase por frase, con una pausa entre frases. La voz es la mejor voz femenina que tenga el dispositivo. */
const VOZ = { pending: "", at: 0, token: 0, cache: {}, prio: false, key: "", lastKey: "", lastText: "", speaking: false, endedAt: 0, dashSaid: "" };
function pickVoice() {
  const lang = app.lang === "en" ? "en" : "es"; if (VOZ.cache[lang]) return VOZ.cache[lang];
  const vs = (speechSynthesis.getVoices() || []).filter((v) => (v.lang || "").toLowerCase().replace("_", "-").startsWith(lang)); if (!vs.length) return null;
  const fem = /paulina|m[oó]nica|sabina|dalia|elvira|helena|laura|paloma|marisol|ximena|elena|lucia|lucía|isabela|angelica|angélica|soledad|samantha|aria|jenny|zira|sonia|libby|karen|moira|tessa|allison|ava|susan|emma|michelle|serena|victoria|female|mujer|femenin/i;
  const masc = /jorge|juan|diego|pablo|ra[uú]l|carlos|enrique|david|mark|daniel|alex|fred|guy|ryan|george|tom|aaron|male\b|hombre|masculin/i, fina = /natural|neural|online|premium|enhanced|mejorad|siri|wavenet/i;
  const pref = app.lang === "en" ? ["en-us", "en-gb"] : ["es-mx", "es-us", "es-419", "es-es"];
  const score = (v) => { const n = v.name || "", l = (v.lang || "").toLowerCase().replace("_", "-"), i = pref.indexOf(l); return (fem.test(n) ? 6 : 0) - (masc.test(n) && !fem.test(n) ? 6 : 0) + (fina.test(n) ? 5 : 0) + (/google/i.test(n) ? 2 : 0) + (i >= 0 ? 3 - i * 0.5 : 0) + (v.localService ? 0 : 1); };
  return (VOZ.cache[lang] = vs.slice().sort((x, y) => score(y) - score(x))[0]);
}
if (window.speechSynthesis) { try { speechSynthesis.addEventListener("voiceschanged", () => { VOZ.cache = {}; }); speechSynthesis.getVoices(); } catch (e) { /* sin lista de voces: se usa la del sistema */ } }
/* Narradora: voz neuronal generada de antemano (una voz femenina por idioma), guardada en un paquete por idioma (public/voz).
   Cada frase es un clip; el índice dice dónde empieza cada uno dentro del paquete. Si el paquete no está o falta un clip,
   se usa la voz del dispositivo. La música del dato sigue siendo síntesis en vivo: solo la narración viene preparada. */
const NARR = { idx: null, packs: {}, loading: {}, src: null, gain: null, cache: new Map() };
function narrLoad() {
  const lang = app.lang; if (NARR.loading[lang]) return NARR.loading[lang];
  return (NARR.loading[lang] = (async () => { if (!NARR.idx) NARR.idx = await (await fetch("voz/voz.json")).json(); NARR.packs[lang] = await (await fetch(`voz/voz-${lang}.bin`)).arrayBuffer(); })().catch(() => { NARR.loading[lang] = null; }));
}
function narrHas(keys) { const ix = NARR.idx && NARR.idx[app.lang]; return !!(ix && NARR.packs[app.lang] && synth.ctx && keys.every((k) => ix[k])); }
function duck(on) { if (synth.nodes) synth.nodes.master.gain.setTargetAtTime(synth.level * (on ? (TUNING.voz && TUNING.voz.duck) ?? 0.5 : 1), synth.ctx.currentTime, 0.25); }   // la música baja mientras habla
function narrStop() { if (NARR.src) { try { NARR.src.onended = null; NARR.src.stop(); } catch (e) { /* ya había terminado */ } NARR.src = null; duck(false); } }
async function narrPlay(keys, token, done) {
  const ctx = synth.ctx, lang = app.lang, ix = NARR.idx[lang];
  if (!NARR.gain) { NARR.gain = ctx.createGain(); NARR.gain.connect(ctx.destination); } NARR.gain.gain.value = (TUNING.voz && TUNING.voz.nivel) ?? 1.15; duck(true);
  try {
    for (const k of keys) {
      const id = lang + "|" + k, fijo = !/_\d+$/.test(k) || k.startsWith("presion_"); let buf = NARR.cache.get(id);
      if (!buf) { const [o, n] = ix[k]; buf = await ctx.decodeAudioData(NARR.packs[lang].slice(o, o + n)); if (fijo) NARR.cache.set(id, buf); }   // los años no se guardan: son muchos
      if (token !== VOZ.token || !app.desc) return;
      await new Promise((res) => { const sr = ctx.createBufferSource(); sr.buffer = buf; sr.connect(NARR.gain); sr.onended = res; NARR.src = sr; sr.start(); });
      if (token !== VOZ.token) return; await new Promise((res) => setTimeout(res, 240));
    }
  } catch (e) { /* si un clip falla, la narración termina ahí */ } finally { if (token === VOZ.token) { NARR.src = null; duck(false); done(); } }
}
/** Pide decir algo. Siempre gana lo último pedido. Reglas para que no canse:
    · prio (cambio de pantalla, o lo pediste tú): calla lo que suene y habla.
    · sin prio (años, lugar al frente): nunca interrumpe; espera a que termine lo anterior y a un respiro, y si para entonces
      ya dijo eso mismo (misma clave o mismo texto) no lo repite. */
function speak(text, { prio = false, key = "", espera = 800, clips = null } = {}) {
  if (!app.desc || !text || (!window.speechSynthesis && !(clips && narrHas(clips)))) return;
  if (!prio && ((key && key === VOZ.lastKey) || text === VOZ.lastText)) { if (!VOZ.prio) VOZ.pending = ""; return; }   // ya lo dijo: nada pendiente
  if (VOZ.pending && VOZ.prio && !prio) return;                                                                         // hay algo importante en cola: no lo pises
  VOZ.pending = text; VOZ.clips = clips; VOZ.prio = prio; VOZ.key = key; VOZ.at = performance.now() + (prio ? Math.min(espera, 400) : espera);
}
function updateVoz() {
  const now = performance.now(); if (!VOZ.pending || now < VOZ.at) return;
  if (app.scrubbing || hands.some((h) => h.grab || h.grip)) { VOZ.at = now + 400; return; }                              // sigues moviendo: espera
  const cfg = TUNING.voz || {};
  if (!VOZ.prio && (VOZ.speaking || now - VOZ.endedAt < (cfg.respiro ?? 2500))) return;                                 // deja terminar y respirar
  const text = VOZ.pending, frases = text.split(/(?<=[.!?])\s+/).filter(Boolean), token = ++VOZ.token;
  VOZ.pending = ""; VOZ.lastText = text; VOZ.lastKey = VOZ.key; VOZ.prio = false; VOZ.speaking = true;
  const fin = () => { if (token === VOZ.token) { VOZ.speaking = false; VOZ.endedAt = performance.now(); } };
  const clips = VOZ.clips; VOZ.clips = null; narrStop();
  if (clips && narrHas(clips)) { try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (e) { /* sin voz del sistema */ } narrPlay(clips, token, fin); return; }   // voz neuronal
  try {
    speechSynthesis.cancel(); const voice = pickVoice();
    const next = (i) => {
      if (token !== VOZ.token) return; if (i >= frases.length || !app.desc) return fin();
      const u = new SpeechSynthesisUtterance(frases[i]); u.lang = voice ? voice.lang : loc(); if (voice) u.voice = voice;
      u.rate = cfg.rate ?? 0.92; u.pitch = cfg.pitch ?? 1.05; u.volume = cfg.volume ?? 0.95;
      u.onend = () => setTimeout(() => next(i + 1), cfg.pausa ?? 280); u.onerror = u.onend; speechSynthesis.speak(u);
    };
    next(0); setTimeout(fin, 3000 + text.length * 110);                                                                 // por si el navegador no avisa que terminó
  } catch (e) { fin(); }
}
const desc = panel(1.5, 0.55, 1200, 440, (g, w, h) => {
  if (!app.desc) return;
  g.fillStyle = N.muted; g.font = `600 26px ${FONT}`; g.fillText(tx("Descripción", "Description"), 40, 52);
  g.fillStyle = N.ink; g.font = `500 32px ${FONT}`; let y = 106; for (const line of describe()) y = wrap(g, line, 40, y, w - 80, 42) + 8;
});
desc.position.copy(polar(-30, 2.2, 0.95)); desc.lookAt(0, 1.5, 0); desc.visible = false; scene.add(desc); LIFT.push(desc);
const descBtn = panel(0.62, 0.11, 900, 160, (g, w, h) => {
  const on = app.hover === "descripciones", text = app.desc ? tx("Ocultar descripciones", "Hide descriptions") : tx("Ver descripciones", "Show descriptions");
  g.fillStyle = on ? N.ink : N.muted; g.font = `${on ? 700 : 600} 54px ${FONT}`; g.fillText(text, 30, 84); g.fillRect(30, 104, g.measureText(text).width, on ? 4 : 2);
});
descBtn.position.copy(polar(30, 2.2, 0.95)); descBtn.lookAt(0, 1.5, 0); descBtn.visible = false; scene.add(descBtn); LIFT.push(descBtn); button(descBtn, "descripciones", () => toggleDesc());
const langBtn = panel(0.62, 0.11, 900, 160, (g, w, h) => {   // cambia entre español e inglés: muestra el idioma al que cambias
  const on = app.hover === "idioma", text = tx("English", "Español");
  g.fillStyle = on ? N.ink : N.muted; g.font = `${on ? 700 : 600} 54px ${FONT}`; g.fillText(text, 30, 84); g.fillRect(30, 104, g.measureText(text).width, on ? 4 : 2);
});
langBtn.position.copy(polar(30, 2.2, 0.8)); langBtn.lookAt(0, 1.5, 0); langBtn.visible = false; scene.add(langBtn); LIFT.push(langBtn); button(langBtn, "idioma", () => setLang(app.lang === "en" ? "es" : "en"));
function toggleInfo() { app.info = !app.info; sfx(app.info ? "apertura" : "cierre"); hud.redraw(); if (app.info) speak(describe()[0], { prio: true, clips: [synth.idx === 0 ? "intacto" : `${app.dash}_${synth.idx}`] }); }
function toggleDesc() { app.desc = !app.desc; sfx(app.desc ? "apertura" : "cierre"); descKey = ""; descBtn.redraw(); if (!app.desc && window.speechSynthesis) { VOZ.pending = ""; VOZ.token++; speechSynthesis.cancel(); } if (!app.desc) narrStop(); else { descState = ""; narrLoad(); } }
let descKey = "", descState = "";
let diagAt = 0;
function updateDesc() {
  if (TUNING.diagnostico && app.state === "lobby" && performance.now() - diagAt > 1000) { diagAt = performance.now(); lobbyTitle.redraw(); }
  const live = app.state !== "inicio" && app.state !== "intro"; desc.visible = live && app.desc; descBtn.visible = live; langBtn.visible = live;
  hud.scale.setScalar(lerp(hud.scale.x, app.info ? 1 : 0.62, 0.2));
  if (!live || !app.desc) return;
  updateVoz();
  const key = `${app.state}|${app.dash}|${synth.idx}|${NAV.front}`; if (key === descKey) return;
  descKey = key; desc.redraw(); const L = describe();
  const yk = `${app.dash}|${synth.idx}`, e = synth.entry;
  // el año: completo la primera vez en cada lugar; después, solo el año y la cifra
  const anio = () => { const full = VOZ.dashSaid !== app.dash; VOZ.dashSaid = app.dash; return full ? L[0] : synth.idx === 0 ? tx("Lugar intacto.", "Intact place.") : `${e.year}: ${Number(e.value).toLocaleString(loc())}.`; };
  const yc = synth.idx === 0 ? "intacto" : `${app.dash}_${synth.idx}`, pr = synth.derived.p;
  if (app.state !== descState) {                                                    // al cambiar de pantalla: bienvenida o presentación del lugar
    descState = app.state; VOZ.dashSaid = app.state === "ambiente" ? app.dash : "";
    const clips = app.state === "lobby" ? [VOZ.welcomed ? "lobby" : "bienvenida", "frente_" + NAV.front] : app.state === "ambiente" ? ["entrar_" + app.dash] : app.state === "fin" ? ["fin_" + app.dash] : null;
    if (app.state === "lobby") VOZ.welcomed = true;
    speak(app.state === "ambiente" ? `${L[0]} ${L[3]}` : L.join(" "), { prio: true, key: app.state === "ambiente" ? yk : app.state === "lobby" ? "frente|" + NAV.front : "", clips });
  }
  else if (app.state === "lobby") speak(L[1], { key: "frente|" + NAV.front, espera: 1000, clips: ["frente_" + NAV.front] });
  else if (app.state === "ambiente" && performance.now() - userYearAt < 1500) speak(anio(), { key: yk, espera: 900, clips: [yc] });                                // moviste la esfera: al detenerte, dónde quedaste
  else if (app.state === "ambiente" && synth.entry.year % 10 === 0) speak(`${anio()} ${L[1]} ${L[2]}`, { key: yk, clips: [yc, "presion_" + (pr < 0.33 ? 0 : pr < 0.66 ? 1 : 2)] });   // sola: una vez por década
}

// Esfera cinética: girarla recorre los años, su tamaño es la velocidad.
const sphere = new THREE.Group(); sphere.position.fromArray(TUNING.sphereCenter); gAmb.add(sphere);
const sphereWire = new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(TUNING.sphereRadius, 1)), ui(new THREE.LineBasicMaterial({ color: 0xffffff }), 0.85));
const sphereCore = new THREE.Mesh(new THREE.IcosahedronGeometry(0.05, 2), ui(new THREE.MeshBasicMaterial({ color: LIFE_COLOR }), 0.9));
const sphereHit = new THREE.Mesh(new THREE.SphereGeometry(TUNING.sphereRadius * 1.25, 16, 12), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }));
sphere.add(sphereWire, sphereCore, sphereHit); decor.amb.push(sphereWire);

/* Esfera cinética = la gráfica del dato y la interfaz de navegación. Los 1922 puntos salen de Kinetic wall3.blend
   (src/esfera-puntos.json); cada módulo es un prisma hexagonal sobre un núcleo oscuro, como en el prototipo de AI Studio.
   · Longitud = el tiempo: la serie completa da la vuelta a la esfera; girarla trae un año al frente.
   · Altura del módulo = el dato de ese año. Color = la presión de ese año (violeta → salmón → crema).
   · Lo que todavía no ocurre queda gris y corto: la esfera se va llenando con el recorrido.
   · Sphere_Controller: la mano o el puntero hunde lo que toca. Sphere_Controller_Expand: más velocidad abre una región hacia ti. */
const KS = (() => {
  const src = PUNTOS.points, n = src.length / 3, k = TUNING.sphereRadius / PUNTOS.radius;
  const N = new Float32Array(n * 3), R = new Float32Array(n * 3), U = new Float32Array(n * 3), fr = new Float32Array(n), lat = new Float32Array(n);
  const st = new Float32Array(n * 3);                       // estado suavizado: desplazamiento, escala radial, altura
  const v = new THREE.Vector3(), r = new THREE.Vector3(), u = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i < n; i++) {
    v.set(src[i * 3], src[i * 3 + 2], -src[i * 3 + 1]).normalize();          // Blender (x, y, z) → three (x, z, −y)
    r.crossVectors(up, v); if (r.lengthSq() < 1e-6) r.set(1, 0, 0); r.normalize(); u.crossVectors(v, r);
    N.set([v.x, v.y, v.z], i * 3); R.set([r.x, r.y, r.z], i * 3); U.set([u.x, u.y, u.z], i * 3);
    fr[i] = (Math.atan2(v.x, v.z) / TAU + 1) % 1; lat[i] = Math.sqrt(Math.max(0, 1 - v.y * v.y)); st[i * 3 + 1] = 0.6; st[i * 3 + 2] = 0.22;
  }
  const geo = new THREE.CylinderGeometry(0.045 * k, 0.062 * k, 0.24 * k, 6); geo.translate(0, 0.12 * k, 0); geo.rotateX(Math.PI / 2);   // prisma hexagonal que crece hacia afuera (+Z)
  const mesh = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.45, metalness: 0.05, flatShading: true }), n);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); mesh.frustumCulled = false;
  mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(n * 3).fill(0.22), 3); mesh.instanceColor.setUsage(THREE.DynamicDrawUsage);
  const core = new THREE.Mesh(new THREE.SphereGeometry(TUNING.sphereRadius * 0.93, 32, 20), new THREE.MeshStandardMaterial({ color: 0x0c0d12, roughness: 0.6, metalness: 0.2 }));
  return { n, k, N, R, U, fr, lat, st, mesh, core, val: null, pre: null, dash: null, crush: [null, null], lastTouch: [-1, -1], lastSound: 0, expandDir: new THREE.Vector3(0, 0, 1), expand: 0 };
})();
sphere.add(KS.core, KS.mesh); sphereWire.visible = false; sphereCore.visible = false;
window.__nucleo.KS = KS;
/** Serie del ambiente → valores 0..1 por año (índice 0 = lugar intacto). */
function buildSphereData(id) {
  const p = PRESETS[id], ys = p.years, vals = ys.map((y) => Number(y.value)), hi = Math.max(...vals), lo = (TUNING.sphereBase || { gases: 280, hielo: 0, jungla: 0 })[id] ?? Math.min(...vals), span = hi - lo || 1;   // base real de cada dato: CO₂ preindustrial (280 ppm); hielo y tala desde cero
  const norm = (x) => 0.12 + 0.88 * clamp((Number(x) - lo) / span, 0, 1), pre = (e, fb) => clamp(((e.vital && e.vital.pre) ?? fb * 100) / 100, 0, 1);
  const ref = p.reference || ys[0], v0 = norm(id === "hielo" ? hi : id === "gases" ? lo : ref.value ?? ys[0].value);   // lugar intacto: hielo completo, CO₂ preindustrial, cero tala
  KS.val = new Float32Array(ys.length + 1); KS.pre = new Float32Array(ys.length + 1); KS.val[0] = v0; KS.pre[0] = pre(ref, 0.05);
  ys.forEach((y, j) => { KS.val[j + 1] = norm(y.value); KS.pre[j + 1] = pre(y, KS.val[j + 1]); });
  KS.dash = id;
}
/* Cada esfera habla de su dato:
   gases  · CO₂ que se acumula: los módulos crecen, se calientan de color y la esfera se infla.
   hielo  · extensión del hielo: un casquete blanco que baja desde el polo hasta donde llegó el hielo ese año; debajo, agua oscura.
   jungla · km² talados ese año: esa proporción de módulos cae a tocón ocre; el resto queda en pie, verde. */
const RAMPS = { gases: [[0.52, 0.36, 0.92], [1.0, 0.4, 0.34], [1.0, 0.8, 0.36]], hielo: [[0.06, 0.14, 0.42], [0.25, 0.6, 1.0], [0.9, 0.97, 1.0]], jungla: [[0.04, 0.42, 0.22], [0.1, 0.66, 0.34], [0.24, 1.0, 0.6]] };
const ksCam = new THREE.Vector3(), RAMP = RAMPS.gases, PENTA = [0, 2, 4, 7, 9];
/** Punto (en mundo) que toca la esfera → coordenadas del .blend. i = 0 o 1 (una por mano). null lo suelta. */
function setCrush(i, world, onSurface = false) {
  if (!world) { KS.crush[i] = null; KS.lastTouch[i] = -1; return; }
  const p = sphere.worldToLocal(world.clone());
  KS.crush[i] = onSurface ? p.normalize().multiplyScalar(PUNTOS.radius) : p.divideScalar(KS.k);   // apuntar toca la superficie; la mano toca donde está
}
/** Tocar la esfera es leer el dato: cada año que cruzas suena suave (más agudo = más alto) y da un toque proporcional. */
function sphereTouch(i, hand) {
  const c = KS.crush[i]; if (!c || !KS.val) return 0;
  const j = Math.min(synth.count, Math.round(((Math.atan2(c.x, c.z) / TAU + 1) % 1) * synth.count)), v = KS.val[j];
  if (j !== KS.lastTouch[i]) {
    KS.lastTouch[i] = j; const now = performance.now();
    if (now - KS.lastSound > 90) { KS.lastSound = now; const deg = Math.round(v * 9); synth.tick(220 * Math.pow(2, (PENTA[deg % 5] + 12 * Math.floor(deg / 5)) / 12), 0.04 * (TUNING.sphereVolume ?? 2)); }
    if (hand) haptics.play(hand, "anio", 0.6 + 1.2 * v);       // leer el dato con la mano: más alto, más firme
  }
  return v;
}
function updateKinetic(dt, d) {
  if (KS.dash !== app.dash) buildSphereData(app.dash);
  const { n, k, N, R, U, fr, lat, st, mesh, val, pre } = KS, Rb = PUNTOS.radius, m = mesh.instanceMatrix.array, col = mesh.instanceColor.array, cnt = synth.count;
  const sC = 0.418, Rc = 2 * sC * 1.25, sE = 0.611, Re = 2 * sE * 1.25;        // escalas de los dos controladores en el .blend
  KS.expand = lerp(KS.expand, clamp((app.scale - 1) / (TUNING.maxScale - 1), 0, 1), 0.12);
  if (!twoHand) { sphere.worldToLocal(camera.getWorldPosition(ksCam)); KS.expandDir.lerp(ksCam.normalize(), 0.1).normalize(); }
  const ea = KS.expand, ex = KS.expandDir.x * Rb, ey = KS.expandDir.y * Rb, ez = KS.expandDir.z * Rb, c0 = KS.crush[0], c1 = KS.crush[1];
  const ease = Math.min(1, dt * 8), now = app.yearPos, beat = app.beat, mode = RAMPS[KS.dash] ? KS.dash : "gases", RM = RAMPS[mode];
  const rnd = KS.rnd || (KS.rnd = Float32Array.from({ length: n }, (_, i) => { const x = Math.sin(i * 12.9898 + 4.1) * 43758.5453; return x - Math.floor(x); }));
  for (let i = 0; i < n; i++) {
    const i3 = i * 3, nx = N[i3], ny = N[i3 + 1], nz = N[i3 + 2], px = nx * Rb, py = ny * Rb, pz = nz * Rb;
    const yf = fr[i] * cnt, j0 = Math.floor(yf), j1 = Math.min(cnt, j0 + 1), t = yf - j0, v = lerp(val[j0], val[j1], t), pr = clamp(0.5 * lerp(pre[j0], pre[j1], t) + 0.5 * (v - 0.12) / 0.88, 0, 1);   // color: presión y dato a partes iguales
    const shown = yf <= now + 0.5, dc = Math.abs(yf - now), cur = dc < 0.75 ? 1 - dc / 0.75 : 0;     // lo ocurrido · el año que suena
    const u = (v - 0.12) / 0.88; let hv = v, wv = 1, q = pr, fell = false, latK = 0.6 + 0.4 * lat[i], puff = 0.1 * u;
    if (mode === "hielo") { const e = clamp((0.9 * u - (1 - ny) / 2) / 0.05, 0, 1);   /* (1 − ny)/2 es la fracción de área de la esfera desde el polo: el área blanca es proporcional a la extensión real */ hv = e * (0.35 + 0.4 * u); wv = lerp(0.5, 1, e); q = e * (0.5 + 0.5 * u); latK = 1; puff = 0; }
    else if (mode === "jungla") { fell = rnd[i] < u * 0.92; hv = fell ? 0 : 0.5 + 0.5 * rnd[(i * 7) % n]; wv = fell ? 0.7 : 1; q = rnd[(i * 13) % n]; puff = 0; }
    let h = shown ? (0.35 + hv * 2.4) * latK * (1 + cur * (0.15 + beat * 0.5)) : 0.22, sxy = shown ? (0.85 + v * 0.3) * wv : 0.6, off = shown ? puff : 0;
    let w = 1;                                                               // Sphere_Controller: 0 en el centro del toque, 1 fuera de su radio
    if (c0) w = Math.min(w, Math.hypot(c0.x - px, c0.y - py, c0.z - pz) / Rc);
    if (c1) w = Math.min(w, Math.hypot(c1.x - px, c1.y - py, c1.z - pz) / Rc);
    if (w < 1) { off -= 0.3 * (1 - w); sxy *= lerp(0.45, 1, w); h *= lerp(0.4, 1, w); }
    if (ea > 0.002) {                                                        // Sphere_Controller_Expand: región que se abre (smoothstep)
      const te = Math.min(1, Math.hypot(ex - px, ey - py, ez - pz) / Re), ss = 1 - te * te * (3 - 2 * te);
      off += 0.8 * sE * ss * ea; sxy += 0.25 * (1 - te) * ea; h *= 1 + 0.6 * ss * ea;
    }
    st[i3] = lerp(st[i3], off, ease); st[i3 + 1] = lerp(st[i3 + 1], sxy, ease); st[i3 + 2] = lerp(st[i3 + 2], h, ease);
    const s1 = st[i3 + 1], s3 = st[i3 + 2], rad = (Rb * 0.94 + st[i3]) * k, o = i * 16;
    m[o] = R[i3] * s1; m[o + 1] = R[i3 + 1] * s1; m[o + 2] = R[i3 + 2] * s1; m[o + 3] = 0;
    m[o + 4] = U[i3] * s1; m[o + 5] = U[i3 + 1] * s1; m[o + 6] = U[i3 + 2] * s1; m[o + 7] = 0;
    m[o + 8] = nx * s3; m[o + 9] = ny * s3; m[o + 10] = nz * s3; m[o + 11] = 0;
    m[o + 12] = nx * rad; m[o + 13] = ny * rad; m[o + 14] = nz * rad; m[o + 15] = 1;
    let cr = 0.22, cg = 0.22, cb = 0.24;                                     // color: gris si aún no ocurre; si no, la rampa de presión
    if (shown) {
      const a = q < 0.5 ? RM[0] : RM[1], b = q < 0.5 ? RM[1] : RM[2], qq = q < 0.5 ? q * 2 : (q - 0.5) * 2, wh = Math.min(1, cur * 0.35 + (1 - w) * 0.35);
      let r0 = lerp(a[0], b[0], qq), g0 = lerp(a[1], b[1], qq), b0 = lerp(a[2], b[2], qq); if (fell) { r0 = 0.8; g0 = 0.42; b0 = 0.18; }
      cr = lerp(r0, 1, wh); cg = lerp(g0, 1, wh); cb = lerp(b0, 1, wh);
    }
    col[i3] = lerp(col[i3], cr, ease); col[i3 + 1] = lerp(col[i3 + 1], cg, ease); col[i3 + 2] = lerp(col[i3 + 2], cb, ease);
  }
  mesh.instanceMatrix.needsUpdate = true; mesh.instanceColor.needsUpdate = true;
}

/* ---------- pantalla 3: fin del recorrido ---------- */
const finPanel = panel(1.7, 0.8, 1280, 602, (g, w, h) => {
  const a = AMBIENTES[app.dash], p = PRESETS[app.dash], c = lit(a.color), last = p.years[p.years.length - 1];
  g.fillStyle = N.muted; g.font = `600 28px ${FONT}`; const lab = `${a.num} · ${a.name}`; g.fillText(lab, 56, 84);
  filament(g, 56 + g.measureText(lab).width + 22, 74, 28, c);
  g.fillStyle = N.ink; g.font = `700 124px ${FONT}`; track(g, -4); g.fillText(`${p.years[0].year} → ${last.year}`, 50, 236); track(g, 0);
  g.font = `600 40px ${FONT}`; g.fillText(tx(`Quedan ${aliveCount()} de ${onsets.length} voces.`, `${aliveCount()} of ${onsets.length} voices remain.`), 56, 322);
  g.fillStyle = N.muted; g.font = `500 30px ${FONT}`; g.fillText(tx("Lo que escuchaste es el dato. Nada fue grabado.", "What you heard is the data. Nothing was recorded."), 56, 376);
  g.font = `500 24px ${FONT}`; wrap(g, `${Number(last.value).toLocaleString(loc())} ${p.unit} ${tx("en", "in")} ${last.year} · ${p.source}`, 56, 450, w - 112, 34);
});
finPanel.position.copy(polar(0, 2.4, 2.25)); finPanel.lookAt(0, 1.6, 0); gFin.add(finPanel); LIFT.push(finPanel); decor.fin.push(finPanel);
function finButton(labelFn, az, id, fn) {
  const b = panel(0.75, 0.24, 640, 205, (g, w, h) => {       // solo texto; al apuntar: peso 700 y la línea se enciende
    const on = app.hover === id, label = labelFn();
    g.fillStyle = on ? N.ink : "#d6d6d6"; g.font = `${on ? 700 : 600} 54px ${FONT}`; g.textAlign = "center"; g.fillText(label, w / 2, 112);
    const tw = g.measureText(label).width; g.textAlign = "left";
    g.fillStyle = on ? N.ink : "rgba(245,245,245,.28)"; g.fillRect(w / 2 - tw / 2, 146, tw, on ? 4 : 2);
  });
  b.position.copy(polar(az, 2.3, 1.15)); b.lookAt(0, 1.3, 0); gFin.add(b); LIFT.push(b); decor.fin.push(b); button(b, id, fn); return b;
}
const btnRepeat = finButton(() => tx("Repetir", "Replay"), -11, "repetir", () => startAmbiente(app.dash));
const btnLobby = finButton(() => tx("Volver al lobby", "Back to lobby"), 11, "lobby", () => goLobby());
// Manrope llega de Google Fonts: cuando carga se repintan los paneles (sin red queda Helvetica)
if (document.fonts) Promise.all([500, 600, 700].map((w) => document.fonts.load(`${w} 32px Manrope`))).then(() => panels.forEach((p) => p.redraw())).catch(() => {});

/* ---------- modelos GLB (opcionales) ---------- */
const loader = new GLTFLoader(), glb = {}; window.__nucleo.glb = glb;
const LOAD = { done: 0, total: 0 };
function loadGLB(key, parent) {
  const cfg = GLB[key]; LOAD.total++;
  loader.load(cfg.file, (res) => {
    LOAD.done++;
    const root = res.scene; root.position.fromArray(cfg.position); root.rotation.y = cfg.rotationY * DEG; root.scale.setScalar(cfg.scale); root.scale.y *= cfg.scaleY ?? 1;
    parent.add(root); glb[key] = root;
    if (cfg.scatter) scatterGLB(root, cfg);
    if (cfg.hideProcedural) for (const m of decor[key === "esfera" ? "amb" : key] || []) { m.material.userData.base = 0; }
    root.traverse((o) => {            // mallas con nombre de botón
      if (!o.isMesh) return; const n = o.name.toLowerCase();
      for (const id of ORDER) if (n.includes(id) && key === "lobby") button(o, id, () => startAmbiente(id));
      if (key === "fin" && n.includes("repetir")) button(o, "repetir", () => startAmbiente(app.dash));
      if (key === "fin" && n.includes("lobby")) button(o, "lobby", () => goLobby());
    });
    registerVoces(root);
    console.info(`[Núcleo] GLB cargado: ${cfg.file}`);
  }, undefined, () => { LOAD.done++; console.info(`[Núcleo] sin ${cfg.file}: se usa la escena generada`); });
}
/** Aprovecha los 360°: reparte o copia elementos del modelo alrededor del centro del domo.
    Reglas (cfg.scatter): hide oculta; copy copia el elemento a cada sector; distribute manda cada elemento a un sector al azar
    (así las hojas siguen a sus troncos); move lo reubica al azar (ángulo libre y distancia r). Nada cae a menos de minDist de ti. */
function scatterGLB(root, cfg) {
  let seed = (cfg.seed ?? 1) >>> 0;
  const rnd = () => { seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const c = new THREE.Vector3().fromArray(cfg.center || [0, 0, 0]), kids = [...root.children], minD = cfg.minDist ?? 9, nSec = cfg.sectors ?? 4, sr = cfg.sectorScale ?? [0.9, 1.25];
  const sectors = Array.from({ length: nSec }, (_, k) => (k === 0 ? { a: 0, s: 1 } : { a: (k / nSec) * TAU + (rnd() - 0.5) * 0.5, s: lerp(sr[0], sr[1], rnd()) }));
  const put = (obj, a, s) => { const g = new THREE.Group(); g.position.copy(c); g.rotation.y = a; g.scale.set(s, 1, s); root.add(g); g.add(obj); obj.position.sub(c); };
  const secM = sectors.map((sc) => new THREE.Matrix4().makeTranslation(c.x, c.y, c.z).multiply(new THREE.Matrix4().makeRotationY(sc.a)).multiply(new THREE.Matrix4().makeScale(sc.s, 1, sc.s)).multiply(new THREE.Matrix4().makeTranslation(-c.x, -c.y, -c.z)));
  for (const rule of cfg.scatter) {
    const re = new RegExp(rule.match);
    if (rule.instanced) {            // muchas copias en una sola llamada de dibujo por geometría (hojas, luces)
      const groups = new Map();
      for (const o of kids) {
        if (!re.test(o.name) || !o.isMesh) continue;
        o.updateMatrix(); const id = o.geometry.uuid + o.material.uuid;
        if (!groups.has(id)) groups.set(id, { geo: o.geometry, mat: o.material, name: o.name, ms: [] });
        for (let k = 1; k < nSec; k++) if (rnd() < (rule.keep ?? 1)) groups.get(id).ms.push(new THREE.Matrix4().multiplyMatrices(secM[k], o.matrix));
        if (rule.thin && rnd() < rule.thin) o.visible = false;      // aclara el frente para no saturar
      }
      for (const g of groups.values()) { if (!g.ms.length) continue; const im = new THREE.InstancedMesh(g.geo, g.mat, g.ms.length); im.name = g.name; g.ms.forEach((mx, i) => im.setMatrixAt(i, mx)); im.frustumCulled = false; root.add(im); }
      continue;
    }
    for (const o of kids) {
      if (!re.test(o.name)) continue;
      if (rule.hide) { o.visible = false; continue; }
      if (rule.copy) for (let k = 1; k < nSec; k++) put(o.clone(), sectors[k].a, sectors[k].s);
      if (rule.distribute) { const k = Math.floor(rnd() * nSec); if (k > 0) put(o, sectors[k].a, sectors[k].s); }
      if (rule.move && rnd() < rule.move) {
        for (let tries = 0; tries < 8; tries++) {
          const a = rnd() * TAU, sc = lerp(rule.r[0], rule.r[1], rnd()), dx = (o.position.x - c.x) * sc, dz = (o.position.z - c.z) * sc;
          const wx = c.x + dx * Math.cos(a) + dz * Math.sin(a) + root.position.x, wz = c.z - dx * Math.sin(a) + dz * Math.cos(a) + root.position.z;
          if (Math.hypot(wx, wz) >= minD || tries === 7) { put(o, a, sc); break; }
        }
      }
    }
  }
}
/* Kit PICO · voces del modelo. Las luces "Voz_*" de los GLB se pueden señalar con el mando: cada una responde con una nota suave y un
   pulso (0.65, 50 ms, los valores del kit). Se comprueba por cercanía angular al rayo (unos 2.5°), no contra toda la escena. */
const voces = [];
function registerVoces(root) {
  root.updateWorldMatrix(true, true); const m4 = new THREE.Matrix4();
  root.traverse((o) => {
    if (!o.isMesh || !/^Voz_/.test(o.name) || !o.visible) return;
    if (o.isInstancedMesh) for (let i = 0; i < o.count; i++) { o.getMatrixAt(i, m4); voces.push({ root, pos: new THREE.Vector3().setFromMatrixPosition(m4.premultiply(o.matrixWorld)), k: voces.length }); }
    else voces.push({ root, pos: o.getWorldPosition(new THREE.Vector3()), k: voces.length });
  });
}
const vozDir = new THREE.Vector3(), vozV = new THREE.Vector3();
/** La voz que señala este rayo (o null). Solo cuentan las del ambiente y la variante que se están viendo. */
function vozAt(origin, dir) {
  let best = null, bestA = 0.045;
  for (const v of voces) {
    if (!v.root.visible || !v.root.parent || !v.root.parent.visible) continue;
    const t = vozV.copy(v.pos).sub(origin).dot(dir); if (t < 1.5) continue;
    const a = Math.sqrt(Math.max(0, vozV.lengthSq() - t * t)) / t; if (a < bestA) { bestA = a; best = v; }
  }
  return best;
}
function tocarVoz(v, hand) {
  const deg = v.k % 10; panNote(293.66 * Math.pow(2, (PENTA[deg % 5] + 12 * Math.floor(deg / 5)) / 12), 0.035);
  if (hand) haptics.play(hand, "tick", 1.4);
}
const gAmbModel = { gases: new THREE.Group(), hielo: new THREE.Group(), jungla: new THREE.Group() };
for (const id of ORDER) { gAmbModel[id].position.y = -TUNING.platformLift; gAmb.add(gAmbModel[id]); if (GLB[id + "0"]) loadGLB(id + "0", gAmbModel[id]); loadGLB(id, gAmbModel[id]); if (GLB[id + "2"]) loadGLB(id + "2", gAmbModel[id]); }
function updateVariants() {      // estados del lugar a lo largo del recorrido: "0" (estado inicial, si existe) → base → "2" (degradado)
  const t = synth.count ? app.yearPos / synth.count : 0;
  for (const id of ORDER) {
    const keys = [id + "0", id, id + "2"].filter((k) => GLB[k]); if (keys.length < 2) continue;
    const cuts = keys.length === 3 ? TUNING.variantAt3 ?? [0.33, 0.66] : [TUNING.variantAt ?? 0.5];
    let st = 0; for (const c of cuts) if (t >= c) st++;
    if (!glb[keys[st]]) { const near = keys.map((k, i) => i).filter((i) => glb[keys[i]]).sort((x, y) => Math.abs(x - st) - Math.abs(y - st))[0]; if (near === undefined) continue; st = near; }   // si aún no carga, el más cercano
    keys.forEach((k, i) => { if (glb[k]) glb[k].visible = i === st; });
  }
}
loadGLB("lobby", gLobby); loadGLB("fin", gFin);   // la esfera ya no es un GLB: es la esfera cinética del .blend (ver KS)

/* ---------- estados ---------- */
/* Aparecer bien orientado. En el visor no se puede girar a la persona, así que se gira el mundo: el espacio de referencia se
   recoloca para que donde estás parado sea el origen y hacia donde miras sea el frente (−Z), que es donde están la esfera y el aro.
   Se pide al entrar a la carga, al lobby y a cada lugar; se ejecuta en el siguiente cuadro, cuando hay pose de la cabeza. */
let xrFrame = null, baseRef = null, recenterAsk = false;
function liftUI(eye) { UIL.lift = clamp(eye - 1.6, -0.75, 0.3); for (const m of LIFT) { if (m.userData.baseY === undefined) m.userData.baseY = m.position.y; m.position.y = m.userData.baseY + UIL.lift; } }
function recenter() { recenterAsk = true; if (!app.xr) { yaw = 0; pitch = 0; } }
function doRecenter() {
  if (!recenterAsk) return; if (!app.xr) { recenterAsk = false; liftUI(1.6); return; }
  if (!xrFrame) return;
  try {
    if (!baseRef) baseRef = renderer.xr.getReferenceSpace(); const pose = xrFrame.getViewerPose(baseRef); if (!pose) return;
    const q = pose.transform.orientation, pp = pose.transform.position, f = tmpV.set(0, 0, -1).applyQuaternion(tmpQ.set(q.x, q.y, q.z, q.w));
    if (Math.hypot(f.x, f.z) < 0.25) return;                                         // mirando al techo o al piso: espera a tener un rumbo claro
    const th = Math.atan2(-f.x, -f.z);
    renderer.xr.setReferenceSpace(baseRef.getOffsetReferenceSpace(new XRRigidTransform({ x: pp.x, y: 0, z: pp.z }, { x: 0, y: Math.sin(th / 2), z: 0, w: Math.cos(th / 2) })));
    liftUI(pp.y > 0.5 ? pp.y : 1.6); recenterAsk = false;
    if (app.state === "ambiente") sphere.position.y = clamp((pp.y > 0.5 ? pp.y : 1.6) - TUNING.sphereBelowEyes, 0.7, 1.5);
  } catch (e) { recenterAsk = false; }
}
function show() {
  gLobby.visible = app.state === "lobby"; gAmb.visible = app.state === "ambiente" || app.state === "fin"; gFin.visible = app.state === "fin";
  hud.visible = sphere.visible = app.state === "ambiente"; dome.visible = app.state === "lobby";
  for (const id of ORDER) gAmbModel[id].visible = id === app.dash;
  const a = AMBIENTES[app.dash]; dome.material.color.setHex(app.state === "lobby" ? 0x6e6e6e : a.color); for (const l of guideRings) l.material.color.set(lit(a.color));
  platGlow.material.color.set(lit(a.color)); platBody.material.color.set(0x101010).lerp(tmpC.setHex(a.color), 0.03);   // la plataforma toma un matiz del lugar
}
function goLobby(silent = false) {
  recenter();
  if (app.state === "ambiente" || app.state === "fin") sfx("cierre");
  app.state = "lobby"; app.hover = null; setSensory(false); panHeight(); panHint.redraw();
  synth.setLevel(silent ? 0 : TUNING.lobbyLevel ?? 0.16); show();   // el lobby es la antesala: la música queda al fondo
}
function startAmbiente(id) {
  recenter();
  app.dash = id; app.state = "ambiente"; app.yearPos = 0; app.scale = 1; app.speed = 1; app.scrubbing = false; barsHere = 0;
  sfx("transicion"); synth.setDashboard(id); synth.setLevel(0.55); synth.play();
  panHeight(); buildSphereData(id); camera.getWorldPosition(ksCam); sphere.position.y = clamp(ksCam.y - TUNING.sphereBelowEyes, 0.7, 1.5);   // la esfera queda un poco abajo de tus ojos
  buildLights(); refreshOnsets(); hud.redraw(); panHint.redraw(); show();
  hx(null, "confirmar", 0.8);                              // entrar a un lugar: una confirmación en las dos manos
}
function goFin() { sfx("cierre"); app.state = "fin"; setSensory(false); synth.setLevel(0.3); finPanel.redraw(); show(); hx(null, "tope"); }   // fin: el tiempo se acabó
function setSensory(on) { app.sensory = on; document.body.classList.toggle("sensorial", on); }
let userYearAt = 0, roceYear = 0; const roce = new Roce();
function setYear(pos, fromUser) {
  if (fromUser) userYearAt = performance.now();
  const n = synth.count; app.yearPos = clamp(pos, 0, n);
  const idx = Math.min(n, Math.floor(app.yearPos + 1e-6));
  if (idx !== synth.idx) {
    synth.setIndex(idx); refreshOnsets(); hud.redraw();
    if (fromUser) { sfx("avance", { vol: TUNING.sphereVolume ?? 2, pos: idx / n }); return true; }   // detente
  }
  return false;
}
function setScale(s) {
  app.scale = clamp(s, 0.4, TUNING.maxScale);
  const sp = app.scale < TUNING.pauseBelowScale ? 0 : app.scale <= 1 ? app.scale : 1 + ((app.scale - 1) / (TUNING.maxScale - 1)) * (TUNING.maxYearsPerBar - 1);
  const r = Math.round(sp * 10) / 10; if (r !== app.speed) { app.speed = r; hud.redraw(); }
}

/* ---------- reloj musical → escena y hápticos ---------- */
let barsHere = 0;
synth.onBar = () => {
  if (app.state !== "ambiente") return;
  barsHere++;
  if (barsHere <= TUNING.introBars || app.scrubbing || app.speed === 0) return;
  if (synth.idx >= synth.count) { setTimeout(goFin, 0); return; }
  setYear(app.yearPos + app.speed, false);
};
synth.onStep = (s, t, d, ref) => {
  const wait = Math.max(0, (t - synth.ctx.currentTime) * 1000);
  setTimeout(() => {
    app.stepNow = s; app.stepAt = performance.now();
    if (app.state === "lobby") return;
    for (const o of onsets) if (o.alive && o.step === s) o.flash = 1;
    // Mano derecha: el año que suena. Mano izquierda: el lugar intacto (la memoria).
    const hr = C.hapticForStep(d, s), hl = C.hapticForStep(ref, s);
    if (TUNING.vibrarMelodia && hr && s === 0) haptics.play("right", "tick", 0.8);   // por defecto la música no vibra: sobreestimula
  }, wait);
};

/* ---------- instrumento de navegación: un medio aro oscuro que te rodea a la altura de la cintura ----------
   Concéntrico contigo y con el mundo: nueve campos de tono, uno cada 15°, y el campo central siempre al frente.
   Lobby: deslizar la mano sobre el aro gira el mundo a la par (1° en la mano = 1° en el mundo); al soltar sigue por inercia y se
   detiene en un lugar; un toque corto en el centro entra. Ambiente y fin: el centro vuelve al lobby; los dos campos con luz llevan
   a los otros lugares. Cada campo tiene su nota (suave) y su pulso; la mano deja una estela de luz sobre el aro. */
const NAV = { angle: 0, vel: 0, target: null, settled: 0, front: "gases", lastField: 0, lastNote: 0, grab: false, hand: null, touch: [null, null], trail: { a: 0, dir: 1, life: 0 } };
const PAN_R0 = 0.45, PAN_R1 = 0.65, PAN_RF = 0.55, PAN_A = 66 * DEG, PAN_STEP = 15 * DEG, PAN_H = 0.11;
const PAN_NOTES = [174.61, 196, 220, 233.08, 146.83, 261.63, 293.66, 329.63, 349.23], PAN_CENTER = 146.83;      // re menor; el centro es la nota grave
const ARC_ORDER = [...ORDER].sort((x, y) => AMBIENTES[x].az - AMBIENTES[y].az), ARC_MIN = AMBIENTES[ARC_ORDER[0]].az * DEG, ARC_MAX = AMBIENTES[ARC_ORDER[ARC_ORDER.length - 1]].az * DEG, ARC_STEP = TAU / ORDER.length;
const pan = new THREE.Group(); pan.position.set(0, 0.85, 0); pan.visible = false; scene.add(pan);
const panMarks = {}, wrapPi = (a) => { a = (a + Math.PI) % TAU; if (a < 0) a += TAU; return a - Math.PI; };
const arcPts = (r, y, a0, a1, n = 48) => Array.from({ length: n + 1 }, (_, i) => { const a = lerp(a0, a1, i / n); return new THREE.Vector3(Math.sin(a) * r, y, -Math.cos(a) * r); });
/** Arco plano sobre el aro (para estelas y marcas). fade: el brillo crece de a0 (cola) a a1 (cabeza). */
function flatArc(r0, r1, a0, a1, seg, fade) {
  const pos = [], col = [], idx = [];
  for (let i = 0; i <= seg; i++) {
    const t = i / seg, a = lerp(a0, a1, t), sx = Math.sin(a), cz = -Math.cos(a), c = fade ? t * t : 1;
    pos.push(sx * r0, 0, cz * r0, sx * r1, 0, cz * r1); col.push(c, c, c, c, c, c);
    if (i < seg) { const k = i * 2; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
  }
  const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute("color", new THREE.Float32BufferAttribute(col, 3)); g.setIndex(idx); return g;
}
const glowMat = (color) => new THREE.MeshBasicMaterial({ color, vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, side: THREE.DoubleSide });
{
  const top = new THREE.Mesh(new THREE.RingGeometry(PAN_R0, PAN_R1, 72, 1, Math.PI / 2 - PAN_A, PAN_A * 2), new THREE.MeshStandardMaterial({ color: 0x1b1b1b, roughness: 0.42, metalness: 0.65, side: THREE.DoubleSide }));
  top.rotation.x = -Math.PI / 2; pan.add(top); pan.userData.top = top;
  for (const r of [PAN_R0, PAN_R1]) { const w = new THREE.Mesh(new THREE.CylinderGeometry(r, r, PAN_H, 56, 1, true, Math.PI - PAN_A, PAN_A * 2), new THREE.MeshStandardMaterial({ color: 0x060606, roughness: 0.6, metalness: 0.4, side: THREE.DoubleSide })); w.position.y = -PAN_H / 2; pan.add(w); }
  pan.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(arcPts(PAN_R1, 0.001, -PAN_A, PAN_A)), ui(new THREE.LineBasicMaterial({ color: 0xffffff }), 0.75)));
  pan.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(arcPts(PAN_R0, 0.001, -PAN_A, PAN_A)), ui(new THREE.LineBasicMaterial({ color: 0xffffff }), 0.4)));
  pan.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(arcPts(PAN_R0, -PAN_H, -PAN_A, PAN_A)), ui(new THREE.LineBasicMaterial({ color: 0xffffff }), 0.08)));
  for (let i = -4; i <= 4; i++) {
    const a = i * PAN_STEP, r = i === 0 ? 0.06 : 0.042, f = new THREE.Mesh(new THREE.CircleGeometry(r, 32), new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.75, metalness: 0.3 }));
    f.rotation.x = -Math.PI / 2; f.position.set(Math.sin(a) * PAN_RF, 0.0012, -Math.cos(a) * PAN_RF); pan.add(f);
    const circle = (rr, base) => { const l = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(arcPts(rr, 0.0018, 0, TAU, 40).slice(0, 40)), ui(new THREE.LineBasicMaterial({ color: 0xffffff }), base)); l.position.set(f.position.x, 0, f.position.z); pan.add(l); };
    circle(r, 0.24); if (i === 0) circle(0.075, 0.5);
    if (i === 0) button(f, "centro", () => panCenter(null)); else button(f, "campo" + i, () => panField(i, null));
  }
  for (const id of ORDER) { const mk = new THREE.Mesh(flatArc(PAN_R1 - 0.03, PAN_R1 - 0.012, -3 * DEG, 3 * DEG, 6, false), glowMat(new THREE.Color(lit(AMBIENTES[id].color)))); mk.position.y = 0.003; pan.add(mk); panMarks[id] = mk; }
}
// Estela de la mano sobre el aro, y la misma estela a lo lejos sobre el anillo del mundo (solo en el lobby).
// El anillo del mundo va bajo, a 5 m, por debajo de los textos de los lugares para no cruzarlos.
const trailMesh = { 1: new THREE.Mesh(flatArc(PAN_RF - 0.014, PAN_RF + 0.014, -34 * DEG, 0, 24, true), glowMat(0x000000)), [-1]: new THREE.Mesh(flatArc(PAN_RF - 0.014, PAN_RF + 0.014, 34 * DEG, 0, 24, true), glowMat(0x000000)) };
const trailHead = new THREE.Mesh(flatArc(PAN_RF - 0.016, PAN_RF + 0.016, -2.5 * DEG, 2.5 * DEG, 4, false), glowMat(0x000000));
for (const m of [trailMesh[1], trailMesh[-1], trailHead]) { m.position.y = 0.004; pan.add(m); }
const worldRing = new THREE.Group(); worldRing.visible = false; scene.add(worldRing);
worldRing.add(ringLine(5, 0.35, 0xf5f5f5, 0.3), new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(Array.from({ length: 12 }, (_, i) => [polar(i * 30, 5, 0.41), polar(i * 30, 5, 0.47)]).flat()), ui(new THREE.LineBasicMaterial({ color: 0x6e6e6e }), 0.9)));
const worldTrail = { 1: new THREE.Mesh(arcRibbon(5, -34 * DEG, 0, 0.03, 24, true), glowMat(0x000000)), [-1]: new THREE.Mesh(arcRibbon(5, 34 * DEG, 0, 0.03, 24, true), glowMat(0x000000)) };
for (const m of [worldTrail[1], worldTrail[-1]]) { m.position.y = 0.45; m.frustumCulled = false; worldRing.add(m); }
for (const id of ORDER) { const pf = new THREE.Mesh(arcRibbon(5, -3 * DEG, 3 * DEG, 0.03, 6, false), glowMat(new THREE.Color(lit(AMBIENTES[id].color)))); pf.position.y = 0.35; pf.rotation.y = -AMBIENTES[id].az * DEG; pf.frustumCulled = false; gLobby.add(pf); }   // los lugares, sobre el anillo del mundo
const panHint = panel(0.42, 0.05, 840, 100, (g, w, h) => {
  g.textAlign = "center"; g.fillStyle = N.muted; g.font = `600 30px ${FONT}`;
  g.fillText(app.state === "lobby" ? tx("Desliza para girar · Toca el centro para entrar", "Slide to turn · Tap the centre to enter") : tx("Centro para volver · Luces para cambiar de lugar", "Centre to go back · Lights to change place"), w / 2, 62); g.textAlign = "left";
});
panHint.rotation.x = -Math.PI / 2; panHint.position.set(0, 0.002, -(PAN_R1 + 0.06)); pan.add(panHint);
function placeMark(mk, a) { const lim = PAN_A - 0.06, out = Math.abs(a) > lim; mk.visible = true; mk.rotation.y = -clamp(a, -lim, lim); mk.scale.set(1, 1, 1); mk.material.opacity = out ? 0.35 : 1; }
/** Nota del aro: tres parciales senoidales con caída larga. Sutil. */
function panNote(hz, gain = 0.045) {
  const ctx = synth.ctx; if (!ctx || ctx.state !== "running" || !synth.nodes) return;
  const t = ctx.currentTime, g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.1); g.connect(synth.nodes.master);
  for (const [mul, amp] of [[1, 1], [2, 0.42], [3, 0.18]]) { const o = ctx.createOscillator(), og = ctx.createGain(); o.type = "sine"; o.frequency.value = hz * mul; og.gain.value = amp; o.connect(og); og.connect(g); o.start(t); o.stop(t + 1.15); }
}
/** El lugar más cercano al frente para un giro dado: su id y el giro exacto que lo deja al frente. */
function nearestPlace(theta) { let best = null; for (const id of ORDER) { const d = wrapPi(theta - AMBIENTES[id].az * DEG); if (!best || Math.abs(d) < Math.abs(best.d)) best = { id, d }; } return { id: best.id, angle: theta - best.d }; }
function turnTo(theta) { NAV.vel = 0; NAV.target = nearestPlace(theta).angle; NAV.settled = null; }
/** Fuera del lobby, los campos a ±45° llevan a los otros dos lugares (en el orden del arco). */
function sceneAt(i) { if (Math.abs(i) !== 3) return null; const others = ARC_ORDER.filter((x) => x !== app.dash); return i < 0 ? others[0] : others[1]; }
function panField(i, hand, silent = false) {
  if (!silent) panNote(PAN_NOTES[i + 4]);
  if (app.state === "lobby") turnTo(NAV.angle + i * PAN_STEP);                    // trae esa dirección al frente
  else { const id = sceneAt(i); if (id) startAmbiente(id); }
}
function panCenter(hand) {
  panNote(PAN_CENTER, 0.05); sfx("confirmacion"); if (hand) haptics.play(hand, "confirmar");
  if (app.state === "lobby") startAmbiente(NAV.front); else if (app.state !== "inicio") goLobby();
}
function panHeight() { camera.getWorldPosition(ksCam); pan.position.y = clamp(ksCam.y - 0.75, 0.45, 1.0); }
/** Mano sobre el aro. Al tocar suena el campo; deslizar gira el mundo (lobby); un toque corto elige (centro o campo). */
function panTouch(hi, hand, world, dt) {
  const l = pan.worldToLocal(hp2.copy(world)), pr = Math.hypot(l.x, l.z), a = Math.atan2(l.x, -l.z), t = NAV.touch[hi], now = performance.now();
  if (pan.visible && Math.abs(l.y) < 0.09 && pr > PAN_R0 - 0.07 && pr < PAN_R1 + 0.07 && Math.abs(a) < PAN_A + 0.08) {
    const zone = clamp(Math.round(a / PAN_STEP), -4, 4);
    if (!t) { NAV.touch[hi] = { a, zone, z0: zone, t0: now, moved: 0 }; panNote(PAN_NOTES[zone + 4], 0.04); haptics.play(hand, "tick", zone === 0 ? 1.6 : 1); NAV.trail.a = a; NAV.trail.life = 0.6; return; }
    const da = wrapPi(a - t.a); t.moved += Math.abs(da);
    if (app.state === "lobby" && t.moved > 0.06) { NAV.angle -= da; NAV.vel = lerp(NAV.vel, -da / Math.max(dt, 0.008), 0.35); NAV.grab = true; NAV.hand = hand; NAV.target = null; NAV.settled = null; }
    else if (app.state !== "lobby" && zone !== t.zone) { panNote(PAN_NOTES[zone + 4], 0.03); haptics.play(hand, "tick"); }
    if (Math.abs(da) > 0.002) NAV.trail.dir = da > 0 ? 1 : -1;
    NAV.trail.a = a; NAV.trail.life = Math.min(1, NAV.trail.life + Math.abs(da) * 6 + 0.02);
    t.a = a; t.zone = zone;
  } else if (t) {
    NAV.touch[hi] = null; if (!NAV.touch[0] && !NAV.touch[1] && !hands.some((x) => x.grab)) NAV.grab = false;
    if (now - t.t0 < 500 && t.moved < 0.12) { if (t.z0 === 0) panCenter(hand); else panField(t.z0, hand, true); }      // toque corto: elegir
  }
}
function updateNav(dt) {
  pan.visible = app.state !== "inicio" && app.state !== "intro"; worldRing.visible = app.state === "lobby";
  const tr = NAV.trail; tr.life = Math.max(0, tr.life - dt * 1.4);
  for (const d of [1, -1]) { for (const m of [trailMesh[d], worldTrail[d]]) { m.visible = tr.dir === d && tr.life > 0.01; m.rotation.y = -tr.a; m.material.color.setScalar(tr.life * 0.9); } }
  pan.userData.top.material.emissive.setScalar(0.07 * tr.life);                              // el aro se enciende mientras lo usas
  trailHead.visible = tr.life > 0.01; trailHead.rotation.y = -tr.a; trailHead.material.color.set(N.signal).multiplyScalar(tr.life);
  if (app.state === "lobby") {
    if (!NAV.grab) {
      if (Math.abs(NAV.vel) > 0.25) { NAV.angle += NAV.vel * dt; NAV.vel *= Math.exp(-2.5 * dt); NAV.target = null; NAV.settled = null; }   // inercia
      else {
        NAV.vel = 0; if (NAV.target === null) NAV.target = nearestPlace(NAV.angle).angle;
        const d = NAV.target - NAV.angle;
        if (Math.abs(d) > 0.004) NAV.angle += d * Math.min(1, dt * 7);
        else if (NAV.settled !== NAV.target) {                                              // llegó a un lugar: se siente y se escucha
          NAV.angle = NAV.settled = NAV.target; NAV.front = nearestPlace(NAV.angle).id;
          panNote(PAN_CENTER * 1.5, 0.05); hx(NAV.hand, "boton");                         // el botón: aquí puedes avanzar
          synth.setDashboard(NAV.front); synth.play(); NAV.hand = null;
        }
      }
    }
    const f = Math.round(NAV.angle / PAN_STEP);                                              // un retén cada 15°
    if (f !== NAV.lastField) {
      NAV.lastField = f; const now = performance.now();
      // La plataforma es un engrane: dientes finos cada 15° que se sienten más firmes al acercarte al lugar (el botón),
      // y un diente largo al cruzar el borde entre dos secciones.
      const dPlace = Math.abs(wrapPi(NAV.angle - nearestPlace(NAV.angle).angle)), near = 1 - Math.min(1, dPlace / (ARC_STEP / 2));
      if (now - NAV.lastNote > 60) { NAV.lastNote = now; sfx("giro", { step: f }); if (dPlace > ARC_STEP / 2 - PAN_STEP * 0.6) hx(NAV.hand, "diente"); else hx(NAV.hand, "tick", 0.6 + 0.9 * near); }
    }
    NAV.front = nearestPlace(NAV.angle).id; gLobby.rotation.y = NAV.angle;
    lobbyTitle.position.copy(polar(NAV.angle / DEG, 2.6, 2.35 + UIL.lift)); lobbyTitle.lookAt(0, 2.0 + UIL.lift, 0);   // el título no gira con el mundo
    for (const id of ORDER) placeMark(panMarks[id], wrapPi(AMBIENTES[id].az * DEG - NAV.angle));
  } else {
    const others = ARC_ORDER.filter((x) => x !== app.dash);
    for (const id of ORDER) { if (id === app.dash) panMarks[id].visible = false; else placeMark(panMarks[id], (id === others[0] ? -3 : 3) * PAN_STEP); }
  }
}

/* ---------- entrada: mandos XR ---------- */
const raycaster = new THREE.Raycaster(), hands = [];
/* Manos sin mandos (WebXR Hand Input). El pellizco de pulgar e índice hace de gatillo: corto = elegir o entrar; sostenido y moviendo
   la mano = girar el mundo o el tiempo; con las dos manos = velocidad. La punta del índice es el punto que toca el aro y la esfera.
   Las manos no vibran: las confirmaciones quedan en el sonido. */
function handPos(h, out) {
  const j = h.isHand && h.handObj && h.handObj.joints && h.handObj.joints["index-finger-tip"];
  return j && j.visible !== false ? j.getWorldPosition(out) : h.ctrl.getWorldPosition(out);
}
for (let i = 0; i < 2; i++) {
  const ctrl = renderer.xr.getController(i), handObj = renderer.xr.getHand(i), h = { ctrl, handObj, isHand: false, hand: null, grip: false, lastAngle: 0, btn: [], hover: null };
  scene.add(handObj);
  handObj.addEventListener("pinchstart", () => { if (h.isHand && !h.trig) ctrl.dispatchEvent({ type: "selectstart" }); });   // por si el navegador no avisa del pellizco
  handObj.addEventListener("pinchend", () => { if (h.isHand && h.trig) ctrl.dispatchEvent({ type: "selectend" }); });
  const ray = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3(0, 0, -1)]), ui(new THREE.LineBasicMaterial({ color: 0xffffff }), 0.5));
  ray.scale.z = 25; ctrl.add(ray, new THREE.Mesh(new THREE.SphereGeometry(0.02, 12, 8), new THREE.MeshBasicMaterial({ color: 0xffffff })));
  ctrl.addEventListener("connected", (e) => { h.hand = e.data.handedness; h.source = e.data; h.isHand = !!e.data.hand; ctrl.visible = true; haptics.setSources(renderer.xr.getSession()); });
  ctrl.addEventListener("disconnected", () => { h.hand = null; h.source = null; h.isHand = false; h.trig = false; ctrl.visible = false; });
  ctrl.addEventListener("selectstart", () => {               // gatillo o pellizco: elige lo que apuntas; si no apuntas a nada, agarra
    if (h.trig) return; h.trig = true; if (h.isHand) synth.tick(1200, 0.03);
    if (h.hover) { select(h.hover, h.hand); return; }
    handPos(h, hp);
    if (app.state === "lobby") { h.grab = { a: Math.atan2(hp.x, -hp.z), moved: 0, t0: performance.now() }; NAV.grab = true; NAV.hand = h.hand; NAV.target = null; NAV.settled = null; hx(h.hand, "tick"); }   // agarra el mundo
    else if (app.state === "ambiente") { h.grip = true; h.byTrigger = true; h.lastAngle = handAngle(h); gripChanged(); hx(h.hand, "tick"); }                                           // agarra el tiempo
  });
  ctrl.addEventListener("selectend", () => {
    if (!h.trig) return; h.trig = false;
    if (h.grab) {
      const g = h.grab; h.grab = null; if (!hands.some((x) => x.grab) && !NAV.touch[0] && !NAV.touch[1]) NAV.grab = false;
      if (app.state === "lobby" && g.moved < 0.05 && performance.now() - g.t0 < 400) { sfx("confirmacion"); hx(h.hand, "confirmar"); startAmbiente(NAV.front); }   // toque corto: entrar al lugar del frente
    }
    if (h.byTrigger) { h.byTrigger = false; h.grip = false; gripChanged(); if (app.state === "ambiente") { sfx("confirmacion"); hx(h.hand, "soltar"); } }             // soltar: el año queda fijo
  });
  ctrl.addEventListener("squeezestart", () => { h.grip = true; h.lastAngle = handAngle(h); gripChanged(); if (app.state === "ambiente") hx(h.hand, "tick"); });
  ctrl.addEventListener("squeezeend", () => { h.grip = false; gripChanged(); if (app.state === "ambiente") { sfx("confirmacion"); hx(h.hand, "soltar"); } });
  ctrl.visible = false; scene.add(ctrl); hands.push(h);
}
const sphereC = new THREE.Vector3().fromArray(TUNING.sphereCenter), hp = new THREE.Vector3(), hp2 = new THREE.Vector3();
function handAngle(h) { handPos(h, hp); return Math.atan2(hp.x - sphereC.x, -(hp.z - sphereC.z)); }
let twoHand = null;
function gripChanged() {
  const g = hands.filter((h) => h.grip);
  app.scrubbing = app.state === "ambiente" && g.length === 1;
  if (g.length === 2) { handPos(g[0], hp); handPos(g[1], hp2); twoHand = { d0: Math.max(0.05, hp.distanceTo(hp2)), s0: app.scale }; } else twoHand = null;
  for (const h of g) h.lastAngle = handAngle(h);
  if (app.state === "ambiente") hud.redraw();
}
/** Retén táctil al pasar de año: corto y seco; las décadas se sienten un poco más. */
function detent(hand) { const y = synth.entry && synth.entry.year, edge = synth.idx === 0 || synth.idx >= synth.count; hx(hand, edge ? "tope" : y && y % 10 === 0 ? "decada" : "anio"); }
function select(obj, hand) {
  if (hand) haptics.play(hand, "confirmar", 0.8);
  sfx("confirmacion"); obj.userData.onSelect();
}
function setHover(id, hand) {
  if (id === app.hover) return;
  app.hover = id;
  if (id) synth.tick(1200, 0.03);                          // apuntar solo suena; ya no vibra (menos estímulo)
  if (app.state === "lobby" && id && PRESETS[id]) { synth.setDashboard(id); synth.play(); }   // la jukebox: apuntar es escuchar
  if (app.state === "fin") { btnRepeat.redraw(); btnLobby.redraw(); }
  if (app.state === "ambiente") hud.redraw();
  descBtn.redraw();
}
function activeButtons() { return interactives.filter((m) => { let o = m; while (o) { if (!o.visible) return false; o = o.parent; } return true; }); }
function updateXRInput(dt) {
  const session = renderer.xr.getSession(); if (!session) return;
  let hoverId = null, hoverHand = null;
  for (const h of hands) {
    if (!h.hand) continue;
    if (h.isHand && !h.dots && h.handObj.joints && h.handObj.joints["index-finger-tip"]) {   // manos: un punto en cada yema y en la muñeca
      h.dots = true; for (const nm of ["thumb-tip", "index-finger-tip", "middle-finger-tip", "ring-finger-tip", "pinky-finger-tip", "wrist"]) { const j = h.handObj.joints[nm]; if (j) j.add(new THREE.Mesh(new THREE.SphereGeometry(nm === "wrist" ? 0.011 : nm === "index-finger-tip" ? 0.009 : 0.006, 10, 8), new THREE.MeshBasicMaterial({ color: 0xf5f5f5 }))); }
    }
    // apuntar
    tmpM.identity().extractRotation(h.ctrl.matrixWorld);
    raycaster.ray.origin.setFromMatrixPosition(h.ctrl.matrixWorld); raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tmpM);
    const hit = raycaster.intersectObjects(activeButtons(), false)[0];
    h.hover = hit ? hit.object : null; if (hit && !hoverId) { hoverId = hit.object.userData.hoverId; hoverHand = h.hand; }
    const hi = hands.indexOf(h);
    if (app.state === "ambiente" && !hit) { const v = vozAt(raycaster.ray.origin, vozDir.copy(raycaster.ray.direction)); if (v !== h.voz) { h.voz = v; if (v) tocarVoz(v, h.hand); } } else h.voz = null;   // señalar una voz del modelo
    handPos(h, hp); panTouch(hi, h.hand, hp, dt);
    if (h.grab && app.state === "lobby") {                  // gatillo sostenido: tu mano gira el mundo alrededor de ti
      const ga = Math.atan2(hp.x, -hp.z), da = wrapPi(ga - h.grab.a), k = TUNING.giroRatio ?? 2; h.grab.a = ga; h.grab.moved += Math.abs(da);
      NAV.angle -= da * k; NAV.vel = lerp(NAV.vel, (-da * k) / Math.max(dt, 0.008), 0.35); NAV.target = null; NAV.settled = null;
      if (Math.abs(da) > 0.002) NAV.trail.dir = da > 0 ? 1 : -1; NAV.trail.a = clamp(ga, -PAN_A, PAN_A); NAV.trail.life = Math.min(1, NAV.trail.life + Math.abs(da) * 6 + 0.03);
    } else if (h.grab) h.grab = null;
    if (!h.grab && !h.grip && !NAV.touch[hi] && pan.visible && (app.state !== "lobby" || NAV.settled !== null)) {   // faro: guía la mano hacia el botón central del aro
      const dc = pan.localToWorld(hp2.set(0, 0, -PAN_RF)).distanceTo(hp), now = performance.now();
      if (dc < 0.25 && now - (h.beaconAt || 0) > lerp(110, 520, dc / 0.25)) { h.beaconAt = now; hx(h.hand, "faro", 0.6 + 0.8 * (1 - dc / 0.25)); }
    }
    if (app.state === "ambiente") {
      handPos(h, hp); const dl = sphere.worldToLocal(hp2.copy(hp)).length(), Rl = TUNING.sphereRadius;
      if (dl < Rl * 2.2) { setCrush(hi, hp); sphereTouch(hi, h.hand); }   // la mano dentro del campo de la esfera
      else { const sh = raycaster.intersectObject(sphereHit, false)[0]; setCrush(hi, sh ? sh.point : null, true); if (sh) sphereTouch(hi, h.hand); }
    } else setCrush(hi, null);
    // botones A/X (modo sensorial), B/Y (lobby) y palanca (tiempo)
    const gp = h.source && h.source.gamepad;
    if (gp) {
      const a = gp.buttons[4] && gp.buttons[4].pressed, b = gp.buttons[5] && gp.buttons[5].pressed;
      if (a && !h.btn[4] && app.state !== "lobby") { haptics.play(h.hand, "confirmar", 0.7); goLobby(); }                 // A / X: volver al lobby
      if (b && !h.btn[5]) {                                                                                       // B / Y: el siguiente lugar
        haptics.play(h.hand, "confirmar", 0.7);
        if (app.state === "lobby") turnTo(NAV.angle + ARC_STEP); else startAmbiente(ORDER[(ORDER.indexOf(app.dash) + 1) % ORDER.length]);
      }
      const st = gp.buttons[3] && gp.buttons[3].pressed; if (st && !h.btn[3] && app.state === "ambiente") toggleInfo();   // clic de palanca: ver u ocultar el dato
      h.btn[3] = st; h.btn[4] = a; h.btn[5] = b;
      const ax = gp.axes.length >= 4 ? gp.axes[2] : gp.axes[0] || 0;
      if (app.state === "lobby" && Math.abs(ax) > 0.25) { NAV.vel = -ax * 2.4; NAV.target = null; NAV.settled = null; NAV.hand = h.hand; }   // palanca: girar el mundo
      if (app.state === "ambiente" && Math.abs(ax) > 0.25) { if (setYear(app.yearPos + ax * dt * synth.count * 0.2, true)) detent(h.hand); }
    }
  }
  setHover(hoverId, hoverHand);
  if (app.state !== "ambiente") return;
  const g = hands.filter((h) => h.grip);
  if (g.length === 1) {                 // una mano: girar alrededor de la esfera recorre los años (una vuelta = toda la línea)
    const h = g[0], a = handAngle(h); let da = a - h.lastAngle; if (da > Math.PI) da -= TAU; if (da < -Math.PI) da += TAU; h.lastAngle = a;
    if (setYear(app.yearPos + (da / TAU) * synth.count, true)) detent(h.hand);
  } else if (g.length === 2 && twoHand) { // dos manos: abrir o cerrar cambia el tamaño = la velocidad
    handPos(g[0], hp); handPos(g[1], hp2);
    const before = app.speed; setScale(twoHand.s0 * (hp.distanceTo(hp2) / twoHand.d0));
    if (before !== app.speed) { hx(null, "tick"); sfx(app.speed > before ? "apertura" : "cierre", { mini: true }); }   // trinquete de velocidad: abrir suena a abrir, cerrar a cerrar
    hp.add(hp2).multiplyScalar(0.5); sphere.worldToLocal(hp); if (hp.lengthSq() > 1e-8) KS.expandDir.lerp(hp.normalize(), 0.2).normalize();   // la región se abre hacia las manos
  }
}

/* ---------- entrada: pantalla (ratón y teclado) ---------- */
const mouse = new THREE.Vector2(); let drag = null, yaw = 0, pitch = 0, mouseVoz = null;
function pick(ev, list) { mouse.set((ev.clientX / window.innerWidth) * 2 - 1, -(ev.clientY / window.innerHeight) * 2 + 1); raycaster.setFromCamera(mouse, camera); return raycaster.intersectObjects(list, false)[0]; }
renderer.domElement.addEventListener("pointerdown", (ev) => {
  if (app.xr || app.state === "inicio" || app.state === "intro") return;
  const onSphere = app.state === "ambiente" && pick(ev, [sphereHit]);
  setCrush(0, onSphere ? onSphere.point : null, true);
  drag = { x: ev.clientX, y: ev.clientY, moved: 0, sphere: !!onSphere }; app.scrubbing = !!onSphere; if (onSphere) hud.redraw();
  renderer.domElement.setPointerCapture(ev.pointerId);
});
renderer.domElement.addEventListener("pointermove", (ev) => {
  if (app.xr || app.state === "inicio" || app.state === "intro") return;
  if (drag) {
    const dx = ev.clientX - drag.x, dy = ev.clientY - drag.y; drag.x = ev.clientX; drag.y = ev.clientY; drag.moved += Math.abs(dx) + Math.abs(dy);
    if (drag.sphere) setYear(app.yearPos + (dx / 500) * synth.count, true);
    else { yaw += dx * 0.004; pitch = clamp(pitch + dy * 0.004, -1.2, 1.2); }
  } else { if (app.state === "ambiente") { const v = vozAt(raycaster.ray.origin, raycaster.ray.direction); if (v !== mouseVoz) { mouseVoz = v; if (v) tocarVoz(v, null); } }
    const sh = app.state === "ambiente" && pick(ev, [sphereHit]); setCrush(0, sh ? sh.point : null, true); if (sh) sphereTouch(0, null); const hit = pick(ev, activeButtons()); setHover(hit ? hit.object.userData.hoverId : null, null); renderer.domElement.style.cursor = hit ? "pointer" : "grab"; }
});
renderer.domElement.addEventListener("pointerup", (ev) => {
  if (!drag) return; const d = drag; drag = null;
  if (d.sphere) { app.scrubbing = false; hud.redraw(); return; }
  if (d.moved < 6) { const hit = pick(ev, activeButtons()); if (hit) select(hit.object, null); }
});
renderer.domElement.addEventListener("wheel", (ev) => { if (app.state === "ambiente") setScale(app.scale - Math.sign(ev.deltaY) * 0.1); }, { passive: true });
window.addEventListener("keydown", (ev) => {
  if (app.state === "inicio" || app.state === "intro") return;
  const k = ev.key.toLowerCase();
  if (k === "e") { setLang(app.lang === "en" ? "es" : "en"); return; }
  if (app.state === "ambiente") {
    if (k === "arrowright") setYear(Math.floor(app.yearPos) + 1, true);
    if (k === "arrowleft") setYear(Math.ceil(app.yearPos) - 1, true);
    if (k === "arrowup") setScale(app.scale + 0.1);
    if (k === "arrowdown") setScale(app.scale - 0.1);
    if (k === "s") setSensory(!app.sensory);
    if (k === "r") startAmbiente(app.dash);
  }
  if (app.state === "lobby") {
    if (k === "arrowright") turnTo(NAV.angle + ARC_STEP);
    if (k === "arrowleft") turnTo(NAV.angle - ARC_STEP);
    if (k === "enter") startAmbiente(NAV.front);
  }
  if (k === "i" && app.state === "ambiente") toggleInfo();
  if (k === "d") toggleDesc();
  if (k === "l" && app.state !== "lobby") goLobby();
  if (k === "1" || k === "2" || k === "3") startAmbiente(ORDER[Number(k) - 1]);
});

/* ---------- arranque ---------- */
const $ = (id) => document.getElementById(id);
let estadoKey = "audifonos", estadoExtra = "";
function applyLang() {
  document.documentElement.lang = app.lang; const set = (id, t) => { const e = $(id); if (e) e.textContent = t; };
  set("lema", tx("Earth Jukebox. Tres lugares de la Tierra convertidos en música a partir de sus datos. Nada está grabado.", "Earth Jukebox. Three places on Earth turned into music from their data. Nothing is recorded."));
  set("vr", tx("Entrar en VR", "Enter VR")); set("pantalla", tx("Empezar en pantalla", "Start on screen")); set("descTxt", tx("Mostrar descripciones en texto y voz", "Show descriptions as text and voice")); set("idioma", tx("English", "Español"));
  set("ayuda", tx("Arrastra para mirar · ← → giran el lobby · Enter entra · I dato · D descripciones · E English · L lobby", "Drag to look · ← → turn the lobby · Enter goes in · I data · D descriptions · E Español · L lobby"));
  set("estado", { audifonos: tx("Usa audífonos.", "Use headphones."), visor: tx("Visor detectado. Usa audífonos.", "Headset detected. Use headphones."), sinvisor: tx("Sin visor en este navegador: puedes usar la versión de pantalla.", "No headset in this browser: you can use the screen version."),
    sinxr: tx("Este navegador no tiene WebXR: usa la versión de pantalla, o el navegador del visor.", "This browser has no WebXR: use the screen version, or the headset's browser."), error: tx("No se pudo entrar a VR: ", "Could not enter VR: ") + estadoExtra }[estadoKey]);
  for (const p of panels) p.redraw();
}
function setLang(l) { app.lang = l; VOZ.pending = ""; VOZ.token++; narrStop(); if (app.desc) narrLoad(); if (window.speechSynthesis) speechSynthesis.cancel(); try { localStorage.setItem("orbis-lang", l); } catch (e) { /* sin almacenamiento: vale para esta visita */ } if (typeof INTRO !== "undefined") INTRO.subText = ""; applyLang(); sfx("confirmacion"); }
/* ---------- pantalla de carga "Amanecer": el borde de un mundo oscuro se enciende con la carga, del centro hacia los lados; cada
   ambiente deja su marca de color sobre el horizonte. "Orbe" aparece letra por letra con la ola del leitmotiv y salta con el acorde. ---------- */
const INTRO = { group: null, letters: [], strips: [], marks: [], rim: null, disc: null, sub: null, subText: "", t0: 0, hit: false, word: "Orbe", R: 2.0, top: -0.44, half: 1.2, seg: 120 };
/** Imagotipo Orbe (propuesta G · "Eclipse en trazas") dibujado en un lienzo de lado S. Tres arcos rotos (k1 exterior, k2 medio, k3 interior:
    0..1 = cuánto se ha trazado), el orbe corrido a la derecha y la luz roja que cierra el arco más cercano. */
const LOGO_ARCS = [[47, 86.0, 80.21, 90.7, 26.5], [40, 56.95, 89.39, 56.95, 10.61], [33, 38.71, 81.01, 32.51, 22.01]], LOGO_RED = [33, 36.58, 19.85, 45.41, 17.32];
function drawLogo(g, S, { k1 = 1, k2 = 1, k3 = 1, orb = 1, orbScale = 1, red = 1, ink = N.ink } = {}) {
  const u = S / 100, ang = (x, y) => Math.atan2(y - 50, x - 50);
  const arc = ([r, x0, y0, x1, y1], k, color, lw) => { if (k <= 0.001) return; const a0 = ang(x0, y0), d = ((ang(x1, y1) - a0) % TAU + TAU) % TAU; g.beginPath(); g.arc(50 * u, 50 * u, r * u, a0, a0 + d * k); g.strokeStyle = color; g.lineWidth = lw * u; g.lineCap = "round"; g.stroke(); };
  g.clearRect(0, 0, S, S);
  [k1, k2, k3].forEach((k, i) => arc(LOGO_ARCS[i], k, ink, 3));
  if (orb > 0.001) { g.globalAlpha = orb; g.beginPath(); g.arc(57 * u, 50 * u, 25 * u * orbScale, 0, TAU); g.fillStyle = ink; g.fill(); g.globalAlpha = 1; }
  if (red > 0.001) { g.save(); g.globalAlpha = red; g.shadowColor = N.signal; g.shadowBlur = 6 * u; arc(LOGO_RED, 1, N.signal, 3.6); g.restore(); }
}
function buildIntro() {
  if (INTRO.group) return;
  const grp = INTRO.group = new THREE.Group(), PX = 0.001, H = 320, font = `600 210px ${FONT}`, track = 2, { R, top, half, seg } = INTRO, cy = top - R;
  const flat = (o) => new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthTest: false, depthWrite: false, ...o });
  const mk = (w, h, draw) => { const cv = document.createElement("canvas"); cv.width = w; cv.height = h; const g = cv.getContext("2d"); draw(g, w, h); const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w * PX, h * PX), flat({ map: tex })); m.renderOrder = 30; m.userData = { g, tex, w, h }; grp.add(m); return m; };
  // el mundo: un disco apenas más claro que el vacío y su borde como línea fina
  INTRO.disc = new THREE.Mesh(new THREE.CircleGeometry(R, 160), flat({ color: 0x0b0b0b })); INTRO.disc.position.set(0, cy, -0.004); INTRO.disc.renderOrder = 26; grp.add(INTRO.disc);
  INTRO.rim = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(Array.from({ length: 200 }, (_, i) => new THREE.Vector3(R * Math.sin((i / 200) * TAU), cy + R * Math.cos((i / 200) * TAU), -0.003))), flat({ color: 0x3c3c3c })); INTRO.rim.renderOrder = 27; grp.add(INTRO.rim);
  // la atmósfera: tres bandas sobre el borde (halo interior, filo blanco, halo exterior) cuyo brillo se actualiza por vértice
  const strip = (r0, r1, c0, c1) => {
    const pos = new Float32Array((seg + 1) * 6), col = new Float32Array((seg + 1) * 6), idx = [];
    for (let i = 0; i <= seg; i++) { const th = -half + (2 * half * i) / seg, sn = Math.sin(th), cs = Math.cos(th); pos.set([r0 * sn, cy + r0 * cs, 0, r1 * sn, cy + r1 * cs, 0], i * 6); if (i < seg) idx.push(i * 2, i * 2 + 1, i * 2 + 2, i * 2 + 1, i * 2 + 3, i * 2 + 2); }
    const geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.BufferAttribute(pos, 3)); geo.setAttribute("color", new THREE.BufferAttribute(col, 3)); geo.setIndex(idx);
    const m = new THREE.Mesh(geo, flat({ vertexColors: true, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, opacity: 1 })); m.renderOrder = 28; m.userData = { c0, c1 }; grp.add(m); INTRO.strips.push(m);
  };
  strip(R - 0.035, R - 0.003, [0, 0, 0], [0.16, 0.17, 0.2]); strip(R - 0.003, R + 0.003, [1, 1, 1], [1, 1, 1]); strip(R + 0.003, R + 0.11, [0.13, 0.16, 0.24], [0, 0, 0]);
  // una marca por ambiente, en su color, flotando sobre el horizonte
  ORDER.forEach((id, i) => { const th = (i - 1) * 0.74, m = new THREE.Mesh(new THREE.PlaneGeometry(0.09, 0.006), flat({ color: lit(AMBIENTES[id].color) })); m.position.set((R + 0.03) * Math.sin(th), cy + (R + 0.03) * Math.cos(th), 0.001); m.rotation.z = -th; m.renderOrder = 29; grp.add(m); INTRO.marks.push(m); });
  // el nombre, letra por letra
  const probe = document.createElement("canvas").getContext("2d"); probe.font = font;
  const ws = [...INTRO.word].map((c) => probe.measureText(c).width), total = ws.reduce((a, b) => a + b, 0) + track * (ws.length - 1); let x = -total / 2;
  [...INTRO.word].forEach((c, i) => {
    const w = Math.ceil(ws[i]) + 60, m = mk(w, H, (g) => { g.font = font; g.textAlign = "center"; g.textBaseline = "alphabetic"; g.fillStyle = N.ink; g.fillText(c, w / 2, 232); });
    m.userData.x = (x + ws[i] / 2) * PX; m.position.set(m.userData.x, 0.1, 0); INTRO.letters.push(m); x += ws[i] + track;
  });
  // imagotipo: el símbolo a la izquierda del nombre; el conjunto queda centrado
  const LS = 0.215, gap = 0.035, off = (LS + gap) / 2; for (const m of INTRO.letters) { m.userData.x += off; m.position.x = m.userData.x; }
  INTRO.logo = mk(512, 512, () => {}); INTRO.logo.scale.setScalar(LS / 0.512); INTRO.logo.position.set((-total / 2) * PX - gap - LS / 2 + off, 0.115, 0);
  INTRO.sub = mk(1400, 80, () => {}); INTRO.sub.position.y = -0.045; INTRO.sub.scale.setScalar(1.5);
  grp.scale.setScalar(0.95); scene.add(grp);
}
function introSub(text) {
  if (text === INTRO.subText) return; INTRO.subText = text; const { g, tex, w, h } = INTRO.sub.userData;
  g.clearRect(0, 0, w, h); g.font = `500 34px ${FONT}`; g.textAlign = "center"; g.fillStyle = N.muted; g.fillText(text, w / 2, 52); tex.needsUpdate = true;
}
function updateIntro() {
  if (INTRO.pending) {
    // En el visor, entrar a VR tarda (transición del navegador, permisos, ponerte el visor). La intro y el leitmotiv esperan a que haya
    // imagen estable: sesión visible, cabeza con pose y mundo ya orientado hacia ti. Tope de 8 s por si el visor no avisa.
    const ses = renderer.xr.getSession(), now = performance.now(), ok = !app.xr || (!!xrFrame && !recenterAsk && (!ses || ses.visibilityState === "visible"));
    if (!ok) INTRO.readyAt = 0; else if (!INTRO.readyAt) INTRO.readyAt = now;
    if ((ok && now - INTRO.readyAt > (app.xr ? 900 : 150)) || now - INTRO.askedAt > 8000) {
      INTRO.pending = false; INTRO.t0 = synth.ctx.currentTime + 0.35;
      const lm = LEITMOTIV[TUNING.leitmotiv];                // la firma sonora: va directa a la salida, sincronizada con las letras
      if (lm) { try { const g = synth.ctx.createGain(); g.gain.value = 0.72; g.connect(synth.ctx.destination); lm.play(synth.ctx, g, INTRO.t0); } catch (e) { /* sin leitmotiv: la carga sigue */ } }
    }
  }
  const T = INTRO.pending ? -1 : synth.ctx ? synth.ctx.currentTime - INTRO.t0 : 99, grp = INTRO.group, ss = (x) => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
  { // siempre frente a ti y a la altura de tus ojos: se coloca al empezar y después sigue a la cabeza con suavidad (en el visor no se pierde si giras)
    camera.getWorldPosition(hp2); camera.getWorldDirection(tmpV); const first = T < 0.3 || INTRO.yaw === undefined;
    if (Math.hypot(tmpV.x, tmpV.z) > 0.3) { const ty = Math.atan2(-tmpV.x, -tmpV.z); INTRO.yaw = first ? ty : INTRO.yaw + wrapPi(ty - INTRO.yaw) * 0.04; }
    const yw = INTRO.yaw || 0; tmpS.set(hp2.x - Math.sin(yw) * 1.7, hp2.y, hp2.z - Math.cos(yw) * 1.7);
    if (first) grp.position.copy(tmpS); else grp.position.lerp(tmpS, 0.06); grp.rotation.y = yw;
  }
  const out = 1 - ss((T - 5.4) / 1.1), fadeIn = ss(T / 0.6), hitK = T > 1.85 ? Math.exp(-(T - 1.85) * 4) : 0;
  const p = Math.min(clamp(T / 3.5, 0, 1), 0.12 + 0.88 * (LOAD.total ? LOAD.done / LOAD.total : 1));       // la carga real manda si va más lenta que la música
  if (T > 1.85 && !INTRO.hit) { INTRO.hit = true; hx(null, "diente"); }                                   // la ola rompe: un solo toque
  // amanecer: la luz nace en lo alto del horizonte y se abre hacia los lados
  const span = 0.98 * ss(p) + 0.02, power = (0.45 + 0.55 * p + 0.6 * hitK) * out, { half, seg } = INTRO;
  for (const m of INTRO.strips) {
    const col = m.geometry.attributes.color.array, { c0, c1 } = m.userData;
    for (let i = 0; i <= seg; i++) { const th = Math.abs(-half + (2 * half * i) / seg), k = ss((span - th) / 0.3) * power, o = i * 6; col[o] = c0[0] * k; col[o + 1] = c0[1] * k; col[o + 2] = c0[2] * k; col[o + 3] = c1[0] * k; col[o + 4] = c1[1] * k; col[o + 5] = c1[2] * k; }
    m.geometry.attributes.color.needsUpdate = true;
  }
  INTRO.disc.material.opacity = fadeIn * out; INTRO.rim.material.opacity = 0.7 * fadeIn * out;
  INTRO.marks.forEach((m, i) => { const k = ss((p - [0.33, 0.66, 0.955][i]) / 0.03); m.material.opacity = k * out; m.scale.setScalar(0.6 + 0.4 * k); });
  { // el imagotipo se traza con la ola (de fuera hacia dentro), el orbe aparece cuando rompe y la luz roja se enciende con el acorde
    const L = INTRO.logo, { g, tex } = L.userData, jl = clamp((T - 3.5) / 0.5, 0, 1), ob = ss((T - 1.8) / 0.4);
    drawLogo(g, 512, { k1: ss((T - 0.1) / 0.9), k2: ss((T - 0.45) / 0.9), k3: ss((T - 0.8) / 0.9), orb: ob, orbScale: 0.8 + 0.2 * ob + 0.08 * hitK, red: ss((T - 3.5) / 0.35) });
    tex.needsUpdate = true; L.material.opacity = Math.min(1, T / 0.3) * out; L.position.y = 0.115 + 0.08 * Math.sin(Math.PI * jl) * (1 - 0.35 * jl);
  }
  INTRO.letters.forEach((m, i) => {
    const a = ss((T - 0.5 - i * 0.3) / 0.55), j = clamp((T - 3.57 - i * 0.08) / 0.5, 0, 1);              // aparece con la ola · salta con el acorde
    m.material.opacity = a * out; m.position.y = 0.1 + (a - 1) * 0.03 + 0.1 * Math.sin(Math.PI * j) * (1 - 0.35 * j); m.scale.setScalar(1 + 0.07 * hitK + 0.06 * Math.sin(Math.PI * j));
  });
  const n = p >= 0.955 ? 3 : p >= 0.66 ? 2 : p >= 0.33 ? 1 : 0;
  introSub(p >= 0.999 ? tx("Listo · 3 de 3 ambientes", "Ready · 3 of 3 environments") : tx(`Preparando el mundo · ${Math.round(p * 100)} % · ${n} de 3 ambientes`, `Preparing the world · ${Math.round(p * 100)} % · ${n} of 3 environments`)); INTRO.sub.material.opacity = 0.95 * ss((T - 0.5) / 0.8) * out;
  if (T > 6.6) endIntro();
}
function endIntro() {
  if (app.state !== "intro") return;
  INTRO.group.visible = false; scene.background.setHex(0x080808); $("ayuda").hidden = app.xr;
  goLobby(true); yaw = 0; pitch = 0;                                                                      // aterrizas en silencio…
  setTimeout(() => { if (app.state === "lobby") synth.setLevel(TUNING.lobbyLevel ?? 0.16); }, (TUNING.silencioLobby ?? 1.6) * 1000);   // …y después entra la sala
}
async function begin(vr) {
  app.desc = !!($("descripciones") && $("descripciones").checked);
  descBtn.redraw(); if (app.desc) narrLoad();
  synth.level = 0; if (synth.nodes) synth.nodes.master.gain.value = 0;                                    // nada suena hasta que termina la carga
  await synth.play();
  if (vr) {
    try {
      const session = await navigator.xr.requestSession("immersive-vr", { optionalFeatures: ["local-floor", "bounded-floor", "hand-tracking"] });
      await renderer.xr.setSession(session); app.xr = true; haptics.setSources(session);
      session.addEventListener("inputsourceschange", () => haptics.setSources(session));
      session.addEventListener("end", () => { app.xr = false; $("inicio").hidden = false; synth.stop(); app.state = "inicio"; baseRef = null; xrFrame = null; try { renderer.xr.setReferenceSpace(null); } catch (e) { /* nada que restablecer */ } if (INTRO.group) INTRO.group.visible = false; scene.background.setHex(0x080808); show(); });
    } catch (e) { estadoKey = "error"; estadoExtra = e.message; applyLang(); app.xr = false; }
  }
  $("inicio").hidden = true; $("ayuda").hidden = true; yaw = 0; pitch = 0;
  buildIntro(); INTRO.group.visible = true; INTRO.hit = false; INTRO.yaw = undefined; scene.background.setHex(0x000000); INTRO.letters.forEach((m) => (m.material.opacity = 0));
  app.state = "intro"; baseRef = null; recenter(); show();
  INTRO.pending = true; INTRO.readyAt = 0; INTRO.askedAt = performance.now(); INTRO.t0 = Infinity;   // el reloj de la intro no corre hasta que de verdad la estás viendo
}
$("pantalla").addEventListener("click", () => begin(false));
$("vr").addEventListener("click", () => begin(true));
if (navigator.xr && navigator.xr.isSessionSupported) navigator.xr.isSessionSupported("immersive-vr").then((ok) => { $("vr").disabled = !ok; estadoKey = ok ? "visor" : "sinvisor"; applyLang(); }).catch(() => {});
else { $("vr").disabled = true; estadoKey = "sinxr"; }
if ($("idioma")) $("idioma").addEventListener("click", () => setLang(app.lang === "en" ? "es" : "en"));
applyLang();

window.addEventListener("resize", () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); });

/* ---------- cuadro ---------- */
const clock = new THREE.Clock();
show(); gLobby.visible = false; gAmb.visible = false;
renderer.setAnimationLoop((_time, frame) => {
  xrFrame = frame || null; doRecenter();
  const dt = Math.min(0.05, clock.getDelta()), t = clock.elapsedTime;
  if (!app.xr) { camera.rotation.y = -yaw; camera.rotation.x = -pitch; }
  if (app.state === "intro") updateIntro();
  else {                                                   // smog: sigue al dato (ppm normalizado), no al reloj
    const on = (app.state === "ambiente" || app.state === "fin") && app.dash === "gases" && KS.val && KS.dash === "gases";
    const u = on ? clamp((KS.val[Math.min(synth.count, Math.round(app.yearPos))] - 0.12) / 0.88, 0, 1) : 0;
    SMOG.k = lerp(SMOG.k, u, 0.03); scene.fog.density = (TUNING.smogMax ?? 0.045) * SMOG.k; scene.background.copy(SMOG.base).lerp(SMOG.color, 0.6 * SMOG.k);
  }
  updateXRInput(dt); updateNav(dt); updateDesc();
  { const nowI = performance.now();                        // lobby en reposo: una llamada suave te invita a girar, una vez a cada lado
    if (app.state !== "lobby" || NAV.grab || Math.abs(NAV.vel) > 0.05) inviteAt = nowI + 9000;
    else if (nowI > inviteAt) { inviteAt = nowI + 12000; inviteDir = -inviteDir; sfx("invitar", { dir: inviteDir }); hx(inviteDir > 0 ? "right" : "left", "tick", 0.9); } }
  {                                                        // roce continuo: el sonido sigue al gesto (girar el mundo, girar la esfera)
    let lv = 0, pn = 0;
    if (app.state === "lobby") { lv = clamp(Math.abs(NAV.vel) / 3.5, 0, 1); pn = clamp(-NAV.vel / 3, -0.7, 0.7); }
    else if (app.state === "ambiente" && performance.now() - userYearAt < 200) { const yv = (app.yearPos - roceYear) / Math.max(dt, 0.008) / Math.max(1, synth.count); lv = clamp(Math.abs(yv) * 2.2, 0, 1); pn = clamp(yv * 2, -0.7, 0.7); }
    roceYear = app.yearPos;
    if (synth.ctx && synth.ctx.state === "running" && synth.nodes) roce.set(synth.ctx, synth.nodes.master, lv, lv, pn);
  }
  // modo sensorial: la interfaz se apaga, quedan sonido y tacto
  app.uiAlpha = lerp(app.uiAlpha, app.sensory ? 0 : 1, Math.min(1, dt * 2.2));
  for (const m of uiMats) m.opacity = m.userData.base * app.uiAlpha;
  const e = synth.energy(); app.beat = lerp(app.beat, e, 0.3);
  dome.rotation.y = t * 0.01;
  if (app.state === "lobby") for (const id of ORDER) { const s = sectors[id], on = app.hover === id || NAV.front === id; s.sec.material.userData.base = lerp(s.sec.material.userData.base, glb.lobby ? (on ? 0.3 : 0) : (on ? 0.75 : 0.26), 0.15); s.pan.scale.setScalar(lerp(s.pan.scale.x, on ? 1.06 : 1, 0.15)); }
  if (gAmb.visible) {
    const d = synth.derived;
    drawLights(dt, lerp(0.12, 1, app.uiAlpha));
    updateVariants();
    for (let i = 0; i < PRESS_N; i++) { const mt = pressRings[i].material; mt.userData.base = lerp(mt.userData.base, clamp(d.p * PRESS_N - i, 0, 1) * 0.32, 0.05); }   // la presión apila anillos
    const stepSec = 60 / d.tempo / 4, frac = app.stepAt ? Math.min(1, (performance.now() - app.stepAt) / 1000 / stepSec) : 0;
    playheadPivot.rotation.y = -(((app.stepNow || 0) + frac) / 16) * TAU;
    sphere.scale.setScalar(lerp(sphere.scale.x, 0.8 + 0.5 * clamp((app.scale - 0.4) / (TUNING.maxScale - 0.4), 0, 1), 0.2));   // la velocidad se ve, sin que la esfera te tape
    sphere.rotation.y = -(app.yearPos / synth.count) * TAU; sphere.updateMatrixWorld();
    updateKinetic(dt, d);
  }
  renderer.render(scene, camera);
});
