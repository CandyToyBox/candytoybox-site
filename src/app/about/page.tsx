"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const arc = [
  {
    tag: "JAN_2022_INIT",
    era: "The Entry Point",
    insight: "If the experience is off, people leave.",
    body: "First contact with decentralised protocols. Transitioned from high-stakes hospitality management to on-chain experimentation. Beta testing begins.",
  },
  {
    tag: "JUN_2022_DEPLOY",
    era: "Candy ToyBox Studio",
    insight: "Bad copy and clunky UX are immediately obvious.",
    body: "Formal establishment of the studio. Objective: build the tools we wished existed. Focused on the intersection of play and technical utility.",
  },
  {
    tag: "FEB_2023_SYNC",
    era: "WaveWarz Launch",
    insight: "Real users break things that demo perfectly.",
    body: "Deployment of the music battle primitive. 50k+ transactions in the first 48 hours. Validated the thesis of gamified on-chain interaction.",
  },
  {
    tag: "SEP_2023_UPDATE",
    era: "Agentic Shift",
    insight: "I stopped just critiquing products. I started building them.",
    body: "Integration of LLMs into workflow automation. Developed the 'Agentic Blueprint' for rapid deployment of on-chain social experiments.",
  },
  {
    tag: "MAR_2024_REACH",
    era: "ZAO-Chella Sync",
    insight: "Physical and digital finally collapsed into each other.",
    body: "Bridged physical live events with digital ownership. Scaling the toybox beyond the screen into tangible, hybrid environments.",
  },
  {
    tag: "CURRENT_EPOCH",
    era: "The Perpetual Beta",
    insight: "Continuous iteration on the internet's core primitives.",
    body: "Currently exploring autonomous governance and modular creative stacks. 200+ apps. Production Solana smart contracts. AI agents running daily.",
  },
];

const betas = [
  "Nike.SWOOSH", "Starbucks Odyssey", "PGA", "Limewire", "Barbie",
  "50+ betas tested total",
];

const platforms = [
  { name: "X / Twitter", handle: "@candytoybox", href: "https://x.com/candytoybox" },
  { name: "GitHub", handle: "CandyToyBox", href: "https://github.com/CandyToyBox" },
  { name: "Farcaster", handle: "@candytoybox", href: "https://warpcast.com/candytoybox" },
  { name: "YouTube", handle: "@candytoybox", href: "https://youtube.com/@candytoybox" },
  { name: "Medium", handle: "@candytoybox", href: "https://medium.com/@candytoybox" },
  { name: "WaveWarz", handle: "wavewarz.info", href: "https://wavewarz.info" },
  { name: "NFT Press", handle: "pressreleasemarketplace.com", href: "https://pressreleasemarketplace.com" },
  { name: "THE ZAO", handle: "zaofestivals.com", href: "https://zaofestivals.com" },
];

const roles = [
  { role: "WaveWarz", title: "Co-Founder" },
  { role: "THE ZAO", title: "Co-Founder · Visual Brand Strategist" },
  { role: "NFT Press", title: "Co-Founder" },
  { role: "Statz App", title: "Builder" },
];

