/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "tactic-sans": ["var(--font-tactic-sans)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
