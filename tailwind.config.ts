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
        background: "#F8F8F5",
        surface: "#F0F0EC",
        "surface-card": "#FFFFFF",
        card: "#FFFFFF",
        primaryText: "#171717",
        secondaryText: "#777777",
        borderCustom: "#E5E5DF",
        accent: {
          DEFAULT: "#84CC16",
          hover: "#65A30D",
          light: "#ECFCCB",
          dark: "#3F6212",
        },
        charcoal: {
          900: "#111111",
          800: "#171717",
          700: "#262626",
          600: "#404040",
          500: "#525252",
        },
      },
      fontFamily: {
        sans: [
          '"Space Grotesk"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        heading: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ['"Space Grotesk"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        editorial: "-0.03em",
      },
      boxShadow: {
        editorial: "0 20px 40px -15px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.04)",
        "editorial-hover": "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.08)",
        cinematic: "0 25px 60px -15px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
