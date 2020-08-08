<template>
  <div class="homepage page">
    <header-prismic />
    <button class="mode-toggle" @click="toggleMode">enable dark mode</button>
    <about-text />
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
      clicked: false,
    };
  },
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch("fetchMenu", $prismic);
  },
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    toggleMode: function () {
      var body = document.querySelector("body");

      if (this.clicked === false) {
        body.style.cssText =
          "background-color:black; transition: 0.8s ease-in;";
        this.clicked = true;
      } else {
        body.style.cssText =
          "background-color:white; transition: 0.8s ease-in;";
        this.clicked = false;
      }
    },
  },
};
</script>
