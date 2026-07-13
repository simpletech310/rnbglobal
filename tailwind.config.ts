import type { Config } from "tailwindcss";

// Modern Authority: charcoal ink, warm bone, cool steel, refined signal amber, steel-blue edge.
const ink = {
  50: "#F5F6F8",
  100: "#E5E7EC",
  200: "#C7CCD6",
  300: "#9AA3B3",
  400: "#6B7589",
  500: "#475167",
  600: "#2F3845",
  700: "#1F2632",
  800: "#141923",
  900: "#0B0F17",
  950: "#06090F",
};

const bone = {
  50: "#FAF8F4",
  100: "#F5F2EC",
  200: "#E9E4D9",
  300: "#D7CFBE",
  400: "#B8AE99",
};

const steel = {
  50: "#F2F4F7",
  100: "#E3E7EE",
  200: "#C3CAD7",
  300: "#9CA6B9",
  400: "#6B7A8E",
  500: "#4A5B72",
  600: "#374559",
  700: "#2A3543",
  800: "#1F2733",
  900: "#161C25",
};

const signal = {
  50: "#FBF6E9",
  100: "#F6EBC8",
  200: "#EFD893",
  300: "#F2C572",
  400: "#E8AC44",
  500: "#D89224",
  600: "#B57718",
  700: "#8E5C13",
  800: "#6F4811",
  900: "#553810",
};

const edge = {
  300: "#8AA8C6",
  400: "#5F86AD",
  500: "#3E6B92",
  600: "#2D5275",
  700: "#1F3E5B",
};

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink,
        bone,
        steel,
        signal,
        edge,
        // Legacy aliases, recolored to the new palette so any unrebuilt surface inherits the overhaul.
        navy: ink,
        gold: signal,
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-inter)", "system-ui", "sans-serif"],
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
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
      backgroundImage: {
        "grain":
          "radial-gradient(rgba(11,15,23,0.025) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grain": "3px 3px",
      },
    },
  },
  plugins: [],
};

export default config;
