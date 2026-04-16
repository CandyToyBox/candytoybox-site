"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollingTicker from "@/components/ScrollingTicker";
import AnimatedStat from "@/components/AnimatedStat";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const projects = [
  {
    id: "wavewarz",
    label: "WaveWarz",
    tag: "Co-Founder · Live on Solana",
    desc: "ONCHAIN music battle trading arena. Artists compete, traders bet, everyone gets paid — all on Solana mainnet. 470+ SOL volume. YouTube livestream M–F.",
    stat: "470+ SOL",
    statLabel: "trading volume",
    href: "https://wavewarz.info",
  },
  {
    id: "nft-press",
    label: "NFT Press",
    tag: "Co-Founder · Live · First Sale",
    desc: "A digital community service exchange, run agentically. 9 API endpoints on Coinbase Bazaar — AI agents pay USDC per call. The invisible backend for NFT communities.",
    stat: "9",
    statLabel: "x402 API endpoints live",
    href: "https://pressreleasemarketplace.com",
  },
  {
    id: "zao",
    label: "THE ZAO",
    tag: "Co-Founder · Visual Brand Strategist",
    desc: "ZAO-PALOOZA at NFT NYC 2024. ZAO-CHELLA at Miami Art Basel 2024. 53 projects, 26 sponsors, global metaverse stream. All the branding: mine.",
    stat: "2",
    statLabel: "major live events built",
    href: "https://zaofestivals.com",
  },
];

const services = [
  {
    name: "Friction Report",
    price: "$149",
    desc: "Submit your app or site. Get a written UX audit back in 48h — where it breaks, where users drop off, what to fix first.",
    async: true,
  },
  {
    name: "AI Stack Blueprint",
    price: "$99",
    desc: "Tell me what you're building. Get a custom AI tool stack recommendation — which tools, in what order, what to skip.",
    async: true,
  },
  {
    name: "NFT Press Release",
    price: "$249",
    desc: "Your NFT collection gets researched, written up as an official press release, and paired with Dark Room visuals.",
    async: true,
  },
  {
    name: "Strategy Hour",
    price: "$200/hr",
    desc: "Web3, AI tools, events, community, business model. You bring the problem. I bring options, references, and a direction.",
    async: false,
  },
];

