import VLumino from '../src/components/VLumino.vue';

export default {
  title: 'Examples',
};

export const exampleWithScrollable = (_, { argTypes }) => ({
  components: {
    VLumino,
  },
  props: Object.keys(argTypes),
  template: `<v-lumino v-bind="$props" />`,
});
