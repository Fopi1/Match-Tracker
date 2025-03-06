import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import font from "next/font/local";

export const metadata: Metadata = {
  title: "Match Tracker",
  description: "Track matches",
};

const tactic_sans = font({
  src: [
    {
      path: "../public/fonts/TacticSans-Reg.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/TacticSans-RegIt.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/TacticSans-BlkIt.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-tactic-sans",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${tactic_sans.variable} ${inter.variable}`}>
      <body className="w-full font-inter bg-[#06080C]">{children}</body>
    </html>
  );
}
