<template>
  <section class="image-gallery content-section">
    <div class="project-title">
      <prismic-rich-text :field="slice.primary.project_title" />
    </div>
    <div class="project-gallery">
      <div v-for="item in slice.items" :key="item.id" class="project-gallery__item">
        <prismic-image :field="item.project_image" />
        <prismic-rich-text :field="item.project_description" />
        <prismic-link
          :field="item.project_link"
          class="project-gallery-link"
        >{{ $prismic.asText(item.project_link_label) }}</prismic-link>
      </div>
      <!-- {{slice.items.project_image}} -->
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "project-gallery",
};
</script>

<style lang="scss" scoped></style>
