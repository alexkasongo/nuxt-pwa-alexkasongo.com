<template>
  <section>
    <!-- Slices block component -->
    <slices-block :slices="slices" />
  </section>
</template>

<script>
// Imports for Prismic Slice components
import SlicesBlock from "~/components/SlicesBlock.vue";

export default {
  name: "page",
  components: {
    SlicesBlock,
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
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const document = (await $prismic.api.getByUID("page", params.uid)).data;

      return {
        // Set slices as variable
        slices: document.page_content,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>
