<template>
  <div class="grid md:grid-cols-3 gap-10">
    <!-- CLASSIC -->
    <div class="md:col-span-1">
      <h1 class="font-bold text-4xl">Coussins</h1>
      <p>
        La marque <strong>Gotfertomi®</strong> a été déposée... c'est une
        collection de coussins qui évolue constamment !
      </p>
      <p>
        Si vous souhaitez en commander, visitez la page de
        <a href="https://gotfertomi.alsace"
          >ma boutique de coussin de décoration</a
        >
        ou de passer à l'atelier sur rdv afin de voir le stock.
      </p>
      <h3 class="text-lg">Tarif</h3>
      <p>
        55€ pièce, peu importe le modèle<br />(pour les séries "Mots" &
        "Bretzel")
      </p>
      <h3 class="text-lg">Tailles</h3>
      <p>Coussins "carrés" : 37/37cm<br />Coussins "rectangles" : 27/42cm.</p>
      <h3 class="text-lg">Composition</h3>
      <p>
        Intérieurs en ouate, divers tissus utilisés : coton, velours, véritable
        Kelsch fabriqué en Alsace...
      </p>
    </div>
    <div class="md:col-span-2">
      <img
        :src="require('@/assets/images/gotfertomi-coussins.jpg')"
        alt="Coussins Gotfertomi®"
        class="w-full mb-4"
      />
      <p class="italic text-center">
        Des personnalisations sont possibles à partir de 10 pièces.
      </p>
    </div>
    <div
      class="md:col-span-1 bg-gray-200"
      :key="'classic-' + index"
      v-for="(item, index) in gallery.classic"
    >
      <img
        :src="
          require('@/assets/images/gotfertomi-coussins-' + (index + 1) + '.jpg')
        "
        :alt="'Coussins Gotfertomi® - ' + (index + 1)"
        class="w-full"
      />
    </div>
    <div
      class="md:col-span-1 flex justify-center items-center flex-col md:transform md:-rotate-6 py-12 md:py-0"
    >
      <p class="font-custom text-3xl mb-0 text-center">
        Likez la page <strong>Gotfertomi</strong> et suivez les nouveautés sur
        <br />
        Facebook & Instagram !
      </p>
      <div class="flex items-center justify-center">
        <SocialBox class="mt-8" :socials="infos.contact.socials" />
        <img class="h-16 ml-2" src="@/assets/images/arrow-2.png" alt="" />
      </div>
    </div>
    <div class="md:col-span-2">
      <img
        :src="require('@/assets/images/gotfertomi-coussins-bretzel.jpg')"
        alt="Coussins Gotfertomi®"
        class="mx-auto mb-4"
      />
    </div>
    <!-- OTHERS -->
    <div class="md:col-span-3">
      <h2 class="font-bold text-4xl text-center my-12">
        Des coussins, oui... mais pas que !
      </h2>
    </div>
    <div class="md:col-span-3 text-center">
      <div class="grid md:grid-cols-3 gap-10">
        <div
          class="md:col-span-1"
          :key="'others-' + index"
          v-for="(item, index) in gallery.others"
        >
          <img
            :src="
              require('@/assets/images/gotfertomi-divers-' +
                (index + 1) +
                '.jpg')
            "
            :alt="'Coussins Gotfertomi® - ' + (index + 1)"
            class="w-full"
          />
        </div>
      </div>
    </div>
    <!-- COFFEE -->
    <div class="md:col-span-3">
      <h2 class="font-bold text-4xl text-center my-12">
        Egalement disponibles
      </h2>
    </div>
    <div class="md:col-span-1">
      <h2 class="font-bold text-2xl mb-4">
        Sacs de grains de café
        <small class="block text-base"
          >(merci à café
          <a href="https://www.reck.fr/" target="_blank" class="text-black"
            >Reck</a
          >
          notre merveilleux torréfacteur local)</small
        >
      </h2>
      <h3 class="text-lg">Formats</h3>
      <p>
        De 37/37cm à 55/55cm.
      </p>
      <h3 class="text-lg">Tarifs & commande</h3>
      <p>Me contacter par <a :href="emailAddresLink">mail</a>.</p>
    </div>
    <div
      :class="index === 0 ? 'md:col-span-2' : 'md:col-span-1'"
      :key="'coffee-' + index"
      v-for="(item, index) in gallery.coffee"
    >
      <img
        :src="
          require('@/assets/images/gotfertomi-coussins-cafe-' +
            (index + 1) +
            '.jpg')
        "
        :alt="'Coussins Gotfertomi® - ' + (index + 1)"
        class="w-full"
      />
    </div>
  </div>
</template>

<script>
import SocialBox from "@/components/SocialBox.vue";
import infos from "@/data/infos.json";

export default {
  components: { SocialBox },
  computed: {
    emailAddresLink() {
      return (
        "mailto:" + infos.contact.email + "?subject=A propos de Gotfertomi®"
      );
    },
  },
  data() {
    return {
      gallery: {
        classic: 6,
        coffee: 4,
        others: 6,
      },
      infos: infos,
    };
  },
};
</script>
