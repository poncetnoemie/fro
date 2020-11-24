<template>
  <div class="grid md:grid-cols-3 gap-10">
    <h1 class="font-bold text-4xl">Galerie</h1>
    <div
      class="md:col-span-1 relative"
      :key="index"
      v-for="(item, index) in gallery"
    >
      <img
        :src="require('@/assets/images/fauteuils-' + (index + 1) + '.jpg')"
        :alt="'Fauteuils - ' + (index + 1)"
        class="w-full shadow hover:shadow-xl"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallery: 14
    };
  }
};
</script>
