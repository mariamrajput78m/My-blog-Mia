"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education } from "@/lib/data";

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"]
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="relative py-28 px-6 md:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Education"
          title="Where the foundation was built"
          align="center"
        />

        <div ref={ref} className="relative mt-16 pl-8 md:pl-0">
          {/* Track */}
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
          <motion.div
            style={{ height }}
            className="absolute left-3 md:left-1/2 top-0 w-px bg-gradient-aurora md:-translate-x-1/2"
          />

          <div className="space-y-14">
            {education.map((item, i) => (
              <div
                key={item.id}
                className={`relative md:flex md:items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-3 md:left-1/2 top-1.5 h-3 w-3 rounded-full bg-cyan-300 shadow-glow-cyan md:-translate-x-1/2 z-10" />

                <div className="md:w-1/2" />
                <Reveal
                  direction={i % 2 === 0 ? "left" : "right"}
                  className={`md:w-1/2 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}
                >
                  <div className="glass rounded-2xl p-6 hover:shadow-glow transition-shadow">
                    <span className="eyebrow text-primary">{item.period}</span>
                    <h3 className="font-heading text-xl text-white [html.light_&]:text-[#0b0518] mt-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-cyan-200 mt-0.5">{item.place}</p>
                    <p className="text-sm text-muted mt-3 leading-relaxed">{item.description}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
