import Vue from "vue";
import VueRouter from "vue-router";

import DefaultLayout from "@/components/HelloWorld.vue";
import FormSubmit from "@/components/FormSubmit.vue";
import ListUser from "@/components/ListUser.vue";
import HomeComponent from "@/views/HomeComponent.vue";

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
      name: "FormSubmit",
      component: FormSubmit,
    },

    {
      path: "/home",
      name: "DefaultLayout",
      component: DefaultLayout,
    },
    { path: "/users/:id", component: HomeComponent, name: "users" },
    { path: "/users", component: ListUser, name: "users" },
  ],
});

export default router;
