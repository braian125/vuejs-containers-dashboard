import Vue from "vue";
import Router from "vue-router";
//import store from './store/store'

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "",
      redirect: "home",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "@/containers/dashboard/Dashboard"
        ),
      children: [
        {
          path: "/home",
          name: "home",
          component: () =>
            import(/* webpackChunkName: "about" */ "./../views/Home"),
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
                import(/* webpackChunkName: "company" */ "./../views/Posts"),
            },
            {
              path: ":id(\\d+)?",
              name: "post-view",
              component: () =>
                import(
                  /* webpackChunkName: "company" */ "./../views/PostDetails"
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
        import(/* webpackChunkName: "login" */ "./../views/Login"),
    },
  ],
});

router.mode = "html5";

export default router;
