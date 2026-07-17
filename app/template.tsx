/**
 * App Router re-mounts this template on every navigation, giving each route a
 * subtle enter transition (fade + slight rise). Driven by a CSS animation (see
 * `.page-enter` in globals.css) rather than JS, so above-the-fold content is
 * never gated on hydration and the effect stays cheap. Enter-only by design —
 * the persistent Nav/Footer live in the layout. Reduced motion collapses it to
 * an instant appearance via the global reduced-motion rule.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
