import { DeploymentArt } from "marsx";

const ROW = { display: "flex", gap: 24, padding: 24, background: "#181818", color: "#ff5a00" };
const TILE = { width: 64, height: 64 };

export function Default() {
  return (
    <div style={ROW}>
      {["holograms", "websites", "mobile-apps", "led-walls", "projectors"].map((id) => (
        <div key={id} style={TILE}>
          <DeploymentArt id={id} className="h-full w-full" />
        </div>
      ))}
    </div>
  );
}
