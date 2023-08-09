/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        abc:["Zeyada","cursive"]
      }
    },
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")],
};
