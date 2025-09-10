/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'au-blue': '#1F349D',
        'au-orange': '#F15C19',
      },

      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}