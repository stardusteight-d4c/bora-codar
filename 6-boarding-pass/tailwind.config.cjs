/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        card: '0px 4px 24px 0px #00000040',
      },
      backgroundImage: {
        gradient: 'linear-gradient(167.96deg, #8257e5 0%, #271a45 100%)',
        'circle-right-top':
          'linear-gradient(to right, transparent 30%, #462f7b 50%)',
        'circle-right-bottom':
          'linear-gradient(to right, transparent 30%,#432d76 50%)',
        'circle-left-top':
          'linear-gradient(to left, transparent 30%, #462f7b 50%)',
        'circle-left-bottom':
          'linear-gradient(to left, transparent 30%, #3d286c 50%)',
      },
      fontFamily: {
        rubik: 'rubik, sans-seri',
      },
    },
  },
  plugins: [],
}
