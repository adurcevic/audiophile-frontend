<script setup>
import TheHeader from '../components/layout/TheHeader.vue';
import TheMain from '../components/layout/TheMain.vue';
import TheSection from '../components/layout/TheSection.vue';
import TheFooter from '../components/layout/TheFooter.vue';
import BaseForm from '../components/ui/BaseForm.vue';
import BaseGrid from '../components/ui/BaseGrid.vue';
import CartCard from '../components/cart/CartCard.vue';
import CartItem from '../components/cart/CartItem.vue';
import BaseBtn from '../components/ui/BaseBtn.vue';
import FormBlockVue from '../components/form/FormBlock.vue';
import FormField from '../components/form/FormField.vue';
import FadeTransition from '../components/transitions/FadeTransition.vue';
import { useCartStore } from '../stores/CartStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const store = useCartStore();
const { cartItems, getTotalAmount } = storeToRefs(store);
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
        <BaseForm>
          <CartCard :amountTotal="getTotalAmount" isCheckout>
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
        </BaseForm>
      </FadeTransition>
    </TheSection>
  </TheMain>
  <TheFooter />
</template>
<style lang=""></style>
