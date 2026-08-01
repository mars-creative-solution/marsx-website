import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Archived components kept for reference only.
    "components/_backup/**",
    // Node build-time tooling scripts (CommonJS), not app code.
    "scripts/**",
    // design-sync (claude.ai/design) staged converter + generated bundle —
    // not app code, gitignored, not meant to be linted as part of this site.
    ".ds-sync/**",
    "ds-bundle/**",
    ".design-sync/**",
  ]),
]);

export default eslintConfig;
