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
       
        primary: {
          DEFAULT: "#2EB62C",

          dark: "#249422",      
          darker: "#1B6F19",    
          deepest: "#145212",   

          light: "#C5E8B7",
          lighter: "#D4F1C8",
          soft: "#E0F6D6",
          subtle: "#ECFBE6",
          ultraLight: "#F5FDF2"
        },
      },
    },
  },
  plugins: [],
};