<script setup>
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
        <transition
          :enter-active-class="$style.switchEnter"
          :leave-active-class="$style.switchLeave"
          mode="out-in"
          appear
        >
          <h1 :key="title" :class="$style.defaultTitle">{{ title }}</h1>
        </transition>
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
  display: flex;
  align-items: center;
  justify-content: center;
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

.switchEnter {
  composes: fadeEnter from '@/main.module.css';
}
.switchLeave {
  composes: fadeLeave from '@/main.module.css';
}
</style>
