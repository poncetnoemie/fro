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
        :src="getImageSrc('gallery/thumbs/' + item.name + '.jpg')"
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
        :src="getImageSrc('gallery/thumbs/' + item.name + '.jpg')"
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
      :title="gallery.imageActive.title"
      type="gallery"
      v-if="gallery.imageActive"
      v-show="view.showModal"
      @close="hideModal()"
    >
      <div
        class="w-full md:py-12 h-full relative flex items-center"
        @click.self="hideModal()"
      >
        <button
          class="slidenav md:fixed left-0 font-custom hidden md:block"
          @click.prevent="prevImage()"
          :disabled="gallery.imageActiveIndex - 1 < 0"
        >
          &lsaquo;
        </button>
        <div class="w-full h-full flex items-center max-w-5xl m-auto relative">
          <div
            class="w-full flex items-center md:my-12 md:absolute md:top-0 md:left-0"
          >
            <transition
              name="fade"
              mode="out-in"
              tag="div"
              class="w-full h-full"
            >
              <img
                :src="
                  getImageSrc('gallery/' + gallery.imageActive.name + '.jpg')
                "
                class="w-full max-w-screen h-auto m-auto"
              />
            </transition>
          </div>
        </div>
        <button
          class="slidenav md:fixed right-0 font-custom hidden md:block"
          @click.prevent="nextImage()"
          :disabled="
            gallery.imageActiveIndex + 1 ===
              getGallery(gallery.imageActive.gallery).length
          "
        >
          &rsaquo;
        </button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import images from "@/data/images.json";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";

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

      let targetElement = document.querySelector("#modalContent");
      disableBodyScroll(targetElement);
    },
    hideModal() {
      this.view.showModal = false;

      let targetElement = document.querySelector("#modalContent");
      enableBodyScroll(targetElement);
      clearAllBodyScrollLocks();
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
  @apply h-full mx-12 z-50 text-white bg-opacity-75 text-10xl outline-none;

  &:hover {
    @apply opacity-100 outline-none;
  }

  &:focus {
    @apply outline-none;
  }

  &:disabled {
    @apply bg-white text-black-50 cursor-default;
  }
}
</style>
