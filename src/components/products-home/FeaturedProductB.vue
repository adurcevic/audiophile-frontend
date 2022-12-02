<script setup>
// import { ref, defineExpose } from 'vue';

// const productRef = ref(null);

// defineExpose({
//   productRef,
// });
</script>
<template lang="">
  <div :class="$style.speakerContainer">
    <picture>
      <source
        media="(max-width: 925px)"
        srcset="/assets/zx7-speaker/image-speaker-zx7-mobile.webp"
      />
      <source
        media="(min-width: 926px)"
        srcset="/assets/zx7-speaker/image-speaker-zx7-desktop.webp"
      />
      <img
        :class="$style.img"
        src="/assets/zx7-speaker/image-speaker-zx7-mobile.webp"
        alt="image of ZX7 speaker"
      />
    </picture>
    <div :class="$style.productContent">
      <h2 :class="$style.productTitle">ZX7 speaker</h2>
      <BaseLink path="/speakers/zx7" isOutline>See Product</BaseLink>
    </div>
  </div>
</template>
<style lang="css" module>
.img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.productContent {
  position: absolute;
  top: 0;
  left: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 32px;
}

.productTitle {
  font-size: 2.8rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
}

@media (min-width: 500px) {
  .img {
    height: 100%;
    max-height: 400px;
    object-fit: contain;
  }

  .productContent {
    left: 10%;
  }
}
</style>
