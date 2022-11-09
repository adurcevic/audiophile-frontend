<script setup>
import BaseLink from '../ui/BaseLink.vue';
</script>
<template>
  <transition :appear-active-class="$style.contentEnterActive" appear>
    <div :class="$style.contentWrapper">
      <div :class="$style.content">
        <div :class="$style.contentInner">
          <span :class="$style.actionText">New product</span>
          <h1 :class="$style.contentTitle">XX99 mark II headphones</h1>
          <p :class="$style.contentText">
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
.contentWrapper::after {
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

.contentInner {
  z-index: 2;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  text-align: center;
}

.actionText {
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 6px;
  color: var(--text-secondary);
  font-weight: 300;
}

.contentTitle {
  font-size: 3.2rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--text-primary);
  letter-spacing: 2px;
  line-height: 1.3;
}

.contentText {
  font-size: 1.6rem;
  color: var(--text-secondary);
  font-weight: 300;
  line-height: 1.8;
}

@media (min-width: 375px) {
  .contentInner {
    max-width: 387px;
  }
}

@media (min-width: 401px) {
  .contentWrapper::after {
    background-image: url('../../assets/landing/landing-tablet.webp');
  }
}

@media (min-width: 492px) {
  .contentWrapper::after {
    top: -100px;
    height: 120%;
  }

  .actionText {
    font-size: 2.2rem;
  }

  .contentTitle {
    font-size: 4.8rem;
  }

  .contentText {
    font-size: 2rem;
  }
}

@media (min-width: 1009px) {
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .contentWrapper {
    position: relative;
    max-width: 1264px;
    margin: 0 auto;
  }

  .contentWrapper::after {
    top: 0px;
    right: 0;
    height: 100%;
    width: 555px;
  }

  .contentInner {
    max-width: 350px;
    align-items: flex-start;
    text-align: start;
    padding-left: 32px;
  }

  .actionText {
    font-size: 1.8rem;
  }

  .contentText {
    font-size: 1.6rem;
  }
}

.contentEnterActive {
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
