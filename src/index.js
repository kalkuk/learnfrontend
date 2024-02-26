import './style.scss';

import { createApp } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import CanvasExample from './pages/CanvasExample.vue';

const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/todo', component: ToDo, name: 'ToDo' },
    { path: '/modals', component: Modals, name: 'Modals' },
    { path: '/canvas', component: CanvasExample, name: 'Canvas' },
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
