/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        maroon: {
          '50': '#f9f2f2',
          '100': '#f3e5e5',
          '200': '#e6bfbf',
          '300': '#d99999',
          '400': '#c44d4d',
          '500': '#b10000',
          '600': '#9b0000',
          '700': '#800020',
          '800': '#5e001a',
          '900': '#400010',
        },
        primary: "#2C2385"
      },
    },
  },
  plugins: [],
}


