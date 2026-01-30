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
        primary: "#000000",
        secondary: "#F0F0F0",
        accent: "#F0EEED",
      },
      fontFamily: {
        integralcf: ["var(--font-integralcf)", "sans-serif"],
        satoshi: ["var(--font-satoshi)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
