<template>
  <div
    class="grid gap-10 place-items-center p-12 lg:px-20 max-w-6xl m-auto w-full leading-relaxed"
    id="app"
  >
    <router-link :to="$route.name === 'Coussins' ? '/coussins' : '/'">
      <transition-group
        class="relative h-64 w-64"
        mode="out-in"
        name="fade"
        tag="div"
      >
        <img
          :src="require('@/assets/images/logo_gotfertomi.png')"
          :alt="infos.site.name_gotfertomi"
          class="w-auto h-full absolute"
          key="gotfertomi"
          v-if="$route.name === 'Coussins'"
        />
        <img
          :src="require('@/assets/images/logo_mariefroehlicher.png')"
          :alt="infos.site.name"
          class="w-auto h-full absolute"
          key="classic"
          v-else
        />
      </transition-group>
    </router-link>
    <Menu />
    <main class="w-full">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";
import infos from "@/data/infos.json";

export default {
  components: { Footer, Menu },
  data() {
    return {
      infos: infos
    };
  }
};
</script>
