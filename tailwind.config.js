/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
       
        primary: {
          DEFAULT: "#10B981",
          light: "#34D399",
          dark: "#059669",
        },
      },
    },
  },
  plugins: [],
};