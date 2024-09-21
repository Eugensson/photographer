import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  rules: {
    "@next/next/no-img-element": "off",
  },
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1192px",
    },
    fontFamily: {
      primary: "var(--font-playfair_display)",
      secondary: "var(--font-mulish)",
    },
    extend: {
      colors: {
        primary: "#0e1112",
        grey: "#484b4b",
        accent: "#eef7f9",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
