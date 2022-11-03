<script setup></script>
<template lang="">
  <transition
    enter-active-class="fade-in"
    leave-active-class="fade-out"
    mode="out-in"
  >
    <slot></slot>
  </transition>
</template>
<style lang="css">
.fade-in {
  animation: fade 0.3s ease-out;
}
.fade-out {
  animation: fade 0.3s ease-in reverse;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
