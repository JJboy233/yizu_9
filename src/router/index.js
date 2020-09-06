import Vue from "vue";
import VueRouter from "vue-router";

const Login = () => import("@/components/Login.vue");
const Home = () => import("@/views/Home.vue");
const User = () => import("@/components/user/User.vue");
const HomePage = () => import("@/components/homepage/HomePage.vue");
const Rights = () => import("@/components/power/Rights.vue");
const Roles = () => import("@/components/power/Roles.vue");
const Report = () => import("@/components/report/Report.vue");
const Order = () => import("@/components/order/Order.vue");

const Cate = () => import( '../components/goods/Cate.vue')
const Params = () => import( '../components/goods/Params.vue')

const GoodsList = () => import('../components/goods/List.vue')
const Add = () => import('../components/goods/Add.vue')

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  {
    path: "/home",
    component: Home,
    redirect: "/homepage",
    children: [
      { path: "/homepage", component: HomePage },
      { path: "/users", component: User },
      { path: "/rights", component: Rights },
      { path: "/roles", component: Roles },
      { path: "/reports", component: Report },
      { path: "/orders", component: Order },

      { path: '/params', component: Params },
      { path: '/goods', component: GoodsList },
      { path: '/categories', component: Cate },
      { path: '/goods/add', component: Add },

    ],
  },
];

const router = new VueRouter({
  routes,
});
//在路由之间加一个判断，看是否有token
router.beforeEach((to, from, next) => {
  if (to.path === "/login") return next();
  const tokenStr = window.sessionStorage.getItem("token");
  if (!tokenStr) return next("/login");
  next();
});
export default router;
