/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./retro-grand-prix.html", "./404.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
