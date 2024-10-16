
import HomePage from '@/views/HomePage.vue'
import NsInter from '@/views/NsInter.vue'
import NsKnowledge from '@/views/NsKnowledge.vue'
import PageAi from '@/views/PageAi.vue'
import TurnCard from '@/views/turnCard.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {path:'/',component:HomePage},
   {path:'/interact',component:NsInter},
   {path:'/knowledge',component:NsKnowledge},
   {path:'/game',component:TurnCard},
   {path: '/gpt', component: PageAi },
  ]
})

export default router
