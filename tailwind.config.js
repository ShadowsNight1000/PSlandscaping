const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: '#f5f5f5', // Light Gray
        primary: '#001ee0', // Blue
        textPrimary: '#1b1b1b', // Dark Gray
      },
      boxShadow: {
        '3xl': '0 4px 4px rgb(0 0 0 / 25%)',
      },
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)',

        circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)',

        circularLightLg: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)',

        circularDarkLg: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)',

        circularLightMd: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)',

        circularDarkMd: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)',

        circularLightSm: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)',

        circularDarkSm: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
    // We have to use plugin to let intelligence pick up our custom classname's style
    // A time consuming process, but it's worth it
    // ref: https://github.com/tailwindlabs/tailwindcss-intellisense/issues/227
    ({ addUtilities }) => {
      addUtilities({
        '.fieldHeading': {
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
          fontSize: '32px',
          fontWeight: 700,
          paddingBottom: '0.25rem' /* 4px */,
          fontSize: '0.75rem' /* 12px */,
          lineHeight: '1rem' /* 16px */,
        },
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.text-2xs': {
          fontSize: '0.5rem' /* 8px */,
        },
      });
    },
  ],
};
