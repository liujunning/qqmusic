import Vue from 'vue'
import Router from 'vue-router'
import Recommand from '@/components/recommand/index'
import Singer from '@/components/singer/index'
import Rank from '@/components/rank/index'
import Search from '@/components/search/index'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',
      redirect:'/recommand'
    },
    {
      path:'/recommand',
      component:Recommand
    },
    {
      path:'/singer',
      component:Singer
    },
    {
      path:'/rank',
      component:Rank
    },
    {
      path:'/search',
      component:Search
    },
  ]
})
