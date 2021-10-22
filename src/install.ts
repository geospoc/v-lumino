import VueCompositionApi from '@vue/composition-api';
import { VueConstructor } from 'vue';
import VLumino from './components/VLumino.vue';

let installed = false;

const install = {
  install(Vue: VueConstructor): void {
    if (installed) return;
    Vue.use(VueCompositionApi);
    Vue.component('VLumino', VLumino);
    installed = true;
  },
};

export default install;
