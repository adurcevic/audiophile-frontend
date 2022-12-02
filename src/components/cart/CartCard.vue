<script setup>
import BaseBtn from '../ui/BaseBtn.vue';
import FadeTransition from '../transitions/FadeTransition.vue';
import EmptyCartIcon from '../icons/EmptyCartIcon.vue';
import { useCartStore } from '../../stores/CartStore';
import { computed, watch, reactive, useCssModule } from 'vue';

const props = defineProps({
  numOfItemsInCart: Number,
  amountTotal: {
    required: true,
  },
  isCheckout: Boolean,
  vat: Number,
  shipping: Number,
  grandTotal: Number,
});

const store = useCartStore();
const { removeAllItems } = store;
const style = useCssModule();

const bgColor = computed(() =>
  props.isCheckout ? 'var(--bg-body)' : 'var(--bg-cart)'
);
const border = computed(() => (props.isCheckout ? 'none' : '1px solid #fff'));
const wrapperClass = computed(() =>
  props.isCheckout ? style.cardWrapperReset : style.cardWrapper
);
const margin = computed(() =>
  props.isCheckout ? '0 auto' : '120px 0 60px auto'
);

// const priceData = [
//   { text: 'Vat', value: props.vat },
//   { text: 'shipping', value: props.shipping },
//   {
//     text: 'Grand total',
//     value: props.grandTotal,
//     isEmphasized: true,
//   },
// ];
</script>
<template lang="">
  <div :class="wrapperClass" @click="$emit('close-cart')">
    <div :class="$style.card">
      <FadeTransition>
        <div v-if="!numOfItemsInCart && !isCheckout" :class="$style.emptyCart">
          <EmptyCartIcon :class="$style.cart_icon" />
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
          <div :class="$style.content">
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
            <div v-if="isCheckout" :class="$style.contentPositioner">
              <p :class="$style.text">Vat</p>
              <p :class="$style.price">
                {{
                  vat.toLocaleString('en-GB', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })
                }}
              </p>
            </div>
            <div v-if="isCheckout" :class="$style.contentPositioner">
              <p :class="$style.text">Shipping</p>
              <p :class="$style.price">
                {{
                  shipping.toLocaleString('en-GB', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })
                }}
              </p>
            </div>
            <div v-if="isCheckout" :class="$style.contentPositioner">
              <p :class="$style.text">Grand total</p>
              <p :class="[$style.price, $style.highlightedPrice]">
                {{
                  grandTotal.toLocaleString('en-GB', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })
                }}
              </p>
            </div>
          </div>
          <!-- <div v-if="isCheckout">
          <div
          v-for="price in priceData"
          :key="price.value"
          :class="$style.contentPositioner"
          >
          <p :class="$style.text">{{ price.text }}</p>
          <p
          :class="
          price.isEmphasized
          ? [$style.price, $style.highlightedPrice]
          : $style.price
          "
          >
          {{
            price.value.toLocaleString('en-GB', {
              style: 'currency',
              currency: 'EUR',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })
          }}
        </p>
      </div>
    </div> -->
          <slot name="button">
            <BaseLink :path="{ name: 'checkout' }">Checkout</BaseLink>
          </slot>
        </div>
      </FadeTransition>
    </div>
  </div>
</template>
<style lang="css" module>
.cardWrapper {
  position: fixed;
  z-index: 30;
  padding-left: 12px;
  padding-right: 12px;
  top: 0px;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.cardWrapperReset {
  width: 100%;
  max-width: 400px;
  background-color: v-bind(bgColor);
  border-radius: 12px;

  /* max-width: 100%; */
}

.cardWrapper::-webkit-scrollbar {
  display: none;
}

.card {
  width: 100%;
  max-width: 400px;
  margin: v-bind(margin);
  background-color: v-bind(bgColor);
  border-radius: 12px;
  border: v-bind(border);
  overflow: hidden;
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

.content {
  display: grid;
  gap: 12px;
  margin-bottom: 32px;
}

.contentPositioner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.contentPositioner:nth-child(4) {
  margin-top: 20px;
}
.title {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
  color: var(--theme-text-primary);
  margin-bottom: 20px;
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

.highlightedPrice {
  color: var(--color-primary);
}

@media (min-width: 375px) {
  .cardWrapper {
    padding-left: 32px;
    padding-right: 32px;
  }
}

@media (min-width: 1267px) {
  .cardWrapper {
    padding-right: calc((100% - 1140px) / 2);
  }
}
</style>
