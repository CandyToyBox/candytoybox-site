import Link from "next/link";

const socials = [
  { label: "X", href: "https://x.com/candytoybox" },
  { label: "GitHub", href: "https://github.com/CandyToyBox" },
  { label: "Farcaster", href: "https://warpcast.com/candytoybox" },
  { label: "YouTube", href: "https://youtube.com/@candytoybox" },
  { label: "Medium", href: "https://medium.com/@candytoybox" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(149,254,124,0.1)] py-14 px-6 md:ml-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <span className="font-rajdhani font-bold text-[#95fe7c] tracking-[0.25em] text-sm uppercase">
              CANDYTOYBOX
            </span>
            <span className="text-[#4a4f62] text-xs font-inter max-w-xs">
              Building the internet I own. ONCHAIN. In production.
            </span>
          </div>

          {/* Nav */}
          <div className="flex gap-8 flex-wrap">
            {[
              { label: "CATALOG", href: "/work" },
              { label: "SERVICES", href: "/services" },
              { label: "BIO", href: "/about" },
              { label: "CONNECT", href: "/contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[#8a8fa8] hover:text-[#f8f8f0] text-xs font-rajdhani font-bold tracking-[0.15em] uppercase transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-5 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4a4f62] hover:text-[#95fe7c] text-sm transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[rgba(149,254,124,0.06)] flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-[#4a4f62] text-xs">
            © {new Date().getFullYear()} Samantha Kinney. All rights reserved.
          </span>
          <span className="text-[#4a4f62] text-xs">
            Jericho, NY · Available for hire globally
          </span>
        </div>
      </div>
    </footer>
  );
}
