/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm:'400px',
      md:'760px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {},
  },
  plugins: [
    require('daisyui')
   
}
