import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../views/Home/Home.vue"),
  },
  {
    path: "/main",
    component: () => import("../views/Main/Main.vue"),
  },
  {
    path: "/login",
    component: () => import("../views/Login/Login.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
