import './style.scss';

import { createApp } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import ToDo from './pages/ToDo.vue';

const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/todo', component: ToDo, name: 'ToDo' },
  ];

const router = createRouter({
// 4. Provide the history implementation to use. We
// are using the hash history for simplicity here.
history: createWebHistory(),
routes, // short for `routes: routes`
});

import App from './App.vue';

const app = createApp(App);

app.use(router);
app.mount('#app');
