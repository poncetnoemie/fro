<template>
  <div
    class="grid gap-12 place-items-center p-16 lg:px-20 max-w-5xl m-auto"
    id="app"
  >
    <img :src="logoSrc" alt="" class="w-full max-w-64" />
    <Menu />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";

export default {
  components: { Footer, Menu },
  computed: {
    logoSrc() {
      let logoName = "mariefroehlicher";

      if (this.$route.name === "coussins") logoName = "gotfertomi";

      return require("@/assets/images/logo_" + logoName + ".png");
    },
  },
};
</script>
