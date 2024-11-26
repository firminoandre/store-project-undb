import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '@/views/ProductsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import { useCartStore } from '@/stores/useCartStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/',
      name: 'products',
      component: ProductsView,
    },
    {
      path: '/product/:id',
      name: 'productDetails',
      component: () => import('../views/ProductDetailsView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundView,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const cartStore = useCartStore();

  const protectedRoutes = ['products', 'productDetails'];

  if (protectedRoutes.includes(to.name as string) && !cartStore.userLogged) {
    next('/login');
  } else {
    next(); 
  }
});

export default router
