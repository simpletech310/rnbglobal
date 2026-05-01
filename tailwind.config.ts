import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f1f5fb",
          100: "#dde7f3",
          200: "#b6c8e2",
          300: "#86a3cb",
          400: "#5a7fb3",
          500: "#3a5f97",
          600: "#2a487a",
          700: "#1f3661",
          800: "#162848",
          900: "#0c1a31",
          950: "#060f1d",
        },
        steel: {
          50: "#f6f7f9",
          100: "#ecedf2",
          200: "#d5d8e2",
          300: "#b0b6c8",
          400: "#858da8",
          500: "#666f8c",
          600: "#525872",
          700: "#43475c",
          800: "#393c4d",
          900: "#323543",
        },
        gold: {
          50: "#fdfaef",
          100: "#fbf2d4",
          200: "#f6e3a4",
          300: "#f0cd6b",
          400: "#e9b53f",
          500: "#d99a22",
          600: "#bb781b",
          700: "#955819",
          800: "#7b471c",
          900: "#673b1c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "65ch",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
    },
  },
  plugins: [],
};

export default config;
