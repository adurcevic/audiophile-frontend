<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import FormBlock from './FormBlock.vue';
import FormField from './FormField.vue';
import FormRadio from './FormRadio.vue';
import CashDeliveryIcon from '../icons/CashDeliveryIcon.vue';
import { ref, watch } from 'vue';
import {
  billingFormData,
  shippingFormData,
  paymentFormData,
  emoneyPaymentData,
} from '../../data/data';
import * as yup from 'yup';

const emoneyPayment = ref(true);

const schema = yup.object({
  fullName: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email(),
  phoneNumber: yup.string().required('Phone number is required'),
  address: yup.string().required('Addres is required'),
  zipCode: yup
    .string()
    .matches(/^[0-9]+$/, 'Must be only digits')
    .min(5, 'Must be exactly 5 digits')
    .max(5, 'Must be exactly 5 digits')
    .required('Zip code is required'),
  city: yup.string().required('City is required'),
  country: yup.string().required('Country is required'),
  payment: yup.string(),
  eMoneyNumber: yup.string().when('payment', {
    is: 'eMoney',
    then: yup
      .string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(9, 'Must be exactly 9 digits')
      .max(9, 'Must be exactly 9 digits')
      .required('Number is required'),
  }),
  eMoneyPin: yup.string().when('payment', {
    is: 'eMoney',
    then: yup
      .string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(4, 'Must be exactly 4 digits')
      .max(4, 'Must be exactly 4 digits')
      .required('PIN is required'),
  }),
});
const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm();
};

const formValues = {
  payment: 'eMoney',
};
</script>
<template lang="">
  <Form
    v-slot="{ errors, values }"
    :class="$style.formPositioner"
    id="formid"
    @submit="onSubmit"
    :validation-schema="schema"
    :initial-values="formValues"
  >
    <div :class="$style.formWrapper">
      <h1 :class="$style.formTitle">Checkout</h1>
      <div :class="$style.form">
        <FormBlock blockTitle="Billing Details">
          <FormField
            v-for="data in billingFormData"
            :fieldData="data"
            :errors="errors"
          />
        </FormBlock>
        <FormBlock blockTitle="Shipping Info">
          <FormField
            v-for="data in shippingFormData"
            :fieldData="data"
            :errors="errors"
          />
        </FormBlock>
        <FormBlock blockTitle="Payment Details">
          <p :class="$style.paymentTitle">Payment Method</p>
          <div :class="$style.radioGroup" role="radiogroup">
            <FormRadio
              v-for="payment in paymentFormData"
              :fieldData="payment"
            />
          </div>
          <div v-if="values.payment === 'eMoney'" :class="$style.emoneyWrapper">
            <FormField
              v-for="data in emoneyPaymentData"
              :fieldData="data"
              :errors="errors"
            />
          </div>
          <div v-else :class="$style.cashWrapper">
            <div>
              <CashDeliveryIcon />
            </div>
            <p :class="$style.cashText">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        </FormBlock>
      </div>
    </div>
    <slot></slot>
  </Form>
</template>
<style lang="css" module>
.formWrapper {
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
  max-width: 700px;
  padding: 32px 12px;
  background-color: var(--bg-body);
  border-radius: 12px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.formPositioner {
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;
}
.paymentTitle {
  grid-column: span 2;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--theme-text-primary);
}

.radioGroup {
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.emoneyWrapper {
  margin-top: 16px;
  grid-column: span 2;
  display: grid;
  gap: 16px;
}

.formTitle {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 2.8rem;
  letter-spacing: 1px;
  color: var(--theme-text-primary);
}

.cashWrapper {
  grid-column: span 2;
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.cashText {
  font-size: 1.4rem;
  color: var(--theme-text-tertiary);
  line-height: 1.5;
  letter-spacing: 0.4px;
  font-weight: 200;
}

@media (min-width: 375px) {
  .formWrapper {
    padding: 32px;
  }
}

@media (min-width: 670px) {
  .formWrapper {
    padding: 48px;
    min-width: 600px;
  }

  .emoneyWrapper {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 12px;
    column-gap: 12px;
  }

  .paymentTitle {
    grid-column: span 1;
  }

  .radioGroup {
    grid-column: span 1;
  }
}

@media (min-width: 1012px) {
  .formPositioner {
    flex-direction: row;
    gap: 48px;
    align-items: start;
  }
}
</style>
