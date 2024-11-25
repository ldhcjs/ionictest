import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "@/views/TabsPage.vue";
import IntroPage from "@/views/IntroPage.vue";
import Tab4PageDetail from "@/views/Tab4PageDetail.vue";
import NaverLoginCallback from "@/components/NaverLoginCallback.vue";
import Notifications from "@/components/Notifications.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/introPage/",
  },
  {
    path: "/introPage/",
    name: "IntroPage",
    component: IntroPage,
  },
  {
    path: "/naverLoginCallback/",
    name: "NaverLoginCallback",
    component: NaverLoginCallback,
  },
  {
    path: "/Notifications/",
    name: "Notifications",
    component: Notifications,
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/tab3",
      },
      {
        path: "tab1",
        component: () => import("@/views/Tab1Page.vue"),
      },
      {
        path: "tab2",
        component: () => import("@/views/Tab2Page.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/Tab3Page.vue"),
      },
      {
        path: "tab3new",
        component: () => import("@/views/Tab3Page_new.vue"),
      },
      {
        path: "tab4",
        component: () => import("@/views/Tab4Page.vue"),
      },
      {
        path: "/tab4/detail/:chatId",
        component: Tab4PageDetail,
      },
      {
        path: "tab5",
        component: () => import("@/views/Tab5Page.vue"),
      },
      {
        path: "/tab5/editinfo",
        component: () => import("@/views/EditInfo.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
