/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    themes: ["light", "dark", "cupcake"],
    fontFamily: {
     abc: ['Shadows Into Light', "cursive"],
 
    }
  },
plugins: [require("daisyui")],
};
