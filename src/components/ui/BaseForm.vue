<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { ref, watch } from 'vue';
import * as yup from 'yup';

const billingFormData = [
  { id: 'fullName', type: 'text', label: 'Name', placeholder: 'Alexei Ward' },
  {
    id: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'alexei@mail.com',
  },
  {
    id: 'phoneNumber',
    type: 'text',
    label: ' Phone Number',
    placeholder: '+12025550136',
  },
];
const shippingFormData = [
  {
    id: 'address',
    type: 'text',
    label: 'Address',
    placeholder: '1137 Williams Avenue',
    wholeRow: true,
  },
  { id: 'zipCode', type: 'number', label: 'Zip Code', placeholder: '10001' },
  { id: 'city', type: 'text', label: 'City', placeholder: 'New York' },
  {
    id: 'country',
    type: 'text',
    label: 'Country',
    placeholder: 'United States',
  },
];

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
        <!-- <div :class="$style.formBlock">
          <p :class="$style.blockTitle">Billing Details</p>
          <div :class="$style.blockPositioner">
            <div :class="$style.formField">
              <div :class="$style.labelWrapper">
                <label
                  for="fullName"
                  :class="
                    errors.fullName
                      ? [$style.label, $style.colorError]
                      : $style.label
                  "
                  >Name</label
                >
                <ErrorMessage name="fullName" :class="$style.errorMessage" />
              </div>
              <Field
                id="fullName"
                type="text"
                name="fullName"
                :class="
                  errors.fullName
                    ? [$style.inputField, $style.borderError]
                    : $style.inputField
                "
                placeholder="Alexei Ward"
              />
            </div>
            <div :class="$style.formField">
              <div :class="$style.labelWrapper">
                <label
                  for="email"
                  :class="
                    errors.email
                      ? [$style.label, $style.colorError]
                      : $style.label
                  "
                  >Email</label
                >
                <ErrorMessage name="email" :class="$style.errorMessage" />
              </div>
              <Field
                id="email"
                type="text"
                name="email"
                :class="
                  errors.email
                    ? [$style.inputField, $style.borderError]
                    : $style.inputField
                "
                placeholder="alexei@mail.com"
              />
            </div>
            <div :class="$style.formField">
              <div :class="$style.labelWrapper">
                <label
                  for="phone"
                  :class="
                    errors.phoneNumber
                      ? [$style.label, $style.colorError]
                      : $style.label
                  "
                  >Phone Number</label
                >
                <ErrorMessage name="phoneNumber" :class="$style.errorMessage" />
              </div>
              <Field
                id="phone"
                type="text"
                name="phoneNumber"
                :class="
                  errors.phoneNumber
                    ? [$style.inputField, $style.borderError]
                    : $style.inputField
                "
                placeholder="+12025550136"
              />
            </div>
          </div>
        </div>
        <div :class="$style.formBlock">
          <p :class="$style.blockTitle">Shipping info</p>
          <div :class="$style.blockPositioner">
            <div :class="[$style.formField, $style.wholeRow]">
              <div :class="$style.labelWrapper">
                <label
                  for="address"
                  :class="
                    errors.address
                      ? [$style.label, $style.colorError]
                      : $style.label
                  "
                  >Your Adress</label
                >
                <ErrorMessage name="address" :class="$style.errorMessage" />
              </div>
              <Field
                id="address"
                type="text"
                name="address"
                :class="
                  errors.address
                    ? [$style.inputField, $style.borderError]
                    : $style.inputField
                "
                placeholder="1137 Williams Avenue"
              />
            </div>
            <div :class="$style.formField">
              <div :class="$style.labelWrapper">
                <label
                  for="zipCode"
                  :class="
                    errors.zipCode
                      ? [$style.label, $style.colorError]
                      : $style.label
                  "
                  >ZIP Code</label
                >
                <ErrorMessage name="zipCode" :class="$style.errorMessage" />
              </div>
              <Field
                id="zipCode"
                type="number"
                name="zipCode"
                :class="
                  errors.zipCode
                    ? [$style.inputField, $style.borderError]
                    : $style.inputField
                "
                placeholder="10001"
              />
            </div>
            <div :class="$style.formField">
              <div :class="$style.labelWrapper">
                <label
                  for="city"
                  :class="
                    errors.city
                      ? [$style.label, $style.colorError]
                      : $style.label
                  "
                  >City</label
                >
                <ErrorMessage name="city" :class="$style.errorMessage" />
              </div>
              <Field
                id="city"
                type="text"
                name="city"
                :class="
                  errors.city
                    ? [$style.inputField, $style.borderError]
                    : $style.inputField
                "
                placeholder="New York"
              />
            </div>
            <div :class="$style.formField">
              <div :class="$style.labelWrapper">
                <label
                  for="country"
                  :class="
                    errors.country
                      ? [$style.label, $style.colorError]
                      : $style.label
                  "
                  >Country</label
                >
                <ErrorMessage name="country" :class="$style.errorMessage" />
              </div>
              <Field
                id="country"
                type="text"
                name="country"
                :class="
                  errors.country
                    ? [$style.inputField, $style.borderError]
                    : $style.inputField
                "
                placeholder="United States"
              />
            </div>
          </div>
        </div> -->
        <slot name="formContent"></slot>
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
.formBlock {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.blockTitle {
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--color-primary);
  font-weight: 600;
}

.blockPositioner {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 12px;
  row-gap: 12px;
}

.formField {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.labelWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.label {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--theme-text-primary);
}

.errorMessage {
  font-size: 1.2rem;
  color: #b30000;
  font-weight: 200;
}

.inputField {
  padding: 14px 12px;
  border-radius: 6px;
  border: 1px solid var(--theme-text-secondary);
  font-size: 1.4rem;
}
.borderError {
  border-color: #b30000;
}

.colorError {
  color: #b30000;
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

  .blockPositioner {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 12px;
    row-gap: 12px;
  }

  .wholeRow {
    grid-column: 1 / 3;
  }
}
</style>
