const path = require('path');

module.exports = {
  stories: ['../stories/*.stories.[tj]s'],
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    'storybook-tailwind-dark-mode',
    'storybook-dark-mode',
  ],
  // @ts-ignore
  webpackFinal: async (config: any) => {
    config.resolve.alias = {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src'),
    };
    return config;
  },
};
