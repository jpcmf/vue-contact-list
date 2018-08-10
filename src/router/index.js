import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import LoginComponent from '@/components/Login'
import SecureComponent from '@/components/Secure'
import NewContactComponent from '@/components/NewContact'
import ViewContactComponent from '@/components/ViewContact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      // path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld,

      path: '/',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },
    {
      path: '/secure',
      name: 'secure',
      component: SecureComponent
    },
    {
      path: '/add',
      name: 'new-contact',
      component: NewContactComponent
    },
    {
      path: '/:person/:success?',
      name: 'view-contact',
      component: ViewContactComponent
    }
  ]
})
