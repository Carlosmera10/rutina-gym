// Regenera proyecto-claude/TECNICA.md a partir de los datos de index.html (constantes EX y DAYS).
// Uso: node herramientas/tecnica.js
const fs = require("fs");
const path = require("path");
const raiz = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(raiz, "index.html"), "utf8");

const ex = html.match(/^const EX = (\{.*\});$/m);
if (!ex) throw new Error("No encuentro la constante EX en index.html");
const EX = JSON.parse(ex[1]);

const ini = html.indexOf("const DAYS = {");
const fin = html.indexOf("\n};", ini);
if (ini < 0 || fin < 0) throw new Error("No encuentro la constante DAYS en index.html");
const DAYS = Function(html.slice(ini, fin + 3).replace("const DAYS =", "return"))();

const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const out = [
  "# Técnica de los ejercicios",
  "",
  "> Archivo generado con `node herramientas/tecnica.js` a partir de `index.html`. No lo edites a mano: cambia los datos de la app y vuelve a generarlo.",
  "",
];
const vistos = new Set();
for (const [clave, d] of Object.entries(DAYS)) {
  out.push(`## ${d.title}`, "", `${d.meta}. ${d.note}`, "");
  out.push("| # | Ejercicio | Series | Orden | Ficha |", "|---|---|---|---|---|");
  for (const [n, id, nombre, series, orden] of d.rows) {
    out.push(`| ${n} | ${nombre} | ${series} | ${orden} | ${id ? "`" + id + "`" : "—"} |`);
  }
  out.push("");
  const ss = Object.entries(d.ss || {});
  if (ss.length) {
    out.push("Superseries opcionales:", "");
    for (const [n, t] of ss) out.push(`- Ejercicio ${n}: ${t}`);
    out.push("");
  }
  for (const [, id] of d.rows) {
    if (!id || vistos.has(id) || !EX[id]) continue;
    vistos.add(id);
    const e = EX[id];
    out.push(`### ${e.title} (\`${id}\`)`, "", `*${e.tag}*`, "", "**Cómo hacerlo**", "");
    e.how.forEach((x, i) => out.push(`${i + 1}. ${x}`));
    out.push("", "**Evita lesiones**", "");
    e.avoid.forEach(x => out.push(`- ${x}`));
    out.push("", `**${e.altLabel || "Si está ocupado"}:** ${e.alts.map(cap).join(" · ")}`, "");
  }
}
const sin = Object.keys(EX).filter(id => !vistos.has(id));
if (sin.length) console.warn("Fichas en EX que no usa ningún día:", sin.join(", "));
fs.writeFileSync(path.join(raiz, "proyecto-claude", "TECNICA.md"), out.join("\n"));
console.log(`TECNICA.md generado: ${vistos.size} fichas.`);
