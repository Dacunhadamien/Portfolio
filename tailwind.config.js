/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "custom-green": "#4E7E7C",
      white: "#FFFFFF",
      black: "#000000",
      "custom-yellow": "#FFC145",
      "custom-red": "#CC0000",
      "custom-magenta": "#532938",
    },
    extend: {
      backgroundImage: {
        backgroundImage: "url(/src/images/bckgrnd2.webp)",
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        Alt: ["Nova Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
