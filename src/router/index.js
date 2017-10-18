import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import ArtistPage from '@/components/ArtistPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HomePage
    },{
      path: '/artists/:id',
      component: ArtistPage
    }
  ]
})
