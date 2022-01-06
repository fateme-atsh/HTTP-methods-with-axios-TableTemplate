module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }
      'md': { 'min': '768px' , 'max': '1279px' }
      // => @media (max-width: 1279px) { ... }
  },
    extend: {},
  },
  plugins: [],
}
