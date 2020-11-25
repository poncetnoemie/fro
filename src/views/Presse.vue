<template>
  <main>
    <h1 class="font-bold text-4xl">Presse</h1>
    <div class="flex flex-wrap justify-center items-center w-full mt-10">
      <a
        class="md:w-1/3 mb-10"
        :href="article.url"
        :key="index"
        v-for="(article, index) in articles"
        target="_blank"
        ><img
          class="shadow-lg hover:shadow-2xl m-auto"
          :src="require('@/assets/images/presse-' + article.name + '-sm.jpg')"
          :alt="article.alt"
      /></a>
    </div>
  </main>
</template>

<script>
import articles from "@/data/articles.json";

export default {
  data() {
    return {
      articles: articles
    };
  }
};
</script>
