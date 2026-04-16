"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const quickDrops = [
  {
    name: "Friction Report",
    price: "$149",
    turnaround: "48h delivery",
    what: "Submit your app URL or site + 3 specific questions. You get back a written audit: where it breaks, where users lose confidence, what to fix first — with clear prioritization.",
    goodFor: "Apps pre-launch, post-launch struggling with retention, or anywhere users are dropping off unexpectedly.",
    deliverable: "Written report (PDF + doc). Prioritized fix list.",
  },
  {
    name: "AI Stack Blueprint",
    price: "$99",
    turnaround: "48h delivery",
    what: "Fill out a 10-field form about what you're building. Get back a custom AI tool stack recommendation: which tools, in what order, what to avoid, why.",
    goodFor: "Founders choosing between AI tools, teams confused by the options, anyone who's been burned by the wrong tool.",
    deliverable: "Custom written recommendation doc. No fluff.",
  },
  {
    name: "NFT Press Release + Visuals",
    price: "$249",
    turnaround: "72h delivery",
    what: "Submit your NFT collection contract address. It gets researched via a 5-source intelligence layer (Alchemy, LunarCrush, Dune, Etherscan), written as an official press release, and paired with Dark Room visuals.",
    goodFor: "NFT projects that have never had proper media coverage. Communities that built for years with no documentation.",
    deliverable: "AP-format press release + 2 Dark Room visual cards (ready to post).",
  },
  {
    name: "Agentic Workflow Map",
    price: "$299",
    turnaround: "72h delivery",
    what: "Describe your business in a structured form. Get back: which agents to build first, what they do, how they connect, what tools they use, estimated cost to build.",
    goodFor: "Founders ready to add AI agents to their workflow but not sure where to start or what actually makes sense.",
    deliverable: "Visual workflow map + written breakdown per agent.",
  },
  {
    name: "Web3 Audit for Non-Technical Founders",
    price: "$199",
    turnaround: "48h delivery",
    what: "Submit your project. Get back: what's actually ONCHAIN vs. what's just labeled that, what the community sees when they look you up, what you should change.",
    goodFor: "Founders who are 'doing Web3' but want a reality check on what it actually looks like to the community.",
    deliverable: "Written audit with specific, actionable callouts.",
  },
];

const hourly = [
  {
    name: "Strategy Hour",
    price: "$200",
    unit: "per hour",
    what: "Web3 landscape, AI tools, events, community building, business model, marketing angles. You bring the problem. I come with options, references, and a direction — not generic advice.",
    format: "Video call. Structured intake form required before booking.",
    book: true,
  },
  {
    name: "Build Review",
    price: "$250",
    unit: "per hour",
    what: "Share your screen or submit a repo/staging link. I stress test it and tell you exactly what breaks, what's confusing, and what will kill your launch. Real feedback — not nice feedback.",
    format: "Async OR video call. You choose.",
    book: true,
  },
  {
    name: "Idea Session",
    price: "$175",
    unit: "per hour",
    what: "Pure ideation. You describe the problem or where you're stuck. I generate — frameworks, pivots, features, angles you haven't seen because you're too close to it.",
    format: "Video call. No prep required.",
    book: true,
  },
];

