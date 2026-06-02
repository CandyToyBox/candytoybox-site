"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollingTicker from "@/components/ScrollingTicker";
import AnimatedStat from "@/components/AnimatedStat";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const workGrid = [
  {
    id: "wavewarz",
    label: "WAVEWARZ",
    sub: "ONCHAIN Music Battle · Solana",
    badge: "LIVE",
    stat: "470+ SOL",
    href: "https://wavewarz.info",
    visual: "wavewarz",
  },
  {
    id: "nft-press",
    label: "NFT PRESS",
    sub: "Agentic Community Exchange",
    badge: "LIVE",
    stat: "9 x402 endpoints",
    href: "https://pressreleasemarketplace.com",
    visual: "nft-press",
  },
  {
    id: "zao",
    label: "ZAO-CHELLA",
    sub: "Miami Art Basel · Dec 2024",
    badge: "EVENT",
    stat: "53 projects · 26 sponsors",
    href: "https://zaofestivals.com",
    visual: "zao",
  },
  {
    id: "agents",
    label: "AGENT STACK",
    sub: "Autonomous AI Infrastructure",
    badge: "DAILY",
    stat: "4 agents · 24/7 ops",
    href: "https://github.com/CandyToyBox",
    visual: "agents",
  },
];

const quickDrops = [
  { name: "Friction Report", price: "$149" },
  { name: "AI Stack Blueprint", price: "$99" },
  { name: "NFT Press Release + Visuals", price: "$249" },
  { name: "Agentic Workflow Map", price: "$299" },
];

const liveSessions = [
  { name: "Strategy Hour", price: "$200/hr" },
  { name: "Build Review", price: "$250/hr" },
  { name: "Idea Session", price: "$175/hr" },
];

const chatgptStats = [
  { value: "Top 5%", label: "of all ChatGPT users\nby messages sent" },
  { value: "First 10%", label: "globally to\nuse ChatGPT" },
  { value: "4,938", label: "messages sent\nbefore switching" },
  { value: "475", label: "total chats\n(Dec 2022–Dec 2024)" },
  { value: "503", label: "AI images\ngenerated" },
  { value: "Dec '24", label: "switched to Claude\n+ Gemini Pro" },
];