const currentlyBuilding = [
  { name: "WaveWarz", status: "YouTube livestream M–F · Quick Battles · Solana mainnet", href: "https://wavewarz.info" },
  { name: "NFT Press", status: "x402 API live · Supabase lore DB · Stripe wired", href: "https://pressreleasemarketplace.com" },
  { name: "AI Agent System", status: "candy_cookz · lil_lob · LobBET · trading agent · running daily", href: "https://github.com/CandyToyBox" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 grid-bg radial-green overflow-hidden">
        <div className="relative max-w-6xl mx-auto w-full">
          {/* Status badge */}
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#95fe7c] animate-pulse-dot" />
            <span className="text-[#95fe7c] text-xs font-inter tracking-widest uppercase">
              Available for hire · New York
            </span>
          </motion.div>

          {/* Main headline */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-rajdhani font-bold text-[#f8f8f0] leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(3.5rem, 10vw, 8.5rem)" }}
            >
              BUILDING THE
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="font-rajdhani font-bold text-[#95fe7c] leading-[0.92] tracking-tight text-glow"
              style={{ fontSize: "clamp(3.5rem, 10vw, 8.5rem)" }}
            >
              INTERNET I OWN.
            </motion.h1>
          </div>

          {/* Subline */}
          <motion.p
            {...fadeUp(0.45)}
            className="font-rajdhani font-medium text-xl md:text-2xl text-[#8a8fa8] tracking-widest uppercase mb-14"
          >
            ONCHAIN · In production · Available for hire
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="font-rajdhani font-bold text-base uppercase tracking-widest px-8 py-3.5 bg-[#95fe7c] text-[#08090f] hover:opacity-90 transition-opacity"
            >
              Hire Me
            </Link>
            <Link
              href="/work"
              className="font-rajdhani font-bold text-base uppercase tracking-widest px-8 py-3.5 border border-[rgba(149,254,124,0.3)] text-[#f8f8f0] hover:border-[#95fe7c] hover:text-[#95fe7c] transition-colors"
            >
              See the Work
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-[rgba(149,254,124,0.4)] to-transparent" />
        </motion.div>
      </section>

      {/* ── TICKER ───────────────────────────────────────── */}
      <ScrollingTicker />

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="py-24 px-6 border-b border-[rgba(149,254,124,0.08)]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          <AnimatedStat value={470} suffix="+ SOL" label="WaveWarz trading volume" />
          <AnimatedStat value={200} suffix="+" label="AI apps built" />
          <AnimatedStat value={53} label="projects at ZAO-CHELLA" />
          <AnimatedStat value={9} label="x402 API endpoints live" />
        </div>
      </section>

      {/* ── CURRENTLY BUILDING ───────────────────────────── */}
      <section className="py-24 px-6 border-b border-[rgba(149,254,124,0.08)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#95fe7c] animate-pulse-dot" />
              <span className="font-rajdhani font-bold text-xs uppercase tracking-widest text-[#95fe7c]">
                Right Now
              </span>
            </div>
            <h2
              className="font-rajdhani font-bold text-[#f8f8f0] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Currently Building
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3">
            {currentlyBuilding.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-center justify-between p-5 border border-[rgba(149,254,124,0.1)] bg-[#0d1321]/40 hover:border-[rgba(149,254,124,0.3)] hover:bg-[#0d1321]/80 transition-all card-shine"
              >
                <div className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#95fe7c] animate-pulse-dot flex-shrink-0" />
                  <span className="font-rajdhani font-bold text-lg text-[#f8f8f0] group-hover:text-[#95fe7c] transition-colors">
                    {item.name}
                  </span>
                </div>
                <span className="text-xs font-inter text-[#4a4f62] group-hover:text-[#8a8fa8] transition-colors hidden md:block">
                  {item.status}
                </span>
                <span className="text-[#4a4f62] group-hover:text-[#95fe7c] transition-colors text-lg">
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────────── */}
      <section className="py-24 px-6 border-b border-[rgba(149,254,124,0.08)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <span className="font-rajdhani font-bold text-xs uppercase tracking-widest text-[#95fe7c] block mb-3">
                Portfolio
              </span>
              <h2
                className="font-rajdhani font-bold text-[#f8f8f0] leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                What I&apos;ve Built
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden md:inline-flex items-center gap-2 text-sm font-inter text-[#8a8fa8] hover:text-[#95fe7c] transition-colors"
            >
              All work →
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <motion.a
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative flex flex-col p-6 border border-[rgba(149,254,124,0.1)] bg-[#0d1321]/40 hover:border-[rgba(149,254,124,0.25)] hover:bg-[#0d1321]/70 transition-all min-h-[280px] card-shine"
              >
                <span className="font-rajdhani text-xs uppercase tracking-widest text-[#95fe7c] mb-4 opacity-70">
                  {p.tag}
                </span>
                <h3 className="font-rajdhani font-bold text-[#f8f8f0] text-2xl mb-3 group-hover:text-[#95fe7c] transition-colors">
                  {p.label}
                </h3>
                <p className="text-sm font-inter text-[#8a8fa8] leading-relaxed flex-1">
                  {p.desc}
                </p>
                <div className="mt-6 pt-4 border-t border-[rgba(149,254,124,0.08)] flex items-center justify-between">
                  <div>
                    <span className="font-rajdhani font-bold text-xl text-[#95fe7c]">{p.stat}</span>
                    <span className="text-xs text-[#4a4f62] font-inter ml-2">{p.statLabel}</span>
                  </div>
                  <span className="text-[#4a4f62] group-hover:text-[#95fe7c] transition-colors text-xl">→</span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-6 md:hidden text-center">
            <Link href="/work" className="text-sm font-inter text-[#8a8fa8] hover:text-[#95fe7c] transition-colors">
              See all work →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES TEASER ──────────────────────────────── */}
      <section className="py-24 px-6 border-b border-[rgba(149,254,124,0.08)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <span className="font-rajdhani font-bold text-xs uppercase tracking-widest text-[#95fe7c] block mb-3">
                Services
              </span>
              <h2
                className="font-rajdhani font-bold text-[#f8f8f0] leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Work With Me
              </h2>
            </div>
            <Link
              href="/services"
              className="hidden md:inline-flex items-center gap-2 text-sm font-inter text-[#8a8fa8] hover:text-[#95fe7c] transition-colors"
            >
              All services →
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 border border-[rgba(149,254,124,0.1)] bg-[#0d1321]/40 hover:border-[rgba(149,254,124,0.2)] transition-all card-shine"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-rajdhani font-bold text-[#f8f8f0] text-lg">{s.name}</h3>
                  <div className="flex flex-col items-end gap-1">
                    <span className="font-rajdhani font-bold text-[#95fe7c] text-base">{s.price}</span>
                    {s.async && (
                      <span className="text-[10px] font-inter text-[#4a4f62] uppercase tracking-wide">
                        async · no call
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm font-inter text-[#8a8fa8] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-3 font-rajdhani font-bold text-base uppercase tracking-widest px-8 py-3.5 border border-[rgba(149,254,124,0.3)] text-[#f8f8f0] hover:border-[#95fe7c] hover:text-[#95fe7c] transition-colors"
            >
              Full services + pricing →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="font-rajdhani font-bold text-[#f8f8f0] mb-6 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              BUILDING SOMETHING<br />
              <span className="text-[#95fe7c] text-glow">THAT NEEDS TO WORK?</span>
            </h2>
            <p className="text-[#8a8fa8] font-inter text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              I find where it breaks, explain why in terms everyone can act on, and help you fix it — or build the replacement.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/services"
                className="font-rajdhani font-bold text-base uppercase tracking-widest px-10 py-4 bg-[#95fe7c] text-[#08090f] hover:opacity-90 transition-opacity"
              >
                Let&apos;s Work Together
              </Link>
              <Link
                href="/contact"
                className="font-rajdhani font-bold text-base uppercase tracking-widest px-10 py-4 border border-[rgba(149,254,124,0.3)] text-[#f8f8f0] hover:border-[#95fe7c] hover:text-[#95fe7c] transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
