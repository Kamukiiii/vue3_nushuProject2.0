
import HomePage from '@/views/HomePage.vue'
import NsInter from '@/views/NsInter.vue'
import NsKnowledge from '@/views/NsKnowledge.vue'
import PageTest from '@/views/PageTest.vue'
import TurnCard from '@/views/turnCard.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {path:'/',component:HomePage},
   {path:'/interact',component:NsInter},
   {path:'/knowledge',component:NsKnowledge},
   {path:'/game',component:TurnCard},
   {path: '/test', component: PageTest },
  ]
})

export default router
