import Vue from 'vue'
import App from './App.vue'

import router from '../src/router/index.js'
import store from './store/'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import './mock/mockServer' // 加载mockServer即可
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
import { Button } from 'mint-ui';
Vue.component(Button.name, Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
