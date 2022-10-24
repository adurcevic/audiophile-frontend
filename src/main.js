import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import { clickOutside } from './utilis/functions';
import './main.css';
import App from './App.vue';
import BaseLink from './components/ui/BaseLink.vue';

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { left: 0, top: 0 };
  },
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/:productsName',
      component: ProductsPage,
    },
  ],
});

const app = createApp(App);

app.use(router);
app.component('BaseLink', BaseLink);
app.directive('click-outside', clickOutside);
app.mount('#app');
