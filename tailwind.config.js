/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0db75f",  // Re-added primary color
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
      },
      keyframes: {
        fadeInStagger: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeInStagger: 'fadeInStagger 1s ease-in-out',
      },
    },
  },
  plugins: [],
}
