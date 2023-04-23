/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "tokyonight-bg": "#24283b", 
        "tokyonight-header": "#1f2335",
        "tokyonight-footer": "#3b4261",
        "tokyonight-title": "#ff9e64",
        "tokyonight-reference": "#5eaba4",
        "tokyonight-highlight": "#35dacb",
        "tokyonight-string": "#9ece6a",
        "tokyonight-section-title": "#7aa2f7",
        "tokyonight-text": "#bfc9f3",
      },
    },
  },
  plugins: [],
}
