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
import opening from './components/opening'

const routes = [
    {
        path:'/GameBoard', component : GameBoard
    },
    {
        path:'/Login', component : Login
    },
    {
        path:'/opening', component : opening
    },
]

const router = new VueRouter({
    routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
