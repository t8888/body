/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/auth/Login.vue";
import findPwd from "@/views/auth/findPw.vue";
import rePassWord from "@/views/auth/rePassWord.vue";
import highSchoolRoute from "./highSchoolRoute";
Vue.use(Router);
let baseRoutes = []
let childrenRouters = baseRoutes.concat(highSchoolRoute);
export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [{
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: '/loginNew',
    name: 'loginNew',
    component: resolve => require(['@/views/incodePage/login/login'], resolve)
  },

  {
    path: "/findPwd",
    name: "findPwd",
    component: findPwd
  },
  {
    path: "/rePassWord",
    name: "rePassWord",
    component: rePassWord
  },

  {
    path: "/",
    name: "main",
    component: resolve => require(['@/views/Home'], resolve),
    children: childrenRouters
  }
  ]
});