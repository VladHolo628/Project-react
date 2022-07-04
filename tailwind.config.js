/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        poster: '4 / 3',
      },
      backgroundImage: {
        login: "url('/img/login.svg')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
