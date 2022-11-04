<script setup>
import FadeTransition from '@/components/ui/FadeTransition.vue';
const props = defineProps({
  title: {
    type: String,
  },
});
</script>
<template>
  <div :class="$style.landing">
    <slot>
      <div :class="$style.defaultHeader">
        <FadeTransition appear>
          <h1 :key="title" :class="$style.defaultTitle">{{ title }}</h1>
        </FadeTransition>
      </div>
    </slot>
  </div>
</template>
<style module>
.landing {
  overflow: hidden;
  position: relative;
  background-color: var(--bg-primary);
}

.defaultHeader {
  composes: flexCenter from '@/main.css';
  width: 100%;
  height: 130px;
  background-color: var(--bg-primary);
}

.defaultTitle {
  font-size: 3.2rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--text-primary);
  letter-spacing: 4px;
}
</style>
