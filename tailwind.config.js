module.exports = {
  purge: {
    enabled: true, 
    safelist: ["dark"],
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layout/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Lora', 'serif']
      },
      colors: {
        'custom-dark-gray' : '#303030',
        'custom-white' : '#EEEEEE'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
