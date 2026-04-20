import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { SupportForm } from "@/components/SupportForm";

export const metadata: Metadata = {
  title: "Support",
  description: "Real humans. Usually same-day. Reach the small team at Regular Guy Labs.",
};

export default function SupportPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="page-intro__kicker">Support</span>
          <h1>Real humans. Usually same-day.</h1>
          <p>
            A small team at Regular Guy Labs reads every message. No tickets, no chatbots — just a quick reply from someone who built the app.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="support-grid">
          <div className="support-card">
            <div className="support-card__icon">{Icon.mail({ width: 22, height: 22 })}</div>
            <h3>Send a message</h3>
            <p>The fastest path to a real answer. A human reads every note — usually same-day during the week.</p>
            <a className="link" href="#support-form">Open the form →</a>
          </div>
          <div className="support-card">
            <div className="support-card__icon">{Icon.book({ width: 22, height: 22 })}</div>
            <h3>Read the FAQ</h3>
            <p>Questions about pricing, privacy, iCloud sync, and the wheel strategy — most answers live here.</p>
            <Link className="link" href="/faq">Go to FAQ →</Link>
          </div>
          <div className="support-card">
            <div className="support-card__icon">{Icon.heart({ width: 22, height: 22 })}</div>
            <h3>Feature requests</h3>
            <p>If something is missing, tell us. We build for real traders — not the App Store charts.</p>
            <a className="link" href="#support-form">Share an idea →</a>
          </div>
          <div className="support-card">
            <div className="support-card__icon">{Icon.shield({ width: 22, height: 22 })}</div>
            <h3>Security &amp; privacy</h3>
            <p>Report a security concern responsibly, or ask how we handle your data.</p>
            <a className="link" href="#support-form">Report via form →</a>
          </div>
        </div>

        <SupportForm />
      </div>
    </>
  );
}
