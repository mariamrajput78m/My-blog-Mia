"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, Terminal } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  stack,
  github,
  demo
}: {
  title: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-3xl glass overflow-hidden hover:shadow-glow transition-shadow duration-300"
    >
      <div className="relative h-44 flex items-center justify-center bg-gradient-to-br from-primary/25 via-secondary/15 to-accent/20 overflow-hidden">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="h-16 w-16 rounded-2xl glass-strong flex items-center justify-center"
        >
          <Terminal size={24} className="text-cyan-200" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
      </div>

      <div className="p-6" style={{ transform: "translateZ(30px)" }}>
        <h3 className="font-heading text-xl text-white [html.light_&]:text-[#0b0518] mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            data-cursor-pointer
            className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full glass hover:shadow-glow-cyan transition-shadow text-white/90"
          >
            <Github size={14} /> Code
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              data-cursor-pointer
              className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full bg-gradient-aurora text-white"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
