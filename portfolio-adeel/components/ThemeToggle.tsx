"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark and light mode"
      data-cursor-pointer
      className="relative h-9 w-9 rounded-full glass flex items-center justify-center hover:shadow-glow transition-shadow"
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.35 }}
      >
        {theme === "dark" ? (
          <Sun size={16} className="text-cyan-300" />
        ) : (
          <Moon size={16} className="text-primary" />
        )}
      </motion.div>
    </button>
  );
}
