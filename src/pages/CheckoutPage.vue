<script setup>
import TheHeader from '../components/layout/TheHeader.vue';
import TheMain from '../components/layout/TheMain.vue';
import TheSection from '../components/layout/TheSection.vue';
import TheFooter from '../components/layout/TheFooter.vue';
import CheckoutForm from '../components/form/CheckoutForm.vue';
import BaseGrid from '../components/ui/BaseGrid.vue';
import CartCard from '../components/cart/CartCard.vue';
import CartItem from '../components/cart/CartItem.vue';
import BaseBtn from '../components/ui/BaseBtn.vue';
import FadeTransition from '../components/transitions/FadeTransition.vue';
import FadeDownTransition from '../components/transitions/FadeDownTransition.vue';
import CheckoutModal from '../components/ui/CheckoutModal.vue';
import PageOverlay from '../components/ui/PageOverlay.vue';
import { useCartStore } from '../stores/CartStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { ref, onUnmounted, onBeforeUpdate } from 'vue';

const store = useCartStore();
const { cartItems, getTotalAmount, getVat, getGrandTotal, shippingFee } =
  storeToRefs(store);
const { removeAllItems } = store;
const router = useRouter();
const goBack = () => router.go(-1);
const isFormSubmitted = ref(false);

const onFormSubmit = () => {
  isFormSubmitted.value = true;
  document.body.style.overflowY = 'hidden';
};

const onClosedDeal = () => {
  document.body.style.overflowY = 'visible';
  removeAllItems();
  router.push({ path: '/home' });
};

onUnmounted(() => {
  if (isFormSubmitted.value) removeAllItems();
});
</script>
<template lang="">
  <FadeTransition>
    <PageOverlay v-if="isFormSubmitted" isCheckout />
  </FadeTransition>
  <FadeDownTransition>
    <CheckoutModal
      v-if="isFormSubmitted"
      :grandTotalAmount="getGrandTotal"
      :productItems="cartItems"
    >
      <BaseBtn :style="{ width: '100%' }" @btn-action="onClosedDeal"
        >Back to home</BaseBtn
      >
    </CheckoutModal>
  </FadeDownTransition>
  <TheHeader />
  <TheMain>
    <TheSection hasForm>
      <div class="btnReturn">
        <BaseBtn @btn-action="goBack" isReturn>Go Back</BaseBtn>
      </div>
      <FadeTransition appear>
        <CheckoutForm @on-submit="onFormSubmit">
          <CartCard
            :amountTotal="getTotalAmount"
            isCheckout
            :vat="getVat"
            :grandTotal="getGrandTotal"
            :shipping="shippingFee"
          >
            <CartItem
              v-for="item in cartItems"
              :key="item.id"
              :product="{
                imgSrc: item.cartImg,
                title: item.productName,
                price: item.price,
                quantity: item.quantity,
              }"
            />
            <template #button>
              <BaseBtn
                value="submit"
                type="submit"
                :disabled="!cartItems.length"
                isCheckout
                >Continue & Pay</BaseBtn
              >
            </template>
          </CartCard>
        </CheckoutForm>
      </FadeTransition>
    </TheSection>
  </TheMain>
  <TheFooter />
</template>
<style lang=""></style>
