import type { RouteRecordRaw } from "vue-router";
import BasicLayout from "@/layouts/BasicLayout/index.vue";

export const frameIn: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    redirect: "/home",
    component: BasicLayout,
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "Home",
        },
      },
    ],
  },
];

const errorPage = [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/sys/error/404.vue"),
  },
];

export default [...frameIn, ...errorPage];
