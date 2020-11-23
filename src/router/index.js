import Vue from "vue";
import VueRouter from "vue-router";
import Presentation from "@/views/Presentation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Presentation",
    component: Presentation,
    meta: {
      icon: "frame",
      menu: true
    }
  },
  {
    path: "/galerie",
    name: "Galerie",
    meta: {
      icon: "chair",
      menu: true
    },
    component: () => import("@/views/Galerie.vue")
  },
  {
    path: "/metier",
    name: "Metier",
    meta: {
      icon: "spring",
      menu: true
    },
    component: () => import("@/views/Metier.vue")
  },
  {
    path: "/coussins",
    name: "Coussins",
    meta: {
      icon: "pillow",
      menu: true
    },
    component: () => import("@/views/Coussins.vue")
  },
  {
    path: "/presse",
    name: "Presse",
    meta: {
      icon: "scissors",
      menu: true
    },
    component: () => import("@/views/Presse.vue")
  },
  {
    path: "/tarifs",
    name: "Tarifs",
    meta: {
      icon: "rules",
      menu: true
    },
    component: () => import("@/views/Tarifs.vue")
  },
  {
    path: "/404",
    meta: {
      menu: false
    },
    component: () => import("@/views/404.vue")
  },
  {
    path: "*",
    meta: {
      menu: false
    },
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
