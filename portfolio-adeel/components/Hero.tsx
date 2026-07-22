"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, FileDown } from "lucide-react";
import TypingText from "./TypingText";
import MagneticButton from "./MagneticButton";
import { profile } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="hero"
      ref={ref}
      onMouseMove={handleMove}
      className="relative min-h-screen flex items-center pt-28 pb-16 px-6 md:px-10"
    >
      <div className="mx-auto max-w-6xl w-full grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        {/* Text column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs text-cyan-200"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to summer internship opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.1] text-white [html.light_&]:text-[#0b0518]"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-lg md:text-2xl text-muted font-heading h-8"
          >
            <TypingText
              words={["Computer Science Student", "C++ Enthusiast", "Problem Solver", "Aspiring Software Developer"]}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-muted leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              as="a"
              href={profile.resumeUrl}
              download
              target="_blank"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-aurora px-6 py-3 text-sm font-medium text-white shadow-glow overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <FileDown size={16} />
              Download Resume
            </MagneticButton>

            <MagneticButton
              as="a"
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-white hover:shadow-glow-cyan transition-shadow"
            >
              View Projects
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex items-center gap-4"
          >
            {[
              { icon: Github, href: profile.github, label: "GitHub" },
              { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                data-cursor-pointer
                className="h-11 w-11 rounded-full glass flex items-center justify-center text-muted hover:text-white hover:shadow-glow-cyan hover:-translate-y-1 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Photo column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ perspective: 1000 }}
          className="relative mx-auto"
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto animate-float"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-aurora opacity-40 blur-2xl" />
            <div className="relative h-full w-full rounded-[2.5rem] glass-strong overflow-hidden flex items-center justify-center">
              <div className="h-full w-full bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/30 flex items-center justify-center">
                <span className="font-heading text-6xl text-white/90">MM</span>
              </div>
              <div className="absolute inset-0 border border-white/10 rounded-[2.5rem]" />
            </div>
            <div className="absolute -bottom-4 -left-4 glass-strong rounded-2xl px-4 py-2 text-xs shadow-glass">
              <span className="text-emerald-300 font-medium">● </span>
              <span className="text-white/80">Available for internships</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-white transition-colors"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
