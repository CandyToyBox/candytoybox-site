"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090f]/90 backdrop-blur-md border-b border-[rgba(149,254,124,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-rajdhani font-bold text-[#95fe7c] tracking-widest text-lg uppercase hover:opacity-80 transition-opacity"
        >
          CANDY
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-inter transition-colors ${
                pathname === l.href
                  ? "text-[#95fe7c]"
                  : "text-[#8a8fa8] hover:text-[#f8f8f0]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/services"
            className="text-sm font-inter font-medium px-4 py-1.5 border border-[#95fe7c] text-[#95fe7c] hover:bg-[#95fe7c] hover:text-[#08090f] transition-all rounded-sm"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-px bg-[#f8f8f0] transition-transform origin-center ${open ? "rotate-45 translate-y-[5px]" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-[#f8f8f0] transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-[#f8f8f0] transition-transform origin-center ${open ? "-rotate-45 -translate-y-[5px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d1321] border-t border-[rgba(149,254,124,0.08)] px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-rajdhani font-bold text-2xl uppercase tracking-wide transition-colors ${
                pathname === l.href ? "text-[#95fe7c]" : "text-[#f8f8f0]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/services"
            className="inline-block font-rajdhani font-bold text-2xl uppercase tracking-wide px-6 py-3 border border-[#95fe7c] text-[#95fe7c] hover:bg-[#95fe7c] hover:text-[#08090f] transition-all w-fit"
          >
            Hire Me
          </Link>
        </div>
      )}
    </header>
  );
}
