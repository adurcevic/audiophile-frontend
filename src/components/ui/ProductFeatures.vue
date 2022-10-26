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

console.log(props.text, props.boxContent);
</script>
<template lang="">
  <div :class="$style.section__container">
    <div>
      <p :class="$style.title">Features</p>
      <div :class="$style.features__content">
        <p v-for="paragraph in text" :class="$style.features__text">
          {{ paragraph }}
        </p>
      </div>
    </div>
    <div :class="$style.box">
      <p :class="$style.title">In the box</p>
      <div :class="$style.box__content">
        <p v-for="[number, text] in boxContent" :class="$style.box__text">
          <span :class="$style.items_number">{{ number }}</span> {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="css" module>
.section__container {
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

.features__content {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  line-height: 1.7;
}

.features__text {
  font-size: 1.6rem;
  color: var(--theme-text-tertiary);
  font-weight: 200;
}

.box {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.box__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.box__text {
  font-size: 1.6rem;
  color: var(--theme-text-tertiary);
  font-weight: 300;
}

.items_number {
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
  .section__container {
    display: grid;
    grid-template-columns: 1.4fr 0.6fr;
  }

  .features__content {
    margin-top: 48px;
  }

  .title {
    font-size: 3.2rem;
  }
}
@media (min-width: 1024px) {
  .section__container {
    gap: 90px;
  }
}
</style>
