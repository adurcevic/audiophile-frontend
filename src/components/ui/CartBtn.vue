<script setup>
import { computed } from 'vue';
const props = defineProps({
  addQuantity: {
    type: Number,
    required: true,
  },
  isSmaller: {
    type: Boolean,
  },
});

const fontSize = computed(() => (props.isSmaller ? '1.4rem' : '1.8rem'));
const padding = computed(() => (props.isSmaller ? '8px' : '14px'));
const heightWidth = computed(() => (props.isSmaller ? '20px' : '24px'));
</script>
<template lang="">
  <div :class="$style.btnContainer">
    <button
      :class="$style.btn"
      aria-label="Increment product quantity"
      @click="$emit('decrementQty')"
    >
      <div :class="$style.iconWrapper">
        <svg
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
        </svg>
      </div>
    </button>
    <div :class="$style.quantity">{{ addQuantity }}</div>
    <button
      :class="$style.btn"
      aria-label="Decrement product quantity"
      @click="$emit('incrementQty')"
    >
      <div :class="$style.iconWrapper">
        <svg
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          />
        </svg>
      </div>
    </button>
  </div>
</template>
<style lang="css" module>
.btnContainer {
  composes: flexCenter from '@/main.module.css';
  background-color: var(--bg-secondary);
}

.btn {
  composes: flexCenter from '@/main.module.css';
  padding: v-bind(padding);
  cursor: pointer;
}

.btn svg {
  fill: var(--theme-text-secondary);
}

.quantity {
  font-size: v-bind(fontSize);
  padding: 0 10px;
}

.iconWrapper {
  composes: flexCenter from '@/main.module.css';
  height: v-bind(heightWidth);
  width: v-bind(heightWidth);
}

.btn:hover {
  background-color: var(--hover-primary);
}
.btn:hover svg {
  fill: var(--color-primary);
}
</style>
