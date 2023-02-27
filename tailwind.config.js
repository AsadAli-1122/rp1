/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "w": "var(--w)",
        "b": "var(--b)",
        "pink": "var(--pink)",
        "dark-pink": "var(--dark-pink)",
        "l-yellow": "var(--l-yellow)",
        "xl-yellow": "var(--xl-yellow)",
        "s-yellow": "var(--s-yellow)",
        "light-gray": "var(--light-gray)",
        "dark-gray": "var(--dark-gray)",
    },
    },
  },
  plugins: [
    
  ],
}