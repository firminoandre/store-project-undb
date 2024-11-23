
<script setup lang="ts">
import TheButton from '@/components/TheButton.vue';
import TheProductCard from '@/components/TheProductCard.vue';
import ProgressSpinner from 'primevue/progressspinner';
import Select from 'primevue/select';
import apiService from '@/services/useApi';
import { onBeforeMount, ref, watch } from 'vue';
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
const filteredProductsData = ref<ProductDTO[]>([])
const loadingProducts = ref(false)
const selectedProductCategory = ref();
const productCategories = ref([
    { name: 'Roupas masculinas', keyValue: "men's clothing" },
    { name: 'Joalheria', keyValue: "jewelery" },
    { name: 'Eletronicos', keyValue: "electronics" },
    { name: 'Roupas femininas', keyValue: "women's clothing" },
]);

const fetchData = async () => {
  try {
    loadingProducts.value = true;
    const response: ProductDTO[] = await apiService.get("/products");

    if (response.length) {
      productsData.value = response as ProductDTO[];
      filteredProductsData.value = response as ProductDTO[]
    }
  } catch (error: unknown) {
    console.log(error)
  } finally {
    loadingProducts.value = false;
  }
};

watch(() => selectedProductCategory.value, () => {
  if (selectedProductCategory.value) {
    filteredProductsData.value = productsData.value.filter(item => item.category.toLowerCase() === selectedProductCategory.value.keyValue.toLowerCase());
  } else {
    filteredProductsData.value = productsData.value
  }
})

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
        <Select v-model="selectedProductCategory" showClear :options="productCategories" optionLabel="name" placeholder="Filtre por categoria" class="w-full md:w-56" />
        <TheButton @click="cartStore.toggleCart" label="Meu carrinho" icon="pi pi-shopping-cart" />
      </div>
    </div>
    <!-- Centralização do spinner -->
    <div v-if="loadingProducts" class="flex items-center justify-center min-h-screen">
      <ProgressSpinner />
    </div>

    <div class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
      <div v-for="product in filteredProductsData" :key="product.id">
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