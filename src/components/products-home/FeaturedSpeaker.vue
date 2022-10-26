<script setup>
import BaseLink from '../ui/BaseLink.vue';
</script>
<template>
  <div :class="$style.product__container">
    <figure :class="$style.figure">
      <img
        :class="$style.img"
        src="../../assets/zx9-speaker/image-speaker-zx9-mobile.webp"
        alt="ZX9 speaker image"
      />
    </figure>
    <div :class="$style.product__content">
      <p :class="$style.content__title">ZX9 SPEAKER</p>
      <p :class="$style.content__text">
        Upgrade to premium speakers that are phenomenally buil to deliver truly
        remarkable sound.
      </p>
      <BaseLink path="/speakers/zx9" isSecondary>See Product</BaseLink>
    </div>
  </div>
</template>
<style lang="css" module>
.product__container {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 62px;
  position: relative;
  background-color: var(--color-primary);
  padding: 48px 0;
}
.figure {
  max-width: 180px;
}

.img {
  width: 100%;
}

.product__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.content__title {
  width: 300px;
  font-size: 4.8rem;
  text-align: center;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--text-primary);
  line-height: 1;
}

.content__text {
  max-width: 350px;
  text-align: center;
  font-size: 1.6rem;
  color: var(--text-primary);
  line-height: 1.7;
}

@media (min-width: 625px) {
  .figure {
    max-width: 230px;
  }

  .product__content {
    gap: 32px;
  }
}

@media (min-width: 1024px) {
  .figure {
    max-width: 500px;
  }

  .product__container {
    flex-direction: row;
    justify-content: center;
    gap: 128px;
  }

  .figure {
    align-self: flex-end;
  }

  .product__content {
    align-items: flex-start;
    justify-content: center;
    gap: 32px;
  }

  .content__title {
    text-align: start;
    line-height: 1.3;
    font-size: 6.4rem;
  }

  .content__text {
    text-align: start;
  }
}
</style>
