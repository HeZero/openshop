import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/Layout'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/shop',
    children: [
      {
        path: '/shop',
        name: 'shop',
        component: () => import('../views/shop')
      },
      {
        path: '/portal',
        name: 'portal',
        component: () => import('../views/portal')
      },
      {
        path: '/member',
        name: 'member',
        component: () => import('../views/member')
      },
      {
        path: '/address',
        name: 'address',
        component: () => import('../views/address')
      },
      {
        path: '/back',
        name: 'back',
        component: () => import('../views/back')
      },
      {
        path: '/browse',
        name: 'browse',
        component: () => import('../views/browse')
      },
      {
        path: '/collection',
        name: 'collection',
        component: () => import('../views/collection')
      },
      {
        path: '/help',
        name: 'help',
        component: () => import('../views/help')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/order')
      },
      {
        path: '/vip',
        name: 'vip',
        component: () => import('../views/vip')
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart')
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import('../views/goods')
  },
  {
    path: '/like',
    name: 'like',
    component: () => import('../views/like')
  },
  {
    path: '*',
    component: () => import('../components/404')
  }
]
const myRoute = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

myRoute.beforeEach((to, from, next) => {
  console.log(to)
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.meta.auth) {

  }
  next()
})

export default myRoute
