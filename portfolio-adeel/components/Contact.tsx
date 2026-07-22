"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";
import { profile } from "@/lib/data";

const contactInfo = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined }
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something"
          description="Have an internship opening, a project idea, or just want to say hi? My inbox is open."
          align="center"
        />

        <div className="mt-14 grid md:grid-cols-[0.85fr_1.15fr] gap-6">
          <Reveal direction="left">
            <div className="glass-strong rounded-3xl p-7 h-full flex flex-col justify-between">
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="h-11 w-11 flex-shrink-0 rounded-xl bg-gradient-aurora flex items-center justify-center">
                      <item.icon size={17} className="text-white" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-white/90 hover:text-cyan-300 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-white/90">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-8">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-pointer
                  className="h-11 w-11 rounded-full glass flex items-center justify-center text-muted hover:text-white hover:shadow-glow-cyan transition-all"
                >
                  <Github size={17} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-pointer
                  className="h-11 w-11 rounded-full glass flex items-center justify-center text-muted hover:text-white hover:shadow-glow-cyan transition-all"
                >
                  <Linkedin size={17} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-7 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="text-xs uppercase tracking-wider text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/60 focus:border-cyan-300/50 transition-colors outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs uppercase tracking-wider text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/60 focus:border-cyan-300/50 transition-colors outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-xs uppercase tracking-wider text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-muted/60 focus:border-cyan-300/50 transition-colors outline-none resize-none"
                  placeholder="Tell me about the opportunity or idea..."
                />
              </div>

              <MagneticButton
                as="button"
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-aurora px-6 py-3.5 text-sm font-medium text-white shadow-glow"
              >
                <motion.span
                  key={sent ? "sent" : "send"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2"
                >
                  {sent ? (
                    <>
                      <Check size={16} /> Message ready — check your mail app
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </motion.span>
              </MagneticButton>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
