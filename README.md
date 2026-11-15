# Núcleo · Earth Jukebox (WebXR) · versión PicoKit

Copia del proyecto con el kit de integración PICO 4 Ultra del equipo: voces del modelo señalables con vibración,
rayo de 25 m, vibración con los valores del kit y mapeo de botones para explorar con las manos. El original está en `../NucleoWeb`.

App web para PICO 4 Ultra (navegador Wolvic) y para pantalla. Sin Unreal, sin compilar nativo.

## Probar en la computadora
    npm install
    npm run dev        → http://localhost:5173  (botón "Empezar en pantalla")

## Publicar para el visor (hace falta HTTPS)
    npm run build      → carpeta dist/
Sube la carpeta `dist/` a Netlify (arrastrarla en app.netlify.com/drop), Vercel o GitHub Pages.
Abre la URL en Wolvic dentro del visor y pulsa "Entrar en VR".

## Poner los modelos GLB
Copia los archivos a `public/glb/` con estos nombres (todos opcionales):
`lobby.glb`, `gases.glb`, `hielo.glb`, `jungla.glb`, `fin.glb`, `esfera.glb`. Variantes opcionales: `gases2.glb`, `hielo2.glb`, `jungla2.glb` (entran a mitad del recorrido).
Origen = piso bajo los pies, frente = -Z, metros. Posición, giro y escala: `src/config.js` (objeto GLB).
Si falta un archivo se usa la escena generada por código. Luego `npm run build`.
La esfera cinética no es un GLB: se genera con los puntos de Blender en `src/esfera-puntos.json` (ver `KS` en `src/main.js`).

## Controles
| | Visor | Pantalla |
|---|---|---|
| Elegir | apuntar + gatillo; en el lobby, gatillo sin apuntar entra al lugar del frente | clic, Enter |
| Girar el lobby | deslizar la mano sobre el aro, o palanca | ← → |
| Recorrer los años | grip con una mano y girarla alrededor de la esfera (o palanca) | arrastrar la esfera, ← → |
| Velocidad | grip con las dos manos, abrir o cerrar (cerrada = pausa) | rueda, ↑ ↓ |
| Voces del modelo | señalar una luz verde: suena y vibra | pasar el puntero |
| Volver al lobby | A / X, o tocar el centro del aro | L |
| Siguiente lugar | B / Y | 1 2 3 |
| Ver el dato | clic de palanca, o apuntar a la isla | I |
| Modo sensorial | los dos gatillos a la vez | S |
| Descripciones | apuntar a "Ver descripciones" | D |

Mano derecha: vibra el año que suena. Mano izquierda: vibra el lugar intacto.
Nivel táctil y demás ajustes: `TUNING` en `src/config.js`.

## Archivos
- `src/core.cjs` y `src/presets.json`: el algoritmo y los datos (no tocar).
- `src/synth.js`: motor de sonido WebAudio.  `src/sfx.js`: sonidos de interfaz y leitmotiv.  `src/haptics.js`: vibración.
- `src/main.js`: pantallas, esfera, entrada.  `src/config.js`: textos, colores, GLB, ajustes.
