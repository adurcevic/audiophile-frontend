<script setup>
import { useCssModule, computed } from 'vue';

const props = defineProps({
  isNavOpen: {
    required: true,
    type: Boolean,
  },
});

const style = useCssModule();
const navData = [
  { name: 'Home', path: '/' },
  { name: 'Headphones', path: '/headphones' },
  { name: 'Speakers', path: '/speakers' },
  { name: 'Earphones', path: '/earphones' },
];

const navClass = computed(() => {
  if (props.isNavOpen) return [style.navigation, style.is_open];
  return style.navigation;
});
</script>
<template lang="">
  <nav id="navigation" :class="navClass">
    <div :class="$style.navigation__inner">
      <ul :class="$style.navigation__list">
        <router-link
          v-for="{ name, path } in navData"
          :to="path"
          :exact-active-class="$style.active_link"
          :class="$style.nav__link"
        >
          <li :class="$style.navigation__item">
            <svg
              v-if="name === 'Home'"
              aria-hidden="true"
              focusable="false"
              :class="$style.list_icon"
              style="width: 24px; height: 24px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
              />
            </svg>
            <svg
              v-else-if="name === 'Headphones'"
              :class="$style.list_icon"
              style="width: 24px; height: 24px"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="currentColor"
                d="M12,1C7,1 3,5 3,10V17A3,3 0 0,0 6,20H9V12H5V10A7,7 0 0,1 12,3A7,7 0 0,1 19,10V12H15V20H18A3,3 0 0,0 21,17V10C21,5 16.97,1 12,1Z"
              />
            </svg>
            <svg
              v-else-if="name === 'Speakers'"
              :class="$style.list_icon"
              style="width: 24px; height: 24px"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="currentColor"
                d="M14,10A3,3 0 0,0 11,13A3,3 0 0,0 14,16A3,3 0 0,0 17,13A3,3 0 0,0 14,10M14,18A5,5 0 0,1 9,13A5,5 0 0,1 14,8A5,5 0 0,1 19,13A5,5 0 0,1 14,18M14,2A2,2 0 0,1 16,4A2,2 0 0,1 14,6A2,2 0 0,1 12,4A2,2 0 0,1 14,2M19,0H9A2,2 0 0,0 7,2V18A2,2 0 0,0 9,20H19A2,2 0 0,0 21,18V2A2,2 0 0,0 19,0M5,22H17V24H5A2,2 0 0,1 3,22V4H5"
              />
            </svg>
            <svg
              v-else
              :class="$style.list_icon"
              style="width: 24px; height: 24px"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="currentColor"
                d="M10 8V20C10 20.55 9.55 21 9 21H8C7.45 21 7 20.55 7 20V13.27C6.32 13.72 5.61 14 5 14C3 14 2 12 2 11V6C2 5 3 3 5 3S10 6 10 8M16.5 3C13.46 3 11 5.46 11 8.5S13.46 14 16.5 14 22 11.54 22 8.5 19.54 3 16.5 3M14.5 14.68V20C14.5 20.55 14.95 21 15.5 21H17.5C18.05 21 18.5 20.55 18.5 20V14.68C17.87 14.89 17.2 15 16.5 15S15.13 14.89 14.5 14.68Z"
              />
            </svg>
            <span>{{ name }}</span>
          </li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
<style lang="css" module>
.active_link {
  background-color: var(--bg-tertiary);
}

.active_link .navigation__item::after {
  content: '';
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: var(--dot-color);
  margin-left: auto;
  margin-right: 12px;
}

.navigation {
  visibility: hidden;
  opacity: 0;
  position: fixed;
  top: 0;
  left: -220px;
  width: 220px;
  height: 100%;
  z-index: 2;
  transition: visibility 0.3s, opacity 0.3s, transform 0.5s ease-in-out;
  background-color: var(--bg-primary);
}

.navigation__inner {
  height: 100%;
  padding-top: 150px;
  display: flex;
  align-items: flex-start;
  padding-left: 12px;
}

.navigation.is_open {
  opacity: 1;
  visibility: visible;
  transform: translateX(220px);
}

.navigation__list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
}

.navigation__list a {
  width: 100%;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  padding-left: 6px;
}

.navigation__item {
  padding: 5px 0;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-primary);
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 600;
  transition: transform 0.2s ease-in-out;
}

.navigation__item:hover {
  transform: scale(1.02);
}

@media (min-width: 375px) {
  .navigation {
    left: -240px;
    width: 240px;
  }

  .navigation__inner {
    padding-left: 32px;
  }

  .navigation.is_open {
    transform: translateX(240px);
  }
}

@media (min-width: 1009px) {
  .navigation {
    position: static;
    visibility: visible;
    width: 100%;
    left: 0;
    opacity: 1;
    transition: opacity 0s;
    background-color: transparent;
  }

  .navigation.is_open {
    transform: none;
  }

  .navigation__inner {
    padding-top: 0;
    align-items: center;
    padding-left: 0;
  }

  .list_icon {
    display: none;
  }

  .navigation__list {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 48px;
  }

  .navigation__list a {
    position: relative;
    width: auto;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding-left: 0;
  }

  .active_link {
    background-color: transparent;
  }

  .navigation__item {
    background-image: linear-gradient(
      to right,
      var(--bg-tertiary),
      var(--bg-tertiary) 50%,
      #fff 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: background-position 0.3s ease-in-out;
  }

  .navigation__item:hover {
    transform: none;
    background-position: 0;
  }

  .nav__link .navigation__item:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: var(--dot-color);
    margin: 0;
  }

  .active_link.nav__link .navigation__item::after {
    width: 100%;
  }

  .active_link .navigation__item {
    background-image: none;
    -webkit-text-fill-color: var(--dot-color);
  }
}
</style>