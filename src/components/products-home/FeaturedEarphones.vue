<script setup></script>
<template lang="">
  <div :class="$style.earphones__container">
    <picture>
      <source
        media="(max-width: 677px)"
        srcset="../../assets/yx1-earphones/image-earphones-yx1-mobile.webp"
      />
      <source
        media="(mmin-width: 678px)"
        srcset="../../assets/yx1-earphones/image-earphones-yx1-desktop.webp"
      />
      <img
        :class="$style.earphones__img"
        src="../../assets/yx1-earphones/image-earphones-yx1-mobile.webp"
        alt="image of YX1 wireless earphones"
      />
    </picture>
    <div :class="$style.earphones__content">
      <h2 :class="$style.earphones__title">YX1 earphones</h2>
      <BaseLink path="/earphones/yx1" isOutline>See Product</BaseLink>
    </div>
  </div>
</template>
<style lang="css" module>
.earphones__container {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 12px;
}

.earphones__img {
  width: 100%;
  object-fit: contain;
  border-radius: 12px;
}

.earphones__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-secondary);
  border-radius: 12px;
  gap: 32px;
}

.earphones__title {
  font-size: 2.8rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
}

@media (min-width: 502px) {
  .earphones__container {
    gap: 24px;
  }
}

@media (min-width: 678px) {
  .earphones__container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
