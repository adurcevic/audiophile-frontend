<script setup></script>
<template lang="">
  <button :class="$style.btn"><slot></slot></button>
</template>
<style lang="css" module>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  padding: 17px 24px;
  font-size: 1.4rem;
  letter-spacing: 1px;
  cursor: pointer;
  color: var(--text-primary);
  transition: all 0.3s ease-in-out;
  border: 1px solid var(--color-primary);
  text-transform: uppercase;
}

.btn:hover {
  background-color: transparent;
  color: var(--color-primary);
}
</style>
