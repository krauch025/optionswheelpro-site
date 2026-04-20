import { Icon } from "./icons";
import { Spark } from "./Spark";

export function PhoneDashboard() {
  return (
    <div className="phone-frame">
      <div>
        <div className="phone-statusbar"><span>9:41</span><span>●●● ▲</span></div>
        <div style={{ padding: "10px 16px 6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>Dashboard</div>
          <div style={{ color: "var(--fg-2)" }}>{Icon.menu({ width: 20, height: 20 })}</div>
        </div>
      </div>
      <div className="phone-body">
        <div className="pf-card" style={{ background: "var(--accent)", color: "var(--bg)", border: "none" }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.75 }}>Premium collected · 2026</div>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.015em", fontVariantNumeric: "tabular-nums", marginTop: 4 }}>$4,872.50</div>
          <div style={{ fontSize: 11, opacity: 0.75, marginTop: 2 }}>+$612 this week · 14 positions</div>
        </div>

        <div className="pf-card">
          <div className="pf-label">Open positions</div>
          <div className="pf-row">
            <span className="pf-row__sym">SOFI</span>
            <span className="pf-badge">CSP</span>
            <span className="pf-row__meta">$8 · 12d</span>
            <span className="pf-row__val pf-row__val--pos">+$42</span>
          </div>
          <div className="pf-row">
            <span className="pf-row__sym">F</span>
            <span className="pf-badge pf-badge--out">CC</span>
            <span className="pf-row__meta">$11 · 4d</span>
            <span className="pf-row__val pf-row__val--pos">+$18</span>
          </div>
          <div className="pf-row">
            <span className="pf-row__sym">PLTR</span>
            <span className="pf-badge">CSP</span>
            <span className="pf-row__meta">$22 · 21d</span>
            <span className="pf-row__val pf-row__val--pos">+$106</span>
          </div>
          <div className="pf-row">
            <span className="pf-row__sym">NIO</span>
            <span className="pf-badge">CSP</span>
            <span className="pf-row__meta">$5 · 7d</span>
            <span className="pf-row__val pf-row__val--pos">+$31</span>
          </div>
        </div>

        <div className="pf-card">
          <div className="pf-label">Last 30 days</div>
          <Spark up width={264} />
        </div>
      </div>
      <div className="phone-tabbar">
        <div className="phone-tab phone-tab--active">{Icon.pie()}<span>Dashboard</span></div>
        <div className="phone-tab">{Icon.plus()}<span>New</span></div>
        <div className="phone-tab">{Icon.clock()}<span>History</span></div>
        <div className="phone-tab">{Icon.repeat()}<span>Wheels</span></div>
      </div>
    </div>
  );
}
