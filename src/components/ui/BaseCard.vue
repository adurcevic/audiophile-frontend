<script setup>
import { computed } from 'vue';
const props = defineProps({
  cardTitle: {
    type: String,
    required: true,
  },
  price: {
    type: String,
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
  isProductsPage: {
    type: Boolean,
  },
  isProductPage: {
    type: Boolean,
  },
});

/*PRODUCTS PAGE STYLE */
const mediaWidth = computed(() => {
  if (props.imgDesktop && !props.isProductPage) return '(max-width: 900px)';
  if (props.isProductPage) return '(min-width: 600px) and (max-width: 850px)';

  return '(min-width: 901px)';
});

const isActionTextVisibile = computed(() => {
  const title = props.cardTitle.toLowerCase();
  const newHeadphones = 'XX99 Mark II Headphones';
  const newSpeaker = 'ZX9 Speaker';
  const newEarphones = 'YX1 Wireless Earphones';

  if (
    title === newHeadphones.toLowerCase() ||
    title === newSpeaker.toLowerCase() ||
    title === newEarphones.toLowerCase()
  )
    return true;

  return false;
});

const gridGap = computed(() =>
  props.isProductsPage || props.isProductPage ? '98px' : '32px'
);

/*PRODUCT PAGE STYLES */
const contentPosition = computed(() => (props.isProductPage ? '2' : '1'));
const textAlign = computed(() => (props.isProductPage ? 'start' : 'center'));
const flexPosition = computed(() => (props.isProductPage ? 'start' : 'center'));
const gridColumns = computed(() =>
  props.isProductPage ? 'repeat(2, 1fr)' : '1fr'
);
</script>
<template lang="">
  <div :class="$style.card__wrapper">
    <picture>
      <source media="(max-width: 450px)" :srcset="imgMobile" />
      <source :media="mediaWidth" :srcset="imgTablet" />
      <source media="(min-width: 901px)" :srcset="imgDesktop" />
      <img :class="$style.card__img" :alt="imgAlt" :src="imgMobile" />
    </picture>
    <div :class="$style.card__content">
      <span v-if="isActionTextVisibile" :class="$style.card__action_text"
        >New product</span
      >
      <h1 v-if="isProductPage" :class="$style.card__title">{{ cardTitle }}</h1>
      <p v-else :class="$style.card__title">
        {{ cardTitle
        }}<span v-if="emphasizedWord" :class="$style.emphasized_word">{{
          emphasizedWord
        }}</span
        >{{ restOfTitle }}
      </p>
      <p :class="$style.card__text">{{ cardText }}</p>
      <p v-if="price" :class="$style.card__price">{{ price }}</p>
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

.card__action_text {
  font-size: 1.6rem;
  text-transform: uppercase;
  color: var(--color-primary);
  letter-spacing: 6px;
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
  align-items: v-bind(flexPosition);
  justify-content: center;
}

.card__title {
  font-size: 2.8rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-align: v-bind(textAlign);
  color: var(--theme-text-primary);
}

.emphasized_word {
  color: var(--color-primary);
}

.card__text {
  text-align: v-bind(textAlign);
  font-size: 1.6rem;
  color: var(--theme-text-tertiary);
  line-height: 1.5;
}

.card__price {
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--theme-text-primary);
}

@media (min-width: 500px) {
  .card__action_text {
    font-size: 2rem;
  }

  .card__title {
    font-size: 3.2rem;
  }
}
@media (min-width: 600px) {
  .card__wrapper {
    grid-template-columns: v-bind(gridColumns);
  }
}

@media (min-width: 901px) {
  .card__wrapper {
    grid-template-columns: repeat(2, 1fr);
    gap: v-bind(gridGap);
  }

  .card__content {
    grid-column: v-bind(contentPosition);
    grid-row: 1;
    align-items: start;
  }

  .card__wrapper:nth-child(even) .card__content {
    grid-column: 2;
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
