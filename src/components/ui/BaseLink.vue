<script setup>
import { computed } from 'vue';
const props = defineProps({
  path: {
    required: true,
    type: String,
    default: '/',
  },
  isOutline: {
    type: Boolean,
  },
  isSecondary: {
    type: Boolean,
  },
});

const click = () => {
  console.log(click);
};

const fontColor = computed(() => {
  if (props.isOutline) return 'var(--text-tertiary)';
  return 'var(--text-primary)';
});

const border = computed(() => {
  if (props.isOutline) return '1px solid var(--bg-primary)';
  return 'none';
});

const hoverBg = computed(() => {
  if (props.isOutline || props.isSecondary) return 'var(--bg-primary)';
  return 'var(--color-primary)';
});

const hoverColor = computed(() => {
  if (props.isOutline) return 'var(--text-primary)';
  return 'var(--text-primary)';
});

const bgColor = computed(() => {
  if (props.isSecondary) return 'var(--bg-primary)';
  if (props.isOutline) return 'transperent';
  return 'var(--color-primary)';
});
</script>
<template>
  <router-link :to="path" :class="$style.btn" @click="click"
    ><slot></slot
  ></router-link>
</template>
<style module>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: v-bind(bgColor);
  padding: 12px 24px;
  font-size: 1.6rem;
  letter-spacing: 1px;
  cursor: pointer;
  color: v-bind(fontColor);
  transition: all 0.3s ease-in-out;
  border: v-bind(border);
  text-transform: uppercase;
}

.btn:hover {
  filter: brightness(1.4);
  background-color: v-bind(hoverBg);
  color: v-bind(hoverColor);
}
</style>
