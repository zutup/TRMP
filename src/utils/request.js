/**
 * ajax请求配置
 */
 import axios from 'axios'
 import { Message } from 'element-ui'
  
 // axios默认配置
 axios.defaults.timeout = 10000 // 超时时间
 // axios.defaults.baseURL 请求地址前缀
 // User地址
 // axios.defaults.baseURL = 'http://127.0.0.1:8001'
 // tools地址
 // axios.defaults.baseURL = 'http://127.0.0.1:8088'
 // 微服务地址
 // axios.defaults.baseURL = '/api'
 axios.defaults.baseURL = 'http://mb1314.ngrok2.xiaomiqiu.cn/cnvd/getInfo?pageNum=2&pageSize=3'
  
 // 整理数据
 axios.defaults.transformRequest = function(data) {
     data = JSON.stringify(data)
     return data
 }
  
 // 路由请求拦截
 axios.interceptors.request.use(
     config => {
       // 判断 token 是否存在
       // var token = localStorage.getItem('token');
       // if (token) {
         // 在发起请求前，给所有请求添加请求头
         config.headers['Content-Type'] = 'application/json;charset=UTF-8'
         // config.headers.common['token'] = JSON.parse(token).token;
       // }
       return config;
     },
     error => {
         return Promise.reject(error.response)
     })
  
 // 路由响应拦截
 axios.interceptors.response.use(
     response => {
         if (response.data.success === false) {
             return Message.error(response.data.errDesc)
         } else {
             return response.data
         }
     },
     error => {
       if (error && error.response) {
           // 1.公共错误处理
           // 2.根据响应码具体处理
           switch (error.response.status) {
             case 400:
               error.message = '错误请求，错误代码：400'
               break;
             case 401:
               error.message = '未授权，请重新登录，错误代码：401'
               break;
             case 403:
               error.message = '拒绝访问，错误代码：403'
               break;
             case 404:
               error.message = '请求错误,未找到该资源，错误代码：404'
               // window.location.href = "/NotFound"
               break;
             case 405:
               error.message = '请求方法未允许，错误代码：405'
               break;
             case 408:
               error.message = '请求超时，错误代码：408'
               break;
             case 500:
               error.message = '服务器端出错，错误代码：500'
               break;
             case 501:
               error.message = '网络未实现，错误代码：501'
               break;
             case 502:
               error.message = '网络错误，错误代码：502'
               break;
             case 503:
               error.message = '服务不可用，错误代码：503'
               break;
             case 504:
               error.message = '网络超时，错误代码：504'
               break;
             case 505:
               error.message = 'http版本不支持该请求，错误代码：505'
               break;
             default:
               error.message = `连接错误${error.response.status}`
           }
         } else {
           // 超时处理
           if (JSON.stringify(error).includes('timeout')) {
             Message.error('服务器响应超时，请刷新当前页')
           }
           error.message('连接服务器失败')
         }
  
         Message.error(error.message)
       return Promise.reject(error.response) // 返回接口返回的错误信息
     })
 export default axios