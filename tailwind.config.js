/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gap: {
        "max-1vw-12px": "max(1vw, 12px)"
      },
    },
  },
  plugins: [],
}
