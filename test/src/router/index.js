import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import subpage from '@/components/subpage'
import subpage2 from '@/components/subpage2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/subpage',
      name: 'subpage',
      component: subpage
    },
    {
      path: '/subpage2',
      name: 'subpage2',
      component: subpage2
    }
  ]
})
