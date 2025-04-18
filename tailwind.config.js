/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#E61019",
      },
      gradientColorStops:{
        "bannerblue":"#cec3f5"
      },
    },
  },
  plugins: [],
}