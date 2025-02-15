/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./templates/**/*.html', './static/**/*.{html,js}', './content/**/*.md'],
    theme: {
        fontSize: {
            h1: ['6.0rem', { lineHeight: '5rem' }],
            mdh1: ['16.0rem', { lineHeight: '10rem' }],
            h2: ['3.8rem', { lineHeight: '6rem' }],
            mdh2: ['8.0rem', { lineHeight: '6rem' }],
            author: ['0.8rem', { lineHeight: '1rem' }],
            xs: ['0.7rem', {lineHeight: '1.1rem'}],
            base: ['1.2rem', { lineHeight: '1.8rem' }],
        },
        extend: {
            colors: {
                'base': '#404a3a',
                'price1' : '#cad6c5',
                'price2' : '#a0af9a',
                'price3' : '#647460',
                'price4' : '#44573f',
                'price5' : '#2e4029',
            }
        },
        backgroundImage: {
            'pc': 'url("img/start.jpg")',
            'pc-mo': 'url("img/start_mobile.jpg")',
            'news': 'url("img/news.jpg")',
            'test': 'url("img/bg.svg")',
            'test1': 'url("img/bg1.svg")',
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
