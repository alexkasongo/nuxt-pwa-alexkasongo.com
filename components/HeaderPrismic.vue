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
      <prismic-link
        :style="setActiveColor"
        :field="$store.state.menu.menu_links[0].link"
        >{{ $store.state.menu.menu_links[0].link.slug }}</prismic-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  name: "header-prismic",
  data() {
    return {
      ActiveRouteName: "",
      setActiveColor: ""
    };
  },
  created() {
    this.setActiveRouteName();
  },
  methods: {
    setActiveRouteName() {
      // set active route name
      this.ActiveRouteName = this.$route.fullPath;
      // set active color if active route name is the same as the route name
      if (this.ActiveRouteName === "/page/me") {
        this.setActiveColor = "backgroundColor: #000;";
      }
    }
  },
  watch: {
    // keep watch of route changes to and from. Us this to set active background color of current page
    $route(to, from) {
      this.setActiveRouteName();
    }
  }
};
</script>

<style lang="scss" scoped>
// .site-header {
//   background-color: transparent;
// }
</style>
