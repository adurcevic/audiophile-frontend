<script setup></script>
<template>
  <div :class="$style.productContainer">
    <figure :class="$style.figure">
      <img
        :class="$style.img"
        src="../../assets/zx9-speaker/image-speaker-zx9-mobile.webp"
        alt="ZX9 speaker image"
      />
    </figure>
    <div :class="$style.productContent">
      <h2 :class="$style.contentTitle">ZX9 SPEAKER</h2>
      <p :class="$style.contentText">
        Upgrade to premium speakers that are phenomenally buil to deliver truly
        remarkable sound.
      </p>
      <BaseLink path="/speakers/zx9" isSecondary>See Product</BaseLink>
    </div>
  </div>
</template>
<style lang="css" module>
.productContainer {
  overflow: hidden;
  composes: flexCenter from 'src/main.css';
  flex-direction: column;
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

.productContent {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
}

.contentTitle {
  width: 300px;
  font-size: 4.8rem;
  text-align: center;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--text-primary);
  line-height: 1;
}

.contentText {
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

  .productContent {
    gap: 32px;
  }
}

@media (min-width: 1024px) {
  .figure {
    max-width: 500px;
  }

  .productContainer {
    flex-direction: row;
    gap: 128px;
  }

  .figure {
    align-self: flex-end;
  }

  .productContent {
    align-items: flex-start;
    justify-content: center;
    gap: 32px;
  }

  .contentTitle {
    text-align: start;
    line-height: 1.3;
    font-size: 6.4rem;
  }

  .contentText {
    text-align: start;
  }
}
</style>
