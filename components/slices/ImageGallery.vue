<template>
  <section class="image-gallery content-section">
    <prismic-rich-text :field="slice.primary.gallery_title" />
    <div class="gallery">
      <div v-for="item in slice.items" :key="item.id" class="gallery__item">
        <prismic-image :field="item.image" />
        <prismic-rich-text :field="item.image_description" />
        <p>
          <prismic-link :field="item.link" class="gallery-link">{{
            $prismic.asText(item.link_label)
          }}</prismic-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "image-gallery"
};
</script>

<style lang="scss" scoped></style>
