import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "#8B5CF6",
        accent: "#06B6D4",
        bg: "#050816",
        "bg-light": "#F5F3FF",
        card: "rgba(255,255,255,0.05)",
        muted: "#94A3B8"
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      backgroundImage: {
        "gradient-aurora": "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
        "gradient-violet-blue": "linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)",
        "gradient-purple-cyan": "linear-gradient(135deg, #A855F7 0%, #06B6D4 100%)"
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 58, 237, 0.35)",
        "glow-cyan": "0 0 40px rgba(6, 182, 212, 0.3)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.25)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" }
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-25px) rotate(4deg)" }
        },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(4%, -6%) scale(1.08)" },
          "66%": { transform: "translate(-3%, 4%) scale(0.96)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        aurora: "aurora 18s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
        blink: "blink 1s step-end infinite",
        shimmer: "shimmer 3s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
