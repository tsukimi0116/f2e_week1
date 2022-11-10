/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // width: {
      //   // eslint-disable-next-line quote-props
      //   '155': '155px',
      // },
      backgroundImage: {
        'nav-bg': "url('../src/assets/bg/bg_menuSide.png')",
        'nav-close-btn': "url('../src/assets/btn/btn_burger_close.png')",
      },
    },
    colors: {
      primary: '#007fab',
      secondary: '#ffc37d',
      navFont: '#ffc37d',
      navBg: '#007FAB',
    },
  },
  plugins: [],
};
