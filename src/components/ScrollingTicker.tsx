const items = [
  "ONCHAIN FOUNDER",
  "WAVEWARZ CO-FOUNDER",
  "NFT PRESS CO-FOUNDER",
  "THE ZAO CO-FOUNDER",
  "470+ SOL VOLUME",
  "200+ APPS BUILT",
  "COINBASE HACKATHON",
  "SOLANA MAINNET",
  "AGENTIC ECONOMY",
  "BASE L2",
  "PRODUCTION AI AGENTS",
  "NFT NYC 2024",
  "MIAMI ART BASEL 2024",
];

export default function ScrollingTicker() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-[rgba(255,32,96,0.1)] py-3 bg-[#0d1321]/50">
      <div className="animate-ticker flex gap-12 whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-rajdhani font-bold text-xs tracking-[0.2em] uppercase text-[#4a4f62]"
          >
            <span className="text-[#ff2060] mr-4">·</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
