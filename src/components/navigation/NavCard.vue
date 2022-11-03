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
  <li :class="$style.navcard">
    <div :class="$style.navcardContent">
      <p :class="$style.navcardTitle">{{ title }}</p>
      <router-link :class="$style.navcardLink" :to="path">
        <span :class="$style.linkTitle">Shop</span>
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
  </li>
</template>
<style lang="css" module>
.navcard {
  max-width: 400px;
  width: 100%;
  position: relative;
  composes: flexCenter from '@/main.module.css';

  flex-direction: column;
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

.navcardContent {
  padding-top: 80px;
  padding-bottom: 32px;
  display: grid;
  place-items: center;
  gap: 24px;
}
.navcardTitle {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
}
.navcardLink {
  composes: flexCenter from '@/main.module.css';

  gap: 4px;
  transition: color 0.3s ease-in-out;
}

.navcardLink svg path {
  fill: var(--color-primary);
}

.linkTitle {
  font-size: 1.6rem;
  color: var(--theme-text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.navcardLink:hover span {
  color: var(--color-primary);
}

@media (min-width: 1024px) {
  .navcard::after {
    top: -70px;
    height: 170px;
  }

  .navcardContent {
    padding-top: 90px;
  }
}
</style>
