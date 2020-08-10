<template>
  <div class="default">
    <!-- remove header and add logo which navigates user back home -->
    <header-prismic />
    <!-- <button class="mode-toggle">enable dark mode</button> -->
    <ColorModePicker id="clip" />
    <nuxt />
    <footer-prismic />
  </div>
</template>

<script>
import HeaderPrismic from "~/components/HeaderPrismic.vue";
import AboutText from "~/components/AboutText.vue";
import FooterPrismic from "~/components/FooterPrismic.vue";
import ColorModePicker from "~/components/ColorModePicker.vue";

export default {
  components: {
    HeaderPrismic,
    AboutText,
    FooterPrismic,
    ColorModePicker
  },
  head() {
    return {
      title: "Prismic Nuxt.js Multi Page Website"
    };
  },
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch("fetchMenu", $prismic);
  },
  data() {
    return {
      clicked: false
    };
  },
  methods: {
    toggleMode: function() {
      var body = document.querySelector("body");
      var galleryTitle = document.querySelector(".gallery-title");

      if (this.clicked === false) {
        body.style.cssText =
          "background-color:black; transition: 0.8s ease-in-out;";
        galleryTitle.style.cssText =
          "color:white; transition: 0.8s ease-in-out;";
        this.clicked = true;
      } else {
        body.style.cssText = "background-color:white; transition: 1s ease-in;";
        galleryTitle.style.cssText = "color:black; transition: 1s ease-in;";
        this.clicked = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
// #clip {
//   background-color: $beryl-green;

//   background-attachment: fixed;
//   -webkit-text-fill-color: transparent;
//   -webkit-background-clip: text;
// }
</style>
