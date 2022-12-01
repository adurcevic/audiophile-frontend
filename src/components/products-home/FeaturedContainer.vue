<script setup>
import { ref } from 'vue';

const productRef = ref(null);

defineExpose({
  productRef,
});
</script>
<template lang="">
  <div :class="$style.productSection" ref="productRef"><slot></slot></div>
</template>
<style lang="css" module>
.productSection {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}

.productSection:last-child {
  margin-bottom: 0;
}
</style>
