<template>
  <section class="w-full h-full">
    <div ref="containerRef" class="flex h-full">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
  import {
    defineComponent,
    nextTick,
    onMounted,
    ref,
  } from '@vue/composition-api';
  import { BoxPanel, DockPanel, Widget } from '@lumino/widgets';
  import type { SetupContext, PropType, Ref } from '@vue/composition-api';

  export default defineComponent({
    name: 'VLumino',
    props: {
      widgetId: {
        type: String as PropType<string>,
        default: `widget.${Date.now()}`,
        required: false,
      },
      dockId: {
        type: String as PropType<string>,
        default: 'dock',
        required: false,
      },
    },
    setup(props, { emit }: SetupContext) {
      const dock: DockPanel = new DockPanel();
      const main: BoxPanel = new BoxPanel({
        direction: 'left-to-right',
        spacing: 0,
      });
      const containerRef: Ref<HTMLElement | null> = ref(null);

      onMounted(() => {
        dock.id = props.dockId;
        main.id = 'main';
        main.addWidget(dock);
        window.onresize = () => main.update();
        BoxPanel.setStretch(dock, 1);
        nextTick(() => {
          const container: HTMLElement = containerRef.value as HTMLElement;
          Widget.attach(main, container);
        });
      });

      return {
        containerRef,
      };
    },
  });
</script>
