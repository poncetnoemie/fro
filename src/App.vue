<template>
  <div
    class="grid gap-10 place-items-center p-12 lg:px-20 w-full leading-relaxed"
    :class="{ 'fixed overflow-hidden': bodyScroll === false }"
    id="app"
  >
    <Header @body-scroll="bodyScroll = $event" />
    <main class="w-full max-w-5xl">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  components: { Footer, Header },
  data() {
    return {
      bodyScroll: true
    };
  }
};
</script>
