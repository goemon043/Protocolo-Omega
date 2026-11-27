# Portal web — Protocolo Omega: Rescate Tecnológico

Sitio estático (HTML/CSS/JS). Entregables del Hito 8 / publicación final:

| Qué | Dónde ponerlo |
|---|---|
| Juego WebGL | Contenido del build de Unity dentro de `game/` (debe existir `game/index.html`) |
| Tráiler | `media/trailer.mp4` (y opcional `media/poster.jpg`) o un iframe de YouTube (ver `index.html`) |
| GDD final | `docs/GDD_Protocolo_Omega.pdf` |

## Compilar WebGL en Unity
File → Build Profiles → Web → Switch Platform → Build, y elige la carpeta `game/` de este sitio.
El proyecto ya tiene compresión desactivada para que funcione en cualquier hosting estático.

## Probar en local
```
cd ProtocoloOmegaWeb
python -m http.server 8080
```
y abrir http://localhost:8080 (no abrir con doble clic: el navegador bloquea el WebGL por file://).

## Publicar
GitHub Pages, Netlify o itch.io: subir esta carpeta tal cual.

Pendiente: poner los nombres reales del equipo en la sección "Equipo y recursos" de `index.html`.
