import Vue from "vue";
import VueRouter from "vue-router";
import Presentation from "@/views/Presentation.vue";
import infos from "@/data/infos.json";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Presentation",
    component: Presentation,
    meta: {
      title: infos.site.title,
      description: infos.site.description,
      icon: "frame",
      menu: true
    }
  },
  {
    path: "/galerie",
    name: "Galerie",
    meta: {
      title: "Galerie - Marie Froehlicher",
      description:
        "Galerie photos de meubles, chaises, fauteuils ou canapés réstaurés par Marie Froehlicher dans son atelier à Strasbourg.",
      icon: "chair",
      menu: true
    },
    component: () => import("@/views/Galerie.vue")
  },
  {
    path: "/metier",
    name: "Métier",
    meta: {
      title: "Le Métier - Marie Froehlicher",
      description:
        "Pour tout savoir sur les techniques et différentes étapes de réalisation de la tapisserie d'ameublement.",
      icon: "spring",
      menu: true
    },
    component: () => import("@/views/Metier.vue")
  },
  {
    path: "/coussins-gotfertomi",
    name: "Coussins",
    meta: {
      title: "Coussins Gotfertomi - Marie Froehlicher",
      description: infos.site.description,
      icon: "pillow",
      menu: true
    },
    component: () => import("@/views/Coussins.vue")
  },
  {
    path: "/presse",
    name: "Presse",
    meta: {
      title: "Presse - Marie Froehlicher",
      description: infos.site.description,
      icon: "scissors",
      menu: true
    },
    component: () => import("@/views/Presse.vue")
  },
  {
    path: "/tarifs",
    name: "Tarifs",
    meta: {
      title: "Tarifs - Marie Froehlicher",
      description:
        "Grille tarifaire des préstations classées par style de meuble (Bergère, Louis XIII, Voltaire, Crapaud, Cabriolet, Club, ou encore Empire).",
      icon: "rules",
      menu: true
    },
    component: () => import("@/views/Tarifs.vue")
  },
  {
    path: "/404",
    meta: {
      title: infos.site.title,
      description: infos.site.description,
      menu: false
    },
    component: () => import("@/views/404.vue")
  },
  {
    path: "*",
    meta: {
      title: infos.site.title,
      description: infos.site.description,
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
