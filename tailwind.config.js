/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'allbridge-green': '#2FD0A6',
        'allbridge-black': '#090909',
      },
      backgroundImage: {
        'hero-gradient': `
          radial-gradient(circle at top, #2FD0A6 0%, transparent 60%),
          radial-gradient(circle at left, #2FD0A6 0%, transparent 40%),
          radial-gradient(circle at right, #2FD0A6 0%, transparent 40%),
          linear-gradient(to bottom, #090909 0%, #090909 100%)
        `,
      },
    },
  },
  plugins: [],
} 