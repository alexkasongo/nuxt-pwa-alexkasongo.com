<template>
  <section>
    <!-- Banner component -->
    <!-- <homepage-banner :banner="banner" /> -->

    <!-- Slices block component -->
    <slices-block :slices="slices" />
  </section>
</template>

<script>
// Imports for all components
import HomepageBanner from "~/components/HomepageBanner.vue";
import SlicesBlock from "~/components/SlicesBlock.vue";

export default {
  name: "Home",
  layout: "homepage",
  components: {
    HomepageBanner,
    SlicesBlock,
  },
  data() {
    return {
      title: "Alex Kasongo",
      description:
        "Hi, my name is Alex Kasongo. I am an Email Developer, whose passionate for the web.",
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
  async asyncData({ $prismic, error }) {
    try {
      // Query to get the home page content
      const homepage = (await $prismic.api.getSingle("homepage")).data;

      return {
        // Page content
        banner: homepage.homepage_banner[0],
        // Set slices as variable
        slices: homepage.page_content,
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>
