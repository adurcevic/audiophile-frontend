import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import { clickOutside } from '@/utilis/functions';
import '@/main.module.css';
import App from '@/App.vue';
import BaseLink from '@/components/ui/BaseLink.vue';

const routes = [
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
    component: () => import('@/pages/ProductsPage.vue'),
  },
  {
    path: '/headphones/:productName',
    component: () => import('@/pages/ProductPage.vue'),
  },
  {
    path: '/speakers',
    name: 'speakers',
    component: () => import('@/pages/ProductsPage.vue'),
  },
  {
    path: '/speakers/:productName',
    component: () => import('@/pages/ProductPage.vue'),
  },
  {
    path: '/earphones',
    name: 'earphones',
    component: () => import('@/pages/ProductsPage.vue'),
  },
  {
    path: '/earphones/:productName',
    component: () => import('@/pages/ProductPage.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { left: 0, top: 0 };
  },
  routes,
});

const pinia = createPinia();
const app = createApp(App);
app.config.globalProperties.window = window;

app.use(pinia);
app.use(router);
app.component('BaseLink', BaseLink);
app.directive('click-outside', clickOutside);
app.mount('#app');