export default function About() {
  return (
    <div className="relative min-h-screen pt-24 pb-32 px-6 overflow-x-hidden">
      {/* Noise texture */}
      <div className="noise" />

      {/* Ambient glow orbs */}
      <div className="absolute top-24 left-0 w-[500px] h-[400px] rounded-full bg-[#ff2060]/4 blur-3xl pointer-events-none" />
      <div className="absolute top-64 right-0 w-80 h-80 rounded-full bg-[#ff2060]/3 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* ── HEADER ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          {/* Terminal path label */}
          <div className="flex items-center gap-3 mb-2">
            <span className="terminal-path">FILE_PATH: /ORIGIN/PROFILES/CANDY.RAW</span>
            <span className="terminal-path">·</span>
            <span className="terminal-path">RESOLUTION: 4K_UPSCALED</span>
          </div>
          <span className="label block mb-4">SUBJECT_001 // FOUNDER</span>
          <h1
            className="font-rajdhani font-bold text-[#f8f8f0] leading-tight break-words"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            SAMANTHA KINNEY
          </h1>
          <h2
            className="font-rajdhani font-bold text-[#ff2060] leading-tight text-glow-sm"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
          >
            @candytoybox
          </h2>
        </motion.div>

        {/* ── PHOTO + INTRO ───────────────────────────────── */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 mb-24 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="sticky top-28"
          >
            {/* Photo with corner bracket frame */}
            <div className="photo-frame relative overflow-visible">
              {/* Outer glow border */}
              <div className="absolute -inset-1 border border-[rgba(255,32,96,0.25)]" />
              <Image
                src="/images/candy-pfp.jpg"
                alt="Samantha Kinney — Candy"
                width={400}
                height={400}
                className="w-full object-cover grayscale contrast-110 relative z-10"
                priority
              />
              {/* Pink tint hover */}
              <div className="absolute inset-0 z-20 bg-[#ff2060] opacity-0 hover:opacity-5 transition-opacity" />
            </div>

            {/* Name plate */}
            <div className="mt-4 p-4 card">
              <span className="font-rajdhani font-bold text-[#f8f8f0] block">Samantha Kinney</span>
              <span className="text-xs text-[#8a8fa8] font-inter">Jericho, NY · Available globally</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <p className="text-[#f8f8f0] font-inter text-lg leading-relaxed">
              I&apos;m Candy. I&apos;ve never been able to use a product normally.
            </p>
            <p className="text-[#8a8fa8] font-inter leading-relaxed">
              I&apos;m always asking: why does this feel off? Where does this break? How could this be better? That instinct turned into a career — and eventually, into a body of work that includes a live ONCHAIN music battle platform on Solana, two major Web3 events at NFT NYC and Miami Art Basel, a paid API for AI agents, and an autonomous agent system that works while I sleep.
            </p>
            <p className="text-[#8a8fa8] font-inter leading-relaxed">
              I&apos;m in Web3 since February 2022. I was in the discords. I have the rugs. I stayed anyway — and I built.
            </p>
            <p className="text-[#8a8fa8] font-inter leading-relaxed">
              The thing that makes me different: I know exactly when a user loses confidence in a product. And I can explain why in a way that engineers understand, designers respect, and founders can actually act on.
            </p>

            {/* Roles */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {roles.map((r, i) => (
                <motion.div
                  key={r.role}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="card card-corner p-3"
                >
                  <span className="font-rajdhani font-bold text-[#ff2060] text-sm block">{r.role}</span>
                  <span className="text-xs font-inter text-[#8a8fa8]">{r.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── ORIGIN TIMELINE ─────────────────────────────── */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="tag-cyan block mb-1">SYSTEM_LOG_BOOT: ORIGIN_TIMELINE.EXE</span>
            <span className="terminal-path">FETCHING MILESTONES... OK</span>
          </motion.div>

          <div className="divider mb-8" />

          <div className="flex flex-col gap-0">
            {arc.map((a, i) => (
              <motion.div
                key={a.tag}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-b border-[rgba(255,32,96,0.08)] py-7 group flex gap-4"
              >
                {/* Arrow */}
                <span className="text-[#ff2060]/60 font-rajdhani font-bold text-sm mt-0.5 flex-shrink-0">›</span>

                <div className="flex-1">
                  <span className="tag-cyan block mb-1">{a.tag}</span>
                  <h3 className="font-rajdhani font-bold text-[#f8f8f0] text-xl mb-2 group-hover:text-[#ff2060] transition-colors uppercase tracking-wide">
                    {a.era}
                  </h3>
                  <p className="text-sm font-inter text-[#8a8fa8] leading-relaxed max-w-2xl">
                    {a.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6">
            <span className="tag-cyan">END_OF_LOG // WAITING FOR INPUT_</span>
          </div>
        </div>

        {/* ── BETA TESTING CREDENTIALS ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 card card-corner p-8"
        >
          <span className="label block mb-4">Beta Testing History</span>
          <h3 className="font-rajdhani font-bold text-[#f8f8f0] text-2xl mb-6">
            50+ Betas Before Most People Knew What Web3 Was
          </h3>
          <div className="flex flex-wrap gap-3">
            {betas.map((b) => (
              <span
                key={b}
                className="font-inter text-sm px-3 py-1.5 border border-[rgba(255,32,96,0.15)] text-[#8a8fa8] hover:border-[rgba(255,32,96,0.3)] hover:text-[#f8f8f0] transition-colors"
              >
                {b}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm font-inter text-[#8a8fa8] leading-relaxed max-w-2xl">
            I joined betas to study real user reactions before products were polished — before the marketing, before the polish, when the seams showed. That&apos;s where the most useful feedback lives.
          </p>
        </motion.div>

        {/* ── WHERE TO FIND ME ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="label block mb-4">Find Me Online</span>
          <h3 className="font-rajdhani font-bold text-[#f8f8f0] text-2xl mb-8">
            Where I&apos;m Active Daily
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {platforms.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card card-corner group p-4"
              >
                <span className="font-rajdhani font-bold text-sm text-[#f8f8f0] group-hover:text-[#ff2060] transition-colors block mb-1">
                  {p.name}
                </span>
                <span className="text-xs font-inter text-[#4a4f62]">{p.handle}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── CTA ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center pt-12 border-t border-[rgba(255,32,96,0.08)]"
        >
          <h3 className="font-rajdhani font-bold text-[#f8f8f0] text-3xl mb-4">
            Ready to work together?
          </h3>
          <p className="text-[#8a8fa8] font-inter mb-8">
            I&apos;m available for consulting, audits, builds, and project-based work.
          </p>
          <Link
            href="/services"
            className="inline-block font-rajdhani font-bold text-base uppercase tracking-widest px-10 py-4 bg-[#ff2060] text-[#08090f] hover:opacity-90 transition-opacity"
          >
            See Services + Pricing
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