const projectBased = [
  {
    name: "Event Brand Kit",
    price: "from $1,500",
    what: "Full visual identity for a Web3 event or music/art community launch. Logo, color system, pitch deck template, print assets, social graphics.",
    proof: "ZAO-PALOOZA (NFT NYC 2024) + ZAO-CHELLA (Miami Art Basel 2024) — 53 projects, 26 sponsors, metaverse stream.",
  },
  {
    name: "Agentic System Build",
    price: "from $3,000",
    what: "I architect and build your AI agent stack. Starting point: what you need it to do, what platforms it touches, what decisions it makes. You get a running system, handed off.",
    proof: "Production: candy_cookz (ops), lil_lob (content), LobBET (revenue), trading agent (every 5 min on Base).",
  },
  {
    name: "Full Platform Audit",
    price: "from $2,500",
    what: "Deep dive testing, friction report, community perception audit, ONCHAIN audit, competitive positioning, roadmap recommendations.",
    proof: "50+ betas. WaveWarz, NFT Press, Statz App — all built and stress tested in production.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-24 pb-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── HEADER ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="font-rajdhani font-bold text-xs uppercase tracking-widest text-[#95fe7c] block mb-4">
            Services
          </span>
          <h1
            className="font-rajdhani font-bold text-[#f8f8f0] leading-tight mb-4"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            WORK WITH ME
          </h1>
          <p className="text-[#8a8fa8] font-inter text-lg max-w-2xl leading-relaxed">
            Three tiers: async Quick Drops (pay, get files back), live hourly sessions, and scoped project work. Pricing is a starting point — outcome-based and flexible options available for every tier.
          </p>
        </motion.div>

        {/* ── QUICK DROPS ─────────────────────────────────── */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="font-rajdhani font-bold text-xs uppercase tracking-widest text-[#95fe7c]">
                Tier 1
              </span>
              <span className="h-px flex-1 bg-[rgba(149,254,124,0.1)]" />
            </div>
            <h2
              className="font-rajdhani font-bold text-[#f8f8f0] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            >
              Quick Drops
            </h2>
            <p className="text-[#8a8fa8] font-inter text-sm mt-2">
              Async. No call needed. Pay → fill out a form → get files back. Priced for quick decisions.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {quickDrops.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 md:p-8 border border-[rgba(149,254,124,0.1)] bg-[#0d1321]/40 hover:border-[rgba(149,254,124,0.2)] transition-all card-shine"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div>
                    <h3 className="font-rajdhani font-bold text-[#f8f8f0] text-xl mb-1">{s.name}</h3>
                    <span className="text-xs font-inter text-[#4a4f62] uppercase tracking-wide">
                      {s.turnaround} · Async · No call
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-rajdhani font-bold text-[#95fe7c] text-2xl">{s.price}</span>
                    <Link
                      href="/contact"
                      className="font-rajdhani font-bold text-sm uppercase tracking-wider px-5 py-2 bg-[#95fe7c] text-[#08090f] hover:opacity-90 transition-opacity whitespace-nowrap"
                    >
                      Order →
                    </Link>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <span className="text-[10px] font-inter uppercase tracking-widest text-[#95fe7c] block mb-2">What you get</span>
                    <p className="text-sm font-inter text-[#8a8fa8] leading-relaxed">{s.what}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-inter uppercase tracking-widest text-[#95fe7c] block mb-2">Good for</span>
                    <p className="text-sm font-inter text-[#8a8fa8] leading-relaxed">{s.goodFor}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-inter uppercase tracking-widest text-[#95fe7c] block mb-2">Deliverable</span>
                    <p className="text-sm font-inter text-[#8a8fa8] leading-relaxed">{s.deliverable}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── HOURLY ──────────────────────────────────────── */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="font-rajdhani font-bold text-xs uppercase tracking-widest text-[#95fe7c]">
                Tier 2
              </span>
              <span className="h-px flex-1 bg-[rgba(149,254,124,0.1)]" />
            </div>
            <h2
              className="font-rajdhani font-bold text-[#f8f8f0] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            >
              Live Sessions
            </h2>
            <p className="text-[#8a8fa8] font-inter text-sm mt-2">
              Book a session. Structured intake form required before every call so no time is wasted.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {hourly.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col p-6 border border-[rgba(149,254,124,0.1)] bg-[#0d1321]/40 hover:border-[rgba(149,254,124,0.2)] transition-all card-shine"
              >
                <div className="mb-4">
                  <h3 className="font-rajdhani font-bold text-[#f8f8f0] text-xl mb-1">{s.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-rajdhani font-bold text-[#95fe7c] text-2xl">{s.price}</span>
                    <span className="text-xs font-inter text-[#4a4f62]">{s.unit}</span>
                  </div>
                </div>
                <p className="text-sm font-inter text-[#8a8fa8] leading-relaxed flex-1 mb-6">{s.what}</p>
                <div className="mb-5">
                  <span className="text-[10px] font-inter uppercase tracking-widest text-[#95fe7c] block mb-1">Format</span>
                  <p className="text-xs font-inter text-[#4a4f62]">{s.format}</p>
                </div>
                <Link
                  href="/contact"
                  className="font-rajdhani font-bold text-sm uppercase tracking-wider text-center px-4 py-2.5 border border-[rgba(149,254,124,0.3)] text-[#f8f8f0] hover:border-[#95fe7c] hover:text-[#95fe7c] transition-colors"
                >
                  Book a Session →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── PROJECT-BASED ─────────────────────────────────── */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="font-rajdhani font-bold text-xs uppercase tracking-widest text-[#95fe7c]">
                Tier 3
              </span>
              <span className="h-px flex-1 bg-[rgba(149,254,124,0.1)]" />
            </div>
            <h2
              className="font-rajdhani font-bold text-[#f8f8f0] leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
            >
              Project-Based
            </h2>
            <p className="text-[#8a8fa8] font-inter text-sm mt-2">
              Contact to scope. Prices listed are starting points — outcome-based, milestone, and flat-rate options all available.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {projectBased.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 md:p-8 border border-[rgba(149,254,124,0.1)] bg-[#0d1321]/40 hover:border-[rgba(149,254,124,0.2)] transition-all card-shine"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div>
                    <h3 className="font-rajdhani font-bold text-[#f8f8f0] text-xl">{s.name}</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-rajdhani font-bold text-[#95fe7c] text-xl whitespace-nowrap">{s.price}</span>
                    <Link
                      href="/contact"
                      className="font-rajdhani font-bold text-sm uppercase tracking-wider px-5 py-2 border border-[rgba(149,254,124,0.3)] text-[#f8f8f0] hover:border-[#95fe7c] hover:text-[#95fe7c] transition-colors whitespace-nowrap"
                    >
                      Let&apos;s scope it →
                    </Link>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <span className="text-[10px] font-inter uppercase tracking-widest text-[#95fe7c] block mb-2">What&apos;s included</span>
                    <p className="text-sm font-inter text-[#8a8fa8] leading-relaxed">{s.what}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-inter uppercase tracking-widest text-[#95fe7c] block mb-2">Proof of work</span>
                    <p className="text-sm font-inter text-[#8a8fa8] leading-relaxed">{s.proof}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── AGENTIC / x402 ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 p-8 border border-[rgba(149,254,124,0.2)] bg-[#0d1321]/60"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-rajdhani font-bold text-xs uppercase tracking-widest text-[#95fe7c]">
              Agentic Economy
            </span>
            <span className="h-px flex-1 bg-[rgba(149,254,124,0.1)]" />
          </div>
          <h2
            className="font-rajdhani font-bold text-[#f8f8f0] leading-tight mb-3"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            Agent-to-Agent Contact
          </h2>
          <p className="text-[#8a8fa8] font-inter text-sm leading-relaxed mb-6 max-w-2xl">
            AI agents can pay USDC via x402 protocol to route qualified opportunities to me — no human needed to initiate contact. The endpoint accepts a structured brief (problem, budget, timeline). If it qualifies, the agent receives my intake form link.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <span className="font-rajdhani font-bold text-[#95fe7c] text-xl">$0.50 USDC</span>
              <span className="text-xs font-inter text-[#4a4f62] ml-2">per request · Base mainnet · x402</span>
            </div>
            <code className="text-xs font-inter text-[#4a4f62] bg-[#08090f] px-4 py-2 border border-[rgba(149,254,124,0.08)]">
              POST /api/contact-x402
            </code>
          </div>
        </motion.div>

        {/* ── PRICING PHILOSOPHY ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 p-8 border border-[rgba(149,254,124,0.08)] bg-[#0d1321]/20"
        >
          <h3 className="font-rajdhani font-bold text-[#f8f8f0] text-xl mb-4">On pricing</h3>
          <p className="text-[#8a8fa8] font-inter text-sm leading-relaxed max-w-3xl">
            Listed prices are starting points. If you want outcome-based (half on start, half on delivery), milestone-based, or pay-per-result — that&apos;s available for project work. If something on this list doesn&apos;t quite fit your situation, reach out and we&apos;ll find a structure that works. I&apos;d rather scope it right than leave money on the table for both of us.
          </p>
        </motion.div>

        {/* ── CTA ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center pt-12 border-t border-[rgba(149,254,124,0.08)]"
        >
          <h3 className="font-rajdhani font-bold text-[#f8f8f0] text-3xl mb-4">
            Not sure which tier fits?
          </h3>
          <p className="text-[#8a8fa8] font-inter mb-8 max-w-md mx-auto">
            Send me a message with what you&apos;re trying to solve. I&apos;ll tell you what makes sense.
          </p>
          <Link
            href="/contact"
            className="inline-block font-rajdhani font-bold text-base uppercase tracking-widest px-10 py-4 bg-[#95fe7c] text-[#08090f] hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
