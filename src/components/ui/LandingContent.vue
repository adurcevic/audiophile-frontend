<script setup>
import BaseLink from './BaseLink.vue';
</script>
<template>
  <transition :appear-active-class="$style.content_enter_active" appear>
    <div :class="$style.content__wrapper">
      <div :class="$style.content">
        <div :class="$style.content__inner">
          <span :class="$style.action__text">New product</span>
          <h1 :class="$style.content__title">XX99 mark II headphones</h1>
          <p :class="$style.content__text">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <BaseLink path="/headphones/xx99markii">See Product</BaseLink>
        </div>
      </div>
    </div>
  </transition>
</template>
<style lang="css" module>
.content__wrapper::after {
  content: '';
  top: -50px;
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-image: url('../../assets/landing/landing-mobile.webp');
  background-repeat: no-repeat;
  background-position: center;
}
.content {
  padding: 64px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content__inner {
  z-index: 2;
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
  .content__inner {
    max-width: 387px;
  }
}

@media (min-width: 401px) {
  .content__wrapper::after {
    background-image: url('../../assets/landing/landing-tablet.webp');
  }
}

@media (min-width: 492px) {
  .content__wrapper::after {
    top: -100px;
    height: 120%;
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .content__wrapper {
    position: relative;
    max-width: 1264px;
    margin: 0 auto;
  }

  .content__wrapper::after {
    top: 0px;
    right: 0;
    height: 100%;
    width: 555px;
  }

  .content__inner {
    max-width: 350px;
    align-items: flex-start;
    text-align: start;
    padding-left: 32px;
  }

  .action__text {
    font-size: 1.8rem;
  }

  .content__text {
    font-size: 1.6rem;
  }
}

.content_enter_active {
  animation: enter 1.5s ease-in;
}

@keyframes enter {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
