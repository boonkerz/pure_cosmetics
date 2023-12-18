/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./templates/**/*.html', './static/**/*.{html,js}', './content/**/*.md'],
    theme: {
      extend: {
          colors: {
              'base': '#404a3a'
          }
      },
      backgroundImage: {
        'purecosmetics': 'url("img/start.jpg")',
        'news': 'url("img/news.jpg")',
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