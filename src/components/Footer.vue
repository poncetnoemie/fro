<template>
  <footer class="">
    {{ infos.site.url }}
  </footer>
</template>

<script>
import infos from "@/data/infos.json";
export default {
  data() {
    return {
      infos: infos,
    };
  },
};
</script>
