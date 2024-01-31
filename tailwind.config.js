/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
   
    extend: {
      colors: {
        'main-green': '#36B37E',
        'redy': '#FC5A5A',
        'blue-h': '#183B56',
        
      },
    },
  },
  plugins: [],
}