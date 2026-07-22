"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="relative py-28 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What I Work With"
          title="Skills & Tools"
          description="A working toolkit built through coursework, projects, and a fair amount of trial and error."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              data-cursor-pointer
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                active === cat.id ? "text-white" : "text-muted hover:text-white"
              }`}
            >
              {active === cat.id && (
                <motion.span
                  layoutId="skill-tab"
                  className="absolute inset-0 rounded-full bg-gradient-aurora"
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 min-h-[220px]">
          <AnimatePresence mode="wait">
            {activeCategory.skills.map((skill, i) => (
              <motion.div
                key={`${active}-${skill}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative glass rounded-2xl p-6 overflow-hidden hover:shadow-glow transition-shadow"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-aurora opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500" />
                <div className="relative flex items-center gap-3">
                  <motion.span
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="h-10 w-10 flex-shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-heading text-sm text-cyan-300"
                  >
                    {skill.slice(0, 2).toUpperCase()}
                  </motion.span>
                  <span className="font-medium text-white [html.light_&]:text-[#0b0518]">
                    {skill}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
