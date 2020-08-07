<template>
  <div class="default">
    <!-- remove header and add logo which navigates user back home -->
    <header-prismic />
    <nuxt />
    <footer-prismic />
  </div>
</template>

<script>
import HeaderPrismic from "~/components/HeaderPrismic.vue";
import AboutText from "~/components/AboutText.vue";
import FooterPrismic from "~/components/FooterPrismic.vue";

export default {
  components: {
    HeaderPrismic,
    AboutText,
    FooterPrismic,
  },
  head() {
    return {
      title: "Prismic Nuxt.js Multi Page Website",
    };
  },
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch("fetchMenu", $prismic);
  },
};
</script>
