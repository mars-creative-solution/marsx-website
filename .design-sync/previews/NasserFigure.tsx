import { NasserFigure } from "marsx";

export function Default() {
  return (
    <div style={{ height: 480, position: "relative" }}>
      <NasserFigure priority className="h-full w-full" />
    </div>
  );
}

export function Hologram() {
  return (
    <div style={{ height: 480, position: "relative", background: "#000" }}>
      <NasserFigure hologram priority className="h-full w-full" />
    </div>
  );
}
