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
      <div :class="$style.default__header">
        <transition
          :enter-active-class="$style.switch_enter"
          :leave-active-class="$style.switch_leave"
          mode="out-in"
          appear
        >
          <h1 :key="title" :class="$style.default__title">{{ title }}</h1>
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

.default__header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 130px;
  background-color: var(--bg-primary);
}

.default__title {
  font-size: 3.2rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--text-primary);
  letter-spacing: 4px;
}

.switch_enter {
  animation: fade 0.3s ease-out;
}
.switch_leave {
  animation: fade 0.3s ease-in reverse;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
