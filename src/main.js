import Vue from 'vue'
import App from './App.vue'
import toast from '../lib/v-cyuyu-msg.umd'

Vue.config.productionTip = false
Vue.use(toast)

new Vue({
  render: h => h(App),
}).$mount('#app')
