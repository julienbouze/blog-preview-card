/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lemon :'#F4D04E',
        grey : '#7F7F7F',
      },
      borderRadius: {
        box: '1.25rem',
        image: '0.6rem'
      }
    },
  },
  plugins: [],
};
