import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Wheelright handles your data. Short answer: we don't.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="page-intro__kicker">Privacy</span>
          <h1>Privacy policy.</h1>
          <p>Short answer: your data stays on your device. We don&apos;t collect, transmit, or share it.</p>
        </div>
      </section>

      <div className="reading">
        <p className="reading__meta">Last updated: May 2026</p>

        <h2>1. Data collection</h2>
        <p>
          Wheelright does not collect, transmit, or share any personal data. All trade data is stored locally on your device using Apple&apos;s SwiftData framework. There is no account to create, no login, and no server we run that touches your data.
        </p>

        <h2>2. iCloud sync</h2>
        <p>
          iCloud sync is optional and off by default. If you turn it on, your trade data syncs through Apple&apos;s CloudKit infrastructure to your other devices signed into the same Apple ID. Apple encrypts this data in transit and at rest. We have no access to your iCloud data.
        </p>

        <h2>3. Analytics and tracking</h2>
        <p>
          We do not use analytics SDKs, tracking pixels, advertising frameworks, or telemetry of any kind. The app does not phone home.
        </p>

        <h2>4. Third-party services</h2>
        <p>
          The only third-party service the app communicates with is Apple CloudKit, and only when you have enabled iCloud sync. That&apos;s it.
        </p>

        <h2>5. Children&apos;s privacy</h2>
        <p>
          This app is not designed for or directed at children under 13.
        </p>

        <h2>6. Contact</h2>
        <p>
          Questions about how we handle your data? Email{" "}
          <a href="mailto:contact@regularguylabs.com" style={{ color: "var(--accent)" }}>
            contact@regularguylabs.com
          </a>.
        </p>
      </div>
    </>
  );
}
