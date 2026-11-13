import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Oswald, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fasurtech | Architecting Autonomous Intelligence",
  description: "Next-Gen AI & Data Intelligence solutions. Transform your enterprise with AI Strategy, Multi-Agent Frameworks, Agentic Data Platforms, and AI-Powered QA.",
  keywords: ["AI Consulting", "Multi-Agent Systems", "Data Intelligence", "AI Strategy", "Enterprise Modernization", "Agentic AI"],
  authors: [{ name: "Fasurtech" }],
  openGraph: {
    title: "Fasurtech | Architecting Autonomous Intelligence",
    description: "Next-Gen AI & Data Intelligence solutions for Healthcare, Financial Services, and Public Sector.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${oswald.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
