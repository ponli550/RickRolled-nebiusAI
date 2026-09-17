/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f2fe",
          100: "#e9e6fd",
          200: "#d5cffb",
          300: "#b8aef7",
          400: "#9a86f1",
          500: "#6c5ce7",
          600: "#5b47d6",
          700: "#4c39bd",
          800: "#3f309b",
          900: "#362b7e",
        },
        navy: {
          700: "#252b4d",
          800: "#1d2340",
          900: "#171b33",
          950: "#111427",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
