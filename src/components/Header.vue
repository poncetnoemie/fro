<template>
  <transition name="fade" appear mode="out-in">
    <fixed-header :threshold="480">
      <div>
        <div
          class="bg-white flex flex-col justify-center items-center relative w-full mt-10 md:mt-0"
        >
          <router-link
            tag="div"
            class="logo cursor-pointer h-56 w-56 mb-10"
            :class="{ 'z-50': bodyScroll === false }"
            :to="$route.name === 'Coussins' ? '/coussins' : '/'"
          >
            <transition-group
              class="relative h-full w-full"
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
          <Menu @body-scroll="switchBodyscroll($event)" />
        </div>
      </div>
    </fixed-header>
  </transition>
</template>

<script>
import Menu from "@/components/Menu.vue";
import infos from "@/data/infos.json";
import FixedHeader from "vue-fixed-header";

export default {
  components: { FixedHeader, Menu },
  data() {
    return {
      bodyScroll: true,
      infos: infos
    };
  },
  methods: {
    switchBodyscroll(boolean) {
      this.bodyScroll = boolean;
      this.$emit("body-scroll", boolean);
    }
  }
};
</script>

<style lang="postcss">
@screen md {
  .vue-fixed-header {
    top: -100px;
    transition: all 0.25s ease-in-out;

    @apply w-full;
  }
  .vue-fixed-header--isFixed {
    @apply fixed left-0 top-0 px-12 shadow z-50;
  }
  .vue-fixed-header--isFixed > .relative {
    @apply flex-row items-center;
  }
  .vue-fixed-header--isFixed .logo {
    @apply h-20 w-20 mr-12 mb-0 flex-shrink-0;
  }
  .vue-fixed-header--isFixed .icon {
    @apply h-12 w-12 mb-1 mt-2;
  }
}
</style>
