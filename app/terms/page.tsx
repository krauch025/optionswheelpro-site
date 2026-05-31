import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of service for Options Wheel Pro.",
};

export default function TermsPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="page-intro__kicker">Terms</span>
          <h1>Terms of service.</h1>
          <p>Plain English. Use the app, log your trades, make your own decisions.</p>
        </div>
      </section>

      <div className="reading">
        <p className="reading__meta">Last updated: May 2026</p>

        <h2>1. Who we are</h2>
        <p>
          Options Wheel Pro is published by Regular Guy Labs LLC (&quot;Regular Guy Labs,&quot; &quot;we,&quot; &quot;us&quot;). By installing or using the app, you agree to these terms.
        </p>

        <h2>2. What the app is</h2>
        <p>
          Options Wheel Pro is a trade logger. You enter or import your own option and stock trades, and the app tracks wheel cycles, premium, cost basis, and ROI for you. That&apos;s the whole product.
        </p>

        <h2>3. What the app is not</h2>
        <p>
          The app is <strong>not</strong> a brokerage, financial advisor, or registered investment service. We do not execute trades, hold funds, or provide personalized investment advice. Nothing in the app constitutes a recommendation to buy, sell, or hold any security.
        </p>
        <p>
          You are solely responsible for your own trading decisions and their outcomes. Options trading carries substantial risk and can result in losses exceeding your initial investment. Trade only with money you can afford to lose, and consult a licensed financial advisor if you need personalized guidance.
        </p>

        <h2>4. Your data and account</h2>
        <p>
          The app stores your trade data locally on your device. Optional iCloud sync uses your Apple account. We do not run servers that hold your data. See the{" "}
          <a href="/privacy" style={{ color: "var(--accent)" }}>privacy policy</a>{" "}
          for full details.
        </p>

        <h2>5. Purchases and refunds</h2>
        <p>
          The app may offer a free tier and a one-time Pro unlock through Apple&apos;s in-app purchase system. All purchases are processed by Apple and are subject to Apple&apos;s standard terms and refund policy. We cannot issue refunds directly — request them through Apple at{" "}
          <a href="https://reportaproblem.apple.com" style={{ color: "var(--accent)" }} target="_blank" rel="noopener noreferrer">
            reportaproblem.apple.com
          </a>.
        </p>

        <h2>6. Acceptable use</h2>
        <p>
          Use the app for your own personal trade tracking. Do not reverse engineer, redistribute, or resell the app or its data formats. Do not use the app to evade applicable law.
        </p>

        <h2>7. Intellectual property</h2>
        <p>
          The Options Wheel Pro name, logo, app code, and design are owned by Regular Guy Labs LLC. Your trade data is yours.
        </p>

        <h2>8. No warranty</h2>
        <p>
          The app is provided &quot;as is,&quot; without warranty of any kind. We do our best to make calculations accurate, but we do not guarantee the app is error-free or that calculations match your broker&apos;s figures exactly. Verify your numbers against your brokerage statements before relying on them for taxes or trading decisions.
        </p>

        <h2>9. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Regular Guy Labs LLC is not liable for trading losses, lost profits, data loss, or any indirect, incidental, or consequential damages arising from your use of the app. Our total liability to you for any claim will not exceed what you paid for the app.
        </p>

        <h2>10. Changes</h2>
        <p>
          We may update these terms occasionally. Material changes will be reflected on this page with a new &quot;last updated&quot; date. Continued use after changes means you accept the updated terms.
        </p>

        <h2>11. Governing law</h2>
        <p>
          These terms are governed by the laws of the State of Wyoming, without regard to its conflict of laws principles. Disputes will be resolved in the state or federal courts located in Wyoming.
        </p>

        <h2>12. Contact</h2>
        <p>
          Questions about these terms? Email{" "}
          <a href="mailto:contact@regularguylabs.com" style={{ color: "var(--accent)" }}>
            contact@regularguylabs.com
          </a>.
        </p>
      </div>
    </>
  );
}
