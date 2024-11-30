/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        'secondary': '#4A4A4A',
        'dark_primary': '#FF6363',
        'dark_secondary': '#4A4A4A',
      }
    },
  },
  plugins: [],
}