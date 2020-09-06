import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";

import axios from "axios";
// // 导入字体图标
// import './assets/fonts/iconfont.css'
// 导入表格树
import TreeTable from "vue-table-with-tree-grid";
// 导入富文本编辑器
import VueQuillEditor from "vue-quill-editor";
Vue.component('tree-table', TreeTable)
Vue.use(VueQuillEditor)

// 导入富文本编辑器样式
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
// 配置请求的跟路径
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/";

axios.interceptors.request.use((config) => {
  //展示进度条
  NProgress.start();
  config.headers.Authorization = window.sessionStorage.getItem("token");
  // 在最后必须 return config
  return config;
});
axios.interceptors.response.use((config) => {
  //隐藏进度条
  NProgress.done();
  return config;
});

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
