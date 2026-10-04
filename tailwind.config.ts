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
        background: "#1D1E22",
        surface: "#25262B",
        "surface-light": "#2F3138",
        lime: {
          DEFAULT: "#B7FF00",
          hover: "#a3e600",
          light: "#caff33",
          dark: "#8fcc00",
          glow: "rgba(183, 255, 0, 0.4)",
        },
        primaryText: "#F5F5F5",
        secondaryText: "#A0A0A0",
        borderCustom: "rgba(255, 255, 255, 0.12)",
      },
      fontFamily: {
        heading: ["var(--font-anton)", "Impact", "sans-serif"],
        condensed: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "marquee": "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
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
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
