import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: palette.bg,
        foreground: palette.fg,
        primary: {
          DEFAULT: palette.primary,
          foreground: palette.fg,
        },
        secondary: {
          DEFAULT: palette.secondary,
          foreground: palette.primary,
        },
        accent: {
          DEFAULT: palette.accent,
          foreground: palette.bg,
        },
      },
      fontFamily: {
        display: [brand.typography?.display || "Inter", "sans-serif"],
        body: [brand.typography?.body || "Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;