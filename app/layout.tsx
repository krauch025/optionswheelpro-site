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
  metadataBase: new URL("https://optionswheelpro.com"),
  title: {
    default: "Options Wheel Pro — The calm way to run the wheel strategy",
    template: "%s — Options Wheel Pro",
  },
  description:
    "A quiet, thoughtful iPhone app for tracking cash-secured puts, covered calls, and the long slow compound of premium collected.",
  openGraph: {
    title: "Options Wheel Pro",
    description: "The calm way to run the wheel strategy.",
    url: "https://optionswheelpro.com",
    siteName: "Options Wheel Pro",
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
