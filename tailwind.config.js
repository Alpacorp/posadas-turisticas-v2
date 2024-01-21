/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      gloria: ["var(--font-gloria)"],
      quicksand: ["var(--font-quicksand)"],
      montserrat: ["var(--font-montserrat)"],
    },
    backgroundImage: {
      "gradient-linear":
        "linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,0.75) 100%)",
    },
    colors: {
      "salmon-color": "#F24F13",
      "clear-green-color": "#99CC33",
      "green-color": "#419133",
      "white-color": "#FFFFFF",
      "black-color": "#000000",
      "gray-color": "#4F4F4F",
      "gray-800-color": "#333333",
    },
  },
  plugins: [],
};
