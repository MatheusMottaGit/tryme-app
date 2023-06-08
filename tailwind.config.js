/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#f47726',
        darkGray: '252525',
        base: '#F6E6CD'
      },

      boxShadow: {
        xxsmall: 'box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.0005);',
        xsmall: 'box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);',
        small: 'box-shadow: 0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06);',
        medium: 'box-shadow: 0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03);',
        large: 'box-shadow: 0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03);',
        xlarge: 'box-shadow: 0px 24px 48px -12px rgba(0, 0, 0, 0.18);',
        xxlarge: 'box-shadow: 0px 32px 64px -12px rgba(0, 0, 0, 0.14);'
      },

      fontFamily: {
        russo: 'var(--font-russo)'
      },

      padding: {
        nav: '0px 64px'
      }
    },
  },
  plugins: [],
}
