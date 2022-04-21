<template>
  <div class="about">
    <p class="about__text">
      Hi, my name is
      <a class="about__link" href="#">Alex</a>
    </p>
    <p class="about__text">
      I’m an Email
      <a class="about__link" href="#">Developer</a>
    </p>
    <p class="about__text">
      passionate for the
      <a class="about__link" href="#">web</a>.
    </p>
    <p class="about__text">
      <NuxtLink to="/archive">archive</NuxtLink>
    </p>
    <!-- <p class="about__text">new archive button</p> -->
  </div>
</template>

<script>
export default {
  name: "about-text",
  mounted() {
    // console.log(`AboutText.vue - 43 - 🔥`, this.$store.state.menu.menu_links);
  }
};
</script>

<style lang="scss" scope></style>
