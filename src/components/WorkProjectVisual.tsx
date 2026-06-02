"use client";

import Image from "next/image";

function VideoHeader({
  src,
  topLeft,
  topRight,
}: {
  src: string;
  topLeft?: React.ReactNode;
  topRight?: React.ReactNode;
}) {
  return (
    <div className="relative w-full overflow-hidden bg-[#04060a]" style={{ height: "280px" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090f] via-[rgba(8,9,15,0.35)] to-[rgba(8,9,15,0.1)]" />
      {/* Top badges */}
      {topLeft && <div className="absolute top-4 left-5 z-10">{topLeft}</div>}
      {topRight && <div className="absolute top-4 right-5 z-10">{topRight}</div>}
    </div>
  );
}

function Badge({ text, green = true }: { text: string; green?: boolean }) {
  return (
    <span
      className="font-rajdhani font-bold text-[10px] uppercase tracking-widest px-2 py-0.5 backdrop-blur-sm"
      style={{
        border: `1px solid ${green ? "rgba(149,254,124,0.4)" : "rgba(248,248,240,0.2)"}`,
        color: green ? "#95fe7c" : "rgba(248,248,240,0.7)",
        background: "rgba(8,9,15,0.65)",
      }}
    >
      {text}
    </span>
  );
}

export default function WorkProjectVisual({ id }: { id: string }) {
  // ── Video-based headers ────────────────────────────────

  if (id === "wavewarz") {
    return (
      <VideoHeader
        src="/videos/wavewarz-preview.mp4"
        topLeft={
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#95fe7c] animate-pulse" />
            <Badge text="BATTLE LIVE · SOLANA MAINNET" />
          </div>
        }
        topRight={
          <span className="font-mono text-[9px] text-[#4a4f62] bg-[rgba(8,9,15,0.7)] px-2 py-0.5">
            9TUfEH…2fYo
          </span>
        }
      />
    );
  }

  if (id === "nft-press") {
    return (
      <VideoHeader
        src="/videos/nft-press-preview.mp4"
        topLeft={<Badge text="NFT Press · Agentic Exchange" />}
        topRight={
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-[#95fe7c]/70 animate-pulse" />
            <Badge text="9 x402 endpoints live" />
          </div>
        }
      />
    );
  }

  if (id === "zao-chella") {
    return (
      <VideoHeader
        src="/videos/zao-chella-preview.mp4"
        topLeft={<Badge text="Dec 6, 2024 · Miami Art Basel" />}
        topRight={<Badge text="Wynwood · Miami" green={false} />}
      />
    );
  }

  if (id === "zao-palooza") {
    return (
      <VideoHeader
        src="/videos/zao-palooza-preview.mp4"
        topLeft={<Badge text="NFT NYC 2024 · Opening Night" />}
        topRight={<Badge text="450 Park Ave S · NYC" green={false} />}
      />
    );
  }

  if (id === "coinbase-hackathon") {
    return (
      <VideoHeader
        src="/videos/allowance-app.mp4"
        topLeft={<Badge text="Coinbase CDP SDK" />}
        topRight={<Badge text="Built in 24h" />}
      />
    );
  }

  // ── CSS-based headers ──────────────────────────────────

  if (id === "statz-app") {
    return (
      <div className="relative w-full overflow-hidden bg-[#050810]" style={{ height: "200px" }}>
        <div className="absolute inset-0 p-4 flex flex-col gap-3">
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Volume", value: "470 SOL", green: true },
              { label: "Battles", value: "991", green: false },
              { label: "Artists Paid", value: "$800+", green: true },
              { label: "ATH Night", value: "12.3 SOL", green: true },
            ].map((s) => (
              <div key={s.label} className="border border-[rgba(149,254,124,0.07)] p-2 flex flex-col gap-1">
                <span className="font-inter text-[7px] text-[#4a4f62] uppercase tracking-wide">{s.label}</span>
                <span
                  className="font-rajdhani font-bold text-sm leading-none"
                  style={{ color: s.green ? "#95fe7c" : "#f8f8f0" }}
                >
                  {s.value}
                </span>
              </div>
            ))}
          </div>
          <div className="flex-1 border border-[rgba(149,254,124,0.07)] p-2">
            <span className="font-inter text-[7px] text-[#4a4f62] uppercase tracking-wide block mb-1.5">Volume Trend</span>
            <div className="flex items-end gap-0.5 h-10">
              {[15, 20, 18, 30, 25, 38, 32, 45, 40, 55, 48, 65, 58, 72, 68, 80].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i === 15 ? "rgba(149,254,124,0.4)" : "rgba(149,254,124,0.18)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#08090f] to-transparent pointer-events-none" />
      </div>
    );
  }

  if (id === "cliphq") {
    return (
      <div className="relative w-full overflow-hidden bg-[#050810]" style={{ height: "200px" }}>
        <div className="absolute inset-0 flex items-center gap-0 px-5 py-4">
          <div className="flex-shrink-0 w-36">
            <div className="bg-[#1a2744] rounded-xl rounded-tl-none px-3 py-2.5 border border-[rgba(0,136,204,0.2)]">
              <span className="font-inter text-[10px] text-[#f8f8f0]/80 block">clip ready</span>
              <span className="font-inter text-[8px] text-[#4a4f62] block mt-0.5">Sir Clipz · via Telegram</span>
            </div>
            <div className="mt-2 flex items-center gap-1.5 ml-1">
              <span className="w-1 h-1 rounded-full bg-[#0088cc]/60 animate-pulse" />
              <span className="font-inter text-[9px] text-[#4a4f62]">@wavewarz_hq</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center gap-1 px-4">
            <div className="h-px w-full bg-gradient-to-r from-[rgba(0,136,204,0.3)] via-[rgba(149,254,124,0.4)] to-[rgba(149,254,124,0.1)]" />
            <span className="font-inter text-[9px] text-[#95fe7c]/50 uppercase tracking-wider">AI captions + auto-post</span>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(149,254,124,0.2)] to-transparent" />
          </div>
          <div className="flex-shrink-0 flex flex-col gap-1.5 w-32">
            {[
              { name: "YouTube", dot: "#ff0000" },
              { name: "X / Twitter", dot: "#f8f8f0" },
              { name: "Instagram", dot: "#e1306c" },
              { name: "TikTok", dot: "#69C9D0" },
            ].map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2 px-2.5 py-1.5 border border-[rgba(149,254,124,0.06)]"
                style={{ borderLeftColor: `${p.dot}33`, borderLeftWidth: 2 }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.dot }} />
                <span className="font-inter text-[9px] text-[#8a8fa8] flex-1">{p.name}</span>
                <span className="font-rajdhani font-bold text-[8px] text-[#95fe7c]">LIVE</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#08090f] to-transparent pointer-events-none" />
      </div>
    );
  }

  if (id === "ai-agent-system") {
    return (
      <div className="relative w-full overflow-hidden bg-[#030508]" style={{ height: "200px" }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 200" preserveAspectRatio="xMidYMid slice">
          <line x1="350" y1="100" x2="140" y2="50" stroke="#95fe7c" strokeWidth="0.6" strokeOpacity="0.15" />
          <line x1="350" y1="100" x2="560" y2="50" stroke="#95fe7c" strokeWidth="0.6" strokeOpacity="0.15" />
          <line x1="350" y1="100" x2="140" y2="155" stroke="#95fe7c" strokeWidth="0.6" strokeOpacity="0.15" />
          <line x1="350" y1="100" x2="560" y2="155" stroke="#95fe7c" strokeWidth="0.6" strokeOpacity="0.15" />
          <line x1="140" y1="50" x2="140" y2="155" stroke="#95fe7c" strokeWidth="0.3" strokeOpacity="0.07" />
          <line x1="560" y1="50" x2="560" y2="155" stroke="#95fe7c" strokeWidth="0.3" strokeOpacity="0.07" />
          <circle cx="350" cy="100" r="10" fill="none" stroke="#95fe7c" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="350" cy="100" r="4" fill="#95fe7c" fillOpacity="0.25" />
          {([[140, 50], [560, 50], [140, 155], [560, 155]] as [number, number][]).map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="6" fill="none" stroke="#95fe7c" strokeWidth="0.7" strokeOpacity="0.3" />
              <circle cx={x} cy={y} r="2.5" fill="#95fe7c" fillOpacity="0.18" />
            </g>
          ))}
        </svg>
        <div className="absolute" style={{ top: "28px", left: "96px" }}>
          <span className="font-mono text-[9px] text-[#95fe7c]/45">candy_cookz</span>
        </div>
        <div className="absolute text-right" style={{ top: "28px", right: "96px" }}>
          <span className="font-mono text-[9px] text-[#95fe7c]/45">lil_lob</span>
        </div>
        <div className="absolute" style={{ bottom: "38px", left: "96px" }}>
          <span className="font-mono text-[9px] text-[#95fe7c]/45">LobBET</span>
        </div>
        <div className="absolute text-right" style={{ bottom: "38px", right: "90px" }}>
          <span className="font-mono text-[9px] text-[#95fe7c]/45">trade_agent</span>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "116px" }}>
          <span className="font-mono text-[9px] text-[#95fe7c]/20 uppercase tracking-widest">OPENCLAW</span>
        </div>
        <div className="absolute top-4 right-5 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#95fe7c]/70 animate-pulse" />
          <span className="font-inter text-[9px] text-[#95fe7c]/50">autonomous · 24/7</span>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#08090f] to-transparent pointer-events-none" />
      </div>
    );
  }

  if (id === "etsy-tpt") {
    return (
      <div className="relative w-full overflow-hidden bg-[#050810]" style={{ height: "200px" }}>
        <div className="absolute inset-0 p-4 grid grid-cols-3 gap-2">
          <div className="row-span-2 border border-[rgba(149,254,124,0.1)] p-2 flex flex-col relative">
            <div className="absolute -top-px -right-px bg-[#95fe7c] px-1.5 py-0.5 z-10">
              <span className="font-rajdhani font-bold text-[7px] uppercase text-[#08090f] whitespace-nowrap">BEST SELLER</span>
            </div>
            <div className="flex-1 bg-[rgba(149,254,124,0.04)] border border-[rgba(149,254,124,0.06)] flex items-center justify-center mb-2">
              <div className="text-center">
                <div className="w-12 h-8 bg-[rgba(149,254,124,0.06)] mx-auto mb-1" />
                <span className="font-inter text-[7px] text-[#4a4f62] uppercase tracking-wide">DESKMAT</span>
              </div>
            </div>
            <div className="flex gap-0.5 justify-center mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-[9px] text-[#95fe7c]">★</span>
              ))}
            </div>
            <span className="font-rajdhani font-bold text-[#95fe7c] text-xs text-center">106 sales</span>
          </div>
          <div className="col-span-2 border border-[rgba(149,254,124,0.07)] p-3 flex flex-col justify-between">
            <div>
              <span className="font-inter text-[8px] text-[#4a4f62] uppercase tracking-wide block mb-1">Teachers Pay Teachers</span>
              <span className="font-rajdhani font-bold text-[#f8f8f0] text-sm block">AI / Web3 Curriculum</span>
              <span className="font-inter text-[9px] text-[#8a8fa8] block mt-0.5">Detroit Deco store</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-[10px] text-[#95fe7c]">★</span>
                ))}
              </div>
              <span className="font-inter text-[9px] text-[#4a4f62]">5-star reviews</span>
            </div>
          </div>
          <div className="col-span-2 border border-[rgba(149,254,124,0.07)] px-3 py-2 flex items-center justify-between">
            <span className="font-inter text-[8px] text-[#4a4f62] uppercase tracking-wide">Etsy · YoungCreatorsGifts</span>
            <div className="flex items-center gap-2">
              <span className="font-rajdhani font-bold text-[#95fe7c] text-lg">106</span>
              <span className="font-inter text-[8px] text-[#4a4f62]">sales</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#08090f] to-transparent pointer-events-none" />
      </div>
    );
  }

  if (id === "student-loanz") {
    return (
      <div className="relative w-full overflow-hidden bg-[#050810]" style={{ height: "200px" }}>
        <img
          src="/images/student-loanz-site.jpg"
          alt="Student $LOANZ site"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090f] via-[rgba(8,9,15,0.25)] to-transparent" />
        <div className="absolute top-4 right-5">
          <span className="font-rajdhani font-bold text-[10px] uppercase tracking-widest text-[#95fe7c] border border-[rgba(149,254,124,0.3)] px-2 py-0.5">
            BASE · $LOANZ
          </span>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#08090f] to-transparent pointer-events-none" />
      </div>
    );
  }

  if (id === "mayo") {
    return (
      <div className="relative w-full overflow-hidden bg-[#06060a]" style={{ height: "200px" }}>
        <img
          src="/images/mayo-site.jpg"
          alt="Cinco de Mayo site"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090f] via-[rgba(8,9,15,0.15)] to-transparent" />
        <div className="absolute top-4 right-5">
          <span className="font-rajdhani font-bold text-[10px] uppercase tracking-widest text-[#fbbf24] border border-[rgba(251,191,36,0.3)] px-2 py-0.5">
            $MAYO
          </span>
        </div>
        <div className="absolute bottom-5 inset-x-5 flex justify-between">
          {["HOT", "EXTRA", "SPICY", "MILD", "FRUITS"].map((name, i) => (
            <span key={name} className="font-rajdhani font-bold text-[8px] uppercase tracking-wider" style={{ color: `rgba(251,191,36,${0.20 + i * 0.06})` }}>
              {name}
            </span>
          ))}
        </div>
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#08090f] to-transparent pointer-events-none" />
      </div>
    );
  }

  if (id === "detroit-deco") {
    return (
      <div className="relative w-full overflow-hidden bg-[#1a1610]" style={{ height: "200px" }}>
        <img
          src="/images/detroit-deco-site.jpg"
          alt="Detroit Deco blog"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090f] via-[rgba(8,9,15,0.2)] to-transparent" />
        <div className="absolute top-4 right-5">
          <span className="font-inter text-[9px] uppercase tracking-widest text-[#f8dca0]/70 border border-[rgba(248,220,140,0.2)] px-2 py-0.5">
            2019–2023
          </span>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#08090f] to-transparent pointer-events-none" />
      </div>
    );
  }

  return null;
}
