/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        secondary: "#5C3200",
        dark: "#2E1900",
        light: "#F6F6F6",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
