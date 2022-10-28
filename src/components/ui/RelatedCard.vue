<script setup>
const props = defineProps({
  relatedProducts: {
    type: Array,
    required: true,
  },
});
</script>
<template lang="">
  <li :class="$style.related__container" v-for="data in relatedProducts">
    <picture>
      <source media="(max-width: 627px)" :srcset="data.imgMobile" />
      <source media="(max-width: 900px)" :srcset="data.imgTablet" />
      <source media="(min-width: 901px)" :srcset="data.imgDesktop" />
      <img
        :class="$style.related__img"
        :src="data.imgMobile"
        :alt="`Image of ${data.title} product`"
      />
    </picture>
    <p :class="$style.related__title">{{ data.title }}</p>
    <BaseLink :path="data.path">See Product</BaseLink>
  </li>
</template>
<style lang="css" module>
.related__container {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.related__title {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--theme-text-primary);
}

.related__img {
  width: 100%;
  height: auto;
}

@media (min-width: 627px) {
  .related__container {
    margin-bottom: 48px;
  }

  .related__title {
    font-size: 2.4rem;
  }
}
</style>
