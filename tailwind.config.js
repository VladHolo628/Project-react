/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        poster: '4 / 3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
