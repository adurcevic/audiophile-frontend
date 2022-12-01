<script setup>
import { computed } from 'vue';
import { useCssModule } from 'vue';

const props = defineProps({
  isFeaturedProducts: Boolean,
  isHomePage: Boolean,
  title: String,
  hasForm: Boolean,
});

const style = useCssModule();
const bgColor = computed(() =>
  props.hasForm ? 'var(--theme-bg)' : 'transperent'
);
const padding = computed(() => (props.isHomePage ? '130px' : '90px'));
const sectionInner = computed(() =>
  props.isFeaturedProducts
    ? [style.sectionInner, style.featuredSection]
    : style.sectionInner
);
</script>
<template lang="">
  <section :class="$style.section">
    <div :class="sectionInner">
      <h2 v-if="title" :class="$style.sectionTitle">{{ title }}</h2>
      <slot></slot>
    </div>
  </section>
</template>
<style lang="css" module>
.section {
  width: 100%;
  padding-top: 130px;
  background-color: v-bind(bgColor);
}

.section:first-of-type {
  padding-top: v-bind(padding);
}

.sectionInner {
  padding-left: 12px;
  padding-right: 12px;
  /* overflow-x: hidden; */
}

.featuredSection {
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-x: hidden;
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
  padding-bottom: 130px;
}

@media (min-width: 375px) {
  .sectionInner {
    padding-left: 32px;
    padding-right: 32px;
  }
}

@media (min-width: 500px) {
  .featuredSection {
    gap: 24px;
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
