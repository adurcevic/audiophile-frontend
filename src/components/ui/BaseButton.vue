<script setup>
const props = defineProps({
  btnTitle: {
    type: String,
  },
});

const click = () => {
  console.log(click);
};
</script>
<template>
  <button :class="$style.btn" @click="click">See Product</button>
</template>
<style module>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  padding: 12px 24px;
  font-size: 1.6rem;
  letter-spacing: 1px;
  cursor: pointer;
  color: var(--text-primary);
  transition: background-color 0.3s ease-in-out;
}

.btn:hover {
  background-color: var(--bg-tertiary);
}
</style>
