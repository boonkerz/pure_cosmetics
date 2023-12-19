/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./templates/**/*.html', './static/**/*.{html,js}', './content/**/*.md'],
    theme: {
        fontSize: {
            h1: ['16.0rem', { lineHeight: '10rem' }],
            h2: ['8.0rem', { lineHeight: '6rem' }],
            base: ['1.2rem', { lineHeight: '1.8rem' }],
        },
        extend: {
            colors: {
                'base': '#404a3a'
            }
        },
        backgroundImage: {
            'purecosmetics': 'url("img/start.jpg")',
            'news': 'url("img/news.jpg")',
            'header': 'url("test.svg")',
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