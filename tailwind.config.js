/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        abc:["Zeyada","cursive"]
      },
      colors: {
        primaryBg: "#95d3a2",
        secondaryBg: "#359fac"
      }
    },
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
};
