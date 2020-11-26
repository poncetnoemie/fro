<template>
  <div class="w-full max-w-4xl">
    <nav
      class="w-full items-center justify-between hidden md:flex"
      @click="scrollToTop()"
    >
      <router-link
        class="text-black hover:text-black text-lg lg:text-xl flex flex-col items-center justify-center group w-24 h-24 lg:w-32 lg:h-32"
        :key="index"
        tag="a"
        :to="route.path"
        v-for="(route, index) in routesList"
        ><Icon
          :name="route.meta.icon"
          class="text-blue-dark group-hover:text-yellow mb-4 w-16 h-16 transition-colors duration-200"
        />
        <span>{{ route.name }}</span>
      </router-link>
    </nav>
    <button
      class="fixed bottom-0 right-0 font-custom hover:bg-yellow rounded-sm py-2 px-8 block md:hidden z-50 focus:outline-none"
      :class="showMenu ? 'bg-white' : 'bg-blue'"
      @click="toggleMenu()"
    >
      Menu
    </button>
    <transition name="fade">
      <div
        class="bg-blue w-full h-full fixed p-20 top-0 left-0 z-30 flex flex-col justify-center items-center"
        v-if="showMenu"
      >
        <nav
          class="w-full flex flex-col text-center"
          @click="
            scrollToTop();
            toggleMenu();
          "
        >
          <router-link
            class="no-underline text-black text-xl mb-4"
            :key="index"
            :to="route.path"
            v-for="(route, index) in routesList"
          >
            {{ route.name }}
          </router-link>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";

export default {
  components: { Icon },
  computed: {
    routesList() {
      return this.$router.options.routes.filter(route => route.meta.menu);
    }
  },
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    toggleMenu() {
      if (this.showMenu === true) {
        this.showMenu = false;

        let targetElement = document.querySelector("#modalContent");
        enableBodyScroll(targetElement);
        clearAllBodyScrollLocks();
      } else {
        this.showMenu = true;

        let targetElement = document.querySelector("#modalContent");
        disableBodyScroll(targetElement);
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.router-link-exact-active > svg {
  @apply text-yellow;
}
</style>
