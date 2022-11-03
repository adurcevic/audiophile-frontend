<script setup></script>
<template lang="">
  <div :class="$style.earphonesContainer">
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
        :class="$style.earphonesImg"
        src="../../assets/yx1-earphones/image-earphones-yx1-mobile.webp"
        alt="image of YX1 wireless earphones"
      />
    </picture>
    <div :class="$style.earphonesContent">
      <h2 :class="$style.earphonesTitle">YX1 earphones</h2>
      <BaseLink path="/earphones/yx1" isOutline>See Product</BaseLink>
    </div>
  </div>
</template>
<style lang="css" module>
.earphonesContainer {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 12px;
}

.earphonesImg {
  width: 100%;
  object-fit: contain;
  border-radius: 12px;
}

.earphonesContent {
  width: 100%;
  composes: flexCenter from '@/main.module.css';
  flex-direction: column;
  background-color: var(--bg-secondary);
  border-radius: 12px;
  gap: 32px;
}

.earphonesTitle {
  font-size: 2.8rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
}

@media (min-width: 502px) {
  .earphonesContainer {
    gap: 24px;
  }
}

@media (min-width: 678px) {
  .earphonesContainer {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
