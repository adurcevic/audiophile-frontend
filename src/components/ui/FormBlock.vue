<script setup>
const props = defineProps({
  blockTitle: String,
});
</script>
<template lang="">
  <div :class="$style.formBlock">
    <p :class="$style.blockTitle">Billing Details</p>
    <div :class="$style.blockPositioner">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="css" module>
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

@media (min-width: 670px) {
  .blockPositioner {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 12px;
    row-gap: 12px;
  }
}
</style>
