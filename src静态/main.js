import Vue from 'vue'
import App from './App.vue'

import router from '../src/router/index.js'
import store from './store/'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(MintUI)

import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
