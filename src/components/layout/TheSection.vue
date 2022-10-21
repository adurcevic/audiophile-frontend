<script setup></script>
<template lang="">
  <section :class="$style.section">
    <slot></slot>
  </section>
</template>
<style lang="css" module>
.section {
  padding: 130px 12px;
  padding: 130px 12px 0px 12px;
}

.section:last-child {
  padding-bottom: 130px;
}

@media (min-width: 375px) {
  .section {
    padding-left: 32px;
    padding-right: 32px;
  }
}

@media (min-width: 1024px) {
  .section {
    margin: 0 auto;
    max-width: 1200px;
  }
}
</style>
