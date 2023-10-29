/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#c4dbf6",
        secondaryColor: "#3b8beb",
        thirdColor: "#e7e3d4",
        alternateColor: "#8590aa",
        secondAlternateColor: "#b23850",
      },
      fontFamily: {
        robo: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
