import Vue from "vue";
import Router from "vue-router";
import Login from "../components/login.vue";
import Home from "../components/Home.vue";
import Welcome from "../components/Welcome.vue";
import person from "../components/workbench/person.vue";
import history from "../components/workbench/history.vue";
import center from "../components/center.vue";
import analysis from "../components/workbench/analysis.vue";
import message from "../components/message.vue";
import repository from "../components/repository.vue";
import install from "../components/install.vue";
import cnvd from "../components/cnvd.vue";
import url from "../components/url.vue";
import system from "../components/system.vue";
import register from "../components/register.vue";
import console from "../components/console.vue";
import mine from "../components/mine.vue";
import accountManage from "../components/management/accountManage.vue"
import userManage from "../components/management/userManage.vue"
import groupsManage from "../components/management/groupsManage.vue"

Vue.use(Router);

const router = new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/welcome"
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/system",
      component: system,
      redirect: '/mine',
      children: [
        { path: '/message', component: message },
        { path: '/mine', component: mine },
        { path: '/cnvd', component: cnvd },
      ]
    },
    {
      path: "/home",
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/workbench/person', component: person },
        { path: '/workbench/history', component: history },
        { path: '/workbench/analysis', component: analysis },
        { path: '/repository', component: repository },
        { path: '/install', component: install },
        { path: '/cnvd', component: cnvd },
      ]
    },
    {
      path: "/center",
      component: center
    },
    {
      path: "/url",
      component: url
    },
    {
      path: "/management/accountManage",
      component: accountManage
    },
    {
      path: "/management/userManage",
      component: userManage
    },
    {
      path: "/management/groupsManage",
      component: groupsManage
    },
    {
      path: "/register",
      component: register
    },
    {
      path: '/console',
      component: console
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