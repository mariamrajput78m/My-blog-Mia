"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const lines = [
  "$ initializing portfolio...",
  "$ compiling mariam::profile",
  "$ linking creativity.lib",
  "$ ready."
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < lines.length - 1) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 320);
      return () => clearTimeout(t);
    }
    const finish = setTimeout(() => setVisible(false), 550);
    return () => clearTimeout(finish);
  }, [lineIndex]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
        >
          <div className="w-[90%] max-w-md rounded-xl glass-strong p-6 font-mono text-sm">
            <div className="flex gap-1.5 mb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            </div>
            {lines.slice(0, lineIndex + 1).map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-cyan-300/90 mb-1"
              >
                {line}
                {i === lineIndex && <span className="inline-block w-2 ml-1 bg-cyan-300 animate-blink">&nbsp;</span>}
              </motion.p>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
