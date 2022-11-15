/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#007fab',
      navFont: '#ffc37d',
    }),
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#007fab',
      secondary: '#ffc37d',
      navBg: '#007FAB',
      titleColor: '#FF5136',
    }),
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      title: ['32px', '56px'],
    },

    extend: {
      height: {
        110: '27rem',
      },
      backgroundSize: {
        55: '50rem',
        'start-size': '1430px',
      },
      backgroundImage: {
        'nav-bg': "url('../src/assets/bg/bg_menuSide.png')",
        'nav-close-btn': "url('../src/assets/btn/btn_burger_close.png')",
        'nav-close-btn-h': "url('../src/assets/btn/btn_burger_close_h.png')",
        'start-bg': "url('../src/assets/main/start.png')",
        'user-icon': "url('../src/assets/ic/ic_users.svg')",
        road: "url('../src/assets/main/road.png')",
        'ready-frame': "url('../src/assets/main/ready_frame.png')",
      },
      lineHeight: {
        40: '40px',
      },
      inset: {
        '1/8': '12.5%',
      },
    },
  },
  plugins: [],
};
