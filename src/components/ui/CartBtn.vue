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
    <div :class="$style.btnWrapper">
      <button
        :class="$style.btn"
        aria-label="Increment product quantity"
        @click="$emit('decrementQty')"
      >
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
      </button>
    </div>
    <div :class="$style.quantity">{{ addQuantity }}</div>
    <div :class="$style.btnWrapper">
      <button
        :class="$style.btn"
        aria-label="Decrement product quantity"
        @click="$emit('incrementQty')"
      >
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
      </button>
    </div>
  </div>
</template>
<style lang="css" module>
.btnContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-secondary);
}

.btnWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: v-bind(padding);
}

.btnWrapper svg {
  fill: var(--theme-text-secondary);
}

.quantity {
  font-size: v-bind(fontSize);
  padding: 0 10px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: v-bind(heightWidth);
  width: v-bind(heightWidth);
  cursor: pointer;
}

.btnWrapper:hover {
  background-color: var(--hover-primary);
}
.btnWrapper:hover svg {
  fill: var(--color-primary);
}
</style>
