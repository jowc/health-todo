/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      boxShadow: {
        card: "2px 4px 15px -3px #e0e7ff",
      },
    },
  },
  plugins: [],
};
