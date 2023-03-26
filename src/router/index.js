import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CurriculumView from '../views/CurriculumView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import NotFound from '../views/NotFound.vue'
import GithubView from '../views/GithubView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/',
      name: 'cv',
      component: CurriculumView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    },
    {
      path: '/github',
      name: 'github',
      component: GithubView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: NotFound
    },
  ],
  linkActiveClass:'active'
})

export default router
