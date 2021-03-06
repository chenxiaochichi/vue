import Vue from 'vue'
import App from './App.vue'

//路由
import VueRouter from "vue-router";
Vue.use(VueRouter);
import routes from "./router/router.config.js";
const router = new VueRouter(routes);


//交互axios
import axios from "axios";

//配置拦截器
axios.interceptors.request.use(function (config) {
  // 在发出正确请求之前做点事
  store.dispatch('showLoading');
  return config;// 返回现在配置给拦截器,一定要反绘制
}, function (error) {
  // 在发出错误请求之前做点事
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  // 在响应之后做点事
  store.dispatch('hideLoading');
  return response;  // 回来的数据对象
}, function (error) {
  return Promise.reject(error);
});

Vue.prototype.$http = axios;

//全局过滤
import filters from './filters'
//Object.keys(对象)  枚举对象的keys
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]));


//状态管理
import store from "./store/index.js";

//全局loading
import loading from "./loading/index.js";
Vue.use(loading);

//动画引入
import "animate.css";

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
