<script setup>
import TheHeader from '@/components/layout/TheHeader.vue';
import TheMain from '@/components/layout/TheMain.vue';
import TheSection from '@/components/layout/TheSection.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import BaseForm from '@/components/ui/BaseForm.vue';
import BaseGrid from '@/components/ui/BaseGrid.vue';
import CartCard from '@/components/ui/CartCard.vue';
import CartItem from '@/components/ui/CartItem.vue';
import BaseBtn from '@/components/ui/BaseBtn.vue';
import FormBlockVue from '@/components/ui/FormBlock.vue';
import FormField from '@/components/ui/FormField.vue';
import { useCartStore } from '@/stores/CartStore';
import { storeToRefs } from 'pinia';

const store = useCartStore();
const { cartItems, getTotalAmount } = storeToRefs(store);

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm();
};
</script>
<template lang="">
  <TheHeader />
  <TheMain>
    <TheSection hasForm>
      <BaseForm>
        <template #formContent>
          <FormBlock></FormBlock>
          <FormBlock></FormBlock>
        </template>
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
    </TheSection>
  </TheMain>
  <TheFooter />
</template>
<style lang=""></style>
