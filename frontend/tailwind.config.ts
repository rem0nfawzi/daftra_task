import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#48A74C",
          400: "#14A077",
          500: "#3D8E41",
        },
        secondary: {
          500: "#161616",
        },
        gray: {
          100: "#E9E9E9",
          200: "#F7F7F7",
          500: "#404040",
          600: "#707070",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
