<script setup>
import { useCssModule, computed } from 'vue';
import HouseIcon from '../icons/HouseIcon.vue';
import EarphonesIcon from '../icons/EarphonesIcon.vue';
import HeadphonesIcon from '../icons/HeadphonesIcon.vue';
import SpeakersIcon from '../icons/SpeakersIcon.vue';
import { navData } from '../../data/data.js';

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
            <HouseIcon
              v-if="!isFooter && name === 'Home'"
              :class="$style.listIcon"
            />
            <HeadphonesIcon
              v-else-if="!isFooter && name === 'Headphones'"
              :class="$style.listIcon"
            />
            <SpeakersIcon
              v-else-if="!isFooter && name === 'Speakers'"
              :class="$style.listIcon"
            />
            <EarphonesIcon
              v-else-if="!isFooter && name === 'Earphones'"
              :class="$style.listIcon"
            />
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
  composes: flexCenter from 'src/main.css';
}

.navigationInner {
  height: 100%;
  padding-top: 150px;
  display: flex;
  align-items: flex-start;
  padding-left: 12px;
}

.navigationInnerFooter {
  composes: flexCenter from 'src/main.css';
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
