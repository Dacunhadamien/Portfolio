/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "custom-green": "#578f8c",
      white: "#FFFFFB",
      black: "#141400",
      "custom-yellow": "#FFC145",
      "custom-red": "#FF8585",
      "custom-magenta": "#C186AA",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        Alt: ["Nova Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
