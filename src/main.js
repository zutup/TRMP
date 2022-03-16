import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import splitPane from 'vue-splitpane'
import './assets/icons/iconfont.css';
import uploader from 'vue-simple-uploader'
import './plugins/element.js'
//导入字体图标
import './assets/fonts/iconfont.css'
Vue.component('split-pane', splitPane);

//导入全局样式表  
import './assets/css/globalCss.css'
import "wl-explorer/lib/wl-explorer.css"
Vue.use(uploader)
//将全局的echarts对象挂载到Vue的原型对象上
Vue.prototype.$echarts = window.echarts
import axios from 'axios'
import store from './store'
Vue.config.silent = true
Vue.prototype.$http = axios
//配置请求的根路径
axios.defaults.baseURL = 'http://localhost:3000/'
// axios.defaults.baseURL = 'http://mb1314.ngrok2.xiaomiqiu.cn/'
// axios.interceptors.request.use(config => {
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   return config;
// })
// 对服务端进行websocket连接
// import SocketService from '@/utils/socket_service'
// SocketService.Instance.connect()
// Vue.prototype.$socket = SocketService.Instance

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
