<template>
  <section>
    <!-- Template for page image. -->
    <div
      class="homepage-banner"
      :style="{
        backgroundImage: 'url(' + banner.image.url + ')'
      }"
    ></div>

    <!-- Template for page title. -->
    <h2 class="banner-title">
      {{ $prismic.asText(banner.title) }}
    </h2>

    <!-- Template for page tagline. -->
    <p class="banner-description">{{ $prismic.asText(banner.tagline) }}</p>

    <prismic-link class="banner-button" :field="banner.button_link">
      {{ $prismic.asText(banner.button_label) }}
    </prismic-link>
  </section>
</template>

<script>
export default {
  props: ["banner"],
  name: "homepage-banner"
};
</script>

<style lang="scss" scoped>
.homepage-banner {
  height: 250px;
  background-size: contain;
  background-repeat: no-repeat;
}

// .banner-content
//   text-align: center

// .banner-title, .banner-description
//   width: 90%
//   max-width: 490px
//   margin-left: auto
//   margin-right: auto

// .banner-title
//   color: #ffffff
//   font-size: 70px
//   font-weight: 900
//   line-height: 70px

// .banner-button
//   background: #ffffff
//   border-radius: 7px
//   color: #484D52
//   font-size: 14px
//   font-weight: 700
//   padding: 15px 40px
//   &:hover
//     background: #c8c9cb
</style>
