<template>
  <transition name="fade" appear mode="out-in">
    <fixed-header :threshold="400" class="bg-white">
      <div>
        <div
          class="bg-white flex flex-col justify-center items-center relative w-full"
        >
          <router-link
            tag="div"
            class="logo cursor-pointer mb-10 h-48 w-48"
            :to="$route.name === 'Coussins' ? '/coussins-gotfertomi' : '/'"
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
          <Menu />
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
      infos: infos
    };
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
    @apply fixed left-0 top-0 px-12 shadow z-20;
  }
  .vue-fixed-header--isFixed > .relative {
    @apply flex-row items-center;
  }
  .vue-fixed-header--isFixed + .relative {
    @apply mt-h-header;
  }
  .vue-fixed-header--isFixed .logo {
    @apply h-20 w-20 mr-12 mb-0 flex-shrink-0;
  }
  .vue-fixed-header--isFixed .icon {
    @apply h-12 w-12 mb-1 mt-2;
  }
}
</style>
