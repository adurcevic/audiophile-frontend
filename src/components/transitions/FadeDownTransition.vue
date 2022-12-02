<script setup></script>
<template lang="">
  <transition
    :enter-active-class="$style.itemEnter"
    :leave-active-class="$style.itemLeave"
    mode="out-in"
  >
    <slot></slot>
  </transition>
</template>
<style lang="css" module>
.itemEnter {
  animation: fadeDown 0.3s ease-out;
}
.itemLeave {
  animation: fadeDown 0.3s ease-in reverse;
}

@keyframes fadeDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
