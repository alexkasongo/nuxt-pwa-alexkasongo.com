<template>
  <div class="default">
    <!-- remove header and add logo which navigates user back home -->
    <header-prismic />
    <ColorModePicker id="clip" />
    <BackButton />
    <nuxt />
    <footer-prismic />
  </div>
</template>

<script>
import HeaderPrismic from "~/components/HeaderPrismic.vue";
import AboutText from "~/components/AboutText.vue";
import FooterPrismic from "~/components/FooterPrismic.vue";
import ColorModePicker from "~/components/ColorModePicker.vue";
import BackButton from "~/components/BackButton.vue";

export default {
  components: {
    HeaderPrismic,
    AboutText,
    FooterPrismic,
    ColorModePicker,
    BackButton,
  },
  data() {
    return {
      title: "Alex Kasongo",
      description:
        "Hi, my name is Alex Kasongo. I am a front-end engineer, passionate for the web, responsive design & typography",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: "description", name: "description", content: this.description },
      ],
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
    },
  },
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
