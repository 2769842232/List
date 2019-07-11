import Vue from 'vue'
import App from './App.vue'
// 导入样式文件
import './assets/bootstrap/css/bootstrap.css'
import './assets/css/index.css'
import axios from 'axios'

// 引入路由
import router from './router/index'
Vue.config.productionTip = false
Vue.prototype.axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
