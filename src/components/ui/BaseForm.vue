<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import FormBlock from '../form/FormBlock.vue';
import FormField from '../form/FormField.vue';
import { ref, watch } from 'vue';
import { billingFormData, shippingFormData } from '../../data/data';
import * as yup from 'yup';

const schema = yup.object({
  fullName: yup.string().required('Name is required'),
  email: yup.string().required('Email is required').email(),
  phoneNumber: yup.string().required('Phone number is required'),
  address: yup.string().required('Addres is required'),
  zipCode: yup.number().required('Zip code is required'),
  city: yup.string().required('City is required'),
  country: yup.string().required('Country is required'),
});
const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm();
};
</script>
<template lang="">
  <Form
    v-slot="{ errors }"
    :class="$style.formPositioner"
    id="formid"
    @submit="onSubmit"
    :validation-schema="schema"
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

@media (min-width: 1012px) {
  .formPositioner {
    flex-direction: row;
    gap: 48px;
    align-items: start;
  }
}

.formTitle {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 2.8rem;
  letter-spacing: 1px;
  color: var(--theme-text-primary);
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
}
</style>
