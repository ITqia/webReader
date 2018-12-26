import Vue from 'vue'
import Router from 'vue-router'
import StoreVue from '@/components/StoreVue'
import StoreVue2 from '@/components/StoreVue2'
import Ebook from '@/EBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/ebook'
    },
    {
      path: '/ebook',
      component: Ebook
    },
    {
      path: '/storeVue',
      name: 'StoreVue',
      component: StoreVue
    },
    {
      path: '/storeVue2',
      name: 'StoreVue2',
      component: StoreVue2
    }
  ]
})
