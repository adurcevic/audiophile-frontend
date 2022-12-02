<script setup>
import { computed } from 'vue';
const props = defineProps({
  isCheckout: Boolean,
});

const zIndex = computed(() => (props.isCheckout ? '25' : '15'));
</script>
<template lang="">
  <div :class="$style.overlay"></div>
</template>
<style lang="css" module>
.overlay {
  z-index: v-bind(zIndex);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: var(--bg-overlay);
  backdrop-filter: blur(2px);
}
</style>
