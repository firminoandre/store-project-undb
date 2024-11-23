
<script setup lang="ts">
import TheButton from '@/components/TheButton.vue';
import TheProductCard from '@/components/TheProductCard.vue';
import ProgressSpinner from 'primevue/progressspinner';
import apiService from '@/services/useApi';
import { onBeforeMount, ref } from 'vue';
import { useCartStore } from '@/stores/useCartStore';

const cartStore = useCartStore();

interface Rating {
  rate: number;
  count: number;
}

interface ProductDTO {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

const productsData = ref<ProductDTO[]>([])
const loadingProducts = ref(false)
const showFilterModal = ref(false)

const fetchData = async () => {
  try {
    loadingProducts.value = true;
    const response: ProductDTO[] = await apiService.get("/products");

    if (response.length) {
      productsData.value = response as ProductDTO[];
    }
  } catch (error: unknown) {
    console.log(error)
  } finally {
    loadingProducts.value = false;
  }
};

onBeforeMount(async () => {
  await fetchData()
})
</script>
<template>
  <section class="bg-gray-200 py-8  dark:bg-gray-900 md:py-12 min-h-screen ">
  <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div class="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
      <div>
        <h2 class="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Loja UNDB</h2>
      </div>
      <div class="flex items-center space-x-4">
        <TheButton @click="showFilterModal = true" label="Filtros" icon="pi pi-filter" />
        <TheButton label="Organizar" icon="pi pi-sort" />
        <TheButton @click="cartStore.toggleCart" label="Meu carrinho" icon="pi pi-shopping-cart" />
      </div>
    </div>
    <!-- Centralização do spinner -->
    <div v-if="loadingProducts" class="flex items-center justify-center min-h-screen">
      <ProgressSpinner />
    </div>

    <div class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
      <div v-for="product in productsData" :key="product.id">
        <TheProductCard 
          :id="product.id" 
          :image="product.image" 
          :title="product.title" 
          :score-number="product.rating.rate" 
          :price="product.price" 
          :reviews-number="product.rating.count" 
          :pre-order-details="['fastDelivery', 'bestPrice']" 
          :off-price="50" 
        />
      </div>
    </div>
  </div>
</section>

</template>