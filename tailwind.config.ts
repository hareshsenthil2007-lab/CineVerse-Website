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
        background: "#080706",
        surface: {
          DEFAULT: "#17140E",
          light: "#242016",
          lighter: "#332C1D",
          card: "#100E0A",
          border: "rgba(214, 173, 85, 0.16)",
        },
        accent: {
          gold: "#D6AD55",
          goldHover: "#E4C276",
          blue: "#D6AD55",
          blueHover: "#B78E3F",
          cyan: "#F1DDAA",
          purple: "#A88B58",
          emerald: "#10B981",
          rose: "#F43F5E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cinema-glow": "radial-gradient(circle at 50% 0%, rgba(214, 173, 85, 0.15) 0%, transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
