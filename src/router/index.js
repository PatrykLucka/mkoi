import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Caesar from '@/components/Caesar'
import Vigenere from '@/components/Vigenere'
import AtBash from '@/components/AtBash'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/caesar',
      name: 'Caesar',
      component: Caesar
    },
    {
      path: '/vigenere',
      name: 'Vigenere',
      component: Vigenere
    },
    {
      path: '/atbash',
      name: 'AtBash',
      component: AtBash
    }
  ],
  mode: 'history'
})
