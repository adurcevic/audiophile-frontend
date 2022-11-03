<script setup></script>
<template lang="">
  <div :class="$style.overlay"></div>
</template>
<style lang="css" module>
.overlay {
  z-index: 15;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: var(--bg-overlay);
  backdrop-filter: blur(2px);
}
</style>
