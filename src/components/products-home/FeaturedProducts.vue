<script setup></script>
<template lang="">
  <div :class="$style.product__section">
    <slot>
      <div :class="$style.product__inner">
        <picture>
          <source
            media="(max-width: 925px)"
            srcset="../../assets/zx7-speaker/image-speaker-zx7-mobile.webp"
          />
          <source
            media="(min-width: 926px)"
            srcset="../../assets/zx7-speaker/image-speaker-zx7-desktop.webp"
          />
          <img
            :class="$style.img"
            src="../../assets/zx7-speaker/image-speaker-zx7-mobile.webp"
            alt="image of ZX7 speaker"
          />
        </picture>
        <div :class="$style.product__content">
          <p :class="$style.product__title">ZX7 speaker</p>
          <base-link path="/" isOutline>See Product</base-link>
        </div>
      </div>
    </slot>
  </div>
</template>
<style lang="css" module>
.product__section {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 12px;
}

.product__section:last-child {
  margin-bottom: 0;
}
.img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.product__content {
  top: 0;
  left: 20px;
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 32px;
}

.product__title {
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

  .product__content {
    left: 10%;
  }

  .product__section {
    margin-bottom: 24px;
  }
}
</style>
