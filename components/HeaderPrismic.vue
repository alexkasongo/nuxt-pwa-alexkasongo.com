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
          <prismic-link :style="setActiveColor" :field="menuLink.link">{{
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
      if (this.ActiveRouteName === "/page/blog") {
        this.setActiveColor = "backgroundColor: #8efe11;";
      }
    }
  },
  watch: {
    // keep watch of route changes to and from.
    $route(to, from) {
      this.setActiveRouteName();
    }
  }
};
</script>

<style lang="scss" scoped></style>
