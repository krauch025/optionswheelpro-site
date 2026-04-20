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
          <p>This page is a placeholder while the formal terms are finalized.</p>
        </div>
      </section>

      <div className="reading">
        <p>
          Options Wheel Pro is provided by Regular Guy Labs LLC. The app is a trade logger — not financial advice and not a brokerage. You are responsible for your own trading decisions.
        </p>
        <p>
          Formal terms will be published here prior to launch. Questions in the meantime go to{" "}
          <a href="mailto:hello@optionswheelpro.com" style={{ color: "var(--accent)" }}>
            hello@optionswheelpro.com
          </a>.
        </p>
      </div>
    </>
  );
}
