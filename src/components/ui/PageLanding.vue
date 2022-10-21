<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Home',
  },
});
</script>
<template>
  <div :class="$style.landing">
    <slot>
      <div :class="$style.default__header">
        <h1 :class="$style.default__title">Headphones</h1>
      </div>
    </slot>
  </div>
</template>
<style module>
.landing {
  overflow: hidden;
  position: relative;
  background-color: var(--bg-primary);
}

.default__header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  background-color: var(--bg-primary);
}

.default__title {
  font-size: 3.2rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--text-primary);
  letter-spacing: 4px;
}

@media (min-width: 768px) {
  .default__header {
    height: 200px;
  }
}

@media (min-width: 1500px) {
  .landing {
    z-index: 1;
    background-color: var(--bg-primary);
  }
}
</style>
