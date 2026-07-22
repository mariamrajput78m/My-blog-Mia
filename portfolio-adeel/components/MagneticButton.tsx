"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

export default function MagneticButton({
  children,
  className = "",
  as = "button",
  href,
  onClick,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
  [key: string]: any;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
      data-cursor-pointer
    >
      {as === "a" ? (
        <motion.a href={href} onClick={onClick} whileTap={{ scale: 0.94 }} className={className} {...rest}>
          {children}
        </motion.a>
      ) : (
        <motion.button onClick={onClick} whileTap={{ scale: 0.94 }} className={className} {...rest}>
          {children}
        </motion.button>
      )}
    </motion.div>
  );
}
