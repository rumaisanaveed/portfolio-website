/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        purple: "#701BA5",
        white: "#FFFFFF",
        gray: "#282323",
        lightgray: "#404040",
      },
      fontFamily: {
        istok: ["Istok Web", "sans"], // 'Istok Web' is the actual font name
        kavoon: ["Kavoon"],
        itim: ["itim"],
        jaldi: ["Jaldi"],
      },
      screens: {
        // When the screen is wider than it is taller
        widescreen: { raw: "(min-aspect-ratio : 3/2)" },
        // When the screen is taller than wider
        tallscreen: { raw: "(max-aspect-ratio : 13/20)" },
      },
    },
  },
  plugins: [],
};
