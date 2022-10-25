<script setup>
import HamburgerButton from '../ui/HamburgerButton.vue';
import NavBar from '../navigation/NavBar.vue';
import ToggleSwitch from '../ui/ToggleSwitch.vue';
import LogoLink from '../ui/LogoLink.vue';
import { computed, ref } from 'vue';
import { inject } from 'vue';

const isNavOpen = ref(false);

const { isDark, toggleTheme } = inject('theme');

const toggleNav = () => {
  if (!isNavOpen.value) {
    setTimeout(() => {
      isNavOpen.value = true;
    }, 0.5);
  } else {
    isNavOpen.value = false;
  }
};

const lightIcon = computed(() => (isDark.value ? '#333333' : '#ffffff'));

const darkIcon = computed(() => (!isDark.value ? '#333333' : '#ffffff'));

const closeNav = () => {
  if (isNavOpen.value) isNavOpen.value = false;
};
</script>
<template lang="">
  <header :class="$style.header">
    <div :class="$style.toggle__container">
      <div :class="$style.theme__icon">
        <svg
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          :stroke="lightIcon"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      </div>

      <ToggleSwitch :value="isDark" @toggle="toggleTheme"></ToggleSwitch>
      <div :class="$style.theme__icon">
        <svg
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          :stroke="darkIcon"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </div>
    </div>
    <div :class="$style.header__inner">
      <HamburgerButton
        :is-nav-open="isNavOpen"
        @toggle-nav="toggleNav"
      ></HamburgerButton>
      <LogoLink />
      <NavBar
        id="navigation"
        :is-nav-open="isNavOpen"
        v-click-outside="closeNav"
        @close-nav="closeNav"
      ></NavBar>
      <div :class="$style.headers__icons">
        <button
          :class="$style.icons_btn"
          title="Open dropdown menu for sign in"
          aria-label="Open dropdown menu for sign"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </button>
        <button
          :class="$style.icons_btn"
          title="Show items in cart"
          aria-label="Show items in cart"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
<style lang="css" module>
.toggle__container {
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  z-index: 10;
}

.theme__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
}

.theme__icon svg {
  transition: stroke 0.4s ease-in-out;
}

.active_link {
  background-color: var(--bg-tertiary);
}

.active_link li::after {
  content: '';
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: var(--dot-color);
  margin-left: auto;
  margin-right: 24px;
}

.header {
  height: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-primary);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-primary);
  height: 100%;
  width: calc(100% - 24px);
}

.headers__icons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.icons_btn {
  display: grid;
  place-items: center;
  height: 24px;
  width: 24px;
  cursor: pointer;
}

.icons_btn svg path {
  stroke: var(--text-primary);
}

@media (min-width: 375px) {
  .header__inner {
    width: calc(100% - 64px);
  }
}

@media (min-width: 1024px) {
  .header__inner {
    max-width: 1200px;
  }
}
</style>
