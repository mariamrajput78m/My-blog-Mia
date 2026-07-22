"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { damping: 25, stiffness: 300, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 300, mass: 0.5 });
  const glowX = useSpring(mouseX, { damping: 40, stiffness: 120, mass: 0.8 });
  const glowY = useSpring(mouseY, { damping: 40, stiffness: 120, mass: 0.8 });

  const hasCoarsePointer = useRef(false);

  useEffect(() => {
    hasCoarsePointer.current = window.matchMedia("(pointer: coarse)").matches;
    if (hasCoarsePointer.current) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [data-cursor-pointer]"));
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (hasCoarsePointer.current) return null;

  return (
    <div className="hidden md:block" aria-hidden="true">
      <motion.div
        className="cursor-dot bg-white"
        style={{ x: mouseX, y: mouseY, width: 6, height: 6, opacity: visible ? 1 : 0 }}
      />
      <motion.div
        className="cursor-ring border border-cyan-300/70"
        style={{
          x: ringX,
          y: ringY,
          width: isPointer ? 52 : 28,
          height: isPointer ? 52 : 28,
          opacity: visible ? 1 : 0
        }}
        transition={{ width: { duration: 0.25 }, height: { duration: 0.25 } }}
      />
      <motion.div
        className="cursor-ring bg-gradient-aurora blur-xl"
        style={{
          x: glowX,
          y: glowY,
          width: 160,
          height: 160,
          opacity: visible ? 0.18 : 0
        }}
      />
    </div>
  );
}
