# Técnica de los ejercicios

App web para consultar en el móvil, durante el entrenamiento, cómo hacer cada ejercicio de la rutina:

- **Piernas, Torso + Hombro, Full Body + Brazos y Comba + core**: ejercicios en orden, con series, ficha de técnica, consejos para evitar lesiones y alternativas si la máquina está ocupada.
- **Orden**: qué ejercicios se pueden intercambiar y cuáles no.
- **Superseries opcionales** que se pueden hacer sin ocupar dos máquinas.
- **Guía**: reglas generales y señales para parar.

Funciona sin conexión una vez abierta y se puede añadir a la pantalla de inicio del móvil.

## Publicarla con GitHub Pages

1. En el repositorio, ve a **Settings → Pages**.
2. En **Source**, elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
3. Guarda. En uno o dos minutos la app estará en `https://<usuario>.github.io/<repositorio>/`.

## Editar el contenido

Todo está en `index.html`:
- Las fichas de técnica están en la constante `EX`.
- Los ejercicios de cada día (orden, series y superseries) están en la constante `DAYS`.

Si cambias algo, sube también el número de versión en `sw.js` (`tecnica-v4` → `tecnica-v5`) para que el móvil descargue la versión nueva.
