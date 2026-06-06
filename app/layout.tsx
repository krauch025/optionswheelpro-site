import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import { SiteFoot } from "@/components/SiteFoot";
import { SchemeScript } from "@/components/SchemeScript";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wheelright.app"),
  title: {
    default: "Wheelright — Run the options wheel. Run it right.",
    template: "%s — Wheelright",
  },
  description:
    "The iPhone, iPad, and Mac app for tracking the options wheel strategy. Log cash-secured puts and covered calls, watch your wheels cycle, and run the strategy right.",
  openGraph: {
    title: "Wheelright",
    description: "Run the options wheel. Run it right.",
    url: "https://wheelright.app",
    siteName: "Wheelright",
    images: ["/og-image.png"],
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/icon-forest-light-128.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={newsreader.variable} suppressHydrationWarning>
      <head>
        <SchemeScript />
      </head>
      <body>
        <SiteNav />
        {children}
        <SiteFoot />
      </body>
    </html>
  );
}
