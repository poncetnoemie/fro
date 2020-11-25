<template>
  <header class="grid gap-10 place-items-center">
    <router-link
      tag="div"
      class="cursor-pointer"
      :class="{ 'z-50': bodyScroll === false }"
      :to="$route.name === 'Coussins' ? '/coussins' : '/'"
    >
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
    <Menu @body-scroll="switchBodyscroll($event)" />
  </header>
</template>

<script>
import Menu from "@/components/Menu.vue";
import infos from "@/data/infos.json";

export default {
  components: { Menu },
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

<style lang="scss" scoped></style>
