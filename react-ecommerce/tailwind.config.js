/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can extend the theme here
      colors: {
        'primary': '#ff6363',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        'body': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
