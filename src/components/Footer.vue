<template>
  <footer class="w-full border-t-2 mt-12 pt-12">
    <div class="flex flex-wrap justify-between items-center w-full">
      <div class="w-1/4 text-center transform -rotate-3">
        <p class="font-custom text-3xl">
          Retrouvez moi sur <br />
          Facebook & Instagram !
        </p>
        <SocialBox :socials="infos.contact.socials" />
      </div>
      <div class="w-1/2 text-center">
        <p>
          Contactez-moi par mail via
          <a :href="emailAddresLink">{{ infos.contact.email }}</a> <br />ou par
          téléphone au <a :href="phoneNumberLink">{{ infos.contact.phone }}</a>
        </p>
        <p>
          Atelier à Neudorf (Strasbourg)
          <span class="font-bold">uniquement sur rendez-vous.</span>
        </p>
      </div>
      <div class="w-1/4 text-center transform rotate-6">
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
      return "mailto:" + infos.contact.email;
    },
    phoneNumberLink() {
      return "tel:" + infos.contact.phone.replace(/ /g, "");
    }
  },
  data() {
    return {
      infos: infos,
      year: new Date().getFullYear()
    };
  }
};
</script>
