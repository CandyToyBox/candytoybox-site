"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: "wavewarz",
    label: "WaveWarz",
    year: "2023–Present",
    tag: "ONCHAIN Music Battle Platform",
    role: "Co-Founder · Product Strategy · UX · Brand",
    status: "Live · Solana Mainnet",
    url: "https://wavewarz.info",
    stats: [
      { value: "470+ SOL", label: "trading volume" },
      { value: "9.36 SOL", label: "single-night record (Mar 13, 2026)" },
      { value: "M–F 8:30pm", label: "YouTube livestream" },
    ],
    desc: "ONCHAIN music battle trading arena on Solana. Artists compete, traders bet on outcomes using live SOL pools, and winners are determined by a 3-factor system: Charts + Wallet Poll + AI Judge (2 of 3 wins). Featured at ZAO-CHELLA, Miami Art Basel 2024.",
    tech: ["Solana", "Rust", "Next.js", "Supabase", "YouTube Live"],
    category: "Platform",
    live: true,
  },
  {
    id: "nft-press",
    label: "NFT Press",
    year: "2025–Present",
    tag: "Agentic Community Exchange",
    role: "Co-Founder · Architecture · Product",
    status: "Live · First Sale Confirmed",
    url: "https://pressreleasemarketplace.com",
    stats: [
      { value: "9", label: "x402 API endpoints on Coinbase Bazaar" },
      { value: "5", label: "source intelligence engine" },
      { value: "$0.05–$0.75", label: "per API call (USDC)" },
    ],
    desc: "A digital community service exchange, run agentically. NFT communities connect to each other's creatives and utilities. The invisible intelligence layer runs behind a newspaper/Dark Room front end — users never see it working. AI agents pay USDC via x402 to access the API.",
    tech: ["React 19", "Gemini 2.5 Flash", "Alchemy", "LunarCrush", "Dune", "Supabase", "Stripe", "x402", "Fal.ai"],
    category: "Platform",
    live: true,
  },
  {
    id: "zao-chella",
    label: "ZAO-CHELLA",
    year: "Dec 6, 2024",
    tag: "Web3 Music Event · Miami Art Basel",
    role: "Co-Founder · All Visual Identity · Event Brand",
    status: "Completed",
    url: "https://zaofestivals.com",
    stats: [
      { value: "53", label: "projects featured" },
      { value: "26", label: "sponsors secured" },
      { value: "10+", label: "live Web3 musicians" },
    ],
    desc: "WaveWarz featured battle at 6pm (Hurricane vs Jango UU Rematch). AR activations. 3D animations. NFT ticketing. Streaming globally in the Metaverse at NFT Music Hall. VIP vendor tables. 150+ artist submissions. Post-show art auction. All branding — logos, pitch deck, print merch, social assets — built by me.",
    tech: ["Canva Pro", "Brand Design", "Pitch Deck", "Event Production"],
    category: "Event",
    live: false,
    venue: "UVA, 144 NW 23rd St, Miami (Wynwood)",
  },
  {
    id: "zao-palooza",
    label: "ZAO-PALOOZA",
    year: "April 3, 2024",
    tag: "Web3 Music Event · NFT NYC",
    role: "Co-Founder · All Visual Identity · Event Brand",
    status: "Completed",
    url: "https://zaofestivals.com",
    stats: [
      { value: "300–400", label: "attendees" },
      { value: "20", label: "Web3 artists performing" },
      { value: "16,000", label: "NFT NYC conference (context)" },
    ],
    desc: "Opening night of NFT NYC 2024 — 'The Super Bowl of NFTs' per Coinbase. 20 Web3 artists performing. Headliner: Nyemiah Supreme (Timbaland collab, Sisterhood of Hip Hop). All visual identity, pitch decks, print, and web built by me.",
    tech: ["Canva Pro", "Brand Design", "Pitch Deck", "Event Production"],
    category: "Event",
    live: false,
    venue: "Pando Park, 450 Park Ave S, New York City",
  },
  {
    id: "statz-app",
    label: "WaveWarz Statz App",
    year: "2025–Present",
    tag: "Analytics Dashboard",
    role: "Builder",
    status: "Live",
    url: "https://wavewarz-intelligence.vercel.app",
    stats: [
      { value: "Real-time", label: "battle analytics" },
      { value: "Next.js 14", label: "TypeScript + Supabase" },
      { value: "Leaderboards", label: "traders + clippers" },
    ],
    desc: "Full analytics dashboard for WaveWarz — battle history, trader leaderboards, volume charts, clipper rankings. Built in Next.js 14 with TypeScript, Shadcn UI, Recharts, and Supabase.",
    tech: ["Next.js 14", "TypeScript", "Shadcn UI", "Recharts", "Supabase"],
    category: "Tool",
    live: true,
  },
  {
    id: "cliphq",
    label: "ClipHQ / Sir Clipz",
    year: "2026",
    tag: "Telegram Bot · Multi-Platform Clip Pipeline",
    role: "Builder",
    status: "Live · Production",
    url: "https://wavewarz-clips-hq.vercel.app",
    stats: [
      { value: "4", label: "platforms (YouTube, X, Instagram, TikTok)" },
      { value: "AI captions", label: "auto-generated via Gemini" },
      { value: "1 Telegram", label: "command → 4 platforms live" },
    ],
    desc: "Full Telegram bot pipeline for WaveWarz clips. Video dropped in HQ group → voting card → team reviews AI-generated captions → approves → Postiz posts simultaneously to YouTube, X, Instagram, and TikTok. Self-hosted Postiz on Railway.",
    tech: ["TypeScript", "grammy", "Supabase", "Gemini", "Postiz", "Railway", "Vercel"],
    category: "Tool",
    live: true,
  },
  {
    id: "coinbase-hackathon",
    label: "Coinbase Hackathon — Allowance App",
    year: "2024",
    tag: "CDP SDK · Built within 24h of Release",
    role: "Builder",
    status: "Submitted",
    url: "https://github.com/CandyToyBox",
    stats: [
      { value: "24h", label: "after CDP SDK release" },
      { value: "Sub-accounts", label: "spend limits + task-based payments" },
      { value: "Base L2", label: "USDC" },
    ],
    desc: "Allowance app built on Coinbase's CDP SDK within 24 hours of its public release. Sub-accounts, spend limits, task-based payment gating. Real-world UX testing for family finance on Base.",
    tech: ["Coinbase CDP SDK", "Base L2", "USDC", "React"],
    category: "Hackathon",
    live: false,
  },
  {
    id: "ai-agent-system",
    label: "AI Agent System (OpenClaw)",
    year: "2025–Present",
    tag: "Autonomous Agent Infrastructure",
    role: "Architect · Builder",
    status: "Live · Running Daily",
    url: "https://github.com/CandyToyBox",
    stats: [
      { value: "4", label: "production agents" },
      { value: "Every 5 min", label: "trading agent on Base" },
      { value: "24/7", label: "autonomous operations" },
    ],
    desc: "Production AI agent system: candy_cookz (ops + approvals, Telegram), lil_lob (content + knowledge graph), LobBET (revenue operator), trading agent (every 5 min on Base mainnet). Agents work during the day — by evening, the groundwork is done.",
    tech: ["OpenClaw", "llama3.2", "qwen3-vl:8b", "nemotron-mini", "Telegram", "Python", "Vercel"],
    category: "Infrastructure",
    live: true,
  },
  {
    id: "etsy-tpt",
    label: "Etsy + Teachers Pay Teachers",
    year: "2022–Present",
    tag: "E-Commerce · Digital Products",
    role: "Founder · Designer",
    status: "Live",
    url: "https://etsy.com/shop/YoungCreatorsGifts",
    stats: [
      { value: "106", label: "Etsy sales" },
      { value: "5-star", label: "TPT reviews" },
      { value: "Deskmats", label: "Etsy best seller" },
    ],
    desc: "YoungCreatorsGifts on Etsy — 106 sales, Gooten deskmats as best seller, print-on-demand. Detroit Deco on Teachers Pay Teachers — AI/Web3 curriculum templates, 5-star reviews, serving an underserved market.",
    tech: ["Canva", "Gooten", "Printful", "Etsy", "TPT"],
    category: "E-Commerce",
    live: true,
  },
];

