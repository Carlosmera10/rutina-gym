# Cómo usar Rutina Gym

## 1. La app

- Dirección: **https://carlosmera10.github.io/rutina-gym/**
- En el móvil: ábrela en Chrome → menú ⋮ → **Instalar y crear acceso directo** → **Instalar**. Si Chrome dice que ya está instalada pero no abre, reinicia el móvil (así se resolvió la primera vez).
- Arriba hay cinco discos: **Piernas**, **Torso**, **Full Body**, **Core** y **Guía**. Toca un ejercicio para ver cómo hacerlo, cómo evitar lesiones, alternativas si la máquina está ocupada y la superserie opcional, si tiene.
- Funciona sin conexión después de abrirla una vez. Con conexión descarga siempre la última versión.
- **No borres los datos del sitio** `carlosmera10.github.io` en Chrome: comparte dominio con repaso-cole y perderías su progreso.

## 2. Crear el proyecto de Claude (una sola vez)

1. En Claude, ve a **Proyectos** → **Crear proyecto** → nombre: *Rutina Gym*.
2. En **Instrucciones**, pega el texto de `proyecto-claude/INSTRUCCIONES_PROYECTO.md` (desde la línea horizontal hacia abajo).
3. En **Conocimiento** (archivos del proyecto), añade el repositorio desde **GitHub** (`Carlosmera10/rutina-gym`). Como mínimo, selecciona la carpeta `proyecto-claude/`. Si el repositorio cambia, vuelve a sincronizarlo.
4. Sube a mano el archivo **`PERFIL.md`** al conocimiento del proyecto. No está en el repositorio porque es público y tiene datos personales y de salud.
5. Si Claude tiene que subir cambios a la app, la app de Claude en GitHub necesita acceso a `rutina-gym`: https://github.com/apps/claude/installations/select_target

## 3. Peticiones típicas

Escríbelas en un chat **dentro del proyecto**:

- *"Te adjunto mi registro de Hevy. Analiza las últimas cuatro semanas: ¿estoy progresando? ¿Algo descompensado?"*
- *"La prensa está siempre ocupada. ¿Qué orden me conviene hoy en Piernas?"*
- *"He cambiado el press de hombro en máquina por press con mancuernas. Actualiza la rutina, la app, el documento y la presentación."*
- *"Esta semana me ha molestado la lumbar con el peso muerto rumano. ¿Qué hago?"*
- *"Quiero meter una tercera serie en las laterales del Día 2. ¿Cuánto se alarga la sesión?"*
- *"Prepárame una semana de descarga."*

## 4. Qué hay en el repositorio

| Ruta | Qué es |
|---|---|
| `index.html` | La app completa: estilos, datos (`EX` = fichas de técnica, `DAYS` = ejercicios de cada día) y código. |
| `sw.js` | Modo sin conexión. |
| `app.webmanifest`, `icon-*` | Datos e iconos para instalarla en el móvil. |
| `herramientas/tecnica.js` | Regenera `proyecto-claude/TECNICA.md` desde la app. |
| `proyecto-claude/` | Documentos para el proyecto de Claude. |

El documento Word de la rutina y la presentación de técnica no están en el repositorio: son archivos aparte que hay que actualizar cuando cambie la rutina.
