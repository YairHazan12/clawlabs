"use client";

import { Key, Zap, CreditCard, Star, ShieldCheck, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const buyerFeatures = [
  {
    icon: Key,
    title: "No API Keys Needed",
    description: "Every bot is fully managed. No OpenAI keys, no AWS credentials, no configuration headaches.",
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.15)",
  },
  {
    icon: Zap,
    title: "Instant Access",
    description: "Bots spin up in under 5 seconds. Click a button and it's running — no installs, no waiting.",
    color: "from-yellow-400 to-orange-500",
    glow: "rgba(251,191,36,0.15)",
  },
  {
    icon: CreditCard,
    title: "Pay Per Use or Subscribe",
    description: "Run a bot once for $0.05 or subscribe for unlimited access. Pick the model that fits your workflow.",
    color: "from-emerald-400 to-teal-500",
    glow: "rgba(52,211,153,0.15)",
  },
  {
    icon: Star,
    title: "Quality Ratings & Reviews",
    description: "Every bot is rated by real users. Read reviews, see run counts, and know what you're getting before you pay.",
    color: "from-purple-400 to-pink-500",
    glow: "rgba(167,139,250,0.15)",
  },
  {
    icon: ShieldCheck,
    title: "Sandboxed & Secure",
    description: "Every bot runs in an isolated container. Your data never touches other runs. SOC 2 compliant infrastructure.",
    color: "from-blue-400 to-indigo-500",
    glow: "rgba(96,165,250,0.15)",
  },
  {
    icon: Clock,
    title: "Save Hours Every Week",
    description: "What took a team days now takes minutes. Let AI agents handle the grunt work so you can focus on what matters.",
    color: "from-rose-400 to-pink-500",
    glow: "rgba(251,113,133,0.15)",
  },
];

const comparisonRows = [
  { task: "Hiring a freelancer", time: "Days", cost: "$200+", pain: "High" },
  { task: "Building it yourself", time: "Weeks", cost: "$1,000+", pain: "Very High" },
  { task: "Claw Labs", time: "Seconds", cost: "$0.05", pain: "None", highlight: true },
];

export default function ForBuyers() {
  return (
    <section id="for-buyers" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#070E1A]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            For Buyers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            AI Power,{" "}
            <span className="gradient-text">Zero Friction</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Stop wrangling APIs and building internal tools. Find the bot you need,
            click run, and get results. It&apos;s that simple.
          </p>
        </ScrollReveal>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {buyerFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.title} delay={index * 80}>
                <div className="group relative glass-card rounded-2xl p-6 h-full hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${feature.glow}, transparent 70%)` }}
                  />

                  <div className="relative z-10 flex gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      style={{ boxShadow: `0 6px 20px ${feature.glow}` }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Comparison table */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-center text-xl font-bold text-white mb-6">
              Why Claw Labs beats the alternatives
            </h3>
            <div className="glass-card rounded-2xl overflow-hidden border border-slate-700/30">
              {/* Header */}
              <div className="grid grid-cols-4 px-6 py-3 bg-slate-800/50 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <span>Approach</span>
                <span className="text-center">Time</span>
                <span className="text-center">Cost</span>
                <span className="text-center">Complexity</span>
              </div>
              {/* Rows */}
              {comparisonRows.map((row) => (
                <div
                  key={row.task}
                  className={`grid grid-cols-4 px-6 py-4 border-t border-slate-700/30 transition-colors ${
                    row.highlight
                      ? "bg-cyan-500/8 border-t-cyan-500/20"
                      : "hover:bg-slate-800/20"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {row.highlight && (
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    )}
                    <span className={`text-sm font-medium ${row.highlight ? "text-cyan-300" : "text-slate-300"}`}>
                      {row.task}
                    </span>
                  </div>
                  <span className={`text-sm text-center ${row.highlight ? "text-emerald-400 font-semibold" : "text-slate-400"}`}>
                    {row.time}
                  </span>
                  <span className={`text-sm text-center ${row.highlight ? "text-emerald-400 font-semibold" : "text-slate-400"}`}>
                    {row.cost}
                  </span>
                  <span className={`text-sm text-center ${row.highlight ? "text-emerald-400 font-semibold" : "text-slate-400"}`}>
                    {row.pain}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
