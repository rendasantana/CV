/**
 * Regenerate favicon assets from assets/tab-icon-source.jpg (hand/flames).
 * PNGs first (RGBA). ICO via png-to-ico (PNG-compressed frames — avoids BMP glitches).
 * Usage: node scripts/generate-favicon.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "assets", "tab-icon-source.jpg");

if (!fs.existsSync(src)) {
  console.error("Missing source:", src);
  process.exit(1);
}

const meta = await sharp(src).metadata();
const side = Math.min(meta.width, meta.height);
const left = Math.max(0, Math.floor((meta.width - side) / 2));
const top = Math.max(0, Math.floor((meta.height - side) / 2));

/** Master square — high quality, with alpha channel */
const master = await sharp(src)
  .extract({ left, top, width: side, height: side })
  .resize(512, 512, {
    fit: "cover",
    kernel: sharp.kernel.lanczos3,
  })
  .ensureAlpha()
  .png({ compressionLevel: 9, palette: false })
  .toBuffer();

async function writePng(buf, outPath, size) {
  await sharp(buf)
    .resize(size, size, { kernel: sharp.kernel.lanczos3 })
    .ensureAlpha()
    .png({ compressionLevel: 9, palette: false })
    .toFile(outPath);
  console.log("wrote", outPath);
}

// Next.js App Router — prefer large icon.png (framework serves/optimizes)
await writePng(master, path.join(root, "src/app/icon.png"), 512);
await writePng(master, path.join(root, "src/app/apple-icon.png"), 180);

// Public static PNGs for explicit <link> tags
await writePng(master, path.join(root, "public/icon-16.png"), 16);
await writePng(master, path.join(root, "public/icon-32.png"), 32);
await writePng(master, path.join(root, "public/apple-touch-icon.png"), 180);
await writePng(master, path.join(root, "public/icon-192.png"), 192);
await writePng(master, path.join(root, "public/icon-512.png"), 512);

// Valid ICO with PNG frames (16 + 32 only — skip flaky 48)
const ico16 = await sharp(master).resize(16, 16).ensureAlpha().png().toBuffer();
const ico32 = await sharp(master).resize(32, 32).ensureAlpha().png().toBuffer();
const ico = await pngToIco([ico16, ico32]);
// Keep ICO only in public/ for legacy; do NOT put in src/app/ so Next
// won't emit a hashed favicon.ico that browsers prefer over PNGs.
fs.writeFileSync(path.join(root, "public/favicon.ico"), ico);
const appIco = path.join(root, "src/app/favicon.ico");
if (fs.existsSync(appIco)) {
  fs.unlinkSync(appIco);
  console.log("removed", appIco, "(avoid Next hashed ICO taking priority)");
}

console.log(
  "Done from",
  src,
  `(${meta.width}x${meta.height}) → square ${side}`,
);
