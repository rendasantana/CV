/**
 * Regenerate favicon assets from assets/tab-icon-source.jpg (hand/flames graphic).
 * Usage: node scripts/generate-favicon.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

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

const png512 = await sharp(src)
  .extract({ left, top, width: side, height: side })
  .resize(512, 512, { fit: "cover" })
  .png()
  .toBuffer();

await sharp(png512).resize(32, 32).png().toFile(path.join(root, "src/app/icon.png"));
await sharp(png512)
  .resize(180, 180)
  .png()
  .toFile(path.join(root, "src/app/apple-icon.png"));

await sharp(png512).resize(16, 16).png().toFile(path.join(root, "public/icon-16.png"));
await sharp(png512).resize(32, 32).png().toFile(path.join(root, "public/icon-32.png"));
await sharp(png512)
  .resize(180, 180)
  .png()
  .toFile(path.join(root, "public/apple-touch-icon.png"));
await sharp(png512).resize(192, 192).png().toFile(path.join(root, "public/icon-192.png"));
await sharp(png512).resize(512, 512).png().toFile(path.join(root, "public/icon-512.png"));

const ico = await toIco([
  await sharp(png512).resize(16, 16).png().toBuffer(),
  await sharp(png512).resize(32, 32).png().toBuffer(),
  await sharp(png512).resize(48, 48).png().toBuffer(),
]);
fs.writeFileSync(path.join(root, "src/app/favicon.ico"), ico);
fs.writeFileSync(path.join(root, "public/favicon.ico"), ico);

console.log("Favicon assets regenerated from", src, `(${meta.width}x${meta.height})`);
