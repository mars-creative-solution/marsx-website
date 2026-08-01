import { Icon } from "marsx";

const ROW = { display: "flex", gap: 24, alignItems: "center", padding: 24, background: "#0d0d0d" };
const LABEL = { display: "flex", flexDirection: "column" as const, alignItems: "center", gap: 8, color: "#f2f2f2", fontSize: 11 };

export function Default() {
  return (
    <div style={ROW}>
      <div style={LABEL}><Icon name="brain" size={28} className="text-mist" /> brain</div>
      <div style={LABEL}><Icon name="globe" size={28} className="text-mist" /> globe</div>
      <div style={LABEL}><Icon name="shield-check" size={28} className="text-mist" /> shield-check</div>
      <div style={LABEL}><Icon name="sparkles" size={28} className="text-mist" /> sparkles</div>
      <div style={LABEL}><Icon name="database" size={28} className="text-mist" /> database</div>
    </div>
  );
}
