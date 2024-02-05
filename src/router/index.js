import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'front',
      component: () => import('../views/front/FrontView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/front/HomeView.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/front/AboutView.vue')
        },
        {
          path: 'products',
          name: 'front_products',
          component: () => import('../views/front/ProductsView.vue')
        },
        {
          path: 'products/:id',
          name: 'front_product',
          component: () => import('../views/front/ProductView.vue')
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminView.vue'),
      children: [
        {
          path: '',
          name: 'admin_home',
          component: () => import('../views/admin/AdminHomeView.vue')
        },
        {
          path: 'products',
          name: 'admin_products',
          component: () => import('../views/admin/AdminProductsView.vue')
        }
      ]
    }
  ]
})

export default router
