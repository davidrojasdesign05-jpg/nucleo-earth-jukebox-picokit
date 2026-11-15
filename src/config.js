/* Núcleo · configuración. Aquí se ajusta todo lo que el equipo de 3D necesita tocar. */
/* Colores del sistema Núcleo: signal 0xff3b1f (gases y toda presión), orbit 0x2f6bff (hielo), live 0x0fa958 / 0x3dff9a (jungla y voces vivas). */
/* az: dirección de cada lugar en el lobby, en grados (0 = al frente). Los tres se reparten en los 360°, cada 120°:
   el medio aro gira el mundo para traer cada uno al frente, sin que tú gires. */
export const AMBIENTES = {
  gases:  { num: "01", name: "Gases de efecto invernadero", short: "Gases", color: 0xff3b1f, pressure: 0xff3b1f, az: 0,
            line: "La atmósfera respira. Un compás es un año: cada respiración empieza más arriba." },
  hielo:  { num: "02", name: "Hielo marino", short: "Hielo", color: 0x2f6bff, pressure: 0xff3b1f, az: 120,
            line: "El Ártico en septiembre. El grave que crece es la temperatura." },
  jungla: { num: "03", name: "Jungla", short: "Jungla", color: 0x0fa958, pressure: 0xff3b1f, az: -120,
            line: "La Amazonia. Lo talado no vuelve: las voces que se apagan no regresan." }
};
export const LIFE_COLOR = 0x3dff9a;   // cada luz verde es una voz

/* Modelos GLB. Suelta los archivos en public/glb/ con estos nombres (o cambia las rutas).
   Si un archivo no existe se usa la escena generada por código. position en metros, rotationY en grados.
   hideProcedural: true oculta los paneles generados de esa pantalla (el tablero vivo del año siempre se queda).
   Si una malla del GLB se llama "gases", "hielo", "jungla", "repetir" o "lobby", se vuelve botón sola. */
export const GLB = {
  // Disco del equipo (8 m de diámetro, cara superior en y=0). Girado 60° para que fuego/hielo/jungla caigan en az 0/120/-120.
  // hideProcedural: false porque el disco no trae mallas-botón: los paneles y sectores generados siguen siendo los botones.
  lobby:  { file: "glb/lobby.glb",  position: [0, 0, 0], rotationY: 60, scale: 1, hideProcedural: false },
  // Ambientes: domos de 60 m modelados con el espectador en (0, 0, 14.1) mirando a -Z. Se alejan 12 m más (z = -26.1)
  // para que el lugar quede de fondo, como una vitrina: nada del modelo queda a menos de ~12 m de ti.
  // scatter: reparte el modelo por los 360° del domo (ver scatterGLB en main.js): copy copia a 4 sectores, distribute reparte entre
  // sectores, move reubica al azar, hide oculta (las frondas grandes de primer plano de la jungla). center: centro del domo en el modelo.
  // Jungla: domo más chico (scale 0.6 → 36 m de radio) contigo casi al centro, misma altura (scaleY 3), y 7 sectores de troncos y hojas
  // alrededor: se siente bosque cerrado. keep = fracción de hojas que se copia a cada sector; thin = fracción que se quita del frente.
  // La variante "2" es el mismo lugar ya degradado: entra cuando el recorrido pasa de TUNING.variantAt.
  gases:  { file: "glb/gases.glb",  position: [0, 0, -26.1], rotationY: 0, scale: 1, hideProcedural: false, center: [0, 0, 14.1], seed: 11, sectorScale: [0.8, 0.97], scatter: [{ match: "^Pluma_Humo|^Voz_Atmosfera|^Particulas_CO2", copy: true }] },
  gases2: { file: "glb/gases2.glb", position: [0, 0, -26.1], rotationY: 0, scale: 1, hideProcedural: false, center: [0, 0, 14.1], seed: 11, sectorScale: [0.8, 0.97], scatter: [{ match: "^Pluma_Humo|^Voz_Atmosfera|^Particulas_CO2", copy: true }] },
  hielo:  { file: "glb/hielo.glb",  position: [0, 0, -26.1], rotationY: 0, scale: 1, hideProcedural: false, center: [0, 0, 26.1], seed: 23, scatter: [{ match: "^Placa_Hielo|^Voz_Verde", move: 0.72, r: [0.75, 1.3] }, { match: "^Lineas_Agua", copy: true }] },
  hielo2: { file: "glb/hielo2.glb", position: [0, 0, -26.1], rotationY: 0, scale: 1, hideProcedural: false, center: [0, 0, 26.1], seed: 23, scatter: [{ match: "^Placa_Deshielo", move: 0.72, r: [0.75, 1.3] }, { match: "^Lineas_Agua", copy: true }] },
  jungla:  { file: "glb/jungla.glb", position: [0, 0, -9.4], rotationY: 0, scale: 0.6, scaleY: 3, hideProcedural: false, center: [0, 0, 15.7], seed: 37, sectors: 7, sectorScale: [0.85, 1.2],
            scatter: [{ match: "^Fronda_Marco", hide: true }, { match: "^Tallos_", copy: true }, { match: "^Hoja_|^Voz_", instanced: true, keep: 0.6, thin: 0.3 }] },
  jungla2: { file: "glb/jungla2.glb", position: [0, 0, -9.4], rotationY: 0, scale: 0.6, scaleY: 3, hideProcedural: false, center: [0, 0, 15.7], seed: 37, sectors: 7, sectorScale: [0.85, 1.2],
            scatter: [{ match: "^Fronda_Marco", hide: true }, { match: "^Tallos_|^Tocones_", copy: true }, { match: "^Hoja_|^Voz_", instanced: true, keep: 0.6, thin: 0.3 }] },
  fin:    { file: "glb/fin.glb",    position: [0, 0, 0], rotationY: 0, scale: 1, hideProcedural: true }   // sin modelo: se usa la pantalla generada
  // La esfera no es un GLB: es la esfera cinética de Blender, generada con src/esfera-puntos.json (ver KS en main.js).
};

export const TUNING = {
  variantAt: 0.5,          // fracción del recorrido en la que el ambiente cambia a su variante "2"
  platformLift: 1.4,       // metros que flota la plataforma sobre el piso del lugar (0 = sin flotar)
  introBars: 2,            // compases del lugar intacto antes de que corra el tiempo
  sphereCenter: [0, 1.38, -0.7],   // la altura real se ajusta al entrar: ojos − sphereBelowEyes
  sphereBelowEyes: 0.22,           // metros por debajo de los ojos (interfaz de navegación a la vista)
  sphereRadius: 0.2,
  pauseBelowScale: 0.75,   // esfera más chica que esto: el tiempo se detiene
  maxScale: 2.2,
  maxYearsPerBar: 4,
  comfort: 0.7,            // fuerza general de la vibración (0 = apagada, 1 = máxima). Los patrones están en src/haptics.js.
  vibrarMelodia: false,    // true: un toque leve al inicio de cada compás. Por defecto la música no vibra.
  giroRatio: 2,            // lobby con gatillo sostenido: 1° de tu mano = 2° del mundo (60° de mano llevan al siguiente lugar)
  sonidoRico: true,        // música de los lugares enriquecida (espacio, eco, lecho armónico, voces más cálidas). false = el sonido original.
  leitmotiv: "marea",      // firma sonora al entrar: "orbita", "pulso", "marea", "senal" o "" para ninguna (ver src/sfx.js)
  diagnostico: true        // muestra bajo "Elige un lugar" si hay VR, qué mandos ve y si pueden vibrar. Ponlo en false para la demo.
};
