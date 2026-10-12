import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#060714",
        surface: "#0c0d24",
        "surface-card": "#0f102c",
        "surface-light": "#151738",
        brand: {
          violet: "#8B5CF6",
          purple: "#A855F7",
          fuchsia: "#D946EF",
          indigo: "#6366F1",
          cyan: "#38BDF8",
          dark: "#08091a",
        },
        primaryText: "#F8FAFC",
        secondaryText: "#94A3B8",
        borderCustom: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        heading: ["var(--font-anton)", "sans-serif"],
        condensed: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "float-delayed": "float 4s ease-in-out 2s infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.75", transform: "scale(1.08)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      boxShadow: {
        "purple-glow": "0 0 35px rgba(139, 92, 246, 0.4)",
        "purple-glow-lg": "0 0 60px rgba(139, 92, 246, 0.5)",
        "purple-card": "0 10px 40px -10px rgba(0, 0, 0, 0.8), 0 0 25px rgba(124, 58, 237, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
