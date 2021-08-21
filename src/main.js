/* eslint-disable */
import Vue from "vue";
import Vuex from 'vuex';
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import filter from "./util/filter";
import config from "./util/config";
import Http from "./util/http";
import Util from "./util/util";
import Api from "./api/api"
import Common from "./util/common";
import Model from "./util/model";
import 'es6-promise/auto'
import ElementUI from 'element-ui';
import './assets/css/style/theme/index.css';
import '@/assets/css/bootstrapTable.css'

Vue.use(ElementUI);

Vue.config.productionTip = false;

// 公用域名
Vue.prototype.commonUrl = config.checkCurrentEnv();


/**
 * 注入 vuex
 */
Vue.use(Vuex)
/**
 *  注入api
 */
Vue.prototype.$api = Api
/**
 *  注入Util
 */
Vue.prototype.$util = Util
/**
 *  注入Common
 */
Vue.prototype.$common = Common
/**
 *  注入Model
 */
Vue.prototype.$model = Model
/**
 *  注入Htpp
 */
Vue.prototype.$http = Http
/**
 * 引入公用scss
 */
import '@/assets/css/element_ui.scss'
import '@/assets/css/base.scss'
import '@/assets/css/common.scss'

// 路由返回函数
Vue.prototype.$setgoindex = () => {
  if (window.history.length <= 1) {
    if (location.href.indexOf("?") === -1) {
      window.location.href = location.href + "?goIndex=true";
    } else if (location.href.indexOf("?") !== -1 && location.href.indexOf("goIndex") === -1) {
      window.location.href = location.href + "&goIndex=true";
    }
  }
};
router.beforeEach((to, from, next) => {
  //最后通过钩子继续页面的跳转
  if (to.path != '/login' && to.path != '/findPwd' && to.path != '/loginNew') {
    //  当跳转不是登录页面  检测用户是否已登录 如果未登录  跳转登录
    let uid = sessionStorage.getItem('adminuid');
    if (uid) {
      next();
    } else {
      next({
        path: '/login'
      });
    }
  } else {
    next();
  }
});

router.afterEach(() => {
  let scrollContent = document.querySelector('.el-main');
  if (scrollContent) {
    scrollContent.scrollTop = 0;
    scrollContent.scrollLeft = 0;
  }
})

new Vue({
  router,
  store,
  filter,
  render: h => h(App)
}).$mount("#app");