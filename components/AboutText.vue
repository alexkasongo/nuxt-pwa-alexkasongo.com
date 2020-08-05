<template>
  <div class="about">
    <p class="about__text">
      Hi, my name is <a class="about__link" href="#">Alex</a>
    </p>
    <p class="about__text">
      I’m a front-end <a class="about__link" href="#">engineer</a>,
    </p>
    <p class="about__text">
      passionate for the <a class="about__link" href="#">web</a>,
    </p>
    <p class="about__text">
      responsive <a class="about__link" href="#">design</a>,
    </p>
    <p class="about__text">
      &amp; <a class="about__link" href="#">typography</a>
    </p>
    <p class="about__text">
      <nuxt-link to="/archive" class="logo">Archive</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "about-text"
};
</script>

<style></style>
