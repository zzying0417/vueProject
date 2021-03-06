// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import './assets/index.css'
import router from './router'
import MyHttpServer from '@/plugins/http.js'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(MyHttpServer);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
