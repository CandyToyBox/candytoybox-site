"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollingTicker from "@/components/ScrollingTicker";
import AnimatedStat from "@/components/AnimatedStat";

// ── Animation helpers ──────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
});

// ── Data ──────────────────────────────────────────────────
const projects = [
  {
    id: "wavewarz",
    label: "WaveWarz",
    tag: "Co-Founder · Live on Solana",
    desc: "ONCHAIN music battle trading arena. Artists compete, traders bet, everyone gets paid — all on Solana mainnet. 470+ SOL volume. YouTube livestream M–F 8:30pm.",
    stat: "470+", statUnit: "SOL", statLabel: "trading volume",
    href: "https://wavewarz.info",
    badge: "LIVE",
  },
  {
    id: "nft-press",
    label: "NFT Press",
    tag: "Co-Founder · Agentic Platform",
    desc: "Digital community service exchange, run agentically. 9 API endpoints on Coinbase Bazaar — AI agents pay USDC per call. First sale confirmed.",
    stat: "9", statUnit: "", statLabel: "x402 endpoints on Bazaar",
    href: "https://pressreleasemarketplace.com",
    badge: "LIVE",
  },
  {
    id: "zao",
    label: "THE ZAO",
    tag: "Co-Founder · Visual Brand Strategist",
    desc: "ZAO-PALOOZA at NFT NYC 2024. ZAO-CHELLA at Miami Art Basel 2024. 53 projects, 26 sponsors, global metaverse stream. All the branding: mine.",
    stat: "53", statUnit: "", statLabel: "projects at ZAO-CHELLA",
    href: "https://zaofestivals.com",
    badge: "EVENT",
  },
];

const currentBuilds = [
  { name: "WaveWarz", note: "YouTube livestream M–F · Quick Battles · Solana mainnet", href: "https://wavewarz.info" },
  { name: "NFT Press", note: "x402 API · Supabase lore DB · Stripe · agentic exchange", href: "https://pressreleasemarketplace.com" },
  { name: "Agent Stack", note: "candy_cookz + lil_lob + LobBET + trading agent · daily ops", href: "https://github.com/CandyToyBox" },
];

const services = [
  { name: "Friction Report", price: "$149", note: "async · 48h", desc: "UX audit of your app or site — where it breaks, what to fix first." },
  { name: "AI Stack Blueprint", price: "$99", note: "async · 48h", desc: "Custom AI tool stack for your use case. Which tools, in what order, what to skip." },
  { name: "Strategy Hour", price: "$200", note: "per hour", desc: "Web3, AI, events, community, business model. You bring the problem." },
  { name: "NFT Press Release", price: "$249", note: "async · 72h", desc: "5-source research + AP-format press release + Dark Room visuals." },
];

