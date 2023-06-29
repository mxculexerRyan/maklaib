/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors:{
        col_coyt: '#807160',
        col_lior: '#ffd9b9',
        col_khak: '#COA58d',
        col_bolv: '#403d34',
        col_blak: '#000807',
      },
      fontFamily: {
        ds: ['Dancing Script'],
        rj: ['Rajdhani'],
        sn: ['Signika Negative'],
      },

    },
  },
  plugins: [],
}