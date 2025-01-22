/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        fairytalePink: "F1C8DB",
        mauvePink: "B88C9E",
        eggplant: "704C5E",
        greenCadet: "88A09E",
        greenV: "558B6E",
      },
    },
    plugins: [],
  },
};
