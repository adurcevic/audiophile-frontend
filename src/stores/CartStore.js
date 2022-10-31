import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('CartStore', () => {
  const cartItems = ref([]);

  const numOfCartItems = computed(() => {
    if (!cartItems.value.length) return 0;

    return cartItems.value.reduce((numOfItems, item) => {
      return (numOfItems = numOfItems + item.quantity);
    }, 0);
  });

  const payAmount = computed(() => {
    if (!cartItems.value.length) {
      return 0;
    }

    return cartItems.value.reduce((amount, item) => {
      return (amount = item.price * item.quantity + amount);
    }, 0);
  });

  function addItemToCart(product) {
    const { productName, quantity, price, id } = product;

    if (!cartItems.value.length) {
      cartItems.value.push(product);
      return;
    }

    const existingItem = cartItems.value.find((item) => item.id === id);

    if (!existingItem) {
      cartItems.value.push(product);
      return;
    }

    existingItem.quantity = existingItem.quantity + quantity;
  }

  function removeItem(id) {
    const filteredArr = cartItems.value.filter((item) => item.id !== id);
    cartItems.value = filteredArr;
  }

  function removeAllItems() {
    cartItems.value = [];
  }

  function increaseQty(id) {
    const product = cartItems.value.find((item) => item.id === id);
    product.quantity++;
  }

  function decreaseQty(id) {
    const product = cartItems.value.find((item) => item.id === id);

    if (product.quantity === 1) {
      removeItem(id);
      return;
    }

    product.quantity--;
  }

  return {
    cartItems,
    numOfCartItems,
    payAmount,
    addItemToCart,
    removeAllItems,
    increaseQty,
    decreaseQty,
  };
});
