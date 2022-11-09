<script setup>
const props = defineProps({
  text: {
    type: Array,
    required: true,
  },
  boxContent: {
    type: Array,
    required: true,
  },
});
</script>
<template lang="">
  <div :class="$style.sectionContainer">
    <div>
      <p :class="$style.title">Features</p>
      <div :class="$style.featuresContent">
        <p v-for="paragraph in text" :class="$style.featuresText">
          {{ paragraph }}
        </p>
      </div>
    </div>
    <div :class="$style.box">
      <p :class="$style.title">In the box</p>
      <div :class="$style.boxContent">
        <p v-for="{ quantity, item } in boxContent" :class="$style.boxText">
          <span :class="$style.itemsNumber">{{ quantity }}x</span> {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="css" module>
.sectionContainer {
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.title {
  font-size: 2.4rem;
  color: var(--theme-text-primary);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
}

.featuresContent {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  line-height: 1.7;
}

.featuresText {
  font-size: 1.6rem;
  color: var(--theme-text-tertiary);
  font-weight: 200;
}

.box {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.boxContent {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.boxText {
  font-size: 1.6rem;
  color: var(--theme-text-tertiary);
  font-weight: 300;
}

.itemsNumber {
  color: var(--color-primary);
  padding-right: 4px;
}

@media (min-width: 478px) {
  .box {
    gap: 78px;
    flex-direction: row;
  }
}

@media (min-width: 786px) {
  .box {
    min-width: 250px;
    gap: 48px;
    flex-direction: column;
  }
  .sectionContainer {
    display: grid;
    grid-template-columns: 1.4fr 0.6fr;
  }

  .featuresContent {
    margin-top: 48px;
  }

  .title {
    font-size: 3.2rem;
  }
}
@media (min-width: 1024px) {
  .sectionContainer {
    gap: 90px;
  }
}
</style>
