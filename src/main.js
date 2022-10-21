import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import { clickOutside } from './utilis/functions';
import './main.css';
import App from './App.vue';
import BaseLink from './components/ui/BaseLink.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
  ],
});

const app = createApp(App);

app.use(router);
app.component('BaseLink', BaseLink);
app.directive('click-outside', clickOutside);
app.mount('#app');
