<script setup lang="ts">
import { useCartStore } from '@/stores/useCartStore';
import TheButton from './TheButton.vue';
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const router = useRouter()

const handleNavigationToHome = () => {
    router.push({name: 'products'})
    cartStore.toggleCart()
}
</script>
<template>
    <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

  <div class="fixed inset-0 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden ">
      <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 ">
        <div class="pointer-events-auto w-screen max-w-md">
          <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div class="flex items-start justify-between">
                <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Seu carrinho</h2>
                <div class="ml-3 flex h-7 items-center">
                    <TheButton @click="cartStore.toggleCart" icon="pi pi-times"/>
                </div>
              </div>

              <div class="mt-8">
                <div class="flow-root">
                  <ul role="list" class="-my-6 divide-y divide-gray-200">
                    <li v-for="item in cartStore.items" :key="item.id" class="flex py-6">
                        <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img 
                            :src="item.image" 
                            :alt="item.description" 
                            class="size-full object-cover"
                        >
                        </div>

                        <div class="ml-4 flex flex-1 flex-col">
                        <div>
                            <div class="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                                <a href="#">{{ item.title }}</a>
                            </h3>
                            <p class="ml-4">R${{ item.price.toFixed(2) }}</p>
                            </div>
                            <p class="mt-1 text-sm text-gray-500">{{ item.category }}</p>
                        </div>
                        <div class="flex flex-1 items-end justify-between text-sm">
                            <p class="text-gray-500">Quantidade {{ item.quantity }}</p>

                            <div class="flex">
                            <button 
                                type="button" 
                                class="font-medium text-indigo-600 hover:text-indigo-500"
                                @click="cartStore.removeItem(item.id)"
                            >
                                Remover
                            </button>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li v-if="cartStore.cartIsEmpty">
                        Seu carrinho está vazio
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div v-if="!cartStore.cartIsEmpty" class="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div class="flex justify-between text-base font-medium text-gray-900">
                <p>Total</p>
                <p>R$ {{ cartStore.totalAmount }}</p>
              </div>
              <p class="mt-0.5 text-sm text-gray-500">A taxa de entrega nao está inclusa.</p>
              <div class="mt-6">
                <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Ir para o pagamento</a>
              </div>
              <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  ou
                  <a @click="handleNavigationToHome()"  type="button" class="cursor-pointer font-medium text-indigo-600 hover:text-indigo-500">
                    Continuar comprando
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>