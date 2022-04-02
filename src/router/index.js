import Vue from "vue";
import VueRouter from "vue-router";

import DefaultLayout from "@/components/HelloWorld.vue";

Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "DefaultLayout",
//     component: DefaultLayout,
//   },

//   {
//     path: "/home",
//     name: "home",
//     component: () => import("@/views/HomeComponent.vue"),
//   },
// ];

const router = new VueRouter({
  mode: "history",
  //   base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "DefaultLayout",
      component: DefaultLayout,
    },

    {
      path: "/home",
      name: "home",
      component: () => import("@/views/HomeComponent.vue"),
    },
  ],
});

export default router;
