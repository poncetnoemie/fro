<template>
  <transition name="fade" mode="out-in">
    <div
      class="fixed left-0 top-0 overflow-y-scroll bg-black-75 w-full h-full grid place-items-center z-20"
      id="modal"
      @click.self="$emit('close')"
      v-if="!isLoading"
    >
      <div
        class="modal md:m-12 rounded mx-auto relative z-50"
        :class="
          type === 'gallery'
            ? ''
            : 'bg-white max-w-3xl shadow-lg overflow-hidden'
        "
      >
        <div
          class="p-6 border-b border-grey-light flex items-center justify-between"
          v-if="type !== 'gallery'"
        >
          <h2 class="mb-0 text-xl">{{ title }}</h2>
          <button
            class="opacity-25 hover:opacity-100 text-4xl leading-none ml-4"
            @click="$emit('close')"
          >
            ✕
          </button>
        </div>
        <div
          class="p-8"
          :class="type !== 'gallery' ? 'overflow-scroll' : ''"
          id="modalContent"
        >
          <slot></slot>
        </div>
        <div
          class="p-8 pt-4 flex items-center justify-center md:justify-end"
          v-if="type !== 'gallery'"
        >
          <button
            class="btn py-2 bg-white hover:bg-grey-light text-grey"
            @click="$emit('close')"
          >
            Fermer
          </button>
        </div>
      </div>
      <button
        class="absolute top-0 right-0 text-white opacity-50 hover:opacity-100 text-4xl leading-none m-8 z-50 focus:outline-none"
        @click="$emit('close')"
        v-if="type === 'gallery'"
      >
        ✕
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true
    };
  },
  props: {
    title: String,
    type: String
  },
  mounted() {
    this.isLoading = false;
  }
};
</script>
