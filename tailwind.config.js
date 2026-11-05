import jiti from "jiti";

const _require = jiti(import.meta.url);
const { COLORS } = _require("./src/theme/themeConfig.ts");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        ...COLORS,
      },
      keyframes: {
        shake: {
          '10%, 90%': { transform: 'translateX(-2px)' },
          '20%, 80%': { transform: 'translateX(4px)' },
          '30%, 50%, 70%': { transform: 'translateX(-6px)' },
          '40%, 60%': { transform: 'translateX(6px)' },
        },
        'fade-in-down': {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        shake: 'shake 0.45s cubic-bezier(.36,.07,.19,.97)',
        'fade-in-down': 'fade-in-down 0.25s ease forwards',
      },
    },
  },
  
  plugins: [],
};
