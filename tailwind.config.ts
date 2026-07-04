import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#031B55",
          light: "#0A2A6E",
          dark: "#021340",
        },
        gold: {
          DEFAULT: "#C79A3B",
          light: "#D9B968",
          dark: "#A87E2A",
        },
        cream: "#F8F5EF",
        offwhite: "#FDFCFA",
        grey: {
          light: "#EDEBE6",
          DEFAULT: "#9A9690",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        // fluid, editorial type scale — grows smoothly between mobile and desktop
        "fluid-xs": ["clamp(0.7rem, 0.66rem + 0.2vw, 0.8rem)", { lineHeight: "1.6" }],
        "fluid-sm": ["clamp(0.85rem, 0.8rem + 0.25vw, 1rem)", { lineHeight: "1.7" }],
        "fluid-base": ["clamp(1rem, 0.95rem + 0.25vw, 1.15rem)", { lineHeight: "1.75" }],
        "fluid-lg": ["clamp(1.15rem, 1.05rem + 0.5vw, 1.5rem)", { lineHeight: "1.6" }],
        "fluid-xl": ["clamp(1.4rem, 1.2rem + 1vw, 2rem)", { lineHeight: "1.4" }],
        "fluid-h3": ["clamp(1.75rem, 1.4rem + 1.8vw, 2.75rem)", { lineHeight: "1.12" }],
        "fluid-h2": ["clamp(2.4rem, 1.7rem + 3.5vw, 4.6rem)", { lineHeight: "1.04" }],
        "fluid-h1": ["clamp(3rem, 1.4rem + 8vw, 8.5rem)", { lineHeight: "0.98" }],
      },
      letterSpacing: {
        tightest2: "-0.03em",
        widest2: "0.32em",
        widest3: "0.42em",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
      },
      maxWidth: {
        content: "1440px",
        prose: "42rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
        silk: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
