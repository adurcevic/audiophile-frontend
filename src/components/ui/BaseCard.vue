<script setup>
const props = defineProps({
  cardTitle: {
    type: String,
    required: true,
  },
  emphasizedWord: {
    type: String,
  },
  restOfTitle: {
    type: String,
  },
  cardText: {
    type: String,
  },
  imgMobile: {
    type: String,
  },
  imgTablet: {
    type: String,
  },
  imgDesktop: {
    type: String,
  },
  imgAlt: {
    type: String,
    required: true,
  },
});
</script>
<template lang="">
  <div :class="$style.card__wrapper">
    <picture>
      <source
        media="(max-width: 450px)"
        srcset="../../assets/best-gear/image-best-gear-mobile.webp"
      />
      <source
        media="(max-width: 900px)"
        srcset="../../assets/best-gear/image-best-gear-tablet.webp"
      />
      <source
        media="(min-width: 901px)"
        srcset="../../assets/best-gear/image-best-gear-mobile.webp"
      />
      <source />
      <source />
      <img :class="$style.card__img" :alt="imgAlt" />
    </picture>
    <div :class="$style.card__content">
      <p :class="$style.card__title">
        {{ cardTitle
        }}<span v-if="emphasizedWord" :class="$style.emphasized_word">{{
          emphasizedWord
        }}</span
        >{{ restOfTitle }}
      </p>
      <p :class="$style.card__text">{{ cardText }}</p>
      <slot></slot>
    </div>
  </div>
</template>
<style lang="css" module>
.card__wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

.card__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
}

.card__content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
}

.card__title {
  font-size: 3.2rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-align: center;
  color: var(--theme-text-primary);
}

.emphasized_word {
  color: var(--color-primary);
}

.card__text {
  text-align: center;
  font-size: 1.6rem;
  color: var(--theme-text-tertiary);
  line-height: 1.5;
}

@media (min-width: 901px) {
  .card__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  .card__content {
    grid-column-start: 1;
    grid-row-start: 1;
  }

  .card__title {
    text-align: start;
    font-size: 4.2rem;
  }

  .card__text {
    text-align: start;
  }
}
</style>
