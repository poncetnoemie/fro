<template>
  <footer class="w-full md:mt-6 pt-16">
    <div class="flex flex-wrap justify-between items-center w-full">
      <div class="w-full md:w-1/4 text-center md:transform md:-rotate-3">
        <p class="font-custom text-3xl mb-0">
          Retrouvez moi sur <br />
          Facebook & Instagram !
        </p>
        <div class="flex items-center justify-center">
          <img class="h-16 mr-4" src="@/assets/images/arrow.png" alt="" />
          <SocialBox class="mt-8" :socials="infos.contact.socials" />
        </div>
      </div>
      <div class="w-full my-16 md:my-0 md:w-1/2 text-center">
        <p>
          Contactez-moi par mail via
          <a :href="emailAddresLink">{{ infos.contact.email }}</a> <br />ou par
          téléphone au <a :href="phoneNumberLink">{{ infos.contact.phone }}</a
          >.
        </p>
        <p>
          Atelier à Neudorf (Strasbourg)
          <span class="font-bold">uniquement sur rendez-vous.</span>
        </p>
        <p class="mb-0 text-lg">
          <a href="https://gotfertomi.alsace"
            >Découvrez ma boutique de coussin alsacien</a
          >
        </p>
      </div>
      <div class="w-full md:w-1/4 text-center md:transform md:rotate-6">
        <p class="font-custom text-3xl">
          Elsässischi quàlität !
        </p>
        <Icon name="alsace" class="text-red-600 h-16 w-16 inline-block" />
      </div>
    </div>
    <p class="text-xs mb-0 mt-6 text-center">
      {{ year }} &copy; {{ infos.site.url }} - Site réalisé par
      <a
        :href="infos.site.dev.url"
        target="_blank"
        class="text-black font-normal"
        >{{ infos.site.dev.name }}</a
      >
    </p>
  </footer>
</template>

<script>
import Icon from "@/components/Icon.vue";
import SocialBox from "@/components/SocialBox.vue";
import infos from "@/data/infos.json";

export default {
  components: { Icon, SocialBox },
  computed: {
    emailAddresLink() {
      return (
        "mailto:" +
        infos.contact.email +
        "?subject=Contact mariefroehlicher.com"
      );
    },
    phoneNumberLink() {
      return "tel:" + infos.contact.phone.replace(/ /g, "");
    },
  },
  data() {
    return {
      infos: infos,
      year: new Date().getFullYear(),
    };
  },
};
</script>