function WorkCardVisual({ id }: { id: string }) {
  if (id === "wavewarz") {
    return (
      <>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/wavewarz-preview.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#08090f]/60 to-transparent" />
      </>
    );
  }
  if (id === "nft-press") {
    return (
      <>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/nft-press-preview.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#08090f]/50 to-transparent" />
      </>
    );
  }
  if (id === "zao") {
    return (
      <>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/zao-chella-preview.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090f]/70 via-transparent to-transparent" />
      </>
    );
  }
  // agents — keep CSS
  return (
    <div className="absolute inset-0 bg-[#060910]">
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300">
        <line x1="200" y1="150" x2="80" y2="80" stroke="#95fe7c" strokeWidth="1" />
        <line x1="200" y1="150" x2="320" y2="80" stroke="#95fe7c" strokeWidth="1" />
        <line x1="200" y1="150" x2="80" y2="220" stroke="#95fe7c" strokeWidth="1" />
        <line x1="200" y1="150" x2="320" y2="220" stroke="#95fe7c" strokeWidth="1" />
        <line x1="200" y1="150" x2="200" y2="40" stroke="#95fe7c" strokeWidth="1" />
        <circle cx="200" cy="150" r="6" fill="#95fe7c" />
        <circle cx="80" cy="80" r="4" fill="#95fe7c" />
        <circle cx="320" cy="80" r="4" fill="#95fe7c" />
        <circle cx="80" cy="220" r="4" fill="#95fe7c" />
        <circle cx="320" cy="220" r="4" fill="#95fe7c" />
        <circle cx="200" cy="40" r="4" fill="#95fe7c" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff2060]/5 to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="noise" aria-hidden />

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 grid-bg overflow-hidden">
        <div className="absolute inset-0 radial-green pointer-events-none" />
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none animate-glow"
          style={{ background: "radial-gradient(circle, rgba(255,32,96,0.06) 0%, transparent 70%)", filter: "blur(60px)" }}
        />

        <div className="relative max-w-6xl mx-auto w-full">
          {/* Terminal path */}
          <motion.div {...fadeUp(0)} className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="terminal-path">SYSTEM_LOG_BOOT: CANDYTOYBOX.EXE</span>
            <span className="terminal-path">·</span>
            <span className="terminal-path">FETCHING IDENTITY... OK</span>
          </motion.div>

          <motion.div {...fadeUp(0.05)} className="inline-flex items-center gap-2.5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff2060] animate-pulse-dot" />
            <span className="label text-[#ff2060]">CORE_MISSION_V1.0 · Available for hire</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-rajdhani font-bold text-[#f8f8f0] leading-[0.88] tracking-tight break-words mb-2"
            style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
          >
            BUILDING THE
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-rajdhani font-bold text-[#ff2060] leading-[0.88] tracking-tight text-glow break-words mb-8"
            style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
          >
            INTERNET I OWN.
          </motion.h1>

          <motion.p
            {...fadeUp(0.45)}
            className="font-rajdhani font-medium uppercase tracking-[0.2em] text-[#8a8fa8] mb-14"
            style={{ fontSize: "clamp(0.85rem, 2vw, 1.1rem)" }}
          >
            ONCHAIN · In production · Available for hire
          </motion.p>

          <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-4">
            <Link href="/services" className="font-rajdhani font-bold text-sm md:text-base uppercase tracking-widest px-7 py-3.5 bg-[#ff2060] text-[#08090f] hover:opacity-90 transition-opacity">
              Hire Me
            </Link>
            <Link href="/work" className="font-rajdhani font-bold text-sm md:text-base uppercase tracking-widest px-7 py-3.5 border border-[rgba(255,32,96,0.35)] text-[#f8f8f0] hover:border-[#ff2060] hover:text-[#ff2060] transition-all">
              See the Work →
            </Link>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-[rgba(255,32,96,0.5)] to-transparent" />
        </motion.div>
      </section>

      {/* ══ TICKER ════════════════════════════════════════════ */}
      <ScrollingTicker />

      {/* ══ WORK ══════════════════════════════════════════════ */}
      <section className="border-b border-[rgba(255,32,96,0.07)]">
        {/* Editorial heading row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-6 py-8 md:py-10 border-b border-[rgba(255,32,96,0.07)] flex flex-col sm:flex-row sm:items-end justify-between gap-2"
        >
          <h2
            className="font-rajdhani font-bold text-[#f8f8f0] leading-none tracking-tight"
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
          >
            WORK
          </h2>
          <span className="text-[11px] font-inter text-[#4a4f62] uppercase tracking-widest pb-2">
            UI · WEB3 · SOLIDITY / AI / BRAND
          </span>
        </motion.div>

        {/* 2×2 image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {workGrid.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden border-b border-r border-[rgba(255,32,96,0.07)] aspect-[4/3]"
              style={{ minHeight: "280px" }}
            >
              {/* Visual background */}
              <WorkCardVisual id={p.id} />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#ff2060]/0 group-hover:bg-[#ff2060]/5 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090f] via-[rgba(8,9,15,0.3)] to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div>
                  <h3 className="font-rajdhani font-bold text-[#f8f8f0] group-hover:text-[#ff2060] transition-colors"
                    style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}>
                    {p.label}
                  </h3>
                  <p className="text-xs font-inter text-[#8a8fa8] mt-0.5">{p.stat}</p>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="font-rajdhani font-bold text-[10px] uppercase tracking-widest px-2 py-0.5 border border-[rgba(255,32,96,0.4)] text-[#ff2060]">
                    {p.badge}
                  </span>
                  <span className="text-[#4a4f62] group-hover:text-[#ff2060] transition-colors text-lg">→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="px-6 py-5 flex justify-end">
          <Link href="/work" className="text-xs font-inter text-[#4a4f62] hover:text-[#ff2060] transition-colors uppercase tracking-widest">
            Full portfolio →
          </Link>
        </div>
      </section>

      {/* ══ NFT PRESS LIVE PREVIEW ════════════════════════════ */}
      <section className="py-16 px-6 border-b border-[rgba(255,32,96,0.07)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6"
          >
            <div>
              <span className="label block mb-2">Live Product · Co-Founded</span>
              <h2 className="font-rajdhani font-bold text-[#f8f8f0] leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                NFT PRESS
              </h2>
              <p className="text-sm font-inter text-[#8a8fa8] mt-1 max-w-lg">
                Agentic community exchange — 9 x402 API endpoints on Coinbase Bazaar. AI agents pay USDC per call. First sale confirmed.
              </p>
            </div>
            <a
              href="https://pressreleasemarketplace.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 font-rajdhani font-bold text-sm uppercase tracking-widest px-5 py-2.5 border border-[rgba(255,32,96,0.3)] text-[#f8f8f0] hover:border-[#ff2060] hover:text-[#ff2060] transition-all whitespace-nowrap"
            >
              Visit Live ↗
            </a>
          </motion.div>

          {/* Browser chrome + iframe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="border border-[rgba(255,32,96,0.15)] overflow-hidden"
          >
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0d1321] border-b border-[rgba(255,32,96,0.1)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <div className="flex-1 mx-3 bg-[#08090f] rounded-sm px-3 py-1 text-xs font-inter text-[#4a4f62] text-center">
                pressreleasemarketplace.com
              </div>
              <a
                href="https://pressreleasemarketplace.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff2060]/60 hover:text-[#ff2060] text-sm transition-colors"
                aria-label="Open in new tab"
              >
                ↗
              </a>
            </div>

            {/* iframe viewport — scaled preview */}
            <div className="relative overflow-hidden bg-white" style={{ height: "420px" }}>
              <iframe
                src="https://pressreleasemarketplace.com"
                title="NFT Press — live preview"
                className="absolute top-0 left-0 border-0 pointer-events-none"
                style={{
                  width: "167%",
                  height: "167%",
                  transform: "scale(0.6)",
                  transformOrigin: "top left",
                }}
                loading="lazy"
              />
              {/* Click-through overlay */}
              <a
                href="https://pressreleasemarketplace.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 flex items-end justify-center pb-6 opacity-0 hover:opacity-100 transition-opacity"
                aria-label="Open NFT Press"
              >
                <span className="font-rajdhani font-bold text-sm uppercase tracking-widest px-6 py-3 bg-[#ff2060] text-[#08090f]">
                  Open NFT Press ↗
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ ALLOWANCE APP VIDEO ═══════════════════════════════ */}
      <section className="py-16 px-6 border-b border-[rgba(255,32,96,0.07)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6"
          >
            <div>
              <span className="label block mb-2">Coinbase Hackathon · CDP SDK · Built in 24h</span>
              <h2 className="font-rajdhani font-bold text-[#f8f8f0] leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                ALLOWANCE APP
              </h2>
              <p className="text-sm font-inter text-[#8a8fa8] mt-1 max-w-lg">
                Built on Coinbase&apos;s CDP SDK within 24 hours of its public release. Sub-accounts, spend limits, task-based payment gating on Base L2.
              </p>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className="font-rajdhani font-bold text-[10px] uppercase tracking-widest px-2 py-0.5 border border-[rgba(255,32,96,0.3)] text-[#ff2060]">
                HACKATHON
              </span>
              <span className="text-[10px] font-inter text-[#4a4f62]">Base L2 · USDC</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative border border-[rgba(255,32,96,0.15)] overflow-hidden bg-[#06080e]"
          >
            <video
              src="/videos/allowance-app.mp4"
              controls
              playsInline
              preload="metadata"
              className="w-full block"
              style={{ maxHeight: "560px" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ══ STATS ═════════════════════════════════════════════ */}
      <section className="py-16 px-6 border-b border-[rgba(255,32,96,0.07)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <AnimatedStat value={470} suffix="+ SOL" label="WaveWarz volume" />
            <AnimatedStat value={200} suffix="+" label="AI apps built" />
            <AnimatedStat value={53} label="projects at ZAO-CHELLA" />
            <AnimatedStat value={9} label="x402 API endpoints live" />
          </div>
        </div>
      </section>

      {/* ══ ZAO EVENT PHOTO ═══════════════════════════════════ */}
      <section className="border-b border-[rgba(255,32,96,0.07)] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full h-[380px] md:h-[520px]"
        >
          <Image
            src="/images/zao-chella-event.jpg"
            alt="ZAO-CHELLA Miami Art Basel 2024 — step-and-repeat sponsor wall"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090f] via-[rgba(8,9,15,0.45)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,9,15,0.55)] to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="label block mb-2">Dec 6, 2024 · Miami Art Basel</span>
                <h3 className="font-rajdhani font-bold text-[#f8f8f0]" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
                  ZAO-CHELLA
                </h3>
                <p className="text-sm font-inter text-[#8a8fa8] mt-1">53 projects · 26 sponsors · All branding: mine.</p>
              </div>
              <div className="flex gap-5">
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

      {/* ══ OFFERS ════════════════════════════════════════════ */}
      <section className="border-b border-[rgba(255,32,96,0.07)]">
        {/* Editorial heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-6 py-8 md:py-10 border-b border-[rgba(255,32,96,0.07)] flex flex-col sm:flex-row sm:items-end justify-between gap-2"
        >
          <h2
            className="font-rajdhani font-bold text-[#f8f8f0] leading-none tracking-tight"
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
          >
            OFFERS
          </h2>
          <span className="text-[11px] font-inter text-[#4a4f62] uppercase tracking-widest pb-2">
            TIERED ENGAGEMENT MODEL · EDITION: CURRENT
          </span>
        </motion.div>

        {/* Split layout */}
        <div className="grid md:grid-cols-2">
          {/* Left: service list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 md:p-10 border-r border-[rgba(255,32,96,0.07)]"
          >
            <div className="mb-6">
              <span className="label block mb-4">Quick Drops</span>
              <div className="flex flex-col gap-0">
                {quickDrops.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center justify-between py-3.5 border-b border-[rgba(255,32,96,0.07)] group"
                  >
                    <span className="font-rajdhani font-bold text-[#f8f8f0] text-base group-hover:text-[#ff2060] transition-colors">
                      {s.name}
                    </span>
                    <span className="font-rajdhani font-bold text-[#ff2060] text-base">{s.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <span className="label block mb-4">Live Sessions</span>
              <div className="flex flex-col gap-0">
                {liveSessions.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.28 + i * 0.07 }}
                    className="flex items-center justify-between py-3.5 border-b border-[rgba(255,32,96,0.07)] group"
                  >
                    <span className="font-rajdhani font-bold text-[#f8f8f0] text-base group-hover:text-[#ff2060] transition-colors">
                      {s.name}
                    </span>
                    <span className="font-rajdhani font-bold text-[#ff2060] text-base">{s.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/services"
                className="font-rajdhani font-bold text-sm uppercase tracking-widest px-6 py-3 border border-[rgba(255,32,96,0.3)] text-[#f8f8f0] hover:border-[#ff2060] hover:text-[#ff2060] transition-all inline-block"
              >
                Full pricing →
              </Link>
            </div>
          </motion.div>

          {/* Right: green project-based box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#ff2060] p-8 md:p-10 flex flex-col justify-between min-h-[320px]"
          >
            <div>
              <span className="font-rajdhani font-bold text-[10px] uppercase tracking-widest text-[#08090f]/60 block mb-4">
                High-End Work
              </span>
              <h3 className="font-rajdhani font-bold text-[#08090f] leading-tight mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
                PROJECT BASED<br />ENGAGEMENT
              </h3>
              <p className="font-inter text-sm text-[#08090f]/70 leading-relaxed max-w-sm">
                End-to-end development, strategy, and creative direction for web natives. Event brand kits, agentic system builds, full platform audits.
              </p>
            </div>
            <div className="flex items-end justify-between mt-8">
              <div>
                <span className="font-rajdhani font-bold text-[#08090f] leading-none"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
                  FROM $1,500+
                </span>
              </div>
              <Link
                href="/services"
                className="font-rajdhani font-bold text-sm uppercase tracking-widest px-5 py-2.5 bg-[#08090f] text-[#ff2060] hover:opacity-80 transition-opacity"
              >
                Scope it →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ EARLY ADOPTER STATS ═══════════════════════════════ */}
      <section className="py-16 px-6 border-b border-[rgba(255,32,96,0.07)] relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
            <span className="label block mb-3">The Record</span>
            <h2 className="font-rajdhani font-bold text-[#f8f8f0] mb-3 break-words" style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)" }}>
              Early Adopter. On Record.
            </h2>
            <p className="text-[#8a8fa8] font-inter text-sm max-w-xl">
              Before most people knew what a prompt was. Left ChatGPT in December 2024 when Claude and Gemini Pro got good enough to replace it.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
          <p className="text-[11px] font-inter text-[#4a4f62] mt-5 italic">Source: ChatGPT Wrapped 2025 — verified stats</p>
        </div>
      </section>

      {/* ══ ORIGIN ════════════════════════════════════════════ */}
      <section className="border-b border-[rgba(255,32,96,0.07)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-6 py-8 md:py-10 border-b border-[rgba(255,32,96,0.07)] flex flex-col sm:flex-row sm:items-end justify-between gap-2"
        >
          <h2
            className="font-rajdhani font-bold text-[#f8f8f0] leading-none tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
          >
            ORIGIN
          </h2>
          <span className="text-[11px] font-inter text-[#4a4f62] uppercase tracking-widest pb-2">
            ABOUT · @CANDYTOYBOX · WEB3 SINCE 2022
          </span>
        </motion.div>

        <div className="px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <blockquote
              className="font-rajdhani font-bold text-[#f8f8f0] leading-tight mb-6"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)" }}
            >
              &ldquo;Experiments owning the internet.&rdquo;
            </blockquote>
            <Link
              href="/about"
              className="font-rajdhani font-bold text-sm uppercase tracking-widest text-[#ff2060] hover:opacity-70 transition-opacity"
            >
              Full story →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="text-[#8a8fa8] font-inter text-sm leading-relaxed">
              I&apos;m Candy. My background is a collision of hospitality, writing, design, and aggressive Web3 beta testing since 2022.
            </p>
            <p className="text-[#8a8fa8] font-inter text-sm leading-relaxed">
              This studio is the result of that collision — a place where we break the internet to see how it works, then put it back together into something profitable and beautiful. We don&apos;t just build apps; we design protocols for human interaction in a decentralised world.
            </p>
            <p className="text-[#8a8fa8] font-inter text-sm leading-relaxed">
              From music battle platforms like WaveWarz to complex AI agent systems, the work lives at the intersection of cultural noise and technical precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ LET'S BUILD CTA ══════════════════════════════════ */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 radial-green-center pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
            <h2
              className="font-rajdhani font-bold text-[#f8f8f0] mb-5 break-words leading-tight"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
            >
              LET&apos;S BUILD
            </h2>
            <p className="text-[#8a8fa8] font-inter text-base md:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              Tell me what you&apos;re working on. I&apos;ll tell you how I can help — or point you to who can if I&apos;m not the right fit.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="font-rajdhani font-bold text-sm md:text-base uppercase tracking-widest px-9 py-4 bg-[#ff2060] text-[#08090f] hover:opacity-90 transition-opacity">
                Get in Touch
              </Link>
              <Link href="/services" className="font-rajdhani font-bold text-sm md:text-base uppercase tracking-widest px-9 py-4 border border-[rgba(255,32,96,0.3)] text-[#f8f8f0] hover:border-[#ff2060] hover:text-[#ff2060] transition-all">
                See Pricing →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
