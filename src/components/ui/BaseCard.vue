<script setup>
import { computed } from 'vue';
const props = defineProps({
  cardData: {
    type: Object,
    required: true,
  },
  isProductsPage: {
    type: Boolean,
  },
  isProductPage: {
    type: Boolean,
  },
  isNew: {
    type: Boolean,
  },
});

/*PRODUCTS PAGE STYLE */
const mediaWidth = computed(() => {
  if (props.cardData.imgDesktop && !props.isProductPage)
    return '(max-width: 900px)';
  if (props.isProductPage) return '(min-width: 600px) and (max-width: 850px)';

  return '(min-width: 901px)';
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
  <div :class="$style.cardWrapper">
    <picture>
      <source media="(max-width: 450px)" :srcset="cardData.imgMobile" />
      <source :media="mediaWidth" :srcset="cardData.imgTablet" />
      <source media="(min-width: 901px)" :srcset="cardData.imgDesktop" />
      <img
        :class="$style.cardImg"
        :alt="cardData.imgAlt"
        :src="cardData.imgMobile"
      />
    </picture>
    <div :class="$style.cardContent">
      <span v-if="isNew" :class="$style.cardActionText">New product</span>
      <h1 v-if="isProductPage" :class="$style.cardTitle">
        {{ cardData.title }}
      </h1>
      <h2 v-else :class="$style.cardTitle">
        {{ cardData.title
        }}<span v-if="cardData.emphasizedWord" :class="$style.emphasizedWord">{{
          cardData.emphasizedWord
        }}</span
        >{{ cardData.restOfTitle }}
      </h2>
      <p :class="$style.cardText">{{ cardData.text }}</p>
      <p v-if="cardData.price" :class="$style.cardPrice">
        {{ cardData.price }}
      </p>
      <slot></slot>
    </div>
  </div>
</template>
<style lang="css" module>
.cardWrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

.cardActionText {
  font-size: 1.6rem;
  text-transform: uppercase;
  color: var(--color-primary);
  letter-spacing: 6px;
}

.cardImg {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
}

.cardContent {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: v-bind(flexPosition);
  justify-content: center;
}

.cardTitle {
  font-size: 2.8rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-align: v-bind(textAlign);
  color: var(--theme-text-primary);
}

.emphasizedWord {
  color: var(--color-primary);
}

.cardText {
  text-align: v-bind(textAlign);
  font-size: 1.6rem;
  color: var(--theme-text-tertiary);
  line-height: 1.5;
}

.cardPrice {
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--theme-text-primary);
}

@media (min-width: 500px) {
  .cardActionText {
    font-size: 2rem;
  }

  .cardTitle {
    font-size: 3.2rem;
  }
}
@media (min-width: 600px) {
  .cardWrapper {
    grid-template-columns: v-bind(gridColumns);
  }
}

@media (min-width: 901px) {
  .cardWrapper {
    grid-template-columns: repeat(2, 1fr);
    gap: v-bind(gridGap);
  }

  .cardContent {
    grid-column: v-bind(contentPosition);
    grid-row: 1;
    align-items: start;
  }

  .cardWrapper:nth-child(even) .cardContent {
    grid-column: 2;
  }

  .cardTitle {
    text-align: start;
    font-size: 4.2rem;
  }

  .cardText {
    text-align: start;
  }
}
</style>
