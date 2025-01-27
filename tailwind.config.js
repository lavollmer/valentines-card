/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        fairytalePink: "#f1c8db",
        mauvePink: "#B88c9e",
        eggplant: "#704c5e",
        greenCadet: "#88a09e",
        greenDark: "#558b6e",
        stone: "#fafaf9",
        cherryRed: "#9d252c",
        parchment: "#fcf5e5",
        bubblePink: "#f875a6",
        navyBlue: "#004b84",
        lightPink: "#f6a8c5",
      },
    },
    plugins: [],
  },
};
