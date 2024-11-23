<script setup lang="ts">
import TheButton from '@/components/TheButton.vue';
import apiService from '@/services/useApi';
import ProgressSpinner from 'primevue/progressspinner';
import { computed, onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import TheBreadcrumb from '@/components/TheBreadcrumb.vue';
import { useCartStore } from '@/stores/useCartStore';

const cartStore = useCartStore();

interface Rating {
  rate: number;
  count: number;
}

interface ProductDetailsDTO {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

const route = useRoute()
const router = useRouter()

const productData = ref<ProductDetailsDTO | null>(null)
const loadingProduct = ref(false)

const stars = computed(() => {
    const score = Math.min(Math.max(productData.value ? productData.value.rating.rate : 0, 0), 5);
    return Array.from({ length: 5 }, (_, index) => index < score);
});

const breadcrumbItems = computed(() => {
    return [{label: 'Todos os produtos', route: '/'}, { label: productData.value?.title }, ]
})

const fetchData = async () => {
  try {
    loadingProduct.value = true;
    const response: ProductDetailsDTO = await apiService.get(`/products/${route.params.id}`);

    if (response) {
      productData.value = response as ProductDetailsDTO
    } else {
        router.push({name: 'notFound'})
    }
  } catch (error: unknown) {
    console.log(error)
  } finally {
    loadingProduct.value = false;
  }
};

const addToCart = (product: ProductDetailsDTO) => {
  cartStore.addItem(product);
};

onBeforeMount(async () => {
  await fetchData()
})
</script>
<template>
<section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased  min-h-screen">
    <div v-if="loadingProduct" class="flex items-center justify-center min-h-screen">
        <ProgressSpinner />
    </div>
    <div v-if="!loadingProduct">
        <TheBreadcrumb class="mb-24" :items="breadcrumbItems"/>
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
        <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img class="w-full" :src="productData?.image" alt="" />
        </div>

        <div class="mt-6 sm:mt-8 lg:mt-0">
            <h1
            class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
            >
            {{ productData?.title }}
            </h1>
            <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p
                class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
            >
                R$ {{ productData?.price }}
            </p>

            <div class="flex items-center gap-2 mt-2 sm:mt-0">
                <div class="flex items-center gap-1">
                <template v-for="(isFilled, index) in stars" :key="index">
                        <svg class="h-4 w-4" :class="isFilled ? 'text-yellow-400' : 'text-gray-300'" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>
                    </template>
                </div>
                <p
                class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
                >
                ({{ productData?.rating.rate }})
                </p>
                <a
                href="#"
                class="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                >
                {{ productData?.rating.count }} Avaliaçoes
                </a>
            </div>
            </div>

            <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
            <TheButton @click="addToCart(productData as ProductDetailsDTO)" label="Adicionar no carrinho" icon="pi pi-cart-plus" />
            </div>

            <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            <p class="mb-6 text-gray-500 dark:text-gray-400">
            {{ productData?.description }}
            </p>
        </div>
        </div>
    </div>
    </div>
    
</section>
</template>