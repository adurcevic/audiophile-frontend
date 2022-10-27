<script setup>
import { computed } from 'vue';

const props = defineProps({
  isHomePage: Boolean,
  title: String,
});

const margin = computed(() => (props.isHomePage ? '130px' : '90px'));
</script>
<template lang="">
  <section :class="$style.section">
    <div :class="$style.section__inner">
      <h2 v-if="title" :class="$style.section__title">{{ title }}</h2>
      <slot></slot>
    </div>
  </section>
</template>
<style lang="css" module>
.section {
  width: 100%;
  margin-top: 130px;
}

.section:first-of-type {
  margin-top: v-bind(margin);
}

.section__inner {
  padding-left: 12px;
  padding-right: 12px;
}

.section__title {
  text-transform: uppercase;
  text-align: center;
  color: var(--theme-text-primary);
  font-size: 2.4rem;
  letter-spacing: 2px;
  margin-bottom: 48px;
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

@media (min-width: 768px) {
  .section__title {
    font-size: 3.2rem;
    margin-bottom: 64px;
  }
}

@media (min-width: 1024px) {
  .section__inner {
    margin: 0 auto;
    max-width: 1200px;
  }
}
</style>
