interface Props {
  size?: number;
  color?: string;
}

export default function CubeLogo({ size = 28, color = "#95fe7c" }: Props) {
  const s = size;
  const cx = s / 2;
  const cy = s / 2;
  const r = s * 0.34;
  const h = r * 0.57;

  const topFace = [
    [cx, cy - h * 2],
    [cx + r, cy - h],
    [cx, cy],
    [cx - r, cy - h],
  ]
    .map((p) => p.join(","))
    .join(" ");

  const leftFace = [
    [cx - r, cy - h],
    [cx, cy],
    [cx, cy + h * 2],
    [cx - r, cy + h],
  ]
    .map((p) => p.join(","))
    .join(" ");

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
      <polygon points={rightFace} fill={color} opacity="0.35" />
      <polygon points={leftFace} fill={color} opacity="0.55" />
      <polygon points={topFace} fill={color} opacity="0.9" />
      <polygon points={topFace} fill="none" stroke={color} strokeWidth="0.6" opacity="0.8" />
      <polygon points={leftFace} fill="none" stroke={color} strokeWidth="0.6" opacity="0.6" />
      <polygon points={rightFace} fill="none" stroke={color} strokeWidth="0.6" opacity="0.5" />
      <circle cx={cx} cy={cy} r={s * 0.04} fill={color} opacity="0.9" />
    </svg>
  );
}
