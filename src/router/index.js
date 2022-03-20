import Vue from "vue";
import Router from "vue-router";
import Login from "../components/login.vue";
import Home from "../components/Home.vue";
import message from "../components/system/message.vue";
import System from "../components/system.vue";
import register from "../components/register.vue";
import console from "../components/console.vue";
import mine from "../components/system/file/mine.vue";
import purviewManage from "../components/management/purviewManage.vue"
import purviewManageList from "../components/management/purviewManageList.vue"
import userManage from "../components/management/userManage.vue"
import menuManage from "../components/management/menuManage.vue"
import ownFile from "../components/system/file/ownFile.vue"
import recycleBin from "../components/system/file/recycleBin.vue"
import cooperate from "../components/system/file/cooperate.vue"
import stuchart from "../components/system/datacharts/stuchart"
import storageChart from "../components/system/datacharts/storageChart"
import resourceChart from "../components/system/datacharts/resourceChart"
import recent from "../components/system/file/recent.vue"
import usual from "../components/system/file/usual.vue"
import loginReg from "../components/loginReg.vue"
import managePage from "../components/management/managePage.vue"
import fileCategory from "../components/system/file/fileCategory.vue"


// Vue.use(breadCrumb)
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/system",
      component: System,
      redirect: '/system/file/mine',
      children: [
        { path: '/system/message', component: message },
        { path: '/system/file/mine', component: mine },
        { path: '/system/file/ownFile', component: ownFile },
        { path: '/system/file/recycleBin', component: recycleBin },
        { path: '/system/file/cooperate', component: cooperate },
        { path: '/system/file/recent', component: recent },
        { path: '/system/file/usual', component: usual },
        { path: '/system/file/fileCategory', component: fileCategory },
        { path: '/system/datacharts/stuchart', component: stuchart },
        { path: '/system/datacharts/storageChart', component: storageChart },
        { path: '/system/datacharts/resourceChart', component: resourceChart },
      ]
    },
    {
      path: "/home",
      component: Home,
    },

    {
      path: "/loginReg",
      component: loginReg
    },

    {
      path: "/register",
      component: register,
    },
    {
      path: '/console',
      component: console,
      redirect: '/management/managePage',
      children: [
        {
          path: "/management/managePage",
          component: managePage
        },
        {
          path: "/management/userManage",
          component: userManage
        },
        {
          path: "/management/menuManage",
          component: menuManage
        },
        {
          path: "/management/purviewManage",
          component: purviewManage
        },
        {
          path: "/management/purviewManageList",
          component: purviewManageList
        },
      ]
    },
  ]
});



//添加路由守卫
// router.beforeEach((to, from, next) => {

//     if (to.path === '/login') return next()
//     //从sessionStorage中获取保存的token值
//     const tokenStr = window.sessionStorage.getItem('token')
//     if (!tokenStr) return next('/login')
//     next()
// })

export default router