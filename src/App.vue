<template>
  <div
    class="grid gap-10 place-items-center p-12 lg:px-20 w-full leading-relaxed"
    id="app"
  >
    <Header />
    <main class="w-full max-w-5xl relative">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  components: { Footer, Header }
};
</script>
