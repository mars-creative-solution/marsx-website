import { ParticleField } from "marsx";

export function Default() {
  return (
    <div style={{ height: 420, position: "relative", background: "#000" }}>
      <ParticleField count={46} />
    </div>
  );
}
