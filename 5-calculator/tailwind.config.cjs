/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html', './src/main.ts'],
  theme: {
    extend: {
      fontFamily: {
        rubik: 'Rubik, sans-serif',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
