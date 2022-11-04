<script setup>
const props = defineProps({
  relatedProducts: {
    type: Array,
    required: true,
  },
});
</script>
<template lang="">
  <li :class="$style.relatedContainer" v-for="data in relatedProducts">
    <picture>
      <source media="(max-width: 627px)" :srcset="data.imgMobile" />
      <source media="(max-width: 900px)" :srcset="data.imgTablet" />
      <source media="(min-width: 901px)" :srcset="data.imgDesktop" />
      <img
        :class="$style.relatedImg"
        :src="data.imgMobile"
        :alt="`Image of ${data.title} product`"
      />
    </picture>
    <p :class="$style.relatedTitle">{{ data.title }}</p>
    <BaseLink :path="data.path">See Product</BaseLink>
  </li>
</template>
<style lang="css" module>
.relatedContainer {
  max-width: 400px;
  composes: flexCenter from '@/main.css';
  flex-direction: column;
  gap: 24px;
}

.relatedTitle {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--theme-text-primary);
}

.relatedImg {
  width: 100%;
  height: auto;
}

@media (min-width: 627px) {
  .relatedContainer {
    margin-bottom: 48px;
  }

  .relatedTitle {
    font-size: 2.4rem;
  }
}
</style>
