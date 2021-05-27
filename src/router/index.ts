import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import(/* webpackChunkName: "comp-group" */ "../views/Home.vue"),
    },
    {
      path: "/about",
      component: () => import(/* webpackChunkName: "comp-group" */ "../views/About.vue"),
    },
    {
      path: "/blog",
      component: () => import(/* webpackChunkName: "comp-group" */ "../views/Blog.vue"),
    },
    {
      path: "/blog/:slug/:order?",
      name: "story",
      component: () => import(/* webpackChunkName: "comp-group" */ "../views/Story.vue"),
      props: true,
    },
    {
      path: "/album/:slug",
      name: "album",
      props: true,
      component: () => import(/* webpackChunkName: "comp-group" */ "../views/Album.vue"),
    },
    {
      path: "/gallery",
      component: () => import(/* webpackChunkName: "comp-group" */ "../views/Gallery.vue"),
    },
    {
      path: "/privacy-policy",
      component: () => import(/* webpackChunkName: "comp-group" */ "../views/Privacy.vue"),
    },
    {
      path: "/imprint",
      component: () => import(/* webpackChunkName: "comp-group" */ "../views/Imprint.vue"),
    },
    {
      path: "/poem",
      component: () => import(/* webpackChunkName: "comp-group" */ "../views/Poem.vue"),
    },
  ],
});

export default router;
