import { OrbitLogo } from "marsx";

const ROW = { display: "flex", gap: 32, alignItems: "center", padding: 24, background: "#0d0d0d" };

export function Default() {
  return (
    <div style={ROW}>
      <OrbitLogo size={64} />
      <OrbitLogo size={96} />
      <OrbitLogo size={140} glow />
    </div>
  );
}

export function Static() {
  return (
    <div style={ROW}>
      <OrbitLogo size={120} animated={false} glow={false} />
    </div>
  );
}
