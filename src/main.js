// import '@babel/polyfill'
// import 'core-js/stable'
// import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/fonts/iconfont.css'
import '@/assets/css/base.css'
import '@/assets/css/index.less'

new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
