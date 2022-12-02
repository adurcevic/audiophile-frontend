<script setup>
import FacebookIcon from '../icons/FacebookIcon.vue';
import InstagramIcon from '../icons/InstagramIcon.vue';
import TwitterIcon from '../icons/TwitterIcon.vue';

const socialData = [
  { text: 'Visit our facebook page', icon: 'Facebook' },
  { text: 'Visit our twitter page', icon: 'Twitter' },
  { text: 'Visit our instagram page', icon: 'Instagram' },
];
</script>
<template lang="">
  <div :class="$style.iconContainer">
    <a
      v-for="{ text, icon } in socialData"
      :class="$style.link"
      href="https://www.facebook.com/"
      :aria-label="text"
      target="_blank"
    >
      <FacebookIcon v-if="icon === 'Facebook'" />
      <TwitterIcon v-if="icon === 'Twitter'" />
      <InstagramIcon v-if="icon === 'Instagram'" />
    </a>
  </div>
</template>
<style lang="css" module>
.link svg path {
  transition: fill 0.2s ease-in;
}

.link svg {
  width: 32px !important;
  height: 32px !important;
}

.link:hover svg path {
  fill: var(--color-primary);
}

.iconContainer {
  display: flex;
  align-items: center;
  gap: 12px;
}

@media (min-width: 500px) {
  .iconContainer {
    justify-self: end;
  }
}

@media (min-width: 1009px) {
  .iconContainer {
    grid-row: 1;
    grid-column: 2;
    align-self: end;
  }
}
</style>
