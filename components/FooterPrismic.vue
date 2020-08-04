<template>
  <footer class="footer">
    <p
      v-if="$store.state.menu === 'Please create a menu document'"
      class="logo"
    >
      {{ $store.state.menu }}
    </p>
    <nuxt-link to="/" class="logo">{{
      $prismic.asText($store.state.menu.title)
    }}</nuxt-link>
    <a href="https://github.com/alexkasongo" target="_blank" rel="noopener">
      <img
        class="footer__logo"
        src="~assets/images/aleko.png"
        alt="Alex Kasongo"
      />
    </a>
    <nav>
      <ul class="site-header__ul">
        <li v-for="menuLink in $store.state.menu.menu_links" :key="menuLink.id">
          <prismic-link :field="menuLink.link">{{
            $prismic.asText(menuLink.label)
          }}</prismic-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "FooterPrismic"
};
</script>

<style lang="scss" scoped></style>
