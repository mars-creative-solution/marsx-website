// Bundled via cfg.extraEntries so it evaluates before the main entry.
// next/image reads `process.env.__NEXT_IMAGE_OPTS` (and similar) at module
// top-level even outside a real Next.js runtime — with no `process` global
// in a browser IIFE that's a ReferenceError that crashes the whole bundle.
// A plain empty env object is enough: every read comes back `undefined`,
// which next/image already treats as "no config" (its normal unconfigured
// path), so this doesn't fake or hide behavior — it just supplies the
// object Next's own code expects to exist.
if (typeof globalThis.process === "undefined") {
  globalThis.process = { env: {}, browser: true, nextTick: (fn, ...a) => setTimeout(fn, 0, ...a) };
}
