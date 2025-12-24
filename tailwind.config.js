/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        bg: {
          950: '#252027',
          900: '#28232D',
          850: '#2A2530',
        },
        surface: {
          800: '#353143',
          750: '#363143',
        },
        border: {
          subtle: '#5C566B',
        },
        text: {
          100: '#FFFFFF',
          200: '#EFEFEF',
          300: '#E1E6E6',
        },
        primary: {
          400: '#FC9906',
          500: '#FF6E00',
          600: '#FD6A00',
          700: '#CE4400',
        },
        secondary: {
          500: '#F765F0',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #FF6E00, #FC9906)',
      }
    },
  },
  plugins: [],
}