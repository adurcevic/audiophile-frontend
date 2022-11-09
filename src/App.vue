<script setup>
import { provide, onBeforeMount } from 'vue';
import { useCartStore } from './stores/CartStore';
import { useDark, useToggle } from '@vueuse/core';

const store = useCartStore();
const { setCartItems } = store;
const isDark = useDark({
  selector: 'html',
  attribute: 'theme',
  valueDark: 'custom-dark',
});

const toggleTheme = useToggle(isDark);

provide('theme', { isDark, toggleTheme });
onBeforeMount(() => {
  const cart = localStorage.getItem('cart');
  if (cart) {
    setCartItems(JSON.parse(cart));
  }
});
</script>

<template>
  <router-view></router-view>
</template>

<style></style>
