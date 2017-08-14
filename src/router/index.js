import Vue from 'vue'
import Router from 'vue-router'
import SortArrayByProperty from '@/components/SortArrayByProperty'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SortArrayByProperty',
      component: SortArrayByProperty
    }
  ]
})
