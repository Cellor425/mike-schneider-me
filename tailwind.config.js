/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'rai-grey': '#373A40',  /** 60 */
      'rai-md-grey': '#4D5159', /** Main Color lighter shade */
      'rai-lt-grey': '#A4ADBF', /** Main Color supa light */
      'rai-green': '#778C58', /** 30 */
      'rai-bone': '#B7BFB4',  /** 10 */
      'rai-blue': '#45ECFF', /** special case highlight */
      'rai-md-blue': '#39C4D4', /** highlight shade middle */
      'rai-dk-blue': '#1E666E', /** highlight shade dark*/
      'rai-white': '#FFFFFF',  /** white, idiot */
      'rai-black': '#000000' /** black, moron */
    },
    extend: {},
  },
  plugins: [],
}
