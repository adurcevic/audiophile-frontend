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

const ariaExpanded = computed(() => (props.isNavOpen ? 'true' : 'false'));

const hamburgerStatus = computed(() =>
  props.isNavOpen ? [style.hamburger, style.isOpen] : style.hamburger
);
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

.hamburger.isOpen div:first-child {
  transform: rotate(48deg);
}
.hamburger.isOpen div:nth-child(2) {
  opacity: 0;
  transform: translateX(20px);
}
.hamburger.isOpen div:last-child {
  transform: rotate(-48deg);
}

@media (min-width: 1009px) {
  .hamburger {
    display: none;
  }
}
</style>
