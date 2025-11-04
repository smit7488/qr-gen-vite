/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionTimingFunction: {
        fast: "0.15s ease-in-out",
      },
    },
  },
  plugins: [],
}