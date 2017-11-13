/*
 * 入口文件
 路由配置
 初始化vue实例
*/

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';
import routerConfig from './router';
import '../statics/common.css';
import bgImg from '../statics/xx.jpg';

const router = new VueRouter(routerConfig);

// Vue注册路由处理
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
