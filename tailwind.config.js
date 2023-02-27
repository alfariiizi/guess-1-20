/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pixel: '"Press Start 2P"',
      },
      colors: {
        primary: {
          100: "#d3d3d3",
          200: "#a7a7a7",
          300: "#7a7a7a",
          400: "#4e4e4e",
          500: "#222222",
          600: "#1b1b1b",
          700: "#141414",
          800: "#0e0e0e",
          900: "#070707",
        },
      },
    },
  },
  plugins: [],
};
