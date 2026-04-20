"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import CubeLogo from "./CubeLogo";

const links = [
  { label: "CATALOG", href: "/work" },
  { label: "SERVICES", href: "/services" },
  { label: "BIO", href: "/about" },
  { label: "CONNECT", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#08090f]/90 backdrop-blur-xl border-b border-[rgba(255,32,96,0.08)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 md:pl-20 h-16 flex items-center justify-between">
          {/* Logo — hidden on desktop (sidebar handles it) */}
          <Link href="/" className="flex md:hidden items-center gap-2.5 hover:opacity-80 transition-opacity group">
            <CubeLogo size={22} />
            <span className="font-rajdhani font-bold text-[#ff2060] tracking-[0.22em] text-sm uppercase">
              CANDY
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`font-rajdhani font-bold text-xs tracking-[0.18em] uppercase transition-colors ${
                  pathname === l.href || pathname.startsWith(l.href + "/")
                    ? "text-[#ff2060]"
                    : "text-[#8a8fa8] hover:text-[#f8f8f0]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/services"
              className="font-rajdhani font-bold text-xs uppercase tracking-[0.18em] px-4 py-1.5 border border-[#ff2060] text-[#ff2060] hover:bg-[#ff2060] hover:text-[#08090f] transition-all"
            >
              HIRE
            </Link>
          </div>

          {/* Status indicator — desktop only */}
          <div className="hidden md:flex items-center gap-2 ml-4">
            <span className="text-[9px] font-rajdhani font-bold tracking-[0.15em] text-[#8a8fa8] uppercase">STATUS:</span>
            <span className="text-[9px] font-rajdhani font-bold tracking-[0.15em] text-[#ff2060] uppercase">ACTIVE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2060] animate-pulse-dot ml-0.5" />
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[5px] p-2 z-50"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className={`block w-5 h-px bg-[#f8f8f0] transition-all origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-5 h-px bg-[#f8f8f0] transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[#f8f8f0] transition-all origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#08090f]/95 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div className="absolute top-16 left-0 right-0 bottom-0 flex flex-col justify-center px-8 gap-8">
          {/* Terminal header */}
          <span className="text-[10px] font-rajdhani font-bold tracking-[0.25em] text-[#ff2060]/60 uppercase mb-2">
            SYSTEM_NAV // SELECT_ROUTE
          </span>
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-rajdhani font-bold tracking-wider transition-all ${
                open ? "animate-[fadeUp_0.4s_ease_forwards]" : ""
              }`}
              style={{
                fontSize: "clamp(2rem, 8vw, 3.5rem)",
                animationDelay: `${i * 0.07}s`,
                color: pathname === l.href ? "#ff2060" : "#f8f8f0",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/services"
            className="inline-block font-rajdhani font-bold uppercase tracking-widest text-2xl px-7 py-3.5 bg-[#ff2060] text-[#08090f] w-fit mt-2"
            style={{ animationDelay: "0.28s" }}
          >
            HIRE ME
          </Link>
        </div>
      </div>
    </>
  );
}
