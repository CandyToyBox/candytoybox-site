import type { Metadata } from "next";
import { Rajdhani, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Candy — Building the Internet I Own",
  description:
    "Samantha Kinney (@candytoybox) — ONCHAIN founder and builder. Co-founder of WaveWarz, THE ZAO, and NFT Press. Available for consulting, audits, and builds.",
  keywords: [
    "Web3 consulting",
    "ONCHAIN builder",
    "WaveWarz",
    "NFT Press",
    "AI agent consulting",
    "product audit",
    "Solana",
    "agentic economy",
    "candytoybox",
    "Samantha Kinney",
  ],
  openGraph: {
    title: "Candy — Building the Internet I Own",
    description: "ONCHAIN. In production. Available for hire.",
    url: "https://candytoybox.com",
    siteName: "CandyToyBox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@candytoybox",
    creator: "@candytoybox",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${inter.variable}`}>
      <body className="bg-[#08090f] text-[#f8f8f0] antialiased overflow-x-hidden">
        <Sidebar />
        <Nav />
        <div className="flex">
          <div className="hidden md:block w-14 flex-shrink-0" aria-hidden="true" />
          <div className="flex-1 min-w-0 md:pr-14">
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
