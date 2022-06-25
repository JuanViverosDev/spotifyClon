/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: '#1db954',
        blanco: '#b3b3b3',
        grisclaro: '#535353',
        negro: '#121212',
        grisoscuro: '#212121'
      },
      backgroundImage: {
        'banner': "url('/src/resources/radio-g7197c5b46_1920.jpg')",
      }
    },
  },
  plugins: [],
}
