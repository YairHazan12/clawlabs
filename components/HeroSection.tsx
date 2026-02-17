"use client";

import { useState, useEffect } from "react";
import { Users, Zap, Shield } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

interface HeroSectionProps {
  initialCount: number;
}

export default function HeroSection({ initialCount }: HeroSectionProps) {
  const [count, setCount] = useState(initialCount);
  const [displayCount, setDisplayCount] = useState(0);

  // Animate count up on mount
  useEffect(() => {
    let start = 0;
    const end = count;
    const duration = 1200;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayCount(end);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#070E1A]" />
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute inset-0 hero-glow" style={{
        background: "radial-gradient(ellipse 80% 55% at 50% -5%, rgba(34,211,238,0.18) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)"
      }} />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "4s" }} />

      {/* Subtle horizontal line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Now in early access — limited spots available</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6 animate-fade-up">
          <span className="text-white">The Marketplace</span>
          <br />
          <span className="gradient-text">for AI Agents</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "100ms" }}>
          Buy, sell, and run expert-built AI bots instantly.{" "}
          <span className="text-slate-300">No API keys. No setup. No code.</span>
          {" "}Just click and deploy — your AI workforce, ready in seconds.
        </p>

        {/* Waitlist form */}
        <div className="max-w-lg mx-auto mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
          <WaitlistForm
            size="large"
            placeholder="your@email.com"
            onSuccess={(newCount) => setCount(newCount)}
          />
          <p className="mt-3 text-sm text-slate-500">
            No spam. Unsubscribe anytime.
          </p>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-2 mb-14 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <div className="flex -space-x-2">
            {["bg-cyan-400", "bg-blue-400", "bg-purple-400", "bg-emerald-400"].map((color, i) => (
              <div
                key={i}
                className={`w-7 h-7 rounded-full border-2 border-[#070E1A] ${color} flex items-center justify-center text-xs font-bold text-white`}
              >
                {["A", "B", "C", "D"][i]}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-sm text-slate-400">
            <Users className="w-4 h-4 text-cyan-400" />
            <span>
              <span className="text-white font-semibold tabular-nums">{displayCount}</span>
              {" "}people already on the waitlist
            </span>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 animate-fade-up" style={{ animationDelay: "400ms" }}>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>Instant deployment</span>
          </div>
          <div className="w-px h-4 bg-slate-700 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>Sandboxed & secure</span>
          </div>
          <div className="w-px h-4 bg-slate-700 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-cyan-400" />
            <span>No vendor lock-in</span>
          </div>
        </div>

        {/* Floating terminal preview */}
        <div className="mt-16 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "500ms" }}>
          <div className="glass-card gradient-border rounded-2xl p-1 glow-cyan">
            <div className="bg-[#0A1628] rounded-xl overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-slate-500 font-mono">Claw Labs — marketplace</span>
              </div>
              {/* Terminal content */}
              <div className="p-4 font-mono text-sm text-left space-y-2">
                <div className="text-slate-500">$ clawlabs run code-reviewer --pr=github.com/user/repo/pull/42</div>
                <div className="text-cyan-400">✓ Pulling bot image... <span className="text-slate-400">done (1.2s)</span></div>
                <div className="text-cyan-400">✓ Spinning up container... <span className="text-slate-400">done (0.8s)</span></div>
                <div className="text-cyan-400">✓ Analyzing PR... <span className="text-slate-400">87 files changed</span></div>
                <div className="text-emerald-400 mt-2">→ 12 issues found · 3 critical · Ready in 3.1s</div>
                <div className="flex items-center gap-1 text-slate-500 text-xs mt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                  <span>Bot is running · pay-per-use · $0.03/run</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