// ChatGPT early adopter stats
const chatgptStats = [
  { value: "Top 5%", label: "of all ChatGPT users\nby messages sent" },
  { value: "First 10%", label: "globally to\nuse ChatGPT" },
  { value: "4,938", label: "messages sent\nbefore switching" },
  { value: "475", label: "total chats\n(Dec 2022–Dec 2024)" },
  { value: "503", label: "AI images\ngenerated" },
  { value: "Dec '24", label: "switched to Claude\n+ Gemini Pro" },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Noise overlay */}
      <div className="noise" aria-hidden />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 grid-bg overflow-hidden">
        {/* Radial glow */}
        <div className="absolute inset-0 radial-green pointer-events-none" />

        {/* Large ambient orb */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none animate-glow"
          style={{
            background: "radial-gradient(circle, rgba(149,254,124,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(149,254,124,0.04) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Cube accent — decorative, top right */}
        <div className="absolute top-24 right-8 md:right-16 opacity-10 pointer-events-none animate-float hidden md:block">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            {/* Big isometric cube outline */}
            <polygon points="60,8 104,32 104,88 60,112 16,88 16,32" stroke="#95fe7c" strokeWidth="1" fill="none" opacity="0.6" />
            <line x1="60" y1="8" x2="60" y2="112" stroke="#95fe7c" strokeWidth="0.5" opacity="0.4" />
            <line x1="16" y1="32" x2="104" y2="88" stroke="#95fe7c" strokeWidth="0.5" opacity="0.4" />
            <line x1="104" y1="32" x2="16" y2="88" stroke="#95fe7c" strokeWidth="0.5" opacity="0.4" />
            <circle cx="60" cy="60" r="3" fill="#95fe7c" opacity="0.8" />
            <circle cx="60" cy="8" r="2" fill="#95fe7c" opacity="0.5" />
            <circle cx="104" cy="32" r="2" fill="#95fe7c" opacity="0.5" />
            <circle cx="104" cy="88" r="2" fill="#95fe7c" opacity="0.5" />
            <circle cx="60" cy="112" r="2" fill="#95fe7c" opacity="0.5" />
            <circle cx="16" cy="88" r="2" fill="#95fe7c" opacity="0.5" />
            <circle cx="16" cy="32" r="2" fill="#95fe7c" opacity="0.5" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto w-full">
          {/* Status */}
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#95fe7c] animate-pulse-dot" />
            <span className="label text-[#95fe7c]">Available for hire · New York</span>
          </motion.div>

          {/* Headline */}
          <div className="mb-2">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-rajdhani font-bold text-[#f8f8f0] leading-[0.9] tracking-tight break-words"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
            >
              BUILDING THE
            </motion.h1>
          </div>
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-rajdhani font-bold text-[#95fe7c] leading-[0.9] tracking-tight text-glow break-words"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
            >
              INTERNET I OWN.
            </motion.h1>
          </div>

          {/* Subline */}
          <motion.p
            {...fadeUp(0.45)}
            className="font-rajdhani font-medium uppercase tracking-[0.2em] text-[#8a8fa8] mb-14"
            style={{ fontSize: "clamp(0.85rem, 2vw, 1.25rem)" }}
          >
            ONCHAIN · In production · Available for hire
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="font-rajdhani font-bold text-sm md:text-base uppercase tracking-widest px-7 py-3.5 bg-[#95fe7c] text-[#08090f] hover:opacity-90 transition-opacity"
            >
              Hire Me
            </Link>
            <Link
              href="/work"
              className="font-rajdhani font-bold text-sm md:text-base uppercase tracking-widest px-7 py-3.5 border border-[rgba(149,254,124,0.35)] text-[#f8f8f0] hover:border-[#95fe7c] hover:text-[#95fe7c] transition-all"
            >
              See the Work →
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-[rgba(149,254,124,0.5)] to-transparent" />
        </motion.div>
      </section>

      {/* ── TICKER ─────────────────────────────────────────── */}
      <ScrollingTicker />

      {/* ── STATS ──────────────────────────────────────────── */}
      <section className="py-20 px-6 border-b border-[rgba(149,254,124,0.07)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <AnimatedStat value={470} suffix="+ SOL" label="WaveWarz volume" />
            <AnimatedStat value={200} suffix="+" label="AI apps built" />
            <AnimatedStat value={53} label="projects at ZAO-CHELLA" />
            <AnimatedStat value={9} label="x402 API endpoints live" />
          </div>
        </div>
      </section>

      {/* ── CURRENTLY BUILDING ─────────────────────────────── */}
      <section className="py-20 px-6 border-b border-[rgba(149,254,124,0.07)]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#95fe7c] animate-pulse-dot" />
              <span className="label">Right Now</span>
            </div>
            <h2 className="font-rajdhani font-bold text-[#f8f8f0] break-words" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}>
              Currently Building
            </h2>
          </motion.div>

          <div className="flex flex-col gap-2.5">
            {currentBuilds.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-center justify-between p-5 card card-corner"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#95fe7c] animate-pulse-dot flex-shrink-0" />
                  <span className="font-rajdhani font-bold text-lg text-[#f8f8f0] group-hover:text-[#95fe7c] transition-colors">
                    {item.name}
                  </span>
                </div>
                <span className="text-xs font-inter text-[#4a4f62] group-hover:text-[#8a8fa8] transition-colors hidden md:block truncate max-w-xs text-right">
                  {item.note}
                </span>
                <span className="text-[#4a4f62] group-hover:text-[#95fe7c] transition-colors ml-4 flex-shrink-0">→</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ──────────────────────────────── */}
      <section className="py-20 px-6 border-b border-[rgba(149,254,124,0.07)]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="label block mb-3">Portfolio</span>
              <h2 className="font-rajdhani font-bold text-[#f8f8f0] break-words" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}>
                What I&apos;ve Built
              </h2>
            </div>
            <Link href="/work" className="text-sm font-inter text-[#8a8fa8] hover:text-[#95fe7c] transition-colors whitespace-nowrap">
              View all work →
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <motion.a
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col p-6 card card-corner min-h-[260px]"
              >
                {/* Top */}
                <div className="flex items-start justify-between mb-4">
                  <span className="label opacity-70">{p.tag}</span>
                  <span className="font-rajdhani font-bold text-[10px] tracking-widest px-2 py-0.5 border border-[rgba(149,254,124,0.3)] text-[#95fe7c]">
                    {p.badge}
                  </span>
                </div>

                <h3 className="font-rajdhani font-bold text-[#f8f8f0] text-2xl mb-3 group-hover:text-[#95fe7c] transition-colors">
                  {p.label}
                </h3>
                <p className="text-sm font-inter text-[#8a8fa8] leading-relaxed flex-1">{p.desc}</p>

                {/* Bottom stat */}
                <div className="mt-5 pt-4 border-t border-[rgba(149,254,124,0.07)] flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="stat-num text-xl">{p.stat}</span>
                    {p.statUnit && <span className="text-[#95fe7c] font-rajdhani font-bold text-base">{p.statUnit}</span>}
                    <span className="text-xs text-[#4a4f62] font-inter ml-1">{p.statLabel}</span>
                  </div>
                  <span className="text-[#4a4f62] group-hover:text-[#95fe7c] transition-colors text-lg">→</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZAO EVENT PHOTO ──────────────────────────────────── */}
      <section className="py-0 border-b border-[rgba(149,254,124,0.07)] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full h-[420px] md:h-[560px]"
        >
          <Image
            src="/images/zao-chella-event.jpg"
            alt="ZAO-CHELLA Miami Art Basel 2024 — sponsor step-and-repeat wall"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090f] via-[rgba(8,9,15,0.5)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,9,15,0.6)] to-transparent" />

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="label block mb-2">Dec 6, 2024 · Miami Art Basel</span>
                <h3 className="font-rajdhani font-bold text-[#f8f8f0]" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
                  ZAO-CHELLA
                </h3>
                <p className="text-sm font-inter text-[#8a8fa8] mt-1">53 projects · 26 sponsors · I built all the branding.</p>
              </div>
              <div className="flex gap-4">
                <div className="text-right">
                  <span className="stat-num text-2xl block">53</span>
                  <span className="text-[10px] font-inter text-[#4a4f62]">projects</span>
                </div>
                <div className="text-right">
                  <span className="stat-num text-2xl block">26</span>
                  <span className="text-[10px] font-inter text-[#4a4f62]">sponsors</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── EARLY ADOPTER / CHATGPT STATS ───────────────────── */}
      <section className="py-20 px-6 border-b border-[rgba(149,254,124,0.07)] relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <span className="label block mb-3">The Record</span>
            <h2 className="font-rajdhani font-bold text-[#f8f8f0] mb-4 break-words" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}>
              Early Adopter. On Record.
            </h2>
            <p className="text-[#8a8fa8] font-inter text-sm leading-relaxed max-w-xl">
              Before most people knew what a prompt was. Left ChatGPT in December 2024 when Claude and Gemini Pro got good enough to actually replace it.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {chatgptStats.map((s, i) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="p-5 card card-corner"
              >
                <span className="stat-num text-2xl md:text-3xl block mb-2">{s.value}</span>
                <span className="text-[11px] font-inter text-[#8a8fa8] leading-relaxed whitespace-pre-line">{s.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-[11px] font-inter text-[#4a4f62] mt-6 italic"
          >
            Source: ChatGPT Wrapped 2025 — verified stats
          </motion.p>
        </div>
      </section>

      {/* ── SERVICES TEASER ────────────────────────────────── */}
      <section className="py-20 px-6 border-b border-[rgba(149,254,124,0.07)]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="label block mb-3">Services</span>
              <h2 className="font-rajdhani font-bold text-[#f8f8f0] break-words" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}>
                Work With Me
              </h2>
            </div>
            <Link href="/services" className="text-sm font-inter text-[#8a8fa8] hover:text-[#95fe7c] transition-colors whitespace-nowrap">
              Full pricing →
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="p-6 card card-corner"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-rajdhani font-bold text-[#f8f8f0] text-lg">{s.name}</h3>
                  <div className="text-right">
                    <span className="stat-num text-base">{s.price}</span>
                    <span className="text-[10px] font-inter text-[#4a4f62] block">{s.note}</span>
                  </div>
                </div>
                <p className="text-sm font-inter text-[#8a8fa8] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-rajdhani font-bold text-sm uppercase tracking-widest px-8 py-3.5 border border-[rgba(149,254,124,0.3)] text-[#f8f8f0] hover:border-[#95fe7c] hover:text-[#95fe7c] transition-all"
            >
              Full services + pricing →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ─────────────────────────────────────── */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 radial-green-center pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
            <h2
              className="font-rajdhani font-bold text-[#f8f8f0] mb-5 break-words leading-tight"
              style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
            >
              BUILDING SOMETHING<br />
              <span className="text-[#95fe7c] text-glow">THAT NEEDS TO WORK?</span>
            </h2>
            <p className="text-[#8a8fa8] font-inter text-base md:text-lg mb-12 max-w-lg mx-auto leading-relaxed">
              I find where it breaks, explain why in terms everyone can act on, and help you fix it — or build the replacement.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/services" className="font-rajdhani font-bold text-sm md:text-base uppercase tracking-widest px-9 py-4 bg-[#95fe7c] text-[#08090f] hover:opacity-90 transition-opacity">
                Let&apos;s Work Together
              </Link>
              <Link href="/contact" className="font-rajdhani font-bold text-sm md:text-base uppercase tracking-widest px-9 py-4 border border-[rgba(149,254,124,0.3)] text-[#f8f8f0] hover:border-[#95fe7c] hover:text-[#95fe7c] transition-all">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
