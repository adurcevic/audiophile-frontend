<script setup>
import { computed, useCssModule } from 'vue';
const props = defineProps({
  isReturn: {
    type: Boolean,
  },
  isCart: {
    type: Boolean,
  },
});

const style = useCssModule();

const btnClass = computed(() => (props.isReturn ? style.btnReturn : style.btn));
const fontSize = computed(() => (props.isCart ? '1.6rem' : '1.8rem'));
const lineHeight = computed(() => (props.isCart ? '1px' : '3px'));
</script>
<template lang="">
  <button @click="$emit('btnAction')" :class="btnClass"><slot></slot></button>
</template>
<style lang="css" module>
.btn {
  composes: flexCenter from '@/main.module.css';
  background-color: var(--color-primary);
  padding: 17px 24px;
  font-size: 1.4rem;
  letter-spacing: 1px;
  cursor: pointer;
  color: var(--text-primary);
  transition: all 0.3s ease-in-out;
  border: 1px solid var(--color-primary);
  text-transform: uppercase;
}

.btnReturn {
  position: relative;
  text-transform: capitalize;
  cursor: pointer;
  font-size: v-bind(fontSize);
  color: var(--theme-text-tertiary);
  font-weight: 300;
}

.btnReturn::before {
  content: '';
  position: absolute;
  width: 100%;
  height: v-bind(lineHeight);
  border-radius: 4px;
  background-color: var(--theme-text-tertiary);
  bottom: -4px;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.btnReturn:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}

.btn:hover {
  background-color: transparent;
  color: var(--color-primary);
}
</style>
