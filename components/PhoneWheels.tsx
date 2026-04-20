import { Icon } from "./icons";

const WHEELS = [
  { sym: "SOFI", cycles: 6, collected: 284, status: "CSP open" },
  { sym: "F", cycles: 4, collected: 156, status: "CC open" },
  { sym: "PLTR", cycles: 3, collected: 412, status: "Assigned" },
  { sym: "NIO", cycles: 2, collected: 71, status: "CSP open" },
];

export function PhoneWheels() {
  return (
    <div className="phone-frame">
      <div>
        <div className="phone-statusbar"><span>9:41</span><span>●●● ▲</span></div>
        <div style={{ padding: "10px 16px 6px" }}>
          <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Wheels</div>
        </div>
      </div>
      <div className="phone-body">
        {WHEELS.map((w) => (
          <div key={w.sym} className="pf-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontWeight: 700, fontSize: 16 }}>{w.sym}</div>
              <div style={{ fontSize: 11, color: "var(--fg-2)" }}>{w.cycles} cycles</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 8 }}>
              <div>
                <div style={{ fontSize: 10, color: "var(--fg-3)", letterSpacing: "0.05em", textTransform: "uppercase" }}>{w.status}</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "var(--positive)", fontVariantNumeric: "tabular-nums", marginTop: 2 }}>+${w.collected}</div>
              </div>
              <div style={{ display: "flex", gap: 2, alignItems: "flex-end", height: 24 }}>
                {[10, 14, 8, 18, 12, 22].slice(0, w.cycles).map((h, i) => (
                  <div key={i} style={{ width: 5, height: h, background: "var(--accent)", borderRadius: 1.5 }} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="phone-tabbar">
        <div className="phone-tab">{Icon.pie()}<span>Dashboard</span></div>
        <div className="phone-tab">{Icon.plus()}<span>New</span></div>
        <div className="phone-tab">{Icon.clock()}<span>History</span></div>
        <div className="phone-tab phone-tab--active">{Icon.repeat()}<span>Wheels</span></div>
      </div>
    </div>
  );
}
