/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        recipe: "repeat(5, 1fr) auto repeat(6, 1fr)",
      },
    },
  },
  plugins: [],
};
