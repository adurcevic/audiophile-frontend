<script setup>
import { computed } from 'vue';
import LogoIcon from '../icons/LogoIcon.vue';
const props = defineProps({
  isFooter: {
    type: Boolean,
  },
});

const zIndex = computed(() => (props.isFooter ? 1 : 5));
</script>
<template lang="">
  <router-link
    :to="{ name: 'home' }"
    :class="$style.logoLink"
    aria-label="go to home page"
  >
    <LogoIcon />
  </router-link>
</template>
<style lang="css" module>
.logoLink {
  display: grid;
  place-items: center;
  z-index: v-bind(zIndex);
}
</style>
