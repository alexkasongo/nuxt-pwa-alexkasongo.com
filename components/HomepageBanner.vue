<template>
  <section>
    <!-- Template for page image. -->
    <div
      class="homepage-banner"
      :style="{
        backgroundImage: 'url(' + banner.image.url + ')',
      }"
    ></div>

    <!-- Template for page title. -->
    <h2 class="banner-title">
      {{ $prismic.asText(banner.title) }}
    </h2>

    <!-- Template for page tag. -->
    <p class="banner-description">{{ $prismic.asText(banner.tagline) }}</p>

    <prismic-link class="banner-button" :field="banner.button_link">
      {{ $prismic.asText(banner.button_label) }}
    </prismic-link>
  </section>
</template>

<script>
export default {
  props: ["banner"],
  name: "homepage-banner",
};
</script>

<style lang="scss" scoped>
.homepage-banner {
  height: 250px;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
