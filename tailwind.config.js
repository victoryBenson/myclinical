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
      DEFAULT: '#2EB62C',
      dark: '#259224',
      darker: '#1C6D1B',
      deepest: '#124912',
      light: '#D5F0D5',
      lighter: '#E4F6E4',
      soft: '#EDF9ED',
      subtle: '#F5FCF5',
      ultraLight: '#FBFEFB',
      50: '#F5FCF5',
      100: '#E4F6E4',
      200: '#C9ECC8',
      300: '#AEE2AD',
      400: '#71CD6F',
      500: '#2EB62C',
      600: '#259224',
      700: '#1C6D1B',
      800: '#124912',
      900: '#092409',
      },

      success: {
      DEFAULT: '#16a34a',
      soft: '#dcfce7',
      dark: '#14532d',
      50: '#F0FDF4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      },

      info: {
      DEFAULT: '#2563eb',
      soft: '#dbeafe',
      dark: '#1e3a8a',
      },

      warning: {
      DEFAULT: '#ca8a04',
      soft: '#fef9c3',
      dark: '#713f12',
      },

      danger: {
      DEFAULT: '#dc2626',
      soft: '#fee2e2',
      dark: '#7f1d1d',
      },
      },
      // colors: {
      //   primary: {
      //     DEFAULT: '#001A00',
      //     dark: "#001300",
      //     darker: "#000D00",
      //     deepest: "#000600",
      //     light: "#ccd1cc",
      //     lighter: "#dce0dc",
      //     soft: "#e6eae6",
      //     subtle: "#f2f4f2",
      //     ultraLight: "#f9faf9"
      //   },
      //    success: {
      //     DEFAULT: '#16a34a', 
      //     soft: '#dcfce7', 
      //     dark: '#14532d',
      //     50: '#F0FDF4',
      //     100: '#dcfce7',
      //     200: '#bbf7d0',
      //     300: '#86efac',
      //   },

      //   info: {
      //     DEFAULT: '#2563eb',
      //     soft: '#dbeafe',
      //     dark: '#1e3a8a',   
      //   },

      //   warning: {
      //     DEFAULT: '#ca8a04', 
      //     soft: '#fef9c3',
      //     dark: '#713f12',     
      //   },

      //   danger: {
      //     DEFAULT: '#dc2626', 
      //     soft: '#fee2e2',
      //     dark: '#7f1d1d',     
      //   },
      // },
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