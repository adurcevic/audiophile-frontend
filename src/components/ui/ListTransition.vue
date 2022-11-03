<script></script>
<template lang="">
  <TransitionGroup name="list">
    <slot></slot>
  </TransitionGroup>
</template>
<style lang="css">
.list-move,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
