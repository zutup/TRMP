import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Echarts from 'vue-echarts'
import splitPane from 'vue-splitpane'
import 'echarts/lib/chart/line'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
Vue.component('chart',Echarts)
Vue.component('split-pane', splitPane);
import './plugins/element.js'
//导入字体图标
import './assets/fonts/iconfont.css'
//导入全局样式表  
import './assets/css/globalCss.css'
//将全局的echarts对象挂载到Vue的原型对象上
// Vue.prototype.$echarts = window.echarts
import axios from 'axios'

Vue.prototype.$http = axios
//配置请求的根路径
axios.defaults.baseURL = 'http://49.234.13.136:8081'
// axios.defaults.baseURL = 'http://mb1314.ngrok2.xiaomiqiu.cn/'
// axios.interceptors.request.use(config => {
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   return config;
// })


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
