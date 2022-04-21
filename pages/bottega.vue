<template>
  <div class="bottega">
    <div class="blank"></div>
    <div class="wrapper">
      <div class="img1">
        <h2 class="title1">Lorem Ipsum<br /><span>Dolor sit amet.</span></h2>
      </div>
      <div class="img2">
        <h2 class="title2">Lorem Ipsum<br />dolor sit amet.</h2>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  mounted() {
    this.startAnimations();
  },
  methods: {
    startAnimations: function() {
      gsap.to(".img1", {
        scrollTrigger: ".img1", // start the animation when ".box" enters the viewport (once)
        x: 500
      });

      // var tl = gsap.timeline();
      // var tl = gsap.timeline({ onUpdate: updatePercentage });

      // tl.to(".img1", {
      //   rotation: 360,
      //   duration: 5,
      //   ease: "elastic",
      //   position: 0
      // });
      // tl.to(".title1", { opacity: 1, duration: 5 }, 1);

      // const scene = this.$scrollmagic
      //   .scene({
      //     triggerElement: ".wrapper",
      //     triggerHook: 0,
      //     duration: "300%"
      //   })
      //   .setPin(".wrapper")
      //   .setTween(tl);
      // .setTween(tl);

      // this.$scrollmagic.addScene(scene);

      // function updatePercentage() {
      //   tl.progress();
      // }
    }
  }
};
</script>

<style lang="scss" scope>
// .bottega {
//   margin: 0px 100px;
// }

.blank {
  width: 100%;
  height: 100vh;
  // position: relative;
  // display: flex;
  // justify-content: center;
  // align-items: flex-end;
  // overflow: hidden;
}

.wrapper {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  // background: red;
}

.img1 {
  background-image: url("https://www.highsnobiety.com/static-assets/thumbor/MzdSwWdFi4SFdlxuNf-yeJYvdHw=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2019/11/08161003/bottega-veneta-pre-spring-2020-campaign-05.jpg");
  width: 60%;
  height: 60%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.title1 {
  position: absolute;
  top: 60%;
  left: 20%;
  font-size: 32px;
  transform: translate(-50%, -50%);
  opacity: 0;
}

.title1 span {
  font-size: 24px;
  font-weight: bold;
  display: block;
}

.img2 {
  background-image: url("https://www.abouther.com/sites/default/files/2019/08/07/main_-_bottega_veneta.jpg");
  width: 100%;
  height: 0%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.title2 {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 60px;
  // transform: translate(-50%, -300%);
  transform: translate(-50%, -50%);
  transform-origin: center center;
  text-align: center;
  line-height: 6 0px;
  // color: #fff;
}
</style>
