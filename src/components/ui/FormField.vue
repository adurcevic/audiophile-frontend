<script setup>
import { Field, ErrorMessage } from 'vee-validate';
const props = defineProps({
  fieldData: {
    type: Object,
    required: true,
  },
  errors: {
    type: Object,
  },
});
</script>
<template lang="">
  <div
    :class="
      fieldData.wholeRow
        ? [$style.formField, $style.wholeRow]
        : $style.formField
    "
  >
    <div :class="$style.labelWrapper">
      <label
        :for="fieldData.id"
        :class="
          errors[fieldData.id]
            ? [$style.label, $style.colorError]
            : $style.label
        "
        >{{ fieldData.label }}</label
      >
      <ErrorMessage :name="fieldData.id" :class="$style.errorMessage" />
    </div>
    <Field
      v-slot="{ errors }"
      :id="fieldData.id"
      :type="fieldData.type"
      :name="fieldData.id"
      :class="
        errors[fieldData.id]
          ? [$style.inputField, $style.borderError]
          : $style.inputField
      "
      :placeholder="fieldData.placeholder"
    />
  </div>
</template>
<style lang="css" module>
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

@media (min-width: 670px) {
  .wholeRow {
    grid-column: 1 / 3;
  }
}
</style>
