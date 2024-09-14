/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        brandPrimary: '#222e63',
        brandPrimaryLight: '#0047ba',
        brandPrimaryDark: '#202d62',
        brandSecondary: '#d60c83',
        brandBlack: '#000',
      },
    },
  },
  plugins: [],
}
