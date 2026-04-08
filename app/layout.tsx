import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Safety Net — the agent that keeps you out of liquidation",
  description:
    "An autonomous on-chain guardian. Watches every Aave loan, every Uniswap range, every token you hold — and acts before you bleed.",
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
