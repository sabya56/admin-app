import { createRouter, createWebHistory } from "vue-router";
import Dashboard from './components/Dashboard.vue'
import NotFound from './components/NotFound.vue'
import PageOne from './components/PageOne.vue'

export const routes = [
  {
    path: '/',
    redirect: { path: '/dashboard' }
  },
  {
    path: '/page1',
    component: PageOne
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  },
  {
    path: '/dashboard',
    component: Dashboard
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;