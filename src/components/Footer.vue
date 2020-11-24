<template>
  <footer class="w-full text-center border-t-2 mt-12 pt-12">
    <div class="flex justify-between items-center w-full">
      <div class="text-center transform -rotate-3">
        <p class="font-custom text-2xl">
          Retrouvez moi sur <br />
          Facebook & Instagram !
        </p>
        <SocialBox class="mt-4" :socials="infos.contact.socials" />
      </div>
      <div class="text-center">
        <p>
          Contactez-moi par mail
          <a :href="emailAddresLink">{{ infos.contact.email }}</a> <br />ou par
          téléphone au <a :href="phoneNumberLink">{{ infos.contact.phone }}</a>
        </p>
        <p>
          Atelier à Neudorf (Strasbourg)
          <span class="font-medium">uniquement sur rendez-vous.</span>
        </p>
      </div>
      <div class="text-center transform rotate-12">
        <p class="font-custom text-2xl">Elsässischi quàlität !</p>
        <Icon name="alsace" class="text-red-600 h-16 w-16 inline-block" />
      </div>
    </div>
    <p class="text-sm mb-0">{{ year }} &copy; {{ infos.site.url }}</p>
    <p class="text-sm mb-0">
      Site réalisé par
      <a
        :href="infos.site.dev.url"
        class="text-black font-medium"
        target="_blank"
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
