<script setup>
import HamburgerButton from '../ui/HamburgerButton.vue';
import NavBar from '../navigation/NavBar.vue';
import ToggleSwitch from '../ui/ToggleSwitch.vue';
import LogoLink from '../ui/LogoLink.vue';
import CartCard from '../cart/CartCard.vue';
import CartItem from '../cart/CartItem.vue';
import CartBtn from '../cart/CartBtn.vue';
import PageOverlay from '../ui/PageOverlay.vue';
import FadeTransition from '../transitions/FadeTransition.vue';
import ListTransition from '../transitions/ListTransition.vue';
import SunIcon from '../icons/SunIcon.vue';
import MoonIcon from '../icons/MoonIcon.vue';
import CartIcon from '../icons/CartIcon.vue';
import FadeDownTransition from '../transitions/FadeDownTransition.vue';
import { useCartStore } from '../../stores/CartStore';
import {
  computed,
  ref,
  inject,
  onMounted,
  onBeforeUnmount,
  useCssModule,
} from 'vue';
import { storeToRefs } from 'pinia';

const isCartOpen = ref(false);
const isNavOpen = ref(false);
const store = useCartStore();
const header = ref(null);
const style = useCssModule();
const isHeaderVisible = ref(false);
const { cartItems, getNumOfCartItems, getTotalAmount } = storeToRefs(store);
const { increaseQty, decreaseQty, removeAllItems } = store;
const { isDark, toggleTheme } = inject('theme');

const toggleValue = (ref) => {
  if (!ref.value) {
    setTimeout(() => {
      ref.value = true;
    });
  } else {
    ref.value = false;
  }
};

const close = (ref) => {
  if (ref.value) ref.value = false;
};

const toggleNav = () => {
  toggleValue(isNavOpen);
};

const closeNav = () => {
  close(isNavOpen);
};

const openCart = () => {
  isCartOpen.value = true;
  if (isCartOpen.value) document.body.style.overflowY = 'hidden';
  if (!isCartOpen.value) document.body.style.overflowY = 'visible';
};

const closeCart = () => {
  setTimeout(() => {
    close(isCartOpen);
    document.body.style.overflowY = 'visible';
  }, 100);
};

const lightIcon = computed(() => (isDark.value ? '#333333' : '#ffffff'));
const darkIcon = computed(() => (!isDark.value ? '#333333' : '#ffffff'));

const badgeValue = computed(() =>
  getNumOfCartItems.value <= 99 ? getNumOfCartItems.value : '99+'
);

const headerClass = computed(() =>
  isHeaderVisible.value ? [style.header, style.stickyNav] : style.header
);

const headerHeight = computed(() => (isHeaderVisible.value ? 80 : 120));

onMounted(() =>
  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;

    if (scrollTop <= headerHeight.value) {
      isHeaderVisible.value = false;
    } else {
      isHeaderVisible.value = true;
    }
  })
);

onBeforeUnmount(() => (document.body.style.overflowY = 'visible'));
</script>
<template lang="">
  <header :class="headerClass" ref="header">
    <FadeTransition>
      <PageOverlay v-if="isCartOpen" @click="closeCart" />
    </FadeTransition>
    <FadeDownTransition>
      <CartCard
        v-if="isCartOpen"
        :numOfItemsInCart="getNumOfCartItems"
        :amountTotal="getTotalAmount"
        @close-cart="closeCart"
      >
        <ListTransition>
          <CartItem
            v-for="item in cartItems"
            :key="item.id"
            :product="{
              imgSrc: item.cartImg,
              title: item.productName,
              price: item.price,
            }"
          >
            <CartBtn
              :addQuantity="item.quantity"
              isSmaller
              @decrementQty="decreaseQty(item.id)"
              @incrementQty="increaseQty(item.id)"
            />
          </CartItem>
        </ListTransition>
      </CartCard>
    </FadeDownTransition>
    <div v-if="!isHeaderVisible" :class="$style.toggleContainer">
      <div :class="$style.themeIcon">
        <SunIcon :stroke="lightIcon" />
      </div>
      <ToggleSwitch :value="isDark" @toggle="toggleTheme"></ToggleSwitch>
      <div :class="$style.themeIcon">
        <MoonIcon :stroke="darkIcon" />
      </div>
    </div>
    <div :class="$style.headerInner">
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
      <div :class="$style.headersIcons">
        <button
          :class="[$style.iconsBtn, $style.iconCart]"
          title="Show items in cart"
          aria-label="Show items in cart"
          @click="openCart"
          :disabled="isCartOpen"
        >
          <CartIcon />
          <span
            v-if="getNumOfCartItems"
            aria-label="Number of products in cart"
            :class="$style.cartBadge"
            >{{ badgeValue }}</span
          >
        </button>
      </div>
    </div>
  </header>
</template>
<style lang="css" module>
.toggleContainer {
  width: 100%;
  margin-top: 20px;
  composes: flexCenter from 'src/main.css';
  gap: 12px;
  z-index: 10;
}

.themeIcon {
  composes: flexCenter from 'src/main.css';
  width: 26px;
  height: 26px;
}

.themeIcon svg {
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
  composes: flexCenter from 'src/main.css';
  flex-direction: column;
  background-color: var(--bg-primary);
}

.stickyNav {
  position: sticky;
  height: 80px;
  top: 0;
  left: 0;
  z-index: 14;
  background-color: #191919e2;
}

.headerInner {
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  border-bottom: 1px solid var(--border-primary);
  height: 100%;
  width: calc(100% - 24px);
}

.headersIcons {
  composes: flexCenter from 'src/main.css';
  gap: 12px;
  margin-left: auto;
}

.iconsBtn {
  display: grid;
  place-items: center;
  height: 24px;
  width: 24px;
  cursor: pointer;
}

.iconCart {
  z-index: 30;
  position: relative;
}

.cartBadge {
  position: absolute;
  composes: flexCenter from 'src/main.css';
  top: -10px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--text-primary);
  font-size: 11px;
}

.iconsBtn svg path {
  stroke: var(--text-primary);
}

@media (min-width: 375px) {
  .headerInner {
    width: calc(100% - 64px);
  }
}

@media (min-width: 548px) {
  .headerInner {
    gap: 48px;
  }
}

@media (min-width: 1024px) {
  .headerInner {
    max-width: 1200px;
    gap: 0;
  }
}
</style>
