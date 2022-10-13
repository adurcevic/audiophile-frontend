<script setup>
import HamburgerButton from '../ui/HamburgerButton.vue';
import PageNavigation from '../ui/PageNavigation.vue';
import ToggleSwitch from '../ui/ToggleSwitch.vue';
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

const lightIcon = computed(() => {
  if (isDark.value) return '#333333';
  return '#ffffff';
});

const darkIcon = computed(() => {
  if (!isDark.value) return '#333333';
  return '#ffffff';
});

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

      <toggle-switch :value="isDark" @toggle="toggleTheme"></toggle-switch>
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
      <hamburger-button
        :is-nav-open="isNavOpen"
        @toggle-nav="toggleNav"
      ></hamburger-button>
      <router-link to="/" :class="$style.logo_link">
        <svg
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          width="143"
          height="25"
        >
          <path
            d="M7.363 20.385c1.63 0 3.087-.537 4.237-1.47l.414.994h3.739V5.853h-3.605l-.495 1.087c-1.16-.958-2.637-1.51-4.29-1.51C3.069 5.43 0 8.527 0 12.88c0 4.37 3.07 7.505 7.363 7.505zm.646-4.287c-1.811 0-3.143-1.37-3.143-3.206 0-1.824 1.32-3.195 3.143-3.195 1.812 0 3.144 1.37 3.144 3.195 0 1.836-1.332 3.206-3.144 3.206zm17.535 4.287c4.148 0 6.91-2.562 6.91-6.495V5.868h-4.836v7.811c0 1.47-.782 2.357-2.074 2.357-1.292 0-2.09-.873-2.09-2.357V5.868h-4.836v8.022c0 3.933 2.778 6.495 6.926 6.495zm16.328.015c1.636 0 3.093-.557 4.235-1.52l.456 1.044h3.58V.792H45.36v5.591a6.551 6.551 0 00-3.489-.976c-4.309 0-7.378 3.12-7.378 7.489 0 4.368 3.07 7.504 7.378 7.504zm.647-4.287c-1.812 0-3.143-1.381-3.143-3.217 0-1.835 1.331-3.216 3.143-3.216 1.812 0 3.143 1.38 3.143 3.216 0 1.836-1.331 3.217-3.143 3.217zM57.976 4.109V0h-4.763v4.109h4.763zm.037 15.815V5.868h-4.837v14.056h4.837zm10.097.46c4.563 0 7.872-3.146 7.872-7.488 0-4.357-3.31-7.489-7.872-7.489-4.579 0-7.873 3.132-7.873 7.489 0 4.342 3.294 7.489 7.873 7.489zm0-4.348c-1.764 0-3.029-1.281-3.029-3.14 0-1.858 1.265-3.139 3.029-3.139 1.763 0 3.028 1.292 3.028 3.14 0 1.858-1.265 3.139-3.028 3.139zM82.998 25v-5.534a6.56 6.56 0 003.423.934c4.293 0 7.362-3.125 7.362-7.504 0-4.38-3.069-7.489-7.362-7.489-1.669 0-3.155.578-4.31 1.578l-.605-1.117h-3.29V25h4.782zm2.776-8.887c-1.812 0-3.143-1.37-3.143-3.217s1.331-3.217 3.143-3.217c1.811 0 3.143 1.37 3.143 3.217 0 1.846-1.343 3.217-3.143 3.217zm15.065 3.811v-7.506c0-1.804.912-2.843 2.376-2.843 1.262 0 1.83.826 1.83 2.447v7.902h4.837V11.46c0-3.644-2.071-6.008-5.295-6.008-1.4 0-2.714.507-3.748 1.34v-6h-4.837v19.132h4.837zM117.574 4.11V0h-4.763v4.109h4.763zm.037 15.815V5.868h-4.837v14.056h4.837zm7.878 0V.792h-4.836v19.132h4.836zm9.851.461c3.523 0 6.364-2.004 7.352-5.212h-4.813c-.465.823-1.409 1.318-2.539 1.318-1.527 0-2.55-.834-2.866-2.446H142.9c.063-.435.1-.858.1-1.282 0-4.123-3.134-7.356-7.66-7.356-4.407 0-7.626 3.17-7.626 7.478 0 4.295 3.245 7.5 7.626 7.5zm2.896-9.021h-5.677c.391-1.396 1.372-2.163 2.781-2.163 1.46 0 2.471.758 2.896 2.163z"
            fill="#FFF"
            fill-rule="nonzero"
          />
        </svg>
      </router-link>
      <page-navigation
        id="navigation"
        :is-nav-open="isNavOpen"
        v-click-outside="closeNav"
      ></page-navigation>
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
  height: 150px;
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
  width: 100%;
  padding: 0 12px;
}

.logo_link {
  display: grid;
  place-items: center;
  z-index: 5;
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
    padding: 32px;
  }
}

@media (min-width: 1024px) {
  .header__inner {
    max-width: 1024px;
  }
}
</style>
