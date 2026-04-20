type Props = { size?: number; style?: React.CSSProperties };

export function BrandMark({ size = 32, style }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" style={style} aria-label="Options Wheel Pro">
      <circle cx="28" cy="34" r="22" fill="none" stroke="currentColor" strokeWidth="3.5" />
      <circle cx="28" cy="34" r="4" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <line x1="28" y1="12" x2="28" y2="56" />
        <line x1="6" y1="34" x2="50" y2="34" />
        <line x1="12.5" y1="18.5" x2="43.5" y2="49.5" />
        <line x1="43.5" y1="18.5" x2="12.5" y2="49.5" />
      </g>
      <path
        d="M18 44 Q 34 28 50 20 L 44 19 M 50 20 L 49 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );
}
