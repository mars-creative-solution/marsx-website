## Using this design system

This is the MarsX marketing site's real component set (Next.js + Tailwind v4), bundled for direct use. A handful of routing-dependent components (`Button`, `Nav`, `Footer`, `Hero`, `NasserHero`) are intentionally excluded — they render `next/link`/`next/navigation`, which only work inside a live Next.js app.

**No provider or wrapper needed.** Components read no shared context — mount any of them directly.

**Styling idiom: Tailwind utility classes**, not custom tokens or style props. Every component's className strings are real Tailwind v4 classes compiled from this site's own build — read `styles.css` (imports the compiled `_ds_bundle.css`) for the full compiled set rather than guessing class names. The brand-specific classes actually in use:

| Class | Meaning |
|---|---|
| `bg-black`, `text-mist` | brand background (`#0d0d0d`) / primary text (`#f2f2f2`) |
| `text-accent`, `bg-accent`, `border-accent/*` | brand orange (`#ff5a00`), used sparingly as a single accent, not a primary palette color |
| `text-charcoal`, `bg-charcoal/*` | secondary dark surface (`#2a2a2a`) |
| `font-display` | headings (Exo 2) — `font-sans` is body text (Inter) |
| `glass` | the site's frosted-glass card treatment (custom utility, not stock Tailwind) |
| `card-lift` | the standard hover-lift treatment used on every card grid |
| `accent-glow` | orange glow shadow used on primary CTAs |

Compose new layout with plain Tailwind utilities in this same vocabulary (`bg-black`, `text-mist/60` for dimmed text, `rounded-2xl`, `gap-6` grids) rather than inventing a different visual language — the whole site is built from a narrow, consistent set of these.

**One idiomatic example** (a real card grid, adapted from `AmbassadorsShowcase`):

```tsx
<div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
  <div className="flex flex-col items-center rounded-3xl border border-mist/10 bg-mist/[0.03] p-6 card-lift">
    <NasserFigure name="Fatima" className="aspect-[3/4] w-full" />
    <span className="mt-5 font-display text-sm font-semibold tracking-[0.3em] text-mist/85">
      FATIMA
    </span>
  </div>
</div>
```

**Where the truth lives**: `styles.css` (the full compiled stylesheet — start here for any real class name), and each component's own `.prompt.md` for its specific props.
