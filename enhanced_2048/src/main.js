import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router';
import 'css-doodle';



Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import GameBoard from './components/GameBoard'
import Login from './components/Login'
import HallFame from './components/HallFame'
import ManageRecord from './components/ManageRecord'

const routes = [
    {
        path:'/', component : Login 
    },
    {
        path:'/GameBoard', component : GameBoard
    },
    {
        path:'/Login', redirect: '/'
    },
    {
        path:'/HallFame', component : HallFame
    },
    {
        path:'/ManageRecord', component : ManageRecord
    }
]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
