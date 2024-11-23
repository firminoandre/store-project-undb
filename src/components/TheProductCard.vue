<script setup lang="ts">
import TheButton from './TheButton.vue';
import { computed } from 'vue';

interface ProductCardDetails {
    id: number
    title: string
    reviewsNumber: number
    scoreNumber: number
    preOrderDetails: ('fastDelivery' | 'bestSeller' | 'bestPrice')[]
    price: number
    offPrice?: number
    image: string
}

const props = defineProps<ProductCardDetails>()

const stars = computed(() => {
    const score = Math.min(Math.max(props.scoreNumber, 0), 5);
    return Array.from({ length: 5 }, (_, index) => index < score);
});

const getRandomNumber = (): number => {
    return Math.floor(Math.random() * 101);
}

const orderDetailsConfig = {
    fastDelivery: {
        text: 'Entrega rápida',
        class: 'text-green-700'
    },
    bestSeller: {
        text: 'Líder de vendas',
        class: 'text-gray-500'
    },
    bestPrice: {
        text: 'Melhor preço',
        class: 'text-gray-500'
    }
};
</script>

<template>
    <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div class="h-56 w-full">
            <RouterLink :to="{ name: 'productDetails', params: { id: id } }">
                <img class="mx-auto h-full dark:hidden" :src="image"
                    alt="" />
            </RouterLink>
        </div>
        <div class="pt-6">
            <div class="mb-4 flex items-center justify-between gap-4">
                <span
                    class="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                    {{ getRandomNumber() }}% off
                </span>
            </div>

            <RouterLink :to="{ name: 'productDetails', params: { id: id } }" class="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{{ title }}</RouterLink>

            <div class="mt-2 flex items-center gap-2">
                <div class="flex items-center">
                    <template v-for="(isFilled, index) in stars" :key="index">
                        <svg class="h-4 w-4" :class="isFilled ? 'text-yellow-400' : 'text-gray-300'" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>
                    </template>
                </div>

                <p class="text-sm font-medium text-gray-900 dark:text-white">{{ scoreNumber }}</p>
                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">({{ reviewsNumber }})</p>
            </div>

            <ul class="mt-2 flex items-center gap-4">
                <li v-for="detail in preOrderDetails" :key="detail" class="flex items-center gap-2">
                    <!-- Fast Delivery Icon -->
                    <svg v-if="detail === 'fastDelivery'" class="h-4 w-4 text-green-700 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                    </svg>

                    <!-- Best Seller Icon -->
                    <svg v-if="detail === 'bestSeller'" class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                    </svg>

                    <!-- Best Price Icon -->
                    <svg v-if="detail === 'bestPrice'" class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                            d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>

                    <p :class="['text-sm font-medium dark:text-gray-400', orderDetailsConfig[detail].class]">
                        {{ orderDetailsConfig[detail].text }}
                    </p>
                </li>
            </ul>

            <div class="mt-4 flex items-center justify-between gap-4">
                <p class="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">R$ {{ price }}</p>
                <TheButton label="Comprar" icon="pi pi-cart-plus" class="inline-flex items-center" />
            </div>
        </div>
    </div>
</template>