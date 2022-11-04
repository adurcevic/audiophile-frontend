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

const fontColor = computed(() =>
  props.isOutline ? 'var(--text-tertiary)' : 'var(--text-primary)'
);

const border = computed(() =>
  props.isOutline ? '1px solid var(--bg-primary)' : 'none'
);

const hoverBg = computed(() =>
  props.isOutline || props.isSecondary
    ? 'var(--bg-primary)'
    : 'var(--color-primary)'
);

const hoverColor = computed(() =>
  props.isOutline ? 'var(--text-primary)' : 'var(--text-primary)'
);

const bgColor = computed(() => {
  if (props.isSecondary) return 'var(--bg-primary)';
  if (props.isOutline) return 'transperent';
  return 'var(--color-primary)';
});
</script>
<template>
  <router-link :to="path" :class="$style.link"><slot></slot></router-link>
</template>
<style module>
.link {
  composes: flexCenter from '@/main.css';
  background-color: v-bind(bgColor);
  padding: 12px 24px;
  font-size: 1.4rem;
  letter-spacing: 1px;
  cursor: pointer;
  color: v-bind(fontColor);
  transition: all 0.3s ease-in-out;
  border: v-bind(border);
  text-transform: uppercase;
}

.link:hover {
  filter: brightness(1.4);
  background-color: v-bind(hoverBg);
  color: v-bind(hoverColor);
}
</style>
