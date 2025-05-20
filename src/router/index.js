
import HomePage from '@/views/HomePage.vue'
import NsInter from '@/views/NsInter.vue'
import NsKnowledge from '@/views/NsKnowledge.vue'
import PageAi from '@/views/PageAi.vue'
import TurnCard from '@/views/turnCard.vue'
<<<<<<< HEAD
import TextRecognition from '@/views/TextRecognition.vue'
=======
>>>>>>> a7ed6c020719dbd612ce112f3648783d9fe1cc7a
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {path:'/',component:HomePage},
   {path:'/interact',component:NsInter},
   {path:'/knowledge',component:NsKnowledge},
   {path:'/game',component:TurnCard},
<<<<<<< HEAD
   {path: '/gpt', component: PageAi },
   {path: '/recognition', component: TextRecognition }, 
=======
   {path: '/gpt', component: PageAi }, 
>>>>>>> a7ed6c020719dbd612ce112f3648783d9fe1cc7a
  ]
})

export default router
