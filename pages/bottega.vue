<template>
  <div class="bottega">
    <div class="blank"></div>
    <div class="wrapper">
      <div class="img1">
        <!-- <div class="img2"> -->
        <h2 class="title1">Lorem Ipsum<br />dolor sit amet.</h2>
        <h2 class="title2">Lorem Ipsum<br /><span>Dolor sit amet.</span></h2>
      </div>
    </div>
    <div class="wrapper2">
      <div class="img2">
        <!-- <h2 class="title1">Lorem Ipsum<br />dolor sit amet.</h2> -->
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
// import Archive from "~/pages/Archive.vue";

export default {
  mounted() {
    // this.startAnimations();
    this.animateOnScroll();
    this.animateWrapper2();
  },
  methods: {
    startAnimations: function() {
      const tl = this.$gsap;
      // gsap.to(".img1", { rotation: 27, x: 100, duration: 5 });

      // var tl = gsap.timeline();
      // var tl = gsap.timeline({ onUpdate: updatePercentage });

      tl.to(".img1", {
        rotation: 360,
        ease: "elastic",
        duration: 5
      });
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
    },
    animateOnScroll() {
      let tl = this.$gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".wrapper",
          pin: true, // pin the trigger element while active
          start: "top top", // when the top of the trigger hits the top of the viewport
          // end: "+=1000", // end after scrolling 500px beyond the start
          scrub: true // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          // markers: true
          // snap: {
          //   snapTo: "labels", // snap to the closest label in the timeline
          //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          //   ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
          // }
          // onUpdate: self => console.log("progress: 💚", self.progress) //like console log
        }
      });

      // add animations and labels to the timeline
      tl.addLabel("start")
        .from(".img1", { width: "60%", height: "60%" })
        // .from(".img1 p", { scale: 0.3, rotation: 45, autoAlpha: 0 })
        // .addLabel("color")
        // .from(".blank", { backgroundColor: "#009D3A" })
        .addLabel("zoom")
        .to(".img1", { width: "100%", height: "100%" })
        // .addLabel("showText")
        .to(".title1", { opacity: 1, left: "20%", duration: 1 })
        .addLabel("secondImage")
        .to(".img2", { height: "100%", bottom: 0, duration: 2 })
        .addLabel("end");
    },
    animateWrapper2() {
      let tl = this.$gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".wrapper2",
          pin: true, // pin the trigger element while active
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=1000", // end after scrolling 500px beyond the start
          scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          markers: true
          // snap: {
          //   snapTo: "labels", // snap to the closest label in the timeline
          //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          //   ease: "power1" // the ease of the snap animation ("power3" by default)
          // }
          // onUpdate: self => console.log("progress: 💚", self.progress) //like console log
        }
      });

      // add animations and labels to the timeline
      tl.addLabel("end").to(".img2", {
        width: "100%"
        // height: "100%"
        // scaleY: 0,
        // transformOrigin: "top"
      });

      // .addLabel("zoom")
      // .to(".img2", { width: "100%" });

      // .addLabel("secondImage")
      // .to(".img2", { height: "100%", bottom: 0, duration: 2 })
      // .addLabel("end");
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
.wrapper2 {
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
  top: 50%;
  left: -20%;
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
  width: 0%;
  height: 100%;
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
  color: #fff;
}
</style>
