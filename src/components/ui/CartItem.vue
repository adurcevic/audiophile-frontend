<script setup>
import CartBtn from './CartBtn.vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
<template lang="">
  <div :class="$style.cartItem">
    <div :class="$style.cartInner">
      <img
        :src="product.imgSrc"
        :alt="`${product.title} product image`"
        :class="$style.cartImg"
      />
      <div :class="$style.cartContent">
        <p :class="$style.cartTitle">{{ product.title }}</p>
        <p :class="$style.cartPrice">
          {{
            product.price.toLocaleString('en-GB', {
              style: 'currency',
              currency: 'EUR',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })
          }}
        </p>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<style lang="css" module>
.cartItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cartInner {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cartImg {
  height: 64px;
  width: 64px;
  border-radius: 4px;
}

.cartContent {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cartTitle {
  font-size: 1.6rem;
  color: var(--theme-text-primary);
  font-weight: 800;
}

.cartPrice {
  font-size: 1.4rem;
  color: var(--theme-text-tertiary);
  font-weight: 600;
}
</style>
