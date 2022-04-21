<template>
  <div class="about">
    <p class="about__text">
      Hi, my name is
      <a class="about__link" href="#">Alex</a>
    </p>
    <p class="about__text">
      I am an Email
      <a class="about__link" href="#">Developer</a>
    </p>
    <p class="about__text">
      whose passionate for the
      <a class="about__link" href="#">web</a>.
    </p>
    <p class="about__text">
      I manage, build, test, and
      <a class="about__link" href="#">deliver</a>
    </p>
    <p class="about__text">
      transactional, and marketing <a class="about__link" href="#">emails</a>
    </p>
    <p class="about__text">
      using HTML, CSS and <a class="about__link" href="#">modern</a>
    </p>
    <p class="about__text">
      email <a class="about__link" href="#">frameworks</a>.
    </p>
    <p class="about__text">
      <NuxtLink to="/archive">portfolio</NuxtLink>
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
