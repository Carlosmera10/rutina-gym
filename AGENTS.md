# Instrucciones para asistentes de IA (Claude, Codex, Gemini, Copilot…)

Este repositorio es **Rutina Gym**: una app web estática (un solo `index.html`, sin dependencias salvo Google Fonts) con la técnica de los ejercicios de la rutina del usuario, alternativas si la máquina está ocupada, orden permitido y superseries. Se publica con **GitHub Pages** desde `main`: https://carlosmera10.github.io/rutina-gym/

## Lo más importante

1. **No cambies la rutina si el usuario no lo pide.** La rutina vigente está en [`proyecto-claude/RUTINA.md`](proyecto-claude/RUTINA.md) y las reglas en [`proyecto-claude/CRITERIOS.md`](proyecto-claude/CRITERIOS.md). Léelos antes de tocar nada.
2. Los datos de la app están en `index.html`: la constante `EX` (una ficha por ejercicio) y la constante `DAYS` (ejercicios de cada sesión: `[número, id de ficha o null, nombre, series, orden]`, más superseries en `ss`).
3. Tras cambiar `EX` o `DAYS`: `node herramientas/tecnica.js` para regenerar `proyecto-claude/TECNICA.md`, y actualiza `RUTINA.md` si cambia la rutina.
4. **Repositorio público:** sin datos personales ni de salud. Esos están en `PERFIL.md`, que solo se sube al proyecto de Claude.
5. Español de España en todo el contenido.

## Cuidado: dominio compartido

`carlosmera10.github.io` lo comparten todas las apps del usuario, entre ellas **repaso-cole**, que guarda el progreso de sus hijos en el navegador.

- Lo que guarde esta app en `localStorage` lleva el prefijo `tecnica-gym:`; sus cachés, el prefijo `tecnica-`.
- Nunca borres cachés, almacenamiento ni service workers que no sean de esta app, y nunca pidas al usuario que borre los datos del sitio.
- `sw.js` va primero a la red y solo usa la copia guardada sin conexión. Si cambias archivos, sube el número de `CACHE`.
- Rutas siempre relativas (la app vive en `/rutina-gym/`).

## Comandos

```bash
node herramientas/tecnica.js   # regenera proyecto-claude/TECNICA.md
python3 -m http.server 8000    # prueba local en http://localhost:8000/
```

## Commits

En español y descriptivos (por ejemplo, *"Día 2: press de hombro con mancuernas en lugar de máquina"*), y push a `main`. GitHub Pages publica en 1–2 minutos.
