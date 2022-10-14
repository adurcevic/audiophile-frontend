<script setup>
import TheHeader from './components/layout/TheHeader.vue';
import { provide } from 'vue';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark({
  selector: 'html',
  attribute: 'theme',
  valueDark: 'custom-dark',
});

const toggleTheme = useToggle(isDark);

provide('theme', { isDark, toggleTheme });
</script>

<template>
  <router-view></router-view>
</template>

<style></style>
