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

const backgroundStyles = computed(() => {
  return props.value ? style.gold_mid : style.gray_lighter;
});

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
    <span :class="$style.toggle__wrapper">
      <span :class="[$style.toggle__background, backgroundStyles]"> </span>
      <span :class="$style.toggle__indicator" :style="indicatorStyles"> </span>
    </span>
  </button>
</template>
<style lang="css" module>
.switch {
  display: flex;
  align-items: center;
  justify-content: center;
}
.gold_mid {
  background-color: var(--dot-color);
}

.gray_lighter {
  background-color: #c2c2c2;
}

.toggle__wrapper {
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 34px;
  height: 20px;
  border-radius: 9999px;
}

.toggle__wrapper:focus {
  outline: 0;
}

.toggle__background {
  display: inline-block;
  border-radius: 9999px;
  height: 100%;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.4s ease;
}

.toggle__indicator {
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
