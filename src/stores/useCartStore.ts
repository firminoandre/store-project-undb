interface Rating {
    rate: number;
    count: number;
  }
  
  export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([]);
  const isCartVisible = ref(false);
  const userLogged = ref(false)

  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0);
  });

  const totalAmount = computed(() => {
    return items.value.reduce((total, item) => total + (item.price * item.quantity), 0);
  });

  const cartIsEmpty = computed(() => items.value.length === 0);

  function addItem(product: Product, quantity: number = 1) {
    const existingItem = items.value.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      items.value.push({
        ...product,
        quantity
      });
    }
    showCart();
  }

  function removeItem(productId: number) {
    const index = items.value.findIndex(item => item.id === productId);
    if (index > -1) {
      items.value.splice(index, 1);
    }
  }

  function updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    const item = items.value.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
    }
  }

  function clearCart() {
    items.value = [];
  }

  function showCart() {
    isCartVisible.value = true;
  }

  function hideCart() {
    isCartVisible.value = false;
  }

  function toggleCart() {
    isCartVisible.value = !isCartVisible.value;
  }

  function setUserLogged() {
    userLogged.value = true
  }

  return {
    items,
    isCartVisible,
    totalItems,
    totalAmount,
    cartIsEmpty,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    showCart,
    hideCart,
    toggleCart,
    setUserLogged,
    userLogged
  };
});