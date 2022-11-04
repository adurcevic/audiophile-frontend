<script setup>
import BaseBtn from './BaseBtn.vue';
import FadeTransition from './FadeTransition.vue';
import { useCartStore } from '@/stores/CartStore';
import { computed } from 'vue';

const props = defineProps({
  numOfItemsInCart: Number,
  amountTotal: {
    required: true,
  },
  isCheckout: Boolean,
});

const store = useCartStore();
const { removeAllItems } = store;

const position = computed(() => (props.isCheckout ? 'static' : 'absolute'));
const zIndex = computed(() => (props.isCheckout ? '1' : '20'));
const bgColor = computed(() =>
  props.isCheckout ? 'var(--bg-body)' : 'var(--bg-cart)'
);
</script>
<template lang="">
  <div :class="$style.card">
    <FadeTransition>
      <div v-if="!numOfItemsInCart && !isCheckout" :class="$style.emptyCart">
        <svg
          :class="$style.cart_icon"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="120px"
          height="120px"
          viewBox="0 0 902.86 902.86"
          fill="#000000"
          style="enable-background: new 0 0 902.86 902.86"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
            M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
              />
              <path
                d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
            c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
            c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
            C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
            c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
            M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
            S619.162,694.432,619.162,716.897z"
              />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
        <p :class="$style.titleEmpty">Your cart is currently empty</p>
      </div>
      <div v-if="numOfItemsInCart || isCheckout" :class="$style.cardInner">
        <div :class="$style.contentPositioner">
          <p v-if="isCheckout" :class="$style.title">Summary</p>
          <p v-else :class="$style.title">Cart ({{ numOfItemsInCart }})</p>
          <BaseBtn
            v-if="!isCheckout"
            isReturn
            isCart
            @btnAction="removeAllItems"
            >Remove all
          </BaseBtn>
        </div>
        <div :class="$style.itemPositioner">
          <slot>
            <p :class="$style.emptyText">No items in cart</p>
          </slot>
        </div>
        <div :class="$style.contentPositioner">
          <p :class="$style.text">Total</p>
          <p :class="$style.price">
            {{
              amountTotal.toLocaleString('en-GB', {
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })
            }}
          </p>
        </div>
        <slot name="button">
          <BaseLink :path="{ name: 'checkout' }">Checkout</BaseLink>
        </slot>
      </div>
    </FadeTransition>
  </div>
</template>
<style lang="css" module>
.card {
  z-index: v-bind(zIndex);
  position: v-bind(position);
  right: 0;
  top: 100px;
  width: 100%;
  max-width: 400px;
  background-color: v-bind(bgColor);
  overflow: hidden;
  border-radius: 12px;
}

.cardInner {
  display: flex;
  flex-direction: column;
  margin: 24px 24px;
}

.emptyCart {
  composes: cardInner;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.titleEmpty {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--theme-text-primary);
}

.cart_icon {
  fill: var(--theme-text-primary);
}

.contentPositioner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}

.title {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
  color: var(--theme-text-primary);
}

.itemPositioner {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.emptyText {
  font-size: 1.8rem;
  text-align: center;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 1px;
  color: var(--theme-text-secondary);
}

.text {
  font-size: 1.6rem;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--theme-text-tertiary);
}

.price {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--theme-text-primary);
}
</style>
