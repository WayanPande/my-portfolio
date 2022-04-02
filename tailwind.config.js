module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-700': '#242424',
        'grey-200': '#EEEEEE',
        'green-android': '#D4ECD6',
        'blue-react': '#E5F1F8',
        'tools&tech': '#707070'
      },
      animation: {
        'blink': 'blink 1s linear infinite',
      },
      keyframes: {
        'blink': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
      }
    },
  },
  plugins: [],
}
