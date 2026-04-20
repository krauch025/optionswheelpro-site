import Link from "next/link";
import { AppStoreBtn } from "@/components/AppStoreBtn";
import { PhoneAnalytics } from "@/components/PhoneAnalytics";
import { PhoneDashboard } from "@/components/PhoneDashboard";
import { PhoneNewTrade } from "@/components/PhoneNewTrade";
import { PhoneWheels } from "@/components/PhoneWheels";
import { Icon } from "@/components/icons";

const WHEEL_STEPS = [
  { title: "Sell a cash-secured put", pill: "CSP", body: "Pick a ticker you'd own at a discount. Collect premium while you wait." },
  { title: "Let it expire — or take assignment", pill: "CSP", body: "Expires worthless? Keep the premium. Assigned? You now own 100 shares at your strike." },
  { title: "Sell a covered call", pill: "CC", pillOut: true, body: "Above your cost basis, start collecting premium again while you hold." },
  { title: "Called away — reset the wheel", pill: "CC", pillOut: true, body: "Shares called? Pocket the gain, log the cycle, spin it again." },
];

const FEATURES = [
  { icon: Icon.plus, title: "Trade logging in 10 seconds", body: "Ticker, strike, expiry, premium — done. No broker linking, no OAuth, no surprises." },
  { icon: Icon.repeat, title: "Wheels view", body: "See every cycle on every ticker: CSP → assignment → CC → called away → reset. At a glance." },
  { icon: Icon.calc, title: "Smart premium math", body: "Per-trade, per-day, APY, collateral efficiency. Tabular numerals. No clever flourishes." },
  { icon: Icon.chart, title: "The long slow line", body: "Premium collected over time. The chart that matters more than any single position." },
  { icon: Icon.bell, title: "Quiet reminders", body: "Expiry this week. Assignment risk crossing your threshold. Nothing more." },
  { icon: Icon.lock, title: "Your data stays on your device", body: "No accounts, no sync by default. iCloud sync is optional and end-to-end encrypted." },
];

const TESTIMONIALS = [
  { q: "Finally, a wheel app that feels like it was made by someone who actually runs the wheel. No dashboards I don't need, no paywall on the stuff I do.", who: "Maya R.", role: "Engineer, 4 years wheeling" },
  { q: "The Wheels view is the feature I didn't know I needed. Seeing a whole ticker's cycle at once changed how I pick strikes.", who: "Dan K.", role: "Retail trader" },
  { q: "I tried three spreadsheets and two apps before this one. Now I just open OWP, tap new trade, and move on.", who: "Lin P.", role: "PM, wheeling since 2022" },
];

export default function Home() {
  return (
    <>
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-editorial__eyebrow">A mindful tool for the wheel strategy</div>
          <div className="hero-editorial__grid">
            <div>
              <h1>Run the wheel<br />with a <em>clear head</em>,<br />not a crowded one.</h1>
              <p className="hero-editorial__lede">
                Options Wheel Pro is a quiet, thoughtful iPhone app for tracking cash-secured puts, covered calls, and the long slow compound of premium collected.
              </p>
              <div className="hero-editorial__ctas">
                <AppStoreBtn />
                <Link href="/pricing" className="ow-btn ow-btn--plain ow-btn--lg" style={{ background: "transparent" }}>
                  See pricing →
                </Link>
              </div>
            </div>
            <div className="hero-editorial__phone">
              <PhoneAnalytics />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="learn">
        <div className="container">
          <div className="section-head">
            <div className="section-head__kicker">How the wheel works</div>
            <h2>Four quiet moves. Repeat until you get paid.</h2>
            <p>
              The wheel strategy is simple in theory and fiddly in practice. Options Wheel Pro makes the bookkeeping invisible so you can focus on the decisions that matter.
            </p>
          </div>
          <div className="wheel-steps">
            {WHEEL_STEPS.map((s, i) => (
              <div className="wheel-step" key={i}>
                <div className="wheel-step__num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{s.title}</h3>
                <span className={"pill" + (s.pillOut ? " pill--out" : "")}>{s.pill}</span>
                <p style={{ marginTop: 8 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} id="features">
        <div className="container">
          <div className="section-head">
            <div className="section-head__kicker">Features</div>
            <h2>Everything you need, and not one thing more.</h2>
          </div>
          <div className="features">
            {FEATURES.map((f, i) => (
              <div className="feature" key={i}>
                <div className="feature__icon">{f.icon({ width: 22, height: 22 })}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="feature-hl">
            <div className="feature-hl__copy">
              <div className="section-head__kicker" style={{ marginBottom: 12 }}>Dashboard</div>
              <h3>One screen. The whole wheel.</h3>
              <p>
                Premium collected this year. Open positions with assignment risk. The trailing 30-day shape of your performance. No tabs to dig through.
              </p>
              <ul className="feature-hl__bullets">
                <li>Year-to-date and lifetime premium, side by side</li>
                <li>Open positions sorted by time to expiry</li>
                <li>Click any trade to see the whole wheel it belongs to</li>
              </ul>
            </div>
            <div className="feature-hl__visual"><PhoneDashboard /></div>
          </div>
          <div className="feature-hl feature-hl--flip">
            <div className="feature-hl__copy">
              <div className="section-head__kicker" style={{ marginBottom: 12 }}>New trade</div>
              <h3>Log a trade before you close the order window.</h3>
              <p>
                A single screen with the five fields that matter. Premium, strike, expiry, contracts, type. The math — APY, collateral, per-day — updates as you type.
              </p>
              <ul className="feature-hl__bullets">
                <li>CSP, CC, Buy, Sell — four taps to the right form</li>
                <li>Assignment probability and break-even shown inline</li>
                <li>Drafts auto-save. Never lose a trade.</li>
              </ul>
            </div>
            <div className="feature-hl__visual"><PhoneNewTrade /></div>
          </div>
          <div className="feature-hl">
            <div className="feature-hl__copy">
              <div className="section-head__kicker" style={{ marginBottom: 12 }}>Wheels</div>
              <h3>See a wheel as one object, not ten trades.</h3>
              <p>
                Every CSP, assignment, CC, and called-away on a ticker — grouped, summed, and shown as the cycle it really is. Know which wheels are paying and which are just spinning.
              </p>
              <ul className="feature-hl__bullets">
                <li>Premium collected per wheel, per cycle</li>
                <li>Cost basis tracking across assignments</li>
                <li>A visual rhythm of each cycle so you can spot your best setups</li>
              </ul>
            </div>
            <div className="feature-hl__visual"><PhoneWheels /></div>
          </div>
        </div>
      </section>

      <section className="section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div className="section-head__kicker">In the field</div>
            <h2>From quiet traders, to quiet traders.</h2>
          </div>
          <div className="tstrip">
            {TESTIMONIALS.map((t, i) => (
              <figure className="tstrip__item" key={i}>
                <blockquote>&ldquo;{t.q}&rdquo;</blockquote>
                <footer>
                  <span className="avatar">{t.who.charAt(0)}</span>
                  <div>
                    <div style={{ color: "var(--fg-1)", fontWeight: 600 }}>{t.who}</div>
                    <div style={{ fontSize: 12 }}>{t.role}</div>
                  </div>
                </footer>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="download" style={{ padding: "0 0 96px" }}>
        <div className="container">
          <div className="final-cta">
            <h2>A calmer way to run the wheel.</h2>
            <p>Free to download. A single one-time unlock for Pro features. No subscriptions, ever.</p>
            <div className="final-cta__ctas">
              <AppStoreBtn />
              <Link href="/pricing" className="ow-btn ow-btn--ghost ow-btn--lg">See what&apos;s included</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
