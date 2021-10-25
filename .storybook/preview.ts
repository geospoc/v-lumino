import '@lumino/default-theme/style/index.css';
import { themes } from '@storybook/theming';
import VueCompositionApi from '@vue/composition-api';
import Vue from 'vue';
import '../styles/bundle.css';

// Implementation of Global JS
Vue.use(VueCompositionApi);

export const parameters = {
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: '#f5f5f5' },
  },
  controls: { expanded: true },
};
