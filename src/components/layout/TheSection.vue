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
    <div :class="$style.sectionInner">
      <h2 v-if="title" :class="$style.sectionTitle">{{ title }}</h2>
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

.sectionInner {
  padding-left: 12px;
  padding-right: 12px;
}

.sectionTitle {
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
  .sectionInner {
    padding-left: 32px;
    padding-right: 32px;
  }
}

@media (min-width: 768px) {
  .sectionTitle {
    font-size: 3.2rem;
    margin-bottom: 64px;
  }
}

@media (min-width: 1024px) {
  .sectionInner {
    margin: 0 auto;
    max-width: 1200px;
  }
}
</style>
