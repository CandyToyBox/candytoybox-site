interface Props {
  size?: number;
}

export default function CubeLogo({ size = 28 }: Props) {
  // Unique IDs per size to avoid SVG filter/gradient collisions
  const uid = `ctb-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CandyToyBox"
    >
      <defs>
        <linearGradient id={`${uid}-g`} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#00e5ff" />
          <stop offset="50%"  stopColor="#9b27e8" />
          <stop offset="100%" stopColor="#ff2060" />
        </linearGradient>
        <filter id={`${uid}-f`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer hexagon */}
      <polygon
        points="50,6 88,27 88,73 50,94 12,73 12,27"
        stroke={`url(#${uid}-g)`}
        strokeWidth="3.5"
        strokeLinejoin="round"
        filter={`url(#${uid}-f)`}
      />

      {/* Inner hexagon */}
      <polygon
        points="50,18 78,34 78,66 50,82 22,66 22,34"
        stroke={`url(#${uid}-g)`}
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.8"
      />

      {/* Cube top face / eye housing (diamond) */}
      <polygon
        points="50,24 73,38 50,52 27,38"
        stroke={`url(#${uid}-g)`}
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Eye ring */}
      <ellipse cx="50" cy="38" rx="10" ry="7"
        stroke={`url(#${uid}-g)`}
        strokeWidth="1.5"
      />

      {/* Eye orb */}
      <circle cx="50" cy="37" r="5.5" fill="#ff2060" opacity="0.92" />
      <circle cx="47.5" cy="35" r="2" fill="#ff80a0" opacity="0.65" />

      {/* Left cube face */}
      <polygon
        points="27,52 50,66 50,80 27,66"
        stroke={`url(#${uid}-g)`}
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Right cube face */}
      <polygon
        points="73,52 50,66 50,80 73,66"
        stroke={`url(#${uid}-g)`}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
