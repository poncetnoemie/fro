<template>
  <div class="grid md:grid-cols-6 gap-10">
    <h1 class="font-bold text-4xl sr-only">Galerie</h1>
    <h2 class="font-bold text-4xl col-span-6">Nouveautés</h2>
    <div
      class="col-span-6 relative"
      :class="index > 14 ? 'md:col-span-3' : 'md:col-span-2'"
      :key="'fauteuil-' + index"
      v-for="(item, index) in getGallery('new')"
    >
      <img
        :src="getImageSrc(item.name + '.jpg')"
        :alt="'Fauteuils - ' + (index + 1)"
        class="w-full shadow-lg md:hover:shadow-xl duration-200 transform md:hover:-translate-y-2 md:cursor-pointer"
        @click.prevent="
          gallery.imageActive = item;
          gallery.imageActiveIndex = index;
          showModal();
        "
      />
      <h2 class="font-custom text-2xl mt-4 text-center">{{ item.title }}</h2>
    </div>
    <h2 class="font-bold text-4xl col-span-6 my-12">
      Anciennes réalisations
    </h2>
    <div
      class="col-span-6 md:col-span-2 relative"
      :key="index"
      v-for="(item, index) in getGallery('old')"
    >
      <img
        :src="getImageSrc(item.name + '.jpg')"
        :alt="'Fauteuils - ' + (index + 1)"
        class="w-full shadow-lg md:hover:shadow-xl duration-200 transform md:hover:-translate-y-1 md:cursor-pointer"
        @click.prevent="
          gallery.imageActive = item;
          gallery.imageActiveIndex = index;
          showModal();
        "
      />
      <h2 class="font-custom text-2xl mt-4 text-center">{{ item.title }}</h2>
    </div>
    <Modal
      class="hidden md:block"
      :title="gallery.imageActive.title"
      type="gallery"
      v-if="view.showModal"
      @close="hideModal()"
    >
      <div class="w-full h-screen relative" @click.self="hideModal()">
        <button
          class="slidenav left-0 font-custom hidden md:block"
          @click.prevent="prevImage()"
          :disabled="gallery.imageActiveIndex - 1 < 0"
        >
          Précédent
        </button>
        <div class="max-w-5xl m-auto relative">
          <div
            v-for="(image, index) in getGallery(gallery.imageActive.gallery)"
            :key="index"
          >
            <transition name="fade" mode="out-in">
              <div class="w-full h-screen-80 absolute top-0 left-0">
                <img
                  :src="getImageSrc(image.name + '.jpg')"
                  v-show="image.name === gallery.imageActive.name"
                  class="w-full max-w-screen h-auto m-auto"
                />
              </div>
            </transition>
          </div>
        </div>
        <button
          class="slidenav right-0 font-custom hidden md:block"
          @click.prevent="nextImage()"
          :disabled="
            gallery.imageActiveIndex + 1 ===
              getGallery(gallery.imageActive.gallery).length
          "
        >
          Suivant
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import images from "@/data/images.json";

export default {
  components: { Modal },
  computed: {
    galleryActive() {
      return images.filter(
        image => image.gallery === this.gallery.imageActive.gallery
      );
    }
  },
  data() {
    return {
      gallery: {
        images: images,
        imageActive: null,
        imageActiveIndex: 0
      },
      view: {
        showModal: false
      }
    };
  },
  methods: {
    showModal() {
      this.view.showModal = true;

      // let targetElement = document.querySelector("#modalContent");
      // disableBodyScroll(targetElement);
    },
    hideModal() {
      this.view.showModal = false;

      // let targetElement = document.querySelector("#modalContent");
      // enableBodyScroll(targetElement);
      // clearAllBodyScrollLocks();
    },
    getImageSrc(src) {
      return require("@/assets/images/" + src);
    },
    getGallery(name) {
      return images.filter(image => image.gallery === name);
    },
    nextImage() {
      if (
        this.gallery.imageActiveIndex <
        this.getGallery(this.gallery.imageActive.gallery).length - 1
      ) {
        this.gallery.imageActiveIndex = this.gallery.imageActiveIndex + 1;
        this.gallery.imageActive = this.galleryActive[
          this.gallery.imageActiveIndex
        ];
      }
    },
    prevImage() {
      if (this.gallery.imageActiveIndex - 1 >= 0)
        this.gallery.imageActiveIndex = this.gallery.imageActiveIndex - 1;
      this.gallery.imageActive = this.galleryActive[
        this.gallery.imageActiveIndex
      ];
    }
  }
};
</script>

<style lang="postcss" scoped>
.slidenav {
  @apply text-center fixed rounded-full text-2xl top-1/2 -mt-4 mx-12 z-50 bg-blue py-2 px-8 min-w-48;

  &:hover {
    @apply bg-yellow;
  }

  &:focus {
    @apply outline-none;
  }

  &:disabled {
    @apply bg-white text-black-50 cursor-default;
  }
}
</style>
