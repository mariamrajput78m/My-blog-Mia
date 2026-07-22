"use client";

import { useMemo } from "react";

export default function BackgroundScene() {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 5
      })),
    []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-bg dark:bg-bg transition-colors duration-500 html.light:bg-bg-light">
      {/* Gradient mesh base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.25),transparent_45%),radial-gradient(circle_at_80%_15%,rgba(6,182,212,0.2),transparent_40%),radial-gradient(circle_at_50%_85%,rgba(139,92,246,0.2),transparent_45%)]" />

      {/* Aurora blobs */}
      <div className="absolute top-[-10%] left-[-10%] h-[45vw] w-[45vw] rounded-full bg-gradient-aurora opacity-30 blur-[110px] animate-aurora" />
      <div className="absolute bottom-[-15%] right-[-10%] h-[40vw] w-[40vw] rounded-full bg-gradient-violet-blue opacity-25 blur-[120px] animate-aurora [animation-delay:4s]" />
      <div className="absolute top-[35%] right-[15%] h-[25vw] w-[25vw] rounded-full bg-gradient-purple-cyan opacity-20 blur-[100px] animate-float-slow" />

      {/* Star field */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-white/70 animate-blink"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: star.size,
              height: star.size,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(5,8,22,0.6)_100%)]" />
    </div>
  );
}
