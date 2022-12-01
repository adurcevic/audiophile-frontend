import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('CartStore', () => {
  const cartItems = ref([]);
  const shippingFee = ref(50);

  const getNumOfCartItems = computed(() => {
    if (!cartItems.value.length) return 0;

    return cartItems.value.reduce((numOfItems, item) => {
      return (numOfItems = numOfItems + item.quantity);
    }, 0);
  });

  const getTotalAmount = computed(() => {
    if (!cartItems.value.length) {
      return 0;
    }

    const totalAmount = cartItems.value.reduce((amount, item) => {
      return (amount = item.price * item.quantity + amount);
    }, 0);

    return totalAmount;
  });

  const getGrandTotal = computed(() => {
    if (!cartItems.value.length) {
      return 0;
    }

    return getTotalAmount.value + shippingFee.value;
  });

  const getVat = computed(() => {
    if (!cartItems.value.length) {
      return 0;
    }

    const vat = getTotalAmount.value * 0.2;
    return Math.ceil(vat);
  });

  function setCartItems(items) {
    cartItems.value = items;
  }

  function addItemToCart(product) {
    const { productName, quantity, price, id } = product;

    if (!cartItems.value.length) {
      cartItems.value.push(product);
      localStorage.setItem('cart', JSON.stringify(cartItems.value));
      return;
    }

    const existingItem = cartItems.value.find((item) => item.id === id);

    if (!existingItem) {
      cartItems.value.push(product);
      localStorage.setItem('cart', JSON.stringify(cartItems.value));
      return;
    }

    existingItem.quantity = existingItem.quantity + quantity;
    localStorage.setItem('cart', JSON.stringify(cartItems.value));
  }

  function removeItem(id) {
    const filteredArr = cartItems.value.filter((item) => item.id !== id);
    cartItems.value = filteredArr;
  }

  function removeAllItems() {
    cartItems.value = [];
    localStorage.removeItem('cart');
  }

  function increaseQty(id) {
    const product = cartItems.value.find((item) => item.id === id);
    product.quantity++;
    localStorage.setItem('cart', JSON.stringify(cartItems.value));
  }

  function decreaseQty(id) {
    const product = cartItems.value.find((item) => item.id === id);

    if (product.quantity === 1) {
      removeItem(id);
      localStorage.setItem('cart', JSON.stringify(cartItems.value));
      if (cartItems.value.length === 0) {
        localStorage.removeItem('cart');
      }
      return;
    }

    product.quantity--;
    localStorage.setItem('cart', JSON.stringify(cartItems.value));
  }

  return {
    cartItems,
    shippingFee,
    getNumOfCartItems,
    getTotalAmount,
    setCartItems,
    addItemToCart,
    removeAllItems,
    increaseQty,
    decreaseQty,
    getVat,
    getGrandTotal,
  };
});
