import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about the app, pricing, privacy, and what devices Options Wheel Pro supports.",
};

const FAQ = [
  {
    heading: "About the app",
    blurb: "What it does, who it's for, what it doesn't do.",
    items: [
      {
        q: "What is the wheel strategy?",
        a: "The wheel is a patient options strategy: sell a cash-secured put on a stock you'd be happy to own. If the put expires worthless you keep the premium. If you're assigned, you own 100 shares at your strike — then you sell covered calls against them. When your shares get called away, you reset. The goal is a slow, steady stream of premium.",
      },
      {
        q: "Who is Options Wheel Pro for?",
        a: "Anyone running the wheel strategy on their own and wanting a clean place to record it. It's equally useful whether you're logging your first CSP or your thousandth.",
      },
      {
        q: "Does the app give me trade recommendations?",
        a: "No. Options Wheel Pro is a logger and a mirror — it records what you do and shows you patterns. It does not pick tickers, recommend strikes, or predict outcomes. You're the trader.",
      },
      {
        q: "Does it connect to my brokerage?",
        a: "Not yet. We're deliberately starting with manual entry — it keeps the app fast, private, and free of OAuth and data-sharing agreements. Brokerage import is on the roadmap.",
      },
    ],
  },
  {
    heading: "Pricing & purchases",
    blurb: "Straightforward answers about the one-time Pro unlock.",
    items: [
      { q: "Is there a subscription?", a: "No. Pro is a single, one-time In-App Purchase. You buy it once and you have it forever, including future updates." },
      { q: "What does the free version include?", a: "Unlimited trade logging, the Dashboard, history, and up to three active wheels. It's a real app, not a crippled trial." },
      { q: "Can I try Pro before I buy it?", a: "Yes. New users get a 14-day Pro preview when they first open the app — no payment required. When it ends, everything falls back to Free cleanly." },
      { q: "Does Family Sharing work?", a: "Yes. If you buy Pro, anyone in your Family Sharing group gets it too." },
      { q: "What if I bought Pro and I get a new phone?", a: "Sign in with the same Apple ID and tap \u201CRestore purchases\u201D in Settings. Pro comes back for free." },
    ],
  },
  {
    heading: "Privacy & data",
    blurb: "Where your trades live and who can see them.",
    items: [
      { q: "Where is my data stored?", a: "By default, on your device. Nowhere else. There are no accounts and no servers holding your trade history." },
      { q: "What about iCloud sync?", a: "iCloud sync is optional and off by default. When you turn it on, your data syncs across your Apple devices through your private iCloud — Regular Guy Labs never sees it. It's end-to-end encrypted by Apple." },
      { q: "Do you track me or sell my data?", a: "No. There are no analytics SDKs, no ad networks, and no data brokers in the app. The only network calls the app makes are to Apple (for purchases and iCloud)." },
      { q: "How do I export my data?", a: "Pro users can export a full CSV of every trade from Settings → Export. Your data, your call." },
    ],
  },
  {
    heading: "Platform & devices",
    blurb: "What we support today and what's coming.",
    items: [
      { q: "What devices are supported?", a: "iPhone running iOS 17 or later. The app is optimized for iPhone screens from the Mini up through the Pro Max." },
      { q: "Is there an iPad version?", a: "iPad support is on the roadmap. The iPhone app runs on iPad today via the iPhone-app compatibility mode." },
      { q: "What about Android or the web?", a: "Not planned. We're staying focused on doing the iPhone version well." },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="page-intro__kicker">FAQ</span>
          <h1>Questions we hear a lot.</h1>
          <p>
            Can&apos;t find what you&apos;re looking for?{" "}
            <Link href="/support" style={{ color: "var(--accent)", borderBottom: "1px solid currentColor" }}>
              Send us a note.
            </Link>
          </p>
        </div>
      </section>

      <div className="container">
        <div className="faq-groups">
          {FAQ.map((group, gi) => (
            <section key={gi} className="faq-group">
              <h2>{group.heading}</h2>
              <p>{group.blurb}</p>
              <div className="faq">
                {group.items.map((it, i) => (
                  <details key={i} open={gi === 0 && i === 0}>
                    <summary>{it.q}</summary>
                    <div>{it.a}</div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
