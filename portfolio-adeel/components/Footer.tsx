"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative px-6 md:px-10 py-10 border-t border-white/5">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          className="font-heading text-lg"
        >
          <span className="gradient-text">MM</span>
          <span className="text-white [html.light_&]:text-[#0b0518]">.dev</span>
        </motion.a>

        <p className="text-xs text-muted text-center">
          © {new Date().getFullYear()} {profile.name}. Designed &amp; built with intent.
        </p>

        <button
          onClick={scrollTop}
          data-cursor-pointer
          aria-label="Back to top"
          className="h-10 w-10 rounded-full glass flex items-center justify-center hover:shadow-glow-cyan transition-shadow"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
