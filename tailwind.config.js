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