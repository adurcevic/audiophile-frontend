<script setup>
import CheckIcon from '../icons/CheckIcon.vue';
import { computed, ref } from 'vue';

const props = defineProps({
  productItems: { required: true },
  grandTotalAmount: { required: true },
});
const areProductsVisible = ref(false);

const slicedCartItems = props.productItems.slice(1);
const showText = computed(() =>
  slicedCartItems.length === 1
    ? 'and 1 other item'
    : `and ${slicedCartItems.length} other items`
);
const btnText = computed(() =>
  areProductsVisible.value ? 'View less' : `${showText.value}`
);
const border = computed(() =>
  areProductsVisible.value ? '1px solid var(--text-secondary)' : 'none'
);
const alignGrandTotal = computed(() =>
  areProductsVisible.value ? 'end' : 'center'
);
const toggleProductVisibility = () =>
  (areProductsVisible.value = !areProductsVisible.value);
</script>
<template lang="">
  <div v-if="productItems.length" :class="$style.modalWrapper">
    <div :class="$style.modal">
      <div :class="$style.modalInner">
        <div :class="$style.icon">
          <CheckIcon />
        </div>
        <p :class="$style.title">Thank you <span> for your order </span></p>
        <p :class="$style.subtitle">
          You will receive an email confirmation shortly.
        </p>
        <div :class="$style.productSection">
          <div :class="$style.products">
            <div :class="$style.productRow">
              <img
                :class="$style.productImg"
                :src="productItems[0].cartImg"
                alt=""
              />
              <div :class="$style.productDescription">
                <div :clasS="$style.titlePositioner">
                  <p :class="$style.productTitle">
                    {{ productItems[0].productName }}
                  </p>
                  <p :class="$style.productQty">
                    x{{ productItems[0].quantity }}
                  </p>
                </div>
                <p :class="$style.productPrice">
                  {{
                    productItems[0].price.toLocaleString('en-GB', {
                      style: 'currency',
                      currency: 'EUR',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })
                  }}
                </p>
              </div>
            </div>
            <div v-show="areProductsVisible">
              <div
                v-for="product in slicedCartItems"
                :key="product.id"
                :class="$style.productRow"
              >
                <img :class="$style.productImg" :src="product.cartImg" alt="" />
                <div :class="$style.productDescription">
                  <div :clasS="$style.titlePositioner">
                    <p :class="$style.productTitle">
                      {{ product.productName }}
                    </p>
                    <p :class="$style.productQty">x{{ product.quantity }}</p>
                  </div>
                  <p :class="$style.productPrice">
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
            </div>
            <div v-if="productItems.length > 1" :class="$style.btnContainer">
              <button :class="$style.showMore" @click="toggleProductVisibility">
                {{ btnText }}
              </button>
            </div>
          </div>
          <div :class="$style.priceSection">
            <div>
              <p :class="$style.priceTitle">Grand Total</p>
              <p :class="$style.price">
                {{
                  grandTotalAmount.toLocaleString('en-GB', {
                    style: 'currency',
                    currency: 'EUR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })
                }}
              </p>
            </div>
          </div>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style lang="css" module>
.modalWrapper {
  position: fixed;
  padding-left: 12px;
  padding-right: 12px;
  z-index: 40;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
}

.modal {
  margin: 100px auto;
  width: 100%;
  max-width: 600px;
  background-color: var(--bg-cart);
  border-radius: 12px;
  border: 1px solid #fff;
}
.modalInner {
  padding: 32px;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background-color: var(--color-primary);
  border-radius: 50%;
  margin-bottom: 32px;
}

.icon svg {
  width: 40px !important;
  height: 40px !important;
  fill: var(--color-white);
}

.title {
  font-size: 2.4rem;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  color: var(--theme-text-primary);
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--theme-text-tertiary);
  margin-bottom: 32px;
}
.productSection {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 32px;
}

.products {
  background-color: var(--color-light-gray);
  padding: 32px 16px;
}

.productRow {
  display: flex;
  align-items: center;
  padding: 8px 0;
}

.productImg {
  width: 64px;
  height: 64px;
}

.productDescription {
  width: 100%;
  margin-left: 8px;
}

.titlePositioner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.productTitle {
  font-size: 1.4rem;
  font-weight: 700;
}

.productQty {
  font-size: 1.4rem;
  color: var(--text-secondary);
  font-weight: 600;
}

.productPrice {
  font-size: 1.4rem;
  color: var(--text-secondary);
  font-weight: 400;
}

.btnContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
  border-top: v-bind(border);
}

.showMore {
  width: 100%;
  margin: 0 auto;
  color: var(--text-secondary);
  font-weight: 400;
  cursor: pointer;
  text-decoration: underline;
}

.priceSection {
  padding: 32px 16px;
  height: 100%;
  background-color: var(--theme-text-primary);
  display: flex;
  align-items: v-bind(alignGrandTotal);
}

.priceTitle {
  font-size: 1.4rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  margin-bottom: 12px;
}

.price {
  font-size: 1.4rem;
  color: var(--theme-bg);
}

@media (min-width: 375px) {
  .modalWrapper {
    padding-left: 32px;
    padding-right: 32px;
  }
}

@media (min-width: 500px) {
  .productSection {
    grid-template-columns: 1.1fr 0.9fr;
  }

  .title {
    font-size: 3.2rem;
  }

  .modalInner {
    padding: 48px;
  }
}
</style>
