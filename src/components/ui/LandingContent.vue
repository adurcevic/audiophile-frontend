<script setup>
import BaseButton from './BaseButton.vue';
</script>
<template>
  <div :class="$style.content">
    <div :class="$style.content__inner">
      <span :class="$style.action__text">New product</span>
      <h1 :class="$style.content__title">XX99 mark II headphones</h1>
      <p :class="$style.content__text">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <base-button></base-button>
    </div>
  </div>
</template>
<style module>
.content {
  height: calc(500px - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.content::after {
  position: absolute;
  top: -50px;
  left: 0;
  content: '';
  background-image: url('../../assets/landing/landing-mobile.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  z-index: -1;
  height: 500px;
}

.content__inner {
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  text-align: center;
}

.action__text {
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 6px;
  color: var(--text-secondary);
  font-weight: 300;
}

.content__title {
  font-size: 3.2rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--text-primary);
  letter-spacing: 2px;
  line-height: 1.3;
}

.content__text {
  font-size: 1.6rem;
  color: var(--text-secondary);
  font-weight: 300;
  line-height: 1.8;
}

@media (min-width: 375px) {
  .content {
    height: calc(700px - 100px);
    padding: 0px 32px;
  }
  .content::after {
    top: -100px;
    height: 700px;
  }

  .content__inner {
    max-width: 387px;
  }
}

@media (min-width: 492px) {
  .content {
    height: calc(850px - 100px);
    padding: 0px 32px;
  }
  .content::after {
    height: 850px;
    background-image: url('../../assets/landing/landing-tablet.webp');
  }

  .action__text {
    font-size: 2.2rem;
  }

  .content__title {
    font-size: 4.8rem;
  }

  .content__text {
    font-size: 2rem;
  }
}

@media (min-width: 1009px) {
  .content {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 700px;
    max-width: 1264px;
  }
  .content::after {
    top: 0px;
    height: 700px;
    background-image: url('../../assets/landing/landing-desktop.webp');
    background-size: cover;
  }

  .content__inner {
    max-width: 350px;
    align-items: flex-start;
    text-align: start;
  }

  .action__text {
    font-size: 1.8rem;
  }

  .content__text {
    font-size: 1.6rem;
  }
}

@media (min-width: 1500px) {
  .content::after {
    background-size: contain;
  }
}
</style>
