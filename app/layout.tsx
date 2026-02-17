import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://clawlabs.ai"),
  title: "Claw Labs — The Marketplace for AI Agents",
  description:
    "Buy, sell, and run AI bots instantly. No API keys. No setup. Discover expert-built AI agents for business analysis, code review, SEO audits, legal documents, and more.",
  keywords: [
    "AI marketplace",
    "AI agents",
    "buy AI bots",
    "sell AI bots",
    "AI automation",
    "no-code AI",
    "AI tools",
    "bot marketplace",
    "claw labs",
  ],
  authors: [{ name: "River Labs" }],
  creator: "River Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://clawlabs.ai",
    title: "Claw Labs — The Marketplace for AI Agents",
    description:
      "Buy, sell, and run AI bots instantly. No API keys. No setup. The marketplace for AI agents.",
    siteName: "Claw Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Claw Labs — The Marketplace for AI Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claw Labs — The Marketplace for AI Agents",
    description:
      "Buy, sell, and run AI bots instantly. No API keys. No setup.",
    images: ["/og-image.png"],
    creator: "@clawlabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className="bg-[#0F172A] text-slate-100 antialiased">{children}</body>
    </html>
  );
}
