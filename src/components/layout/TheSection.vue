<script setup></script>
<template lang="">
  <section :class="$style.section">
    <div :class="$style.section__inner">
      <slot></slot>
    </div>
  </section>
</template>
<style lang="css" module>
.section {
  width: 100%;
  margin-top: 130px;
}

.section__inner {
  padding-left: 12px;
  padding-right: 12px;
}

.section:last-child {
  margin-bottom: 130px;
}

@media (min-width: 375px) {
  .section__inner {
    padding-left: 32px;
    padding-right: 32px;
  }
}

@media (min-width: 1024px) {
  .section__inner {
    margin: 0 auto;
    max-width: 1200px;
  }
}
</style>
