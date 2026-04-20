"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  { href: "/screenshots", label: "Screenshots" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/support", label: "Support" },
];

export function SiteNav() {
  const pathname = usePathname();
  const normalize = (p: string) => (p === "/" ? p : p.replace(/\/$/, ""));
  const current = normalize(pathname || "/");

  return (
    <nav className="site-nav">
      <div className="site-nav__inner container">
        <Link className="site-nav__brand" href="/">
          <img src="/icon-forest-light-128.png" alt="" />
          <span>Options Wheel Pro</span>
        </Link>
        <div className="site-nav__links">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={current === l.href ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
          <a className="site-nav__cta site-nav__links--keep" href="#download">
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
