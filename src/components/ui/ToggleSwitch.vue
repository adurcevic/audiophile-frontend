<script setup>
import { computed, useCssModule } from 'vue';

const style = useCssModule();

const props = defineProps({
  value: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['toggle']);

const backgroundStyles = computed(() =>
  props.value ? style.goldMid : style.grayLighter
);

const indicatorStyles = computed(() => {
  return { transform: props.value ? 'translateX(14px)' : 'translateX(0)' };
});
</script>
<template lang="">
  <button
    :class="$style.switch"
    @click="emit('toggle')"
    @keydown.space.prevent="emit('toggle')"
    aria-label="Change page theme"
    role="checkbox"
    :aria-checked="value"
  >
    <span :class="$style.toggleWrapper">
      <span :class="[$style.toggleBackground, backgroundStyles]"> </span>
      <span :class="$style.toggleIndicator" :style="indicatorStyles"> </span>
    </span>
  </button>
</template>
<style lang="css" module>
.switch {
  composes: flexCenter from '@/main.module.css';
}
.goldMid {
  background-color: var(--dot-color);
}

.grayLighter {
  background-color: var(--bg-toggle);
}

.toggleWrapper {
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 34px;
  height: 20px;
  border-radius: 9999px;
}

.toggleWrapper:focus {
  outline: 0;
}

.toggleBackground {
  display: inline-block;
  border-radius: 9999px;
  height: 100%;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.4s ease;
}

.toggleIndicator {
  position: absolute;
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: #ffffff;
  border-radius: 9999px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease;
}
</style>
