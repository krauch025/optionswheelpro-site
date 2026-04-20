import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none" as const,
  stroke: "currentColor" as const,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Icon = {
  check: (p: P = {}) => (
    <svg width="16" height="16" viewBox="0 0 24 24" {...base} strokeWidth={2.5} {...p}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  xmark: (p: P = {}) => (
    <svg width="16" height="16" viewBox="0 0 24 24" {...base} strokeWidth={2} {...p}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  apple: (p: P = {}) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  ),
  chart: (p: P = {}) => (
    <svg width="22" height="22" viewBox="0 0 24 24" {...base} strokeWidth={2} {...p}>
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 4 3 5-7" />
    </svg>
  ),
  repeat: (p: P = {}) => (
    <svg width="18" height="18" viewBox="0 0 24 24" {...base} strokeWidth={2} {...p}>
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 014-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 01-4 4H3" />
    </svg>
  ),
  calc: (p: P = {}) => (
    <svg width="22" height="22" viewBox="0 0 24 24" {...base} strokeWidth={2} {...p}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="12" x2="8.01" y2="12" />
      <line x1="12" y1="12" x2="12.01" y2="12" />
      <line x1="16" y1="12" x2="16.01" y2="12" />
      <line x1="8" y1="16" x2="8.01" y2="16" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
      <line x1="16" y1="16" x2="16.01" y2="16" />
    </svg>
  ),
  bell: (p: P = {}) => (
    <svg width="22" height="22" viewBox="0 0 24 24" {...base} strokeWidth={2} {...p}>
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  ),
  lock: (p: P = {}) => (
    <svg width="22" height="22" viewBox="0 0 24 24" {...base} strokeWidth={2} {...p}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 018 0v4" />
    </svg>
  ),
  book: (p: P = {}) => (
    <svg width="22" height="22" viewBox="0 0 24 24" {...base} strokeWidth={2} {...p}>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5V4.5A2.5 2.5 0 016.5 2z" />
    </svg>
  ),
  mail: (p: P = {}) => (
    <svg width="22" height="22" viewBox="0 0 24 24" {...base} strokeWidth={2} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  menu: (p: P = {}) => (
    <svg width="22" height="22" viewBox="0 0 24 24" {...base} strokeWidth={2} {...p}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  plus: (p: P = {}) => (
    <svg width="18" height="18" viewBox="0 0 24 24" {...base} strokeWidth={2} {...p}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  pie: (p: P = {}) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9v9h9z" />
    </svg>
  ),
  clock: (p: P = {}) => (
    <svg width="18" height="18" viewBox="0 0 24 24" {...base} strokeWidth={2} {...p}>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 16 14" />
    </svg>
  ),
  heart: (p: P = {}) => (
    <svg width="22" height="22" viewBox="0 0 24 24" {...base} strokeWidth={2} {...p}>
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
  shield: (p: P = {}) => (
    <svg width="22" height="22" viewBox="0 0 24 24" {...base} strokeWidth={2} {...p}>
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
    </svg>
  ),
  sun: (p: P = {}) => (
    <svg width="16" height="16" viewBox="0 0 24 24" {...base} strokeWidth={2} {...p}>
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </svg>
  ),
  moon: (p: P = {}) => (
    <svg width="16" height="16" viewBox="0 0 24 24" {...base} strokeWidth={2} {...p}>
      <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
    </svg>
  ),
};
