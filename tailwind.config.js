/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EFE7D2',
        // border is 15%
        dark: '#0A0B0A',
        'dark-2': '#181818',
        muted: '#F5F2EA',
        // text is 70%
      },
      fontFamily: {
        forum: ['Forum', 'system-ui'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      fontSize: {
        // Heading sizes
        'heading-xlarge': [ '140px',{ lineHeight: '100%', letterSpacing: '3px', } ],
        'heading-large': [ '112px',{ lineHeight: '100%', letterSpacing: '2px', } ],
        'heading-medium': [ '96px',{ lineHeight: '110%', letterSpacing: '2px', } ],
        'heading-small': [ '80px',{ lineHeight: '110%', letterSpacing: '2px', } ],
        'heading-h1': [ '64px',{ lineHeight: '110%', letterSpacing: '1px', } ],
        'heading-h2': [ '40px',{ lineHeight: '120%', letterSpacing: '1px', } ],
        'heading-h3': [ '32px',{ lineHeight: '120%', letterSpacing: '1px', } ],
        'heading-h4': [ '24px',{ lineHeight: '120%', letterSpacing: '1px', } ],
        'heading-h5': [ '22px',{ lineHeight: '120%', letterSpacing: '1px', } ],
        'heading-h6': [ '16px',{ lineHeight: '120%', letterSpacing: '1px', } ],
        
        // Body font sizes
        xlarge: [ '24px',{ lineHeight: '160%',} ],
        large: [ '20px',{ lineHeight: '160%',} ],
        medium: [ '18px',{ lineHeight: '150%',} ],
        base: [ '16px',{ lineHeight: '180%',} ],
        small: [ '14px',{ lineHeight: '150%',} ],
        meta: [ '12px',{ lineHeight: '130%', letterSpacing: '1px', fontWeight: '400' } ],
      },
      zIndex: {
        '-1': '-1',
        100: '100'
      },
      screens: {
        '2xl': '1440px'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
      addVariant('child-focus', '& > *:focus');
    }
  ],
}

