<template>
  <div class="w-full md:max-w-4xl">
    <nav class="w-full items-center justify-between hidden md:flex">
      <router-link
        class="text-black hover:text-black text-xl flex flex-col items-center justify-center group w-32 h-32"
        :key="index"
        tag="a"
        :to="route.path"
        v-for="(route, index) in routesList"
        ><Icon
          :name="route.meta.icon"
          class="text-blue-dark group-hover:text-yellow mb-4 w-16 h-16 transition-colors duration-200"
        />
        {{ route.name }}
      </router-link>
    </nav>
    <button
      class="fixed top-0 left-0 font-custom hover:bg-yellow rounded-sm py-2 px-8 block md:hidden z-50 focus:outline-none"
      :class="showMenu ? 'bg-white' : 'bg-blue'"
      @click="toggleMenu()"
    >
      Menu
    </button>
    <transition name="fade">
      <div
        class="bg-blue w-full h-full z-30 fixed p-20 top-0 left-0"
        v-if="showMenu"
      >
        <nav
          class="w-full flex flex-col pt-64 text-center"
          @click="toggleMenu()"
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
    toggleMenu() {
      if (this.showMenu === true) {
        this.showMenu = false;
        this.$emit("body-scroll", true);
      } else {
        this.showMenu = true;
        this.$emit("body-scroll", false);
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
