import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";

import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;

// Get SEO
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", to.meta.description);

  next();
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
