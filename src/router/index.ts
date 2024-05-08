import { createRouter, createWebHistory } from 'vue-router'
import HomeView2 from '../views/HomeView2.vue'
import ProVa from '../views/ProVa.vue'
import Page1View from '@/views/Page1View.vue'
import NBA from '@/views/NBA.vue'
import CodeWars from '@/views/CodeWars.vue'
import CodeWars2 from '@/views/CodeWars2.vue'
import StudentsList from '@/views/StudentsList.vue'
import CodewarsUserView from '@/views/CodewarsUserView.vue'
import RedirectView from '@/views/RedirectView.vue'
import OpenWeatherView from '@/views/OpenWeatherView.vue'
import LoadingTest from '@/components/LoadingTest.vue'
import UserChallengesView from '@/views/UserChallengesView.vue'
import StudentsCardsView from '@/views/StudentsCardsView.vue'

import('../views/ProVa.vue')

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView2
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
      path: '/prova',
      name: 'prova',
      component: ProVa

    },
    {
      path: '/page1',
      name: 'Page 1',
      component: Page1View
    }
    ,
    {
      path: '/nba',
      name: 'NBA',
      component: NBA
    }
    ,
    {
      path: '/codewars',
      name: 'Codewars',
      component: CodeWars
    }
    ,
    {
      path: '/codewars2',
      name: 'Codewars 2',
      component: CodeWars2
    }
    ,
    {
      path: '/students',
      name: 'Students',
      component: StudentsList
    }
    ,
    {
      path: '/studentsCards',
      name: 'StudentCards',
      component: StudentsCardsView
    }
    ,
    {
      path: "/codewars/users/:id",
      name: "detail",
      component: CodewarsUserView
    }
    ,
    {
      path: "/codewars/users/:id/challenges",
      name: "challenges",
      component: UserChallengesView
    }
    ,
    {
      path: "/redirect",
      name: "redirect",
      component: RedirectView
    }
    ,
    {
      path: "/weather",
      name: "weather",
      component: OpenWeatherView
    }
    ,
    {
      path: "/loading",
      name: "loading",
      component: LoadingTest
    }
  ]
})

export default router
