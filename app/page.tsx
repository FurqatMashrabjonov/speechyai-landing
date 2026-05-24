"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#E8622A]/10 blur-3xl" />
        </div>

        {/* Logo */}
        <div className="mb-8 flex items-center justify-center w-20 h-20 rounded-[22px] bg-[#E8622A] shadow-lg shadow-[#E8622A]/30">
          <MicIcon />
        </div>

        <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium tracking-wide uppercase">
          Coming Soon
        </Badge>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          Speak Up.
          <br />
          <span className="text-[#E8622A]">Stand Out.</span>
        </h1>

        <p className="max-w-xl text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed">
          The AI voice coach that makes you sharper, bolder, and more confident
          — one conversation at a time.
        </p>

        {submitted ? (
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#E8622A]/10 border border-[#E8622A]/20">
            <span className="text-2xl">🎉</span>
            <p className="text-sm font-medium text-[#E8622A]">
              You&apos;re on the list! We&apos;ll notify you when we launch.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 text-base rounded-xl"
            />
            <Button
              type="submit"
              className="h-12 px-8 rounded-xl bg-[#E8622A] hover:bg-[#d4561f] text-white font-semibold shadow-md shadow-[#E8622A]/20 shrink-0"
            >
              Notify Me
            </Button>
          </form>
        )}

        <div className="flex items-center gap-4 mt-10 opacity-40 select-none">
          <StoreBadge label="App Store" icon={<AppleIcon />} />
          <StoreBadge label="Google Play" icon={<PlayIcon />} />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Available soon on iOS &amp; Android</p>
      </section>

      {/* Features */}
      <section className="border-t px-6 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <Feature emoji="🎙️" title="Real-Time AI Partner" desc="Talk to a lifelike AI that listens, responds, and pushes back — powered by Gemini Live." />
          <Feature emoji="📊" title="Instant Feedback" desc="Get scored on clarity, confidence, and engagement right after every session." />
          <Feature emoji="🗺️" title="Guided Tracks" desc="Structured paths take you from nervous to natural, one scenario at a time." />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Speechy AI. All rights reserved.</p>
        <Link href="/privacy" className="hover:text-foreground transition-colors">
          Privacy Policy
        </Link>
      </footer>
    </main>
  );
}

function Feature({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-3xl">{emoji}</span>
      <h3 className="font-semibold text-base">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function StoreBadge({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-foreground/20 cursor-default">
      {icon}
      <div className="text-left">
        <p className="text-[10px] leading-none text-foreground/60">Download on the</p>
        <p className="text-sm font-semibold leading-tight">{label}</p>
      </div>
    </div>
  );
}

function MicIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
      <rect x="9" y="2" width="6" height="11" rx="3" fill="white" />
      <path d="M5 10a7 7 0 0014 0" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="19" x2="12" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="22" x2="16" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
    </svg>
  );
}
