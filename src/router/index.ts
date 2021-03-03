import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import(/* webpackChunkName: "about" */ "../views/Blog.vue"),
  },
  {
    path: "/blog/:slug",
    name: "story",
    component: () => import("../views/Story.vue"),
    props: true,
  },
  {
    path: "/album/:slug",
    name: "album",
    component: () => import("../views/Album.vue"),
    props: true,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: () => import("../views/Gallery.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
