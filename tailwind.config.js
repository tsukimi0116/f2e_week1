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
      titleColor: '#FF5136',
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
      '6xl': '3.75rem',
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
        'menu-size': '60px',
        75: '75% 100%',
      },
      backgroundImage: {
        'nav-bg': "url('../src/assets/bg/bg_menuSide.png')",
        'nav-close-btn': "url('../src/assets/btn/btn_burger_close.png')",
        'nav-close-btn-h': "url('../src/assets/btn/btn_burger_close_h.png')",
        'start-bg': "url('../src/assets/main/start.png')",
        'user-icon': "url('../src/assets/ic/ic_users.svg')",
        'ready-frame': "url('../src/assets/main/ready_frame.png')",
        'menu-info': "url('../src/assets/ic/ic_menu_info.png')",
        'menu-list': "url('../src/assets/ic/ic_menu_list.png')",
        'menu-strategy': "url('../src/assets/ic/ic_menu_strategy.png')",
        'menu-job': "url('../src/assets/ic/ic_menu_job.png')",
        'btn-user': "url('../src/assets/btn/btn_user.png')",
        'btn-user-h': "url('../src/assets/btn/btn_user_h.png')",
        'map-bg': "url('../src/assets/main/map.svg')",
        'btn-join': "url('../src/assets/btn/btn_join.png')",
        'btn-join-h': "url('../src/assets/btn/btn_join_h.png')",
        'bg-talking': "url('../src/assets/bg/bg_talking.png')",
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
