<script setup></script>
<template lang="">
  <div :class="$style.btn__container">
    <div :class="$style.btn__wrapper">
      <button :class="$style.btn" aria-label="Increment product quantity">
        <svg
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path d="M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" />
        </svg>
      </button>
    </div>
    <div :class="$style.quantity">1</div>
    <div :class="$style.btn__wrapper" >
      <button :class="$style.btn" aria-label="Decrement product quantity">
        <svg
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<style lang="css" module>
.btn__container {
  display: flex;
  align-items: center;
  justify-content: center;
  place-items: center;
  background-color: var(--bg-secondary);
}

.btn__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 14px;
}

.btn__wrapper svg {
  fill: var(--theme-text-secondary);
}

.quantity {
  font-size: 1.8rem;
  padding: 0 10px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  cursor: pointer;
}

.btn__wrapper:hover {
  background-color: var(--hover-primary);
}
.btn__wrapper:hover svg {
  fill: var(--color-primary);
}
</style>
