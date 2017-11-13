/*
 * 入口文件
 路由配置
 初始化vue实例
*/

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import routerConfig from './router';

const router = new VueRouter(routerConfig);

console.warn('warn');

// Vue注册路由处理
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
