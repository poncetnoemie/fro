<template>
  <nav class="flex w-full items-center justify-between">
    <router-link
      class="no-underline text-black text-xl flex flex-col items-center justify-center group"
      :key="index"
      :to="route.path"
      v-for="(route, index) in routesList"
      ><Icon
        :name="route.meta.icon"
        class="text-blue group-hover:text-yellow mb-4 w-16 h-16"
      />
      {{ route.name }}
    </router-link>
  </nav>
</template>

<script>
import Icon from "@/components/Icon.vue";

export default {
  components: { Icon },
  computed: {
    routesList() {
      return this.$router.options.routes.filter((route) => route.meta.menu);
    },
  },
};
</script>

<style lang="postcss" scoped>
.router-link-exact-active > svg {
  @apply text-yellow;
}
</style>
