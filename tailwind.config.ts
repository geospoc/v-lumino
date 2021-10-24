module.exports = {
  // mode: 'jit',
  purge: {
    enabled: false,
    content: ['src/**/*.vue'],
  },
  darkMode: 'class',
  theme: {
    colors: { ...require('tailwindcss/colors') }, // https://tailwindcss.com/docs/customizing-colors#color-palette-reference
    extend: {
      fontFamily: {
        sans: [
          'Inter var',
          ...require('tailwindcss/defaultTheme').fontFamily.sans,
        ],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
