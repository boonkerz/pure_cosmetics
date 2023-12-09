/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./templates/**/*.html', './static/**/*.{html,js}', './content/**/*.md'],
    theme: {
      extend: {},
      backgroundImage: {
        'purecosmetics': 'url("/img/start.jpg")',
      },
      fontFamily: {
        pc: ['pc', 'sans-serif'],
        inria: ['inria', 'sans-serif']
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }