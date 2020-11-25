<template>
  <div class="grid md:grid-cols-3 gap-10">
    <!-- CLASSIC -->
    <div class="md:col-span-2">
      <img
        :src="require('@/assets/images/coussins-gotfertomi-start.jpg')"
        alt="Coussins Gotfertomi®"
        class="w-full"
      />
    </div>
    <div class="md:col-span-1">
      <h1 class="font-bold text-4xl">Coussins</h1>
      <p>
        La marque <strong>Gotfertomi®</strong> a été déposée... c'est une
        collection de coussins qui évolue constamment !
      </p>
      <p>
        Si vous souhaitez en commander, il suffit de
        <a :href="emailAddresLink">m'envoyer un mail</a> ou de passer à
        l'atelier sur rdv afin de voir le stock.
      </p>
      <p class="italic">
        Des personnalisations sont possibles à partir de 10 pièces.
      </p>
      <h3 class="text-lg">Tailles</h3>
      <p>Coussins "carrés" : 37/37cm<br />Coussins "rectangles" : 27/42cm.</p>
      <h3 class="text-lg">Composition</h3>
      <p>
        Intérieurs en ouate, divers tissus utilisés : coton, velours, véritable
        Kelsch fabriqué en Alsace...
      </p>
    </div>
    <div
      class="md:col-span-1"
      :key="'classic-' + index"
      v-for="(item, index) in gallery.classic"
    >
      <img
        :src="
          require('@/assets/images/coussins-gotfertomi-' + (index + 1) + '.jpg')
        "
        :alt="'Coussins Gotfertomi® - ' + (index + 1)"
        class="w-full"
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
              require('@/assets/images/tabliers-gotfertomi-' +
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
        <small class="block">(merci au Café RECK !)</small>
      </h2>
      <p>
        Formats de 37/37cm à 55/55cm. <br />Tarifs et commande par
        <a :href="emailAddresLink">mail</a>.
      </p>
    </div>
    <div
      :class="index === 0 ? 'md:col-span-2' : 'md:col-span-1'"
      :key="'coffee-' + index"
      v-for="(item, index) in gallery.coffee"
    >
      <img
        :src="
          require('@/assets/images/coussins-gotfertomi-cafe-' +
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
import infos from "@/data/infos.json";

export default {
  computed: {
    emailAddresLink() {
      return (
        "mailto:" + infos.contact.email + "?subject=A propos de Gotfertomi®"
      );
    }
  },
  data() {
    return {
      gallery: {
        classic: 6,
        coffee: 4,
        others: 3
      }
    };
  }
};
</script>
