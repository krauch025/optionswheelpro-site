type Props = { up?: boolean; width?: number; height?: number };

export function Spark({ up = true, width = 120, height = 28 }: Props) {
  const pts = up
    ? [[0, 22], [12, 20], [22, 16], [34, 18], [48, 12], [62, 14], [76, 8], [90, 10], [104, 4], [120, 6]]
    : [[0, 6], [12, 10], [22, 8], [34, 14], [48, 10], [62, 18], [76, 16], [90, 22], [104, 18], [120, 24]];
  const d = "M " + pts.map((p) => p.join(" ")).join(" L ");
  const color = up ? "var(--positive)" : "var(--negative)";
  return (
    <svg
      className="pf-spark"
      viewBox={`0 0 120 ${height}`}
      preserveAspectRatio="none"
      style={{ width, height }}
    >
      <path d={d} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
