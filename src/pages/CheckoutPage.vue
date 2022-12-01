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
import { useCartStore } from '../stores/CartStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const store = useCartStore();
const { cartItems, getTotalAmount, getVat, getGrandTotal, shippingFee } =
  storeToRefs(store);
const router = useRouter();
const goBack = () => router.go(-1);
</script>
<template lang="">
  <TheHeader />
  <TheMain>
    <TheSection hasForm>
      <div class="btnReturn">
        <BaseBtn @btn-action="goBack" isReturn>Go Back</BaseBtn>
      </div>
      <FadeTransition appear>
        <CheckoutForm>
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
