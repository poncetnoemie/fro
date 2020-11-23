<template>
  <div class="grid gap-4">
    <h1 class="font-bold text-4xl lg:text-6xl">
      Vue.js + tailwindcss template
    </h1>
    <p>
      Diplomée de la faculté d'Arts-Plastiques de Strasbourg, Marie FROEHLICHER
      a crée après 8 années de formation en tapisserie traditionnelle sa propre
      entreprise de tapisserie d'ameublement en siège et redonne vie à vos
      chaises, fauteuils et canapés en changeant la garniture et la tapisserie
      sur toutes pièces à l'identique ou selon votre idée.
    </p>
    <p>
      Contactez-moi par mail
      <a :href="emailAddresLink">{{ infos.contact.email }}</a> ou par téléphone
      au <a :href="phoneNumberLink">{{ infos.contact.phone }}</a
      >.
    </p>
    <p>Atelier à Neudorf (Strasbourg) uniquement sur rendez-vous.</p>
  </div>
</template>

<script>
import infos from "@/data/infos.json";

export default {
  computed: {
    emailAddresLink() {
      return "mailto:" + infos.contact.email;
    },
    phoneNumberLink() {
      return "tel:" + infos.contact.phone.replace(/ /g, "");
    },
  },
  data() {
    return {
      infos: infos,
    };
  },
};
</script>
