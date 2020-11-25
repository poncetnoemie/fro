<template>
  <main>
    <div class="grid md:grid-cols-2 gap-10">
      <div class="col-span-2 md:pr-12 md:mb-6">
        <h1 class="font-bold text-4xl">Tarifs</h1>
        <p>
          Cette grille horaire est donnée à titre indicatif, un devis ferme et
          définitif ne pourra être fait qu’après avoir vu le siège concerné.
        </p>
        <p>
          <span class="font-custom text-xl">Tarif horaire :</span> 28 euros<br />
          <a href="#cgv">Conditions Générales de Vente</a>
        </p>
      </div>
      <div
        class="col-span-1 flex flex-col md:flex-row md:items-center"
        v-for="(tarif, index) in tarifs"
        :key="'tarif-' + index"
      >
        <Icon :name="tarif.name" class="w-24 mb-6 md:mb-0 text-blue" />
        <div class="md:ml-10">
          <h2 class="text-2xl">{{ tarif.title }}</h2>
          <ul class="list-inside">
            <li
              class="mb-1 last:mb-0"
              v-for="(detail, index) in tarif.details"
              :key="index"
            >
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>
      <div id="cgv" class="md:col-span-2">
        <h2 class="text-3xl my-12 md:text-center">
          Conditions générales de vente de la Fédération régionale <br />des
          Tapissiers-Décorateurs selliers d'Alsace
        </h2>
        <div class="flex flex-col md:flex-row">
          <div class="md:mr-12">
            <h3 class="text-xl">Vente</h3>
            <p>
              Toute commande de travaux implique de la part de l’acheteur
              l’acceptation sans réserve des conditions générales ci-dessous, le
              cas échéant, renonciation à ses propres conditions d’achat sauf
              convention spéciale contrainte et écrite.
            </p>
            <h3 class="text-xl mt-8">Prix</h3>
            <p>
              Nos offres de prix sont valables pendant 15 jours à compter de la
              date de la formulation. Nos prix sont établis net sans escompte,
              ni rabais dans la conjoncture économique et selon les dispositions
              légales et règlementaires en vigueur.
            </p>
            <p>
              Ils sont sujets à révision en cas de variation d’un ou plusieurs
              éléments constitutifs de prix.<br />
              Tout imprévu dans l’exécution des travaux sera communiqué à
              l’acheteur et les frais supplémentaires en résultant facturés en
              sus du prix.
            </p>
            <h3 class="text-xl mt-8">Délai</h3>
            <p>
              Nos délais sont indicatifs et ne peuvent donner lieu en cas de
              retard à aucune indemnité, réduction de prix ou annulation de
              commande. Toutefois si le retard devait être supérieur à 3 mois,
              l’acheteur a la faculté de demander la résiliation de la commande,
              le remboursement des acomptes versés sans pour autant qu’une
              indemnité à quelque titre que ce soit puisse être réclamée.
            </p>
            <h3 class="text-xl mt-8">Paiement</h3>
            <p>Nos conditions de paiement s’entendent :</p>
            <ul class="list-disc list-inside md:pl-4">
              <li>un tiers à la commande</li>
              <li>solde à réception de la facture</li>
            </ul>
            <p>
              En aucun cas une réclamation ne justifie un retard dans le
              paiement.<br />
              Tout paiement différé entraine automatiquement une indemnité de
              retard de 1,5% par mois sur les sommes restant dues.
            </p>
          </div>
          <div>
            <h3 class="text-xl">Réclamation</h3>
            <p>
              Les réclamations sur factures ne sont recevables que si elles sont
              formulées par écrit moins de huit jours après la date de
              facturation.
            </p>
            <h3 class="text-xl mt-8">Garantie</h3>
            <p>
              Nos travaux sont exécutés selon les règles de l’art. une
              majoration de risques de 20% est à prévoir sur la valeur des
              tissus et matériaux fournis par le client. En cas de fournitures
              reconnues défectueuses, notre garantie se limite au remplacement
              des fournitures reconnues défectueuses à l’exclusion de la main-
              d’œuvre qui reste en tout état de cause à la seule charge de
              l’acheteur.
            </p>
            <p>Ne donne pas lieu à garantie :</p>
            <ul class="list-disc list-inside md:pl-4">
              <li>l’altération prématurée due à un usage anormal</li>
              <li>à un nettoyage impropre</li>
              <li>à l’action des agents extérieurs</li>
            </ul>
            <p>
              Les travaux exécutés selon les mesures fournies par l’acheteur ou
              son préposé dûment mandatées.
            </p>
            <h3 class="text-xl mt-8">Juridiction</h3>
            <p>
              Toute contestation au sujet de l’exécution ou de l’interprétation
              des présentes sera du seul ressort des tribunaux du siège de
              l’entreprise. Cette seule compétence est reconnue par les parties,
              même en cas de pluralité de défendeurs et d’appel en garantie, et
              cela par dérogation au code de procédure, quand bien même les
              conditions d’achat de l’acheteur seraient contraires à cette
              clause attributive de juridiction.<br />
              Nous nous réservons la propriété des articles vendus et livrés
              jusqu’au paiement intégral conformément à la loi N9 80-335 du 12
              mai 1980.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import infos from "@/data/infos.json";
import Icon from "@/components/Icon.vue";

export default {
  components: { Icon },
  data() {
    return {
      tarifs: infos.tarifs
    };
  }
};
</script>
