/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: {
      'custom-orange': 'rgba(255, 144, 81, 1)', 
      'blue':'rgba(32, 24, 48, 1)',
      'pinkish': 'rgba(255, 248, 243, 1)',
      'newslatterbutton': 'rgba(147, 108, 221, 1)',
      'footerbg':'rgba(255, 248, 243, 1)'
    },
    backgroundImage: {
      'spotybg': "url('./src/assets/Ellipse 19.png')",
    }
  },
  plugins: [],
}