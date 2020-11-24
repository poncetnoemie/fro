<template>
  <div class="flex items-center justify-center">
    <a
      class="mr-4 last:mr-0 group"
      v-for="(item, index) in socials"
      :key="index"
      :href="item.url"
      target="_blank"
    >
      <Icon :name="item.name" class="h-12 w-12 group-hover:text-yellow" />
    </a>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";

export default {
  components: { Icon },
  props: {
    socials: Array
  },
  computed: {
    socialsList() {
      return this.socials.reduce();
    }
  }
};
</script>
