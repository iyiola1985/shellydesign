import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        navy: {
          50: "#eef2f7",
          100: "#d4dce8",
          200: "#aab9d1",
          300: "#7e92b4",
          400: "#536c97",
          500: "#34507e",
          600: "#243b63",
          700: "#1a2c4e",
          800: "#111e38",
          900: "#0b1526",
          950: "#060c17",
        },
        gold: {
          50: "#fbf7ed",
          100: "#f5ead0",
          200: "#ead3a0",
          300: "#deb868",
          400: "#d4a23f",
          500: "#c8902b",
          600: "#b07a22",
          700: "#8c5e1f",
          800: "#744d20",
          900: "#62411e",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        luxe: "0 24px 60px -20px rgba(11, 21, 38, 0.45)",
        "gold-glow": "0 0 0 1px rgba(212, 162, 63, 0.4), 0 18px 40px -12px rgba(212, 162, 63, 0.35)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(rgba(11,21,38,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(11,21,38,0.04) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1) translate(0,0)" },
          "100%": { transform: "scale(1.15) translate(-2%, -2%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "ken-burns": "ken-burns 18s ease-out alternate infinite",
        marquee: "marquee 30s linear infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
