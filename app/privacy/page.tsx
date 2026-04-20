import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Options Wheel Pro handles your data. Short answer: we don't.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="page-intro__kicker">Privacy</span>
          <h1>Privacy policy.</h1>
          <p>Short answer: your data stays on your device. The long version is coming.</p>
        </div>
      </section>

      <div className="reading">
        <p>
          This page is a placeholder while the formal privacy policy is finalized. Until then: Options Wheel Pro stores your trade data on your device by default. iCloud sync is optional, off by default, and end-to-end encrypted by Apple when you enable it. No analytics SDKs, no ad networks, no data brokers.
        </p>
        <p>
          If you have questions about how we handle your data, email{" "}
          <a href="mailto:contact@regularguylabs.com" style={{ color: "var(--accent)" }}>
            contact@regularguylabs.com
          </a>.
        </p>
      </div>
    </>
  );
}
