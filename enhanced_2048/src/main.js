import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router';


Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import GameBoard from './components/GameBoard'
import Login from './components/Login'
import Home from './components/Home'

const routes = [
    {
        path:'/GameBoard', component : GameBoard
    },
    {
        path:'/Login', component : Login
    },
    {
        path:'/Home', component : Home
    },
]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
