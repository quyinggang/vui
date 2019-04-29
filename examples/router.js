import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('./pages/home'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('./pages/index')
      },
      {
        path: '/component',
        component: () => import('./pages/component')
      }
    ]
  }
];

export default new VueRouter({
  routes
});
