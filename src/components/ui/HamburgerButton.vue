<script setup>
import { ref, computed, useCssModule, watchEffect } from 'vue';

const props = defineProps({
  isNavOpen: {
    required: true,
    type: Boolean,
  },
});
const style = useCssModule();
const emit = defineEmits(['toggle-nav']);

const toggleNav = () => {
  emit('toggle-nav');
};

const ariaExpanded = computed(() => {
  if (props.isNavOpen) return 'true';
  return 'false';
});

const hamburgerStatus = computed(() => {
  if (props.isNavOpen) return [style.hamburger, style.is_open];
  return style.hamburger;
});
</script>
<template>
  <button
    aira-label="Open navigation menu"
    title="Open navigation menu"
    :aria-expanded="ariaExpanded"
    aria-controls="navigation"
    :class="hamburgerStatus"
    @click="toggleNav"
  >
    <div></div>
    <div></div>
    <div></div>
  </button>
</template>
<style lang="css" module>
.hamburger {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 28px;
  height: 28px;
  background-color: transparent;
  cursor: pointer;
  z-index: 5;
}

.hamburger div {
  width: 28px;
  height: 2px;
  background-color: #ffffff;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

.hamburger.is_open div:first-child {
  transform: rotate(48deg);
}
.hamburger.is_open div:nth-child(2) {
  opacity: 0;
  transform: translateX(20px);
}
.hamburger.is_open div:last-child {
  transform: rotate(-48deg);
}

@media (min-width: 1024px) {
  .hamburger {
    display: none;
  }
}
</style>
