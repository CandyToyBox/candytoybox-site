import Image from "next/image";
import Link from "next/link";

const barWidths = [14, 8, 20, 6, 18, 10, 16, 5, 12];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-14 z-[60] flex-col items-center py-5 border-r border-[rgba(255,32,96,0.1)] bg-[#08090f]">
      {/* Logo */}
      <Link href="/" className="flex-shrink-0 mb-5 hover:opacity-80 transition-opacity">
        <Image
          src="/images/candytoybox-logo.jpg"
          alt="CandyToyBox"
          width={38}
          height={38}
          className="rounded-sm"
          priority
        />
      </Link>

      {/* Vertical brand text */}
      <div className="flex-1 flex items-center justify-center">
        <span
          className="font-rajdhani font-bold text-[11px] tracking-[0.35em] text-[#ff2060] uppercase select-none"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          CANDY TOYBOX
        </span>
      </div>

      {/* Decorative barcode */}
      <div className="flex flex-col gap-[3px] items-center mb-4">
        {barWidths.map((w, i) => (
          <div
            key={i}
            className="bg-[#ff2060]/25 rounded-[1px]"
            style={{ width: `${w}px`, height: "2px" }}
          />
        ))}
      </div>

      {/* STATUS: ACTIVE crosshair */}
      <div className="flex flex-col items-center gap-1 mb-3">
        <span className="text-[7px] font-rajdhani font-bold tracking-widest text-[#ff2060]/60 uppercase leading-none">
          STATUS
        </span>
        {/* Crosshair */}
        <div className="relative w-5 h-5 flex items-center justify-center">
          <div className="absolute inset-0 border border-[#ff2060]/40 rounded-sm" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-[#ff2060]/50" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#ff2060]/50" />
          <div className="w-1 h-1 rounded-full bg-[#ff2060] animate-pulse-dot" />
        </div>
      </div>

      {/* Star */}
      <div className="text-[#ff2060]/50 text-xs select-none mb-1">★</div>
    </aside>
  );
}
