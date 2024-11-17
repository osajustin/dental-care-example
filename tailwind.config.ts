import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      spacing: {
        "navbar-height": "4rem",
      },
      colors: {
        primary: {
          black: "#26292F",
          green: "#D7FFE9",
          purple: "#FFD7F2",
        },
        zinc: {
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          500: "#71717a",
          800: "#27272a",
        },
        error: {
          500: "#ef4444",
        },
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      fontSize: {
        h1: ["5rem", { lineHeight: "100%", letterSpacing: "-0.05rem" }],
        h2: ["3.5rem", { lineHeight: "100%", letterSpacing: "-0.05rem" }],
        h2b: ["2rem", { lineHeight: "100%", letterSpacing: "0.09rem" }],
        h3: ["2.5rem", { lineHeight: "110%", letterSpacing: "-0.05rem" }],
        "p-body": ["0.875rem", { lineHeight: "1.3rem", letterSpacing: "0em" }],
        "p-body2": ["1.5rem", { lineHeight: "100%", letterSpacing: "0em" }],
        "p-body3": ["1rem", { lineHeight: "130%", letterSpacing: "-0.01em" }],
      },
      fontWeight: {
        regular: "400",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-outline": {
          "-webkit-text-stroke": "1px black", // Set outline stroke color and width
          color: "#FFFFFF", // Solid color fill for text to prevent transparency issues
        },
        ".text-outline-black": {
          "-webkit-text-stroke": "1px black",
          color: "#FFFFFF", // Ensures fill is solid white
        },
        ".text-outline-white": {
          "-webkit-text-stroke": "1px white",
          color: "#000000", // Ensures fill is solid black
        },
      });
    }),
  ],
  corePlugins: {
    scrollBehavior: true,
  },
};

export default config;
