<script setup>
import { useCssModule, computed } from 'vue';

const props = defineProps({
  isFooter: {
    type: Boolean,
  },
  isNavOpen: {
    type: Boolean,
  },
});

const emit = defineEmits(['close-nav']);

const style = useCssModule();
const navData = [
  { name: 'Home', path: { name: 'home' } },
  { name: 'Headphones', path: { name: 'headphones' } },
  { name: 'Speakers', path: { name: 'speakers' } },
  { name: 'Earphones', path: { name: 'earphones' } },
];

const navClass = computed(() => {
  if (props.isFooter) return style.navigationFooter;
  if (props.isNavOpen) return [style.navigation, style.isOpen];
  return style.navigation;
});

const navInnerClass = computed(() =>
  props.isFooter ? style.navigationInnerFooter : style.navigationInner
);

const transitionEl = computed(() =>
  props.isFooter
    ? 'background-position 0.3s ease-in-out'
    : 'transform 0.2s ease-in-out'
);

const transformHover = computed(() =>
  props.isFooter ? 'none' : 'scale(1.02)'
);

const bgPosition = computed(() => (props.isFooter ? '0' : '-100%'));

const afterEl = computed(() => (props.isFooter ? 'none' : '""'));

const activeLinkBg = computed(() =>
  props.isFooter ? 'none' : 'var(--bg-tertiary)'
);

const navListGap = computed(() => (props.isFooter ? '4px' : '24px'));

const navListAlign = computed(() => (props.isFooter ? 'center' : 'flex-start'));

const navLinkWidth = computed(() => (props.isFooter ? 'auto' : '100%'));

const navListDirection = computed(() => (props.isFooter ? 'row' : 'column'));
</script>
<template lang="">
  <nav :id="!isFooter ? 'navigation' : null" :class="navClass">
    <div :class="navInnerClass">
      <div :class="$style.navigationList">
        <router-link
          v-for="{ name, path } in navData"
          :key="name"
          :to="path"
          :exact-active-class="$style.activeLink"
          :class="$style.navLink"
          @click="$emit('close-nav')"
        >
          <div :class="$style.navigationItem">
            <svg
              v-if="!isFooter && name === 'Home'"
              aria-hidden="true"
              focusable="false"
              :class="$style.listIcon"
              style="width: 24px; height: 24px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
              />
            </svg>
            <svg
              v-else-if="!isFooter && name === 'Headphones'"
              :class="$style.listIcon"
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
              v-else-if="!isFooter && name === 'Speakers'"
              :class="$style.listIcon"
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
              v-else-if="!isFooter && name === 'Earphones'"
              :class="$style.listIcon"
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
          </div>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<style lang="css" module>
.activeLink {
  background-color: v-bind(activeLinkBg);
}

.activeLink .navigationItem::after {
  content: v-bind(afterEl);
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
  z-index: 3;
  transition: visibility 0.3s, opacity 0.3s, transform 0.5s ease-in-out;
  background-color: var(--bg-primary);
}

.navigationFooter {
  composes: flexCenter from '@/main.module.css';
}

.navigationInner {
  height: 100%;
  padding-top: 150px;
  display: flex;
  align-items: flex-start;
  padding-left: 12px;
}

.navigationInnerFooter {
  composes: flexCenter from '@/main.module.css';
  flex-direction: column;
}

.navigation.isOpen {
  opacity: 1;
  visibility: visible;
  transform: translateX(220px);
}

.navigationList {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: v-bind(navListAlign);
  justify-content: center;
  gap: v-bind(navListGap);
}

.navigationList a {
  width: v-bind(navLinkWidth);
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  padding-left: 6px;
}

.navigationItem {
  padding: 5px 0;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-primary);
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 600;
  background-image: linear-gradient(
    to right,
    var(--color-primary),
    var(--color-primary) 50%,
    #fff 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: v-bind(transitionEl);
}

.navigationItem:hover {
  transform: v-bind(transformHover);
  background-position: v-bind(bgPosition);
}

@media (min-width: 375px) {
  .navigation {
    left: -240px;
    width: 240px;
  }

  .navigationInner {
    padding-left: 32px;
  }

  .navigation.isOpen {
    transform: translateX(240px);
  }
}

@media (min-width: 500px) {
  .navigationList {
    flex-direction: v-bind(navListDirection);
    gap: 24px;
  }
}

@media (min-width: 548px) {
  .navigation {
    left: -270px;
    width: 270px;
  }

  .navigation.isOpen {
    transform: translateX(270px);
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

  .navigation.isOpen {
    transform: none;
  }

  .navigationInner {
    padding-top: 0;
    align-items: center;
    padding-left: 0;
  }

  .listIcon {
    display: none;
  }

  .navigationList {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 48px;
  }

  .navigationList a {
    position: relative;
    width: auto;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding-left: 0;
  }

  .activeLink {
    background-color: transparent;
  }

  .navigationItem {
    transition: background-position 0.3s ease-in-out;
  }

  .navigationItem:hover {
    transform: none;
    background-position: 0;
  }

  .navLink .navigationItem:after {
    content: v-bind(afterEl);
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: var(--color-primary);
    margin: 0;
  }

  .activeLink.navLink .navigationItem::after {
    width: 100%;
  }

  .activeLink .navigationItem {
    background-image: none;
    -webkit-text-fill-color: var(--color-primary);
  }
}
</style>
