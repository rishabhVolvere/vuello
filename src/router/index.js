import Vue from 'vue'
import VueRouter from 'vue-router'
import Board from '../views/Board.vue'
import Task from '@/views/Task.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Board,
    children: [
      {
        path: 'task/:id',
        name: 'task',
        component: Task,
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
