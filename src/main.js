import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHashHistory } from 'vue-router';
import { clickOutside } from '@/utilis/functions';
import '@/main.css';
import App from '@/App.vue';
import BaseLink from '@/components/ui/BaseLink.vue';
import { routes } from '@/routes/routes';

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
