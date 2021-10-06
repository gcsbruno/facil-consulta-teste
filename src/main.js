import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Vmask from 'v-mask'
import VueRouter from 'vue-router'
import router from './routes'

Vue.config.productionTip = false
Vue.use(Vmask)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
