/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        page1: "url('../assets/mountain-fuji-1.jpg')",
      },
    },
  },
  plugins: [],
}
