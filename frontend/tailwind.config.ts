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
          100: "#F3FDF3",
          300: "#48A74C",
          400: "#14A077",
          500: "#3D8E41",
        },
        secondary: {
          500: "#161616",
        },
        gray: {
          50: "#CDCDCD",
          100: "#E9E9E9",
          200: "#F7F7F7",
          300: "#F0F0F0",
          400: "#D8D8D8",
          500: "#404040",
          600: "#707070",
        },
        bgGray: {
          100: "#faffff",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        sidebarMenuAnimation: {
          "0%": {
            display: "block",
            opacity: "0",
            left: "-30px",
          },
          "100%": {
            opacity: "1",
            left: "0",
          },
        },
      },
      animation: {
        sidebarMenuAnimation:
          "sidebarMenuAnimation .2s .2s ease-in-out 1 forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
