<script setup>
import { Field } from 'vee-validate';

const props = defineProps({
  fieldData: {
    type: Object,
    required: true,
  },
  isChecked: Boolean,
});
</script>
<template lang="">
  <div :class="$style.formField">
    <div :class="$style.labelWrapper">
      <Field
        :id="fieldData.id"
        :type="fieldData.type"
        :name="fieldData.name"
        :value="fieldData.value"
        :class="$style.inputField"
        :checked="isChecked"
      />
      <div :class="$style.radioBtn"></div>
      <label :for="fieldData.id" :class="$style.label">{{
        fieldData.label
      }}</label>
    </div>
  </div>
</template>
<style lang="css" module>
.formField {
  position: relative;
  padding: 14px 12px;
  border-radius: 6px;
  border: 1px solid var(--theme-text-secondary);
  font-size: 1.4rem;
  background-color: var(--text-primary);
}

.labelWrapper {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-grow: 1;
}

.label {
  font-size: 1.2rem;
  font-weight: 600;
  color: #000;
  letter-spacing: 0.5px;
}

.radioBtn {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid var(--theme-text-secondary);
  padding: 2px;
}

.radioBtn::after {
  content: '';
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background-color: var(--color-primary);
  transform: scale(0);
  transition: transform 0.2s ease-in-out;
}

.inputField:checked + .radioBtn::after {
  transform: scale(1);
}

.inputField {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  opacity: 0;
  cursor: pointer;
}
</style>
