"use client";

import { GraduationCap, Code2, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";
import { profile, stats } from "@/lib/data";

const highlights = [
  {
    icon: GraduationCap,
    title: "Currently Studying",
    text: "BS Computer Science at the University of Lahore, focused on systems-level thinking."
  },
  {
    icon: Code2,
    title: "Core Strength",
    text: "C++ and object-oriented design — I like understanding what's happening under the hood."
  },
  {
    icon: Target,
    title: "Right Now",
    text: "Actively looking for a summer internship to turn coursework into real, shipped code."
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Turning problems into logic, one function at a time."
          description={profile.about}
        />

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {highlights.map((item, i) => (
            <Reveal key={item.title} direction="up" delay={i * 0.1}>
              <div className="group h-full glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <div className="h-11 w-11 rounded-xl bg-gradient-aurora flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={20} className="text-white" />
                </div>
                <h3 className="font-heading text-lg text-white [html.light_&]:text-[#0b0518] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} direction="scale" delay={i * 0.08}>
              <div className="glass rounded-2xl py-8 text-center">
                <div className="font-heading text-3xl md:text-4xl gradient-text font-medium">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-xs uppercase tracking-wider text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
