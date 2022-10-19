<script setup></script>
<template lang="">
  <section :class="$style.section">
    <slot></slot>
  </section>
</template>
<style lang="css" module>
.section {
  padding: 130px 12px;
}

@media (min-width: 375px) {
  .section {
    padding: 130px 32px;
  }
}

@media (min-width: 1024px) {
  .section {
    margin: 0 auto;
    max-width: 1200px;
  }
}
</style>
