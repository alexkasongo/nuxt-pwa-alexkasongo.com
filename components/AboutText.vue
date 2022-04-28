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
      <NuxtLink to="/archive">Portfolio</NuxtLink>
    </p>
    <!-- <p class="about__text">new archive button</p> -->
  </div>
</template>

<script>
export default {
  name: "about-text",
  mounted() {
    this.animatAboutText();
  },
  methods: {
    animatAboutText() {
      let tl = this.$gsap.timeline();

      tl.to(".about", {
        duration: 0.2,
        display: "block"
      })
        .from(".about__text", {
          duration: 0.75,
          y: 150,
          autoAlpha: 0,
          ease: "Power3.out",
          stagger: 0.5
        })
        .from(
          "li",
          {
            duration: 0.75,
            x: 300,
            autoAlpha: 0,
            ease: "elastic.out(1, 1)",
            stagger: {
              each: 0.75,
              amount: 0.5
            }
          },
          "+=0.25"
        );
    }
  }
};
</script>

<style lang="scss" scope>
.about {
  display: none;
}
</style>
