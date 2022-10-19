module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['pastel'],
  },
  plugins: [require('daisyui')],
};
