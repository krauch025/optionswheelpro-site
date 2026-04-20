"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icons";

export function ThemeToggle() {
  const [scheme, setScheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-scheme") as "light" | "dark") || "light";
    setScheme(current);
  }, []);

  function toggle() {
    const next = scheme === "light" ? "dark" : "light";
    setScheme(next);
    document.documentElement.setAttribute("data-scheme", next);
    try {
      localStorage.setItem("owp.site.scheme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={scheme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      title={scheme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {scheme === "light" ? Icon.moon() : Icon.sun()}
    </button>
  );
}
