/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{main:[ 'Montserrat']},
      colors: {
        'egray': '#2c2b31',
      },
    },
  },
  plugins: [],
}