import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "",
    redirect: "home",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "./../containers/dashboard/Dashboard.vue"
      ),
    children: [
      {
        path: "/home",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "about" */ "./../views/Home.vue"),
      },
      {
        path: "posts",
        name: "",
        component: {
          render(c) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "",
            name: "post",
            component: () =>
              import(/* webpackChunkName: "company" */ "./../views/Posts.vue"),
          },
          {
            path: ":id(\\d+)?",
            name: "post-view",
            component: () =>
              import(
                /* webpackChunkName: "company" */ "./../views/PostDetail.vue"
              ),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "./../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
