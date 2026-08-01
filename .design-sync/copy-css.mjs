// Next.js hashes its compiled CSS chunk filename per build, so design-sync's
// `cssEntry` (a fixed path) can't point at it directly. This copies the
// largest compiled chunk (the real one — font-face-only chunks are tiny) to
// a stable path. Run as part of `buildCmd`, after `npm run build`.
import { readdirSync, statSync, mkdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const CHUNKS_DIR = join(".next", "static", "chunks");
const OUT_DIR = join(".design-sync", ".cache");
const OUT_FILE = join(OUT_DIR, "compiled.css");

const candidates = readdirSync(CHUNKS_DIR)
  .filter((f) => f.endsWith(".css"))
  .map((f) => join(CHUNKS_DIR, f))
  .sort((a, b) => statSync(b).size - statSync(a).size);

if (!candidates.length) {
  console.error(`[copy-css] no .css files found under ${CHUNKS_DIR} — did the build run?`);
  process.exit(1);
}

mkdirSync(OUT_DIR, { recursive: true });
copyFileSync(candidates[0], OUT_FILE);
console.error(`[copy-css] ${candidates[0]} (${statSync(candidates[0]).size}b) -> ${OUT_FILE}`);
