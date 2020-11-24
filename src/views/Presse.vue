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
export default {
  data() {
    return {
      articles: [
        {
          alt: "Olca",
          name: "olca",
          url: "https://www.olcalsace.org/fr/actualite/marie-froehlicher-dit-ja"
        },
        {
          alt: "Christophe de Barry",
          name: "christophe-de-barry",
          url: "https://www.christophdebarry.fr/marie-une-brin-de-folie/"
        },
        {
          alt: "Gnooss by La Maison de Caroline",
          name: "gnooss",
          url:
            "https://www.facebook.com/632935486786418/posts/3251130448300229/"
        },
        {
          alt: "Foire européenne de Strasbourg",
          name: "foire-europeene-de-strasbourg",
          url: "https://www.facebook.com/foireurop/posts/10159149967213949/"
        }
      ]
    };
  }
};
</script>
