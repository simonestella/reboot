import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./providers/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1B8EF0",
        teal: "#00C9A7",
        accent: "#4CAF50"
      },
      boxShadow: {
        soft: "0 10px 40px rgba(27,142,240,0.12)"
      }
    }
  },
  plugins: []
};

export default config;
