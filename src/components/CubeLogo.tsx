interface Props {
  size?: number;
  color?: string;
}

export default function CubeLogo({ size = 28, color = "#95fe7c" }: Props) {
  const s = size;
  // Isometric cube — blockchain/node feel
  const cx = s / 2;
  const cy = s / 2;
  const r = s * 0.34;
  const h = r * 0.57; // isometric vertical ratio

  // Top face (parallelogram)
  const topFace = [
    [cx, cy - h * 2],
    [cx + r, cy - h],
    [cx, cy],
    [cx - r, cy - h],
  ]
    .map((p) => p.join(","))
    .join(" ");

  // Left face
  const leftFace = [
    [cx - r, cy - h],
    [cx, cy],
    [cx, cy + h * 2],
    [cx - r, cy + h],
  ]
    .map((p) => p.join(","))
    .join(" ");

  // Right face
  const rightFace = [
    [cx, cy],
    [cx + r, cy - h],
    [cx + r, cy + h],
    [cx, cy + h * 2],
  ]
    .map((p) => p.join(","))
    .join(" ");

  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CandyToyBox"
    >
      {/* Right face — darkest */}
      <polygon points={rightFace} fill={color} opacity="0.35" />
      {/* Left face — medium */}
      <polygon points={leftFace} fill={color} opacity="0.55" />
      {/* Top face — brightest */}
      <polygon points={topFace} fill={color} opacity="0.9" />

      {/* Edge lines */}
      <polygon points={topFace} fill="none" stroke={color} strokeWidth="0.6" opacity="0.8" />
      <polygon points={leftFace} fill="none" stroke={color} strokeWidth="0.6" opacity="0.6" />
      <polygon points={rightFace} fill="none" stroke={color} strokeWidth="0.6" opacity="0.5" />

      {/* Center dot — the node */}
      <circle cx={cx} cy={cy} r={s * 0.04} fill={color} opacity="0.9" />
    </svg>
  );
}
