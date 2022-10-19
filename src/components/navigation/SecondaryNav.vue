<script setup>
import NavCard from './NavCard.vue';

const navData = [
  {
    title: 'Headphones',
    path: '/headphones',
    imgSrc: '/src//assets/nav/image-headphones.webp',
  },
  {
    title: 'Speakers',
    path: '/speakers',
    imgSrc: '/src/assets/nav/image-speakers.webp',
  },
  {
    title: 'Earphones',
    path: '/earphones',
    imgSrc: '/src/assets/nav/image-earphones.webp',
  },
];
</script>
<template lang="">
  <ul :class="$style.nav">
    <nav-card
      v-for="{ title, path, imgSrc } in navData"
      :title="title"
      :path="path"
      :imgSrc="imgSrc"
    ></nav-card>
  </ul>
</template>
<style lang="css" module>
.nav {
  width: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  gap: 48px;
}

@media (min-width: 627px) {
  .nav {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
}

@media (min-width: 1024px) {
  .nav {
    gap: 24px;
  }
}
</style>
