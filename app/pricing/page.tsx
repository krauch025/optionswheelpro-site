import type { Metadata } from "next";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Free to start. Pay once for the rest. No subscriptions. No data harvesting.",
};

type Feature = { label: string; muted?: boolean };
type PlanProps = {
  name: string;
  price: string;
  unit: string;
  pitch: string;
  featured?: boolean;
  features: Feature[];
  cta: string;
};

function Plan({ name, price, unit, pitch, featured, features, cta }: PlanProps) {
  return (
    <div className={"plan" + (featured ? " plan--featured" : "")}>
      <div className="plan__name">{name}</div>
      <div className="plan__price">
        <span className="amt">{price}</span>
        <span className="unit">{unit}</span>
      </div>
      <p className="plan__pitch">{pitch}</p>
      <ul className="plan__features">
        {features.map((f, i) => (
          <li key={i} className={f.muted ? "muted" : ""}>
            {f.muted ? Icon.xmark() : Icon.check()}
            <span>{f.label}</span>
          </li>
        ))}
      </ul>
      <a href="#download" className={"ow-btn " + (featured ? "ow-btn--prominent" : "ow-btn--bordered")}>
        {cta}
      </a>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="page-intro__kicker">Pricing</span>
          <h1>Free to start. Pay once for the rest.</h1>
          <p>
            No subscriptions. No data harvesting. Unlock everything with a single one-time purchase and own the app forever.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="pricing">
          <Plan
            name="Free"
            price="$0"
            unit="forever"
            pitch="Everything you need to log trades and watch the premium accumulate."
            cta="Download free"
            features={[
              { label: "Unlimited manual trade logging" },
              { label: "Dashboard with YTD & lifetime premium" },
              { label: "Up to 3 active wheels" },
              { label: "History of closed trades" },
              { label: "Light & dark mode" },
              { label: "Advanced Wheels view", muted: true },
              { label: "CSV & spreadsheet export", muted: true },
              { label: "iCloud sync across devices", muted: true },
            ]}
          />
          <Plan
            featured
            name="Pro"
            price="$24.99"
            unit="once, yours forever"
            pitch="Unlock the full app with one purchase. No recurring charges — ever."
            cta="Unlock Pro"
            features={[
              { label: "Everything in Free" },
              { label: "Unlimited wheels" },
              { label: "Wheels view — whole cycles at a glance" },
              { label: "Assignment probability & break-even math" },
              { label: "CSV & spreadsheet export" },
              { label: "iCloud sync (end-to-end encrypted)" },
              { label: "Custom trade tags & notes" },
              { label: "Priority support" },
            ]}
          />
        </div>

        <p className="pricing-note">
          Pro is a one-time In-App Purchase. Family Sharing is supported — buy once, your household is covered. New features added after launch are included at no extra cost.
        </p>

        <div className="pricing-compare">
          <h3>The details</h3>
          <table className="compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Free</th>
                <th>Pro</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Manual trade logging</td><td className="y">{Icon.check()}</td><td className="y">{Icon.check()}</td></tr>
              <tr><td>Dashboard &amp; history</td><td className="y">{Icon.check()}</td><td className="y">{Icon.check()}</td></tr>
              <tr><td>Active wheels</td><td>3</td><td>Unlimited</td></tr>
              <tr><td>Wheels view</td><td className="n">{Icon.xmark()}</td><td className="y">{Icon.check()}</td></tr>
              <tr><td>Assignment probability</td><td className="n">{Icon.xmark()}</td><td className="y">{Icon.check()}</td></tr>
              <tr><td>CSV / spreadsheet export</td><td className="n">{Icon.xmark()}</td><td className="y">{Icon.check()}</td></tr>
              <tr><td>iCloud sync (E2E)</td><td className="n">{Icon.xmark()}</td><td className="y">{Icon.check()}</td></tr>
              <tr><td>Custom tags &amp; notes</td><td className="n">{Icon.xmark()}</td><td className="y">{Icon.check()}</td></tr>
              <tr><td>Priority support</td><td className="n">{Icon.xmark()}</td><td className="y">{Icon.check()}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
