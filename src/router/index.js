import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
import AddRec from '../views/AddRec.vue'
import About from '../views/About.vue'
import WorksCited from '../views/WorksCited.vue'
import Methodology from '../views/Methodology.vue'
import Argument from '../views/argument.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  },
  {
    path: '/argument',
    name: 'argument',
    component: Argument
 },
  {
    path: '/additionalResources',
    name: 'additionalResources',
    component: AddRec
 },
 {
  path: '/about',
  name: 'About',
  component: About
},
{
  path: '/worksCited',
  name: 'worksCited',
  component: WorksCited
},
{
  path: '/methods',
  name: 'methods',
  component: Methodology
},
{
    path: '*',
    name: 'catchAll',
    component: Home
 }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
