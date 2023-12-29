/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      'primary': '#6D23FF',
      'dark-gray': '#3D4049',
      'light-gray': '#71757D',
      'black':'#1a1a1a',
      'white':'#fff' 
    },
    extend: {
      boxShadow: {
        'DEFAULT': '0px 2px 6px 0px #DEE0E6;',
        'inset': 'inset 0 -1px 0 0 #F3F5F8',
        'modal': '-8px 2px 15px 0px rgba(15, 21, 23, 0.28)',
        'box': ' 0px 4px 4px 0px rgba(0, 0, 0, 0.07)'
      },
      fontFamily: {
        'roboto': ['"Roboto"', 'sans-serif'],
        'dmsans': ['"DM Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}