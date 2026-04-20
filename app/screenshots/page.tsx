import type { Metadata } from "next";
import { PhoneAnalytics } from "@/components/PhoneAnalytics";
import { PhoneDashboard } from "@/components/PhoneDashboard";
import { PhoneNewTrade } from "@/components/PhoneNewTrade";
import { PhoneWheels } from "@/components/PhoneWheels";

export const metadata: Metadata = {
  title: "Screenshots",
  description: "A tour through Options Wheel Pro — Analytics, Dashboard, New Trade, and Wheels.",
};

export default function ScreenshotsPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="page-intro__kicker">Screenshots</span>
          <h1>A tour through the app, one screen at a time.</h1>
          <p>
            Every screen in Options Wheel Pro is designed to do one thing well. Here&apos;s the whole guided tour.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="gallery">
          <div className="gallery__item">
            <PhoneAnalytics />
            <h3>Analytics</h3>
            <p>Win rate, monthly trends, best and worst trades, and a breakdown by ticker. The scoreboard for the wheel.</p>
          </div>
          <div className="gallery__item">
            <PhoneDashboard />
            <h3>Dashboard</h3>
            <p>Premium collected, open positions, and the trailing shape of your performance. Your home screen.</p>
          </div>
          <div className="gallery__item">
            <PhoneNewTrade />
            <h3>New Trade</h3>
            <p>Five fields. Log a CSP, covered call, or underlying buy/sell in ten seconds flat.</p>
          </div>
          <div className="gallery__item">
            <PhoneWheels />
            <h3>Wheels</h3>
            <p>A whole wheel on a ticker, grouped and summarized as the cycle it really is.</p>
          </div>
        </div>
      </div>
    </>
  );
}
