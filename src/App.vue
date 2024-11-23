<script setup lang="ts">
import {  RouterView } from 'vue-router'
import TheShoppingCart from './components/TheShoppingCart.vue';
import { useCartStore } from './stores/useCartStore';

const cartStore = useCartStore();
</script>

<template>
  <TheShoppingCart v-if="cartStore.isCartVisible"/>
  <RouterView />
</template>