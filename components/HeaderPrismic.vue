<template>
  <header class="site-header">
    <p
      v-if="$store.state.menu === 'Please create a menu document'"
      class="logo"
    >
      {{ $store.state.menu }}
    </p>
    <nuxt-link to="/" class="logo">{{
      $prismic.asText($store.state.menu.title)
    }}</nuxt-link>

    <nav>
      <ul class="site-header__ul">
        <li v-for="menuLink in $store.state.menu.menu_links" :key="menuLink.id">
          <prismic-link :style="activeColor" :field="menuLink.link">{{
            $prismic.asText(menuLink.label)
          }}</prismic-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header-prismic",
  data() {
    return {
      test: "Aleko 👨🏾‍💻",
      activeColor: ""
    };
  },
  mounted() {
    console.log(`HeaderPrismic.vue - 29 - 🌱`, this.$route);
    if (this.$route.fullPath === "/page/blog") {
      this.activeColor = "backgroundColor: #8efe11;";
    }
  }
};
</script>

<style lang="scss" scoped></style>
