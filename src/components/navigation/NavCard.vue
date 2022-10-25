<script setup>
import { computed } from 'vue';
const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  path: {
    type: Object,
    required: true,
  },
});

const imgUrl = computed(() => {
  return `url(${props.imgSrc})`;
});
</script>
<template lang="">
  <div :class="$style.navcard">
    <div :class="$style.navcard__content">
      <p :class="$style.navcard__title">{{ title }}</p>
      <router-link :class="$style.navcard__link" :to="path">
        <span :class="$style.link__title">Shop</span>
        <svg
          aria-hidden="true"
          style="width: 24px; height: 24px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>
<style lang="css" module>
.navcard {
  max-width: 400px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-secondary);
  border-radius: 4px;
}

.navcard::after {
  position: absolute;
  top: -40px;
  content: '';
  width: 100%;
  height: 130px;
  background: v-bind(imgUrl) no-repeat center;
  background-size: contain;
}

.navcard__content {
  padding-top: 80px;
  padding-bottom: 32px;
  display: grid;
  place-items: center;
  gap: 24px;
}
.navcard__title {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
}
.navcard__link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: color 0.3s ease-in-out;
}

.navcard__link svg path {
  fill: var(--color-primary);
}

.link__title {
  font-size: 1.6rem;
  color: var(--theme-text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.navcard__link:hover span {
  color: var(--color-primary);
}

@media (min-width: 1024px) {
  .navcard::after {
    top: -70px;
    height: 170px;
  }

  .navcard__content {
    padding-top: 90px;
  }
}
</style>
