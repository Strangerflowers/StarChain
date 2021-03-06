// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入字体图标（阿里巴巴小图标的引入）
import '../font/iconfont.css'

import router from './router/index.js';
import store from './store/index.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
