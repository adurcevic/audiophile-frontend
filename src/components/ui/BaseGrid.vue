<script setup></script>
<template lang="">
  <ul :class="$style.grid">
    <slot></slot>
  </ul>
</template>
<style lang="css" module>
.grid {
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  gap: 48px;
}

@media (min-width: 627px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
}

@media (min-width: 1024px) {
  .grid {
    gap: 24px;
  }
}
</style>
