"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const socials = [
  { name: "X / Twitter", handle: "@candytoybox", href: "https://x.com/candytoybox", desc: "Best for quick DMs" },
  { name: "Farcaster", handle: "@candytoybox", href: "https://warpcast.com/candytoybox", desc: "Web3-native" },
  { name: "GitHub", handle: "CandyToyBox", href: "https://github.com/CandyToyBox", desc: "All the repos" },
  { name: "YouTube", handle: "@candytoybox", href: "https://youtube.com/@candytoybox", desc: "Builds + demos live" },
  { name: "Medium", handle: "@candytoybox", href: "https://medium.com/@candytoybox", desc: "Writing + deep dives" },
  { name: "Email", handle: "onchain@pressreleasemarketplace.com", href: "mailto:onchain@pressreleasemarketplace.com", desc: "For project inquiries" },
];

const serviceTypes = [
  "Friction Report ($149)",
  "AI Stack Blueprint ($99)",
  "NFT Press Release + Visuals ($249)",
  "Agentic Workflow Map ($299)",
  "Web3 Audit for Non-Technical Founders ($199)",
  "Strategy Hour ($200/hr)",
  "Build Review ($250/hr)",
  "Idea Session ($175/hr)",
  "Event Brand Kit (from $1,500)",
  "Agentic System Build (from $3,000)",
  "Full Platform Audit (from $2,500)",
  "Something else — let me describe it",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry: ${form.service || "Work Together"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\nBudget: ${form.budget}\nTimeline: ${form.timeline}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:onchain@pressreleasemarketplace.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-32 px-6 overflow-x-hidden">
      {/* Noise texture */}
      <div className="noise" />

      {/* Ambient glow */}
      <div className="absolute top-24 right-1/4 w-[400px] h-[400px] rounded-full bg-[#95fe7c]/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-32 left-0 w-72 h-72 rounded-full bg-[#95fe7c]/3 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* ── HEADER ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="label block mb-4">Contact</span>
          <h1
            className="font-rajdhani font-bold text-[#f8f8f0] leading-tight mb-4 break-words"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            LET&apos;S BUILD
          </h1>
          <p className="text-[#8a8fa8] font-inter text-lg max-w-2xl leading-relaxed">
            Tell me what you&apos;re working on. I&apos;ll tell you how I can help — or point you to who can if I&apos;m not the right fit.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">

          {/* ── LEFT: SOCIALS + INFO ──────────────────────── */}
          <div className="flex flex-col gap-5">

            {/* Currently available */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card card-corner box-glow p-6"
              style={{ borderColor: "rgba(149,254,124,0.2)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#95fe7c] animate-pulse-dot" />
                <span className="label">Status</span>
              </div>
              <p className="font-rajdhani font-bold text-[#f8f8f0] text-lg mb-1">Available for new work</p>
              <p className="text-xs font-inter text-[#8a8fa8]">
                Taking consulting, audits, and project-based work. Response time: usually within 24h on X or email.
              </p>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="label block mb-3">Find Me</span>
              <div className="flex flex-col gap-2">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.06 }}
                    className="card group flex items-center justify-between p-4"
                  >
                    <div className="min-w-0">
                      <span className="font-rajdhani font-bold text-sm text-[#f8f8f0] group-hover:text-[#95fe7c] transition-colors block">
                        {s.name}
                      </span>
                      <span className="text-xs font-inter text-[#4a4f62] truncate block">{s.handle}</span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-[10px] font-inter text-[#4a4f62] hidden sm:block">{s.desc}</span>
                      <span className="text-[#4a4f62] group-hover:text-[#95fe7c] transition-colors">→</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* x402 agent endpoint */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card card-corner p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#95fe7c]/60" />
                <span className="label">Agentic Economy</span>
              </div>
              <p className="text-sm font-inter text-[#8a8fa8] mb-4 leading-relaxed">
                AI agents can contact me via x402. Pay $0.50 USDC on Base and submit a structured brief — problem, budget, timeline. Qualifying briefs get a response.
              </p>
              <code className="text-xs font-inter text-[#95fe7c]/60 bg-[#08090f] px-3 py-2 block border border-[rgba(149,254,124,0.1)]">
                POST /api/contact-x402
              </code>
            </motion.div>
          </div>

          {/* ── RIGHT: INTAKE FORM ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <div className="card card-corner box-glow p-10 text-center">
                <span className="font-rajdhani font-bold text-[#95fe7c] text-3xl block mb-3 text-glow">Got it.</span>
                <p className="text-[#8a8fa8] font-inter text-sm">
                  Your email client should have opened. If not, reach me directly at{" "}
                  <a href="mailto:onchain@pressreleasemarketplace.com" className="text-[#95fe7c] hover:underline">
                    onchain@pressreleasemarketplace.com
                  </a>
                </p>
              </div>
            ) : (
              <div className="card p-6 md:p-8">
                <span className="label block mb-6">Intake Form</span>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-inter uppercase tracking-widest text-[#95fe7c]">Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="bg-[#08090f]/80 border border-[rgba(149,254,124,0.12)] text-[#f8f8f0] font-inter text-sm px-4 py-3 focus:outline-none focus:border-[rgba(149,254,124,0.4)] transition-colors placeholder-[#4a4f62]"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-inter uppercase tracking-widest text-[#95fe7c]">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="bg-[#08090f]/80 border border-[rgba(149,254,124,0.12)] text-[#f8f8f0] font-inter text-sm px-4 py-3 focus:outline-none focus:border-[rgba(149,254,124,0.4)] transition-colors placeholder-[#4a4f62]"
                        placeholder="you@domain.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-inter uppercase tracking-widest text-[#95fe7c]">
                      What are you looking for?
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="bg-[#08090f]/80 border border-[rgba(149,254,124,0.12)] text-[#f8f8f0] font-inter text-sm px-4 py-3 focus:outline-none focus:border-[rgba(149,254,124,0.4)] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0d1321]">Select a service</option>
                      {serviceTypes.map((s) => (
                        <option key={s} value={s} className="bg-[#0d1321]">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-inter uppercase tracking-widest text-[#95fe7c]">Budget range</label>
                      <select
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="bg-[#08090f]/80 border border-[rgba(149,254,124,0.12)] text-[#f8f8f0] font-inter text-sm px-4 py-3 focus:outline-none focus:border-[rgba(149,254,124,0.4)] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#0d1321]">Select range</option>
                        <option className="bg-[#0d1321]">Under $500</option>
                        <option className="bg-[#0d1321]">$500 – $1,500</option>
                        <option className="bg-[#0d1321]">$1,500 – $5,000</option>
                        <option className="bg-[#0d1321]">$5,000+</option>
                        <option className="bg-[#0d1321]">Let&apos;s discuss</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-inter uppercase tracking-widest text-[#95fe7c]">Timeline</label>
                      <select
                        value={form.timeline}
                        onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                        className="bg-[#08090f]/80 border border-[rgba(149,254,124,0.12)] text-[#f8f8f0] font-inter text-sm px-4 py-3 focus:outline-none focus:border-[rgba(149,254,124,0.4)] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#0d1321]">When do you need it?</option>
                        <option className="bg-[#0d1321]">ASAP</option>
                        <option className="bg-[#0d1321]">Within 1 week</option>
                        <option className="bg-[#0d1321]">Within 1 month</option>
                        <option className="bg-[#0d1321]">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-inter uppercase tracking-widest text-[#95fe7c]">
                      Tell me everything *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="bg-[#08090f]/80 border border-[rgba(149,254,124,0.12)] text-[#f8f8f0] font-inter text-sm px-4 py-3 focus:outline-none focus:border-[rgba(149,254,124,0.4)] transition-colors placeholder-[#4a4f62] resize-none"
                      placeholder="What are you building? Where is it breaking? What do you actually need? The more context, the better."
                    />
                  </div>

                  <button
                    type="submit"
                    className="font-rajdhani font-bold text-base uppercase tracking-widest px-8 py-4 bg-[#95fe7c] text-[#08090f] hover:opacity-90 transition-opacity text-center"
                  >
                    Send It →
                  </button>

                  <p className="text-[10px] font-inter text-[#4a4f62] text-center">
                    This opens your email client with the form prefilled. No data is sent to a third party.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