const tools = [
  { name: "Replit", verdict: "Best for rapid prototyping. Breaks on complex deploys." },
  { name: "Ohara", verdict: "One-shot app gen. Where most of my 200+ apps started." },
  { name: "Lovable", verdict: "Strong UI output. Collaboration UX needs work." },
  { name: "Bolt", verdict: "Fast iterations. Real file structure = actually usable." },
  { name: "Base44", verdict: "Interesting. Better for internal tools than consumer apps." },
  { name: "Nike.SWOOSH", verdict: "Web3 beta. Studied onboarding friction for non-crypto users." },
  { name: "Starbucks Odyssey", verdict: "Web3 loyalty beta. Gap: existing customers don't want wallets." },
  { name: "Limewire", verdict: "Music NFT relaunch. Community trust = the whole product." },
  { name: "Barbie", verdict: "Digital activation. AR worked. Token mechanic didn't land." },
];

export default function Work() {
  return (
    <div className="relative min-h-screen pt-24 pb-32 px-6 overflow-x-hidden">
      {/* Noise texture */}
      <div className="noise" />

      {/* Ambient glow */}
      <div className="absolute top-24 left-1/3 w-[500px] h-[300px] rounded-full bg-[#95fe7c]/4 blur-3xl pointer-events-none" />
      <div className="absolute top-[60vh] right-0 w-80 h-80 rounded-full bg-[#95fe7c]/3 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* ── HEADER ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="label block mb-4">Portfolio</span>
          <h1
            className="font-rajdhani font-bold text-[#f8f8f0] leading-tight mb-4 break-words"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            THE WORK
          </h1>
          <p className="text-[#8a8fa8] font-inter text-lg max-w-2xl leading-relaxed">
            Production platforms, live events, AI agent systems, analytics dashboards, and ONCHAIN infrastructure. All of it built, shipped, and running.
          </p>
        </motion.div>

        {/* ── PROJECTS LIST ────────────────────────────────── */}
        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.04, 0.2) }}
              className="card card-corner group p-6 md:p-8"
            >
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-rajdhani font-bold text-[10px] uppercase tracking-widest text-[#95fe7c] border border-[rgba(149,254,124,0.3)] px-2 py-0.5">
                      {p.category}
                    </span>
                    <span className="font-inter text-xs text-[#4a4f62]">{p.year}</span>
                    <span className="flex items-center gap-1.5 font-inter text-xs text-[#4a4f62]">
                      <span className={`w-1 h-1 rounded-full ${p.live ? "bg-[#95fe7c] animate-pulse-dot" : "bg-[#4a4f62]"}`} />
                      {p.status}
                    </span>
                  </div>
                  <h2 className="font-rajdhani font-bold text-[#f8f8f0] text-2xl md:text-3xl group-hover:text-[#95fe7c] transition-colors mb-1 break-words">
                    {p.label}
                  </h2>
                  <p className="text-xs font-inter text-[#8a8fa8]">{p.tag}</p>
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start shrink-0 font-rajdhani font-bold text-xs uppercase tracking-wider px-4 py-2 border border-[rgba(149,254,124,0.2)] text-[#8a8fa8] hover:border-[#95fe7c] hover:text-[#95fe7c] transition-colors whitespace-nowrap"
                >
                  Visit →
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-[rgba(149,254,124,0.06)]">
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <span className="stat-num text-lg md:text-xl block leading-tight">
                      {s.value}
                    </span>
                    <span className="text-[10px] font-inter text-[#4a4f62] leading-relaxed">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Body */}
              <div className="grid md:grid-cols-[2fr_1fr] gap-6">
                <div>
                  <span className="text-[10px] font-inter uppercase tracking-widest text-[#95fe7c] block mb-2">
                    What it is
                  </span>
                  <p className="text-sm font-inter text-[#8a8fa8] leading-relaxed">{p.desc}</p>
                  {"venue" in p && p.venue && (
                    <p className="text-xs font-inter text-[#4a4f62] mt-3">{p.venue}</p>
                  )}
                </div>
                <div>
                  <div className="mb-4">
                    <span className="text-[10px] font-inter uppercase tracking-widest text-[#95fe7c] block mb-2">
                      My role
                    </span>
                    <p className="text-sm font-inter text-[#8a8fa8]">{p.role}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-inter uppercase tracking-widest text-[#95fe7c] block mb-2">
                      Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span key={t} className="text-[10px] font-inter text-[#4a4f62] border border-[rgba(149,254,124,0.08)] px-2 py-0.5 hover:border-[rgba(149,254,124,0.2)] transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── TOOLS I'VE TESTED ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 card card-corner p-8"
        >
          <span className="label block mb-4">Beta Testing History</span>
          <h3 className="font-rajdhani font-bold text-[#f8f8f0] text-2xl mb-2">
            Tools I&apos;ve Stress Tested
          </h3>
          <p className="text-sm font-inter text-[#8a8fa8] mb-8 max-w-2xl">
            50+ betas and counting. I don&apos;t use products normally — I push them until they break, then document what I find.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {tools.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-4 border border-[rgba(149,254,124,0.08)] bg-[#08090f]/60 hover:border-[rgba(149,254,124,0.2)] hover:bg-[#08090f]/90 transition-all"
              >
                <span className="font-rajdhani font-bold text-[#f8f8f0] text-sm block mb-1">{t.name}</span>
                <span className="text-xs font-inter text-[#4a4f62] leading-relaxed">{t.verdict}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
