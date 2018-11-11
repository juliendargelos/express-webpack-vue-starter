import './index.sass'
import Vue from 'vue'
import Application from './Application.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Application)
}).$mount('.application')
