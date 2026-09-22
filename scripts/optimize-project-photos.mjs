import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const SRC_DIR = "C:/Users/agcom/Desktop/DEV_CLAUDE/SITE_LEDI_ATT/drive-projetos";
const OUT_DIRS = [
  "C:/Users/agcom/Desktop/DEV_CLAUDE/SITE_LEDI_ATT/extracted/public/assets/projetos",
  "C:/Users/agcom/Desktop/DEV_CLAUDE/SITE_LEDI_ATT/static-site/assets/projetos",
];

const projects = [
  { prefix: "01-reservainglesa", slug: "reserva-inglesa", title: "Apto Reserva Inglesa", category: "interiores" },
  { prefix: "02-atmosphere", slug: "atmosphere", title: "Apto 1402 Atmosphere", category: "interiores" },
  { prefix: "03-artefacto2023", slug: "artefacto-2023", title: "Mostra Artefacto 2023", category: "interiores" },
  { prefix: "04-renaissance", slug: "renaissance", title: "Casa Renaissance", category: "arquitetura" },
  { prefix: "05-concept105", slug: "concept-105", title: "Apto Concept 105 Next", category: "interiores" },
  { prefix: "06-artefacto2025", slug: "artefacto-2025", title: "Mostra Artefacto 2025", category: "interiores" },
  { prefix: "07-alphaville", slug: "alphaville", title: "Casa Alphaville", category: "arquitetura" },
  { prefix: "09-advocacia", slug: "advocacia", title: "Escritorio de Advocacia", category: "comercial" },
  { prefix: "10-coralgables", slug: "coral-gables", title: "Apto 802A Coral Gables", category: "interiores" },
];

const allFiles = fs.readdirSync(SRC_DIR).filter((f) => f.toLowerCase().endsWith(".jpg"));

let totalBefore = 0;
let totalAfter = 0;
const manifest = [];

for (const p of projects) {
  const files = allFiles.filter((f) => f.startsWith(p.prefix + "-")).sort();
  const images = [];
  for (const outDir of OUT_DIRS) {
    fs.mkdirSync(path.join(outDir, p.slug), { recursive: true });
  }
  for (let i = 0; i < files.length; i++) {
    const srcPath = path.join(SRC_DIR, files[i]);
    const before = fs.statSync(srcPath).size;
    totalBefore += before;
    const outName = `${i + 1}.jpg`;
    const buf = await sharp(srcPath)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toBuffer();
    for (const outDir of OUT_DIRS) {
      fs.writeFileSync(path.join(outDir, p.slug, outName), buf);
    }
    totalAfter += buf.length;
    images.push(`assets/projetos/${p.slug}/${outName}`);
  }
  manifest.push({ ...p, images });
  console.log(`${p.slug}: ${files.length} photos`);
}

fs.writeFileSync(
  "C:/Users/agcom/Desktop/DEV_CLAUDE/SITE_LEDI_ATT/drive-projetos/manifest.json",
  JSON.stringify(manifest, null, 2)
);

console.log(`\nTotal before: ${(totalBefore / 1024 / 1024).toFixed(1)} MB`);
console.log(`Total after:  ${(totalAfter / 1024 / 1024).toFixed(1)} MB`);
