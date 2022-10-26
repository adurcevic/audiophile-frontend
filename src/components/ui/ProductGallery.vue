<script setup>
const props = defineProps({
  galleryImgs: {
    required: true,
    type: Object,
  },
});

const imgArr = Object.values(props.galleryImgs);
</script>
<template lang="">
  <div v-if="galleryImgs" :class="$style.gallery">
    <picture :class="$style.picture" v-for="imgLink in imgArr">
      <source media="(max-width: 500px)" :srcset="imgLink.imgMobile" />
      <source media="(max-width: 900px)" :srcset="imgLink.imgTablet" />
      <source media="(min-width: 901px)" :srcset="imgLink.imgDesktop" />
      <img :class="$style.img" :src="imgLink.imgMobile" />
    </picture>
  </div>
</template>
<style lang="css" module>
.gallery {
  display: grid;
  gap: 16px;
}

.picture {
  border-radius: 12px;
  overflow: hidden;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 475px) {
  .gallery {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .picture:last-child {
    grid-column-start: 2;
    grid-row: 1/ 3;
  }
}
@media (min-width: 900px) {
  .gallery {
    gap: 24px;
  }
}
</style>
