/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/shadcn/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spanishOrange: '#E66F00',
        battleshipGray: '#A19A91',
        indiaGreen: '#138808'
      },
    },
  },
  plugins: [],
}
