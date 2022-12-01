<script setup>
import { useIntersectionObserver } from '@vueuse/core';
import { ref, onMounted } from 'vue';

const picture = ref(false);
</script>
<template>
  <div :class="$style.productContainer">
    <figure :class="$style.figure">
      <img
        ref="picture"
        :class="$style.img"
        src="../../assets/zx9-speaker/image-speaker-zx9-mobile.webp"
        :data-url="source"
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
.line::after,
.line::before,
.secondaryLine::after {
  position: absolute;
  content: '';
  border-radius: 50%;
  border: 1px solid var(--border-secondary);
  z-index: 1;
}
.productContainer {
  overflow: hidden;
  composes: flexCenter from 'src/main.css';
  composes: secondaryLine;
  flex-direction: column;
  gap: 62px;
  position: relative;
  background-color: var(--color-primary);
  padding: 48px 0;
}

.productContainer::after {
  top: -200px;
  width: 600px;
  height: 600px;
}
.figure {
  max-width: 180px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  composes: line;
}

.figure::after {
  width: 320px;
  height: 320px;
}

.figure::before {
  width: 270px;
  height: 270px;
}

.img {
  width: 100%;
  z-index: 2;
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

  .figure::after {
    width: 490px;
    height: 490px;
  }

  .figure::before {
    width: 420px;
    height: 420px;
  }

  .productContainer::after {
    width: 700px;
    height: 700px;
  }

  .productContent {
    gap: 32px;
  }
}

@media (min-width: 1024px) {
  .figure {
    max-width: 500px;
    position: absolute;
    bottom: -10px;
    left: 120px;
  }

  .figure::after {
    top: 100px;
    width: 370px;
    height: 370px;
  }

  .figure::before {
    top: 70px;
    width: 420px;
    height: 420px;
  }

  .productContainer::after {
    left: -100px;
    top: -30px;
    width: 700px;
    height: 700px;
  }

  .productContainer {
    flex-direction: row;
  }

  .figure {
    align-self: flex-end;
  }

  .productContent {
    margin-left: auto;
    margin-right: 100px;
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
