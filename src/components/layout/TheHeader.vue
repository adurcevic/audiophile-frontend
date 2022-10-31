<script setup>
import HamburgerButton from '@/components/ui/HamburgerButton.vue';
import NavBar from '@/components/navigation/NavBar.vue';
import ToggleSwitch from '@/components/ui/ToggleSwitch.vue';
import LogoLink from '@/components/ui/LogoLink.vue';
import CartCard from '@/components/ui/CartCard.vue';
import CartItem from '@/components/ui/CartItem.vue';
import CartBtn from '@/components/ui/CartBtn.vue';
import PageOverlay from '@/components/ui/PageOverlay.vue';
import { useCartStore } from '@/stores/CartStore';
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { inject } from 'vue';
import { isSpecialBooleanAttr } from '@vue/shared';

const isCartOpen = ref(false);
const isNavOpen = ref(false);
const store = useCartStore();
const { cartItems, numOfCartItems, payAmount } = storeToRefs(store);
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

const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value;
};

const closeCart = () => {
  close(isCartOpen);
};

const lightIcon = computed(() => (isDark.value ? '#333333' : '#ffffff'));

const darkIcon = computed(() => (!isDark.value ? '#333333' : '#ffffff'));

const badgeValue = computed(() =>
  numOfCartItems.value <= 99 ? numOfCartItems.value : '99+'
);
</script>
<template lang="">
  <transition
    :enter-active-class="$style.overlayEnter"
    :leave-active-class="$style.overlayLeave"
    mode="out-in"
  >
    <PageOverlay v-if="isCartOpen" @click="closeCart" />
  </transition>
  <header :class="$style.header">
    <div :class="$style.toggleContainer">
      <div :class="$style.themeIcon">
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
      <div :class="$style.themeIcon">
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
          :class="$style.iconsBtn"
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
          :class="[$style.iconsBtn, $style.iconCart]"
          title="Show items in cart"
          aria-label="Show items in cart"
          @click="toggleCart"
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
          <span
            v-if="numOfCartItems"
            aria-label="Number of products in cart"
            :class="$style.cartBadge"
            >{{ badgeValue }}</span
          >
        </button>
      </div>
      <transition
        :enter-active-class="$style.cartEnter"
        :leave-active-class="$style.cartLeave"
        mode="out-in"
      >
        <CartCard
          v-if="isCartOpen"
          :numOfItemsInCart="numOfCartItems"
          :amountTotal="payAmount"
        >
          <CartItem
            v-for="item in cartItems"
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
        </CartCard>
      </transition>
    </div>
  </header>
</template>
<style lang="css" module>
.toggleContainer {
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  z-index: 10;
}

.themeIcon {
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-primary);
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
  display: flex;
  align-items: center;
  justify-content: center;
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
  z-index: 20;
  position: relative;
}

.cartBadge {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
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

.overlayEnter {
  composes: fadeEnter from '@/main.module.css';
}
.overlayLeave {
  composes: fadeLeave from '@/main.module.css';
}

.cartEnter {
  animation: fade-cart 0.3s ease-out;
}
.cartLeave {
  animation: fade-cart 0.3s ease-in reverse;
}

@keyframes fade-cart {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
