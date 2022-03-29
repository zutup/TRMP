import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/icons/iconfont.css';
import uploader from 'vue-simple-uploader'
import './plugins/element.js'
import TreeTable from 'vue-table-with-tree-grid'
import VueQuillEditor from 'vue-quill-editor'
//富文本编辑器样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
//导入字体图标
import './assets/fonts/iconfont.css'
//导入全局样式表  
import './assets/css/globalCss.css'

import axios from 'axios'
import store from './store'
import './api/mock.js'
import wow from 'wowjs'
import "./assets/css/animate.min.css"  
Vue.prototype.$wow=wow

//时间过滤器
Vue.filter('dateFormat', function(originVal){
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m =(dt.getMonth() + 1+ '').padStart(2,'0')
  const d = (dt.getDate() + '').padStart(2,'0')
  
  const hh = (dt.getHours() + '').padStart(2,'0')
  const mm = (dt.getMinutes() +'').padStart(2,'0')
  const ss = (dt.getSeconds() +'').padStart(2,'0')

  return '${y}-${m}-${d} ${hh}-${mm}-${ss}'
}) 


Vue.use(VueQuillEditor)
Vue.use(uploader)
//将全局的echarts对象挂载到Vue的原型对象上
Vue.prototype.$echarts = window.echarts

Vue.config.silent = true
Vue.prototype.$http = axios
//配置请求的根路径
axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config;
})

// 第二个代理基础路径配置
// export const instance = axios.create({
//   baseURL:'http://127.0.0.1:8888/api/'
// });
// instance.defaults.timeout = 50000;
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 对服务端进行websocket连接
// import SocketService from '@/utils/socket_service'
// SocketService.Instance.connect()
// Vue.prototype.$socket = SocketService.Instance

Vue.component('tree-table', TreeTable)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
