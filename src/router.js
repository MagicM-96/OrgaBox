import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Box from './views/Box.vue'
import Search from './views/Search.vue'
import Import from './views/Import.vue'
import Export from './views/Export.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/box/:id',
      name: 'box',
      component: Box
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/import',
      name: 'import',
      component: Import
    },
    {
      path: '/export',
      name: 'export',
      component: Export
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
