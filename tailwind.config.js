const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '2rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      animation: {
        'fade-in':'fade-in 1s linear forwards',
        'fade-in-y': 'fade-in-y 0.5s linear forwards',
        'fade-out-y': 'fade-out-y 0.1s linear forwards',
        'fade-in-x-left': 'fade-in-x-left 0.5s linear forwards',
        'fade-out-x-left': 'fade-out-x-left 0.1s linear forwards',
        'fade-in-x-right': 'fade-in-x-right 0.5s linear forwards',
        'fade-out-x-right': 'fade-out-x-right 0.1s linear forwards'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        "fade-in":{
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        'fade-in-y': {
          from: {
            opacity: 0,
            transform: 'translateY(5rem)'
          },
          to: {
            opacity: 1,
            transform: 'translateY(0px)'
          },
        },
        'fade-out-y': {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        },
        'fade-in-x-left': {
          from: {
            opacity: 0,
            transform: 'translateX(-5rem)'
          },
          to: {
            opacity: 1,
            transform: 'translateX(0px)'
          },
        },
        'fade-in-x-right': {
          from: {
            opacity: 0,
            transform: 'translateX(5rem)'
          },
          to: {
            opacity: 1,
            transform: 'translateX(0px)'
          },
        },
        'fade-out-x-left': {
          from: {
            opacity: 1,
            transform: 'translateX(0)'
          },
          to: {
            opacity: 1,
            transform: 'translateX(-5rem)'
          },
        },
        'fade-out-x-right': {
          from: {
            opacity: 1,
            transform: 'translateX(0)'
          },
          to: {
            opacity: 0,
            transform: 'translateX(5rem)'
          },
        },
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
