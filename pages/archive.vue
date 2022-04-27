<template>
  <div class="archive--container">
    <ul class="cards">
      <li class="cards__item" v-for="(item, i) in cards" :key="i">
        <div class="card">
          <NuxtLink :to="{ path: `${item.link}` }" target="_blank">
            <div
              class="card__image"
              v-bind:style="{
                'background-image': 'url(' + item.image + ')'
              }"
            ></div>
          </NuxtLink>
          <div class="card__content">
            <NuxtLink :to="{ path: `${item.link}` }" target="_blank">
              <div class="card__title">{{ item.name }}</div>
            </NuxtLink>
            <p @click="showMe(item.link)" class="card__text">
              {{ item.about }}
            </p>
            <div @click="openGithub(item.github)" class="card__title openUrl">
              github
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!-- <BackButton /> -->
  </div>
</template>

<script>
import BackButton from "~/components/BackButton.vue";
export default {
  components: {
    BackButton
  },
  data() {
    return {
      html: "<p>Hello Aleko</p>",
      cards: [
        {
          image:
            "https://portfolio-email-screenshots.s3.us-west-2.amazonaws.com/promotional-email.png",
          link: "/html/promotional.html",
          about:
            "A promotional email for Bottega Veneta using HTML, SASS, & MJML Framework.",
          github:
            "https://github.com/alexkasongo/promotional-email/tree/master",
          name: "Promotional"
        },
        {
          image:
            "https://portfolio-email-screenshots.s3.us-west-2.amazonaws.com/transactional-email.png",
          link: "/html/transactional.html",
          about:
            "A transactional email for Bottega Veneta using HTML, SASS, & MJML Framework.",
          github: "https://github.com/alexkasongo/transactional-email",
          name: "Transactional"
        },
        {
          image:
            "https://portfolio-email-screenshots.s3.us-west-2.amazonaws.com/newsletter-email.png",
          link: "/html/newsletter.html",
          about:
            "A newsletter email for Pitchfork using HTML, SASS, & MJML Framework.",
          github: "https://github.com/alexkasongo/newsletter-email",
          name: "Newsletter"
        },
        {
          image:
            "https://portfolio-email-screenshots.s3.us-west-2.amazonaws.com/apple-landing-page+1.png",
          link: "/apple",
          about: "Responsive Apple Landing page using HTML, & CSS.",
          github:
            "https://github.com/alexkasongo/nuxt-pwa-alexkasongo.com/blob/master/pages/apple.vue",
          name: "Landing-page"
        }

        // {
        //   image: "https://via.placeholder.com/800",
        //   link: "/bottega",
        //   about: "A scroll magic landing page.",
        //   github: "https://github.com/alexkasongo",
        //   name: "Gsap"
        // }
      ]
    };
  },
  mounted() {
    // this.html = <div>Hello Aleko you made it work!</div>
    console.log(`archive.vue - 8 - archive page works`);
  },
  methods: {
    goToStaticPage() {
      this.$router.push("/html/newsletter.html");
      console.log(`archive.vue - 24 - 😊`);
    },
    showMe(data) {
      console.log(`archive.vue - 76 - 🌊`, data);
    },
    openGithub(url) {
      window.open(url);
    }
  }
};
</script>

<style lang="scss" scope>
.archive--container {
  margin: 50px 0px;
  @media (max-width: 450px) {
    margin: 50px 0px 100px 0px;
  }
}
.btn {
  background-color: white;
  border: 1px solid #cccccc;
  color: #696969;
  padding: 0.5rem;
  text-transform: lowercase;
}
.btn--block {
  display: block;
  width: 100%;
}
.cards {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  height: calc(100vh - 100px);
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    height: unset;
  }
}
.cards__item {
  display: flex;
  padding: 10px;
  width: 100%;
}
@media (min-width: 40rem) {
  .cards__item {
    width: 50%;
  }
}
@media (min-width: 56rem) {
  .cards__item {
    width: 50%;
  }
}
.card {
  width: 100%;
  background-color: white;
  // box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
}
.card__image:hover {
  transform: scale(1.1);
}
// .card:hover .card__image {
//   transform: scale(1.1);
// }
.card__content {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 10px;
  z-index: 1;
  background: #fff;
}
.card__image {
  background-position: top center left;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
  transition: 0.8s all ease-in-out;
  min-height: 65vh;
}
.card__image::before {
  content: "";
  display: block;
  padding-top: 56.25%;
}
@media (min-width: 40rem) {
  .card__image::before {
    padding-top: 66.6%;
  }
}
.card__title {
  color: #000;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.card__text {
  flex: 1 1 auto;
  line-height: 1.5;
  color: black;
  margin-bottom: 20px;
}
.openUrl {
  cursor: pointer;
}
</style>
