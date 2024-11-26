<script setup lang="ts">
import {  RouterView } from 'vue-router'
import TheShoppingCart from './components/TheShoppingCart.vue';
import { useCartStore } from './stores/useCartStore';
import { onBeforeMount } from 'vue';
import router from './router';

const cartStore = useCartStore();

onBeforeMount(() => {
  router.push('/login')
})
</script>

<template>
  <TheShoppingCart v-if="cartStore.isCartVisible"/>
  <RouterView />
</template>