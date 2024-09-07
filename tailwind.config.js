/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        brandPrimary: '#1C2A48',
        brandSecondary: '#d60c83',
        brandPrimaryDark: '#00a69e',
        brandBlack: '#000',
      },
    },
  },
  plugins: [],
}
