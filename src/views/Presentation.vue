<template>
  <div class="grid gap-10">
    <img
      src="@/assets/images/presentation.jpg"
      :alt="infos.site.name"
      class="w-full"
    />
    <div>
      <h1 class="font-bold text-4xl sr-only">Présentation</h1>
      <p class="text-justify">
        Diplomée de la faculté d'Arts Plastiques de Strasbourg, Marie
        FROEHLICHER a crée après 8 années de formation en tapisserie
        traditionnelle sa propre entreprise de tapisserie d'ameublement en siège
        et redonne vie à vos chaises, fauteuils et canapés en changeant la
        garniture et la tapisserie sur toutes pièces à l'identique ou selon
        votre idée.
      </p>
    </div>
  </div>
</template>

<script>
import infos from "@/data/infos.json";

export default {
  data() {
    return {
      infos: infos
    };
  }
};
</script>
