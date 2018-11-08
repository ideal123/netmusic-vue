import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/fm",
      name: "fm",
      component: () => import("./views/FM")
    },
    {
      path: "/playlist/:id",
      name: "playlist",
      component: () => import("./views/PlistDetail")
    }
  ]
});
