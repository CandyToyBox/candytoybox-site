import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#08090f",
        "void-mid": "#0d1321",
        "void-light": "#161b2e",
        green: "#95fe7c",
        "green-dim": "#6bc456",
        "green-glow": "rgba(149,254,124,0.15)",
        offwhite: "#f8f8f0",
        muted: "#8a8fa8",
        "muted-dark": "#4a4f62",
        border: "rgba(149,254,124,0.12)",
      },
      fontFamily: {
        rajdhani: ["var(--font-rajdhani)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 10vw, 9rem)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 7vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      backgroundImage: {
        "grid-void": `linear-gradient(rgba(149,254,124,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(149,254,124,0.04) 1px, transparent 1px)`,
        "gradient-radial-green": "radial-gradient(ellipse at 50% 0%, rgba(149,254,124,0.08) 0%, transparent 60%)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      boxShadow: {
        "green-glow": "0 0 40px rgba(149,254,124,0.15)",
        "green-glow-sm": "0 0 20px rgba(149,254,124,0.1)",
        "card": "0 1px 0 rgba(149,254,124,0.08), inset 0 1px 0 rgba(255,255,255,0.03)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "scroll-x": "scrollX 30s linear infinite",
        "pulse-green": "pulseGreen 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scrollX: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulseGreen: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
