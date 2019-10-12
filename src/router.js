import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/',
      redirect: '/home',
      name: 'index',
      component: () => import('./views/Index.vue'),
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('./views/Home.vue')
        },
        {
          path: 'products',
          name: 'Products',
          component: () => import('./views/Products.vue')
        },
        {
          path: 'products/:category/:series',
          name: 'FilterProducts',
          component: () => import('./views/Products.vue')
        },
        {
          path: 'cart',
          name: 'Cart',
          component: () => import('./views/Cart.vue')
        },
        {
          path: 'customerorder',
          name: 'CustomerOrder',
          component: () => import('./views/CustomerOrder.vue')
        },
        {
          path: 'customercheckout/:id',
          name: 'CustomerCheckout',
          component: () => import('./views/CustomerCheckout.vue')
        },
        {
          path: 'login',
          name: 'Login',
          component: () => import('./views/Login.vue')
        },
        {
          path: 'product/:id',
          name: 'Product',
          component: () => import('./views/ProductPage.vue')
        },
        {
          path: 'promotion',
          name: 'Promotion',
          component: () => import('./views/Promotion.vue')
        },
        {
          path: 'career',
          name: 'Career',
          component: () => import('./views/Career.vue')
        },
        {
          path: 'customerservice',
          name: 'CustomerService',
          component: () => import('./views/CustomerService.vue')
        },
        {
          path: 'contact',
          name: 'Contact',
          component: () => import('./views/Contact.vue')
        }
      ]
    },
    {
      name: '管理頁面',
      path: '/admin',
      component: () => import('./views/Dashboard.vue'),
      children: [
        {
          name: '產品頁面',
          path: 'products',
          component: () => import('./views/DashboardProducts.vue'),
          meta: { requiresAuth: true }
        },
        {
          name: '優惠券頁面',
          path: 'coupons',
          component: () => import('./views/Coupons.vue'),
          meta: { requiresAuth: true }
        },
        {
          name: '訂單頁面',
          path: 'dashboardorders',
          component: () => import('./views/DashboardOrders.vue'),
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})
