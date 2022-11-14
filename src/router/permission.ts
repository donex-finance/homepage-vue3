import NProgress from "nprogress";
import router from "@/router";
import { setTitle } from "@/libs/utils";

// 进度条
import "nprogress/nprogress.css";

/**
 * 路由拦截
 * 权限验证
 */

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  // 身份验证？
});

router.afterEach((to) => {
  // 进度条
  NProgress.done();
  setTitle(to.meta.title as string);
});
