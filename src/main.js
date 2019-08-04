// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Customers from './components/pages/Customers'
import About from './components/pages/About'
import Add from './components/pages/Add'
import Details from './components/pages/Details'
import Edit from './components/pages/Edit'

import $ from 'jquery'
import './assets/js/bootstrap.min.js'
import './assets/css/bootstrap.min.css'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

//设置路由
const routes = [
  { path: '/',component:Customers},
  { path: '/about', component: About},
  { path: '/add', component: Add},
  { path: '/customer/:id', component: Details},
  { path: '/Edit/:id', component: Edit}
]

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode:'history'
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
