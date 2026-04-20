import { Icon } from "./icons";

export function PhoneNewTrade() {
  return (
    <div className="phone-frame">
      <div>
        <div className="phone-statusbar"><span>9:41</span><span>●●● ▲</span></div>
        <div style={{ padding: "10px 16px 6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em" }}>New Trade</div>
        </div>
      </div>
      <div className="phone-body">
        <div className="pf-card">
          <div className="pf-label">Symbol</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: 22, fontWeight: 700 }}>SOFI</div>
            <div style={{ fontSize: 13, color: "var(--fg-2)" }}>$8.42</div>
          </div>
        </div>

        <div className="pf-card">
          <div className="pf-label">Strategy</div>
          <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
            <div style={{ flex: 1, padding: "8px 6px", borderRadius: 8, background: "var(--accent)", color: "var(--bg)", textAlign: "center", fontSize: 11, fontWeight: 600 }}>CSP</div>
            <div style={{ flex: 1, padding: "8px 6px", borderRadius: 8, border: "1px solid var(--border)", textAlign: "center", fontSize: 11, fontWeight: 500, color: "var(--fg-2)" }}>CC</div>
            <div style={{ flex: 1, padding: "8px 6px", borderRadius: 8, border: "1px solid var(--border)", textAlign: "center", fontSize: 11, fontWeight: 500, color: "var(--fg-2)" }}>Buy</div>
            <div style={{ flex: 1, padding: "8px 6px", borderRadius: 8, border: "1px solid var(--border)", textAlign: "center", fontSize: 11, fontWeight: 500, color: "var(--fg-2)" }}>Sell</div>
          </div>
        </div>

        <div className="pf-card">
          <div className="pf-label">Strike · Expiry</div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
            <div style={{ fontSize: 20, fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>$8.00</div>
            <div style={{ fontSize: 13, color: "var(--fg-2)" }}>May 2 · 12d</div>
          </div>
        </div>

        <div className="pf-card" style={{ background: "var(--accent-wash)", borderColor: "color-mix(in srgb, var(--accent) 22%, transparent)" }}>
          <div className="pf-label" style={{ color: "var(--accent)" }}>Premium</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 2 }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "var(--accent)" }}>$42</div>
            <div style={{ fontSize: 11, color: "var(--fg-2)" }}>5.25% / 12d · 159% APY</div>
          </div>
        </div>

        <div style={{ padding: "12px 14px", background: "var(--accent)", color: "var(--bg)", borderRadius: 10, textAlign: "center", fontWeight: 600, fontSize: 14, marginTop: 12 }}>Log trade</div>
      </div>
      <div className="phone-tabbar">
        <div className="phone-tab">{Icon.pie()}<span>Dashboard</span></div>
        <div className="phone-tab phone-tab--active">{Icon.plus()}<span>New</span></div>
        <div className="phone-tab">{Icon.clock()}<span>History</span></div>
        <div className="phone-tab">{Icon.repeat()}<span>Wheels</span></div>
      </div>
    </div>
  );
}
