import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { GrainOverlay } from "@/components/primitives/GrainOverlay";
import { SmoothScroll } from "@/components/primitives/SmoothScroll";
import { Marquee } from "@/components/primitives/Marquee";
import { CursorFollower } from "@/components/primitives/CursorFollower";
import { RevealInit } from "@/components/primitives/RevealInit";
import { Header } from "@/components/nav/Header";
import { Footer } from "@/components/nav/Footer";

const display = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800", "900"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kotton Fruit — Karachi-grown streetwear",
  description:
    "Drops, not stock. Worn in Karachi. Sweated in Lahore. Stolen in Dubai.",
  metadataBase: new URL("https://kottonfruit.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <GrainOverlay />
        <SmoothScroll />
        <RevealInit />
        <CursorFollower />
        <Marquee
          items={[
            "DROP 003 — HEATWAVE — LIVE NOW",
            "FREE SHIPPING OVER PKR 6,000",
            "MEMBERS GET 24H EARLY ACCESS",
            "SHIPPING FROM KARACHI",
          ]}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
