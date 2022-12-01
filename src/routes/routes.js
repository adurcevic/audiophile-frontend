import HomePage from '../pages/HomePage.vue';

export const routes = [
  {
    path: '/',
    redirect: { name: 'home' },
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/headphones',
    name: 'headphones',
    component: () => import('../pages/ProductsPage.vue'),
  },
  {
    path: '/headphones/:productName',
    component: () => import('../pages/ProductPage.vue'),
  },
  {
    path: '/speakers',
    name: 'speakers',
    component: () => import('../pages/ProductsPage.vue'),
  },
  {
    path: '/speakers/:productName',
    component: () => import('../pages/ProductPage.vue'),
  },
  {
    path: '/earphones',
    name: 'earphones',
    component: () => import('../pages/ProductsPage.vue'),
  },
  {
    path: '/earphones/:productName',
    component: () => import('../pages/ProductPage.vue'),
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../pages/CheckoutPage.vue'),
  },
];
