// One-off asset prep: produce dark-theme-ready transparent copies of the brand
// logos WITHOUT touching the originals (logo-icon.png / logo-full.png stay intact).
//
//  - logo-icon-transparent.png : white background keyed out, orange orbit-X preserved.
//  - logo-full-transparent.png : white keyed out, near-black wordmark recolored to
//    mist (#F2F2F2) for legibility on dark surfaces, orange accents preserved.
//
// Run from project root: node scripts/make-transparent-logos.js
const path = require("path");
const sharp = require("sharp");

const MIST = [242, 242, 242];

function isOrange(r, g, b) {
  // #FF5A00 ≈ (255, 90, 0): strong red, low blue, clear red-blue gap.
  return r > 150 && b < 120 && r - b > 80;
}

async function process(src, dest, { recolorText }) {
  const img = sharp(path.join("public", src)).ensureAlpha();
  const { data, info } = await img
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const s = i * channels;
    const d = i * 4;
    const r = data[s];
    const g = data[s + 1];
    const b = data[s + 2];

    // Alpha from ink coverage: white bg (min≈255) -> 0, black ink -> 255,
    // anti-aliased grays -> partial. This keeps edges soft.
    let alpha = 255 - Math.min(r, g, b);
    // Kill near-white background noise so there's no milky haze on dark
    // surfaces (and so trim() can crop the transparent margin).
    if (alpha < 14) alpha = 0;

    if (isOrange(r, g, b)) {
      out[d] = r;
      out[d + 1] = g;
      out[d + 2] = b;
      out[d + 3] = 255;
    } else if (recolorText) {
      out[d] = MIST[0];
      out[d + 1] = MIST[1];
      out[d + 2] = MIST[2];
      out[d + 3] = alpha;
    } else {
      out[d] = r;
      out[d + 1] = g;
      out[d + 2] = b;
      out[d + 3] = alpha;
    }
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 1 }) // drop the transparent margin for tight layout
    .png()
    .toFile(path.join("public", dest));
  console.log(`wrote public/${dest}`);
}

(async () => {
  await process("logo-icon.png", "logo-icon-transparent.png", {
    recolorText: false,
  });
  await process("logo-full.png", "logo-full-transparent.png", {
    recolorText: true,
  });
})();
