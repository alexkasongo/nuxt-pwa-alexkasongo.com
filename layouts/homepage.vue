<template>
  <div class="homepage page">
    <header-prismic />
    <!-- <ColorModePicker /> -->
    <about-text />
    <footer-prismic />
  </div>
</template>

<script>
import HeaderPrismic from "~/components/HeaderPrismic.vue";
import AboutText from "~/components/AboutText.vue";
import FooterPrismic from "~/components/FooterPrismic.vue";
// import ColorModePicker from "~/components/ColorModePicker";

export default {
  components: {
    HeaderPrismic,
    AboutText,
    FooterPrismic
    // ColorModePicker
  },
  data() {
    return {
      title: "Alex Kasongo",
      description:
        "Hi, my name is Alex Kasongo. I am a front-end engineer, passionate for the web & solution archicture"
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: "description", name: "description", content: this.description }
      ]
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
      var text = document.querySelector(".about__text");

      if (this.clicked === false) {
        body.style.cssText =
          "background-color:black; transition: 0.8s ease-in;";
        // text.style.cssText = "color:white;";

        var anchors = document.getElementsByTagName("a");
        for (var i = 0; i < anchors.length; i++) {
          anchors[i].style.cssText = "color:white;";
        }
        this.clicked = true;
      } else {
        body.style.cssText =
          "background-color:white; transition: 0.8s ease-in;";
        var anchors = document.getElementsByTagName("a");
        for (var i = 0; i < anchors.length; i++) {
          anchors[i].style.cssText = "color:black;";
        }
        this.clicked = false;
      }
    }
  }
};
</script>
