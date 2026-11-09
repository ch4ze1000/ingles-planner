const fs = require("fs");
const path = require("path");

const root = __dirname;
const files = [
  "01-05", "06-10", "11-15", "16-20",
  "21-25", "26-30", "31-35", "36-40"
];

let html = fs.readFileSync(path.join(root, "index.html"), "utf8");

const tags = files
  .map(f => '<script src="data/semana-' + f + '.js"></script>')
  .join("\n");

if (!html.includes(tags)) {
  console.error("Bloco de scripts não encontrado no index.html");
  process.exit(1);
}

const data = files.map(f => {
  const code = fs.readFileSync(path.join(root, "data", "semana-" + f + ".js"), "utf8");
  return "<script>\n" + code + "\n</script>";
}).join("\n");

html = html.replace(tags, data);

fs.writeFileSync(path.join(root, "plano-ingles.html"), html, "utf8");
console.log("Gerado plano-ingles.html (" + Math.round(Buffer.byteLength(html) / 1024) + " KB)");
