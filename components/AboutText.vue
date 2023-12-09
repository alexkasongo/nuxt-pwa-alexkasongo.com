<template>
  <div class="about">
    <p class="about__text">
      Hi, my name is
      <a class="about__link" href="#">Alex</a>
    </p>
    <p class="about__text">
      I am a Project
      <a class="about__link" href="#">Manager</a>
    </p>
    <p class="about__text">
      turning ideas into
      <a class="about__link" href="#">action,</a>
    </p>
    <p class="about__text">
      chaos into
      <a class="about__link" href="#">order.</a>
    </p>
    <p class="about__text">
      A master of, <a class="about__link" href="#">timelines</a>
    </p>
    <p class="about__text">
      a lover of success <a class="about__link" href="#">stories.</a>
    </p>
    <!-- <p class="about__text">
      Let's build something great
      <a class="about__link" href="#">together!</a>
    </p> -->
    <p class="about__text">
      <!-- <NuxtLink to="/archive">Portfolio</NuxtLink> -->
    </p>
  </div>
</template>

<script>
export default {
  name: "about-text",
  mounted() {
    this.animatAboutText();
    this.colorMode();
  },
  methods: {
    animatAboutText() {
      let tl = this.$gsap.timeline();

      tl.to(".about", {
        duration: 0.2,
        display: "block",
      })
        .from(".about__text", {
          duration: 0.75,
          y: 150,
          autoAlpha: 0,
          ease: "Power3.out",
          stagger: 0.2,
        })
        .to(".about__link", {
          duration: 0.75,
          background: "#009D3A",
          ease: "Power3.out",
          stagger: 0.1,
        })
        .from(".about__link", {
          duration: 0.3,
          background: "none",
          ease: "Power3.out",
          stagger: 0.08,
        });
    },
    colorMode() {
      let tl = this.$gsap.timeline();

      tl.from(
        "li",
        {
          duration: 0.75,
          x: 300,
          autoAlpha: 0,
          ease: "elastic.out(1, 1)",
          stagger: {
            each: 0.75,
            amount: 0.5,
          },
        },
        "+=2"
      );
    },
  },
};
</script>

<style lang="scss" scope>
// styles are inside scss component folder
</style>
