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
            <div class="card__title">{{ item.name }}</div>
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
    <BackButton />
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
            "https://promotional-email.s3.us-west-2.amazonaws.com/main.png",
          link: "/html/promotional.html",
          about:
            "A promotional email for Bottega Veneta using HTML, SASS, & MJML Framework.",
          github: "https://github.com/alexkasongo",
          name: "Promotional"
        },
        {
          image:
            "https://transactional-email.s3.us-west-2.amazonaws.com/new.png",
          link: "/html/transactional.html",
          about:
            "A transactional email for Bottega Veneta using HTML, SASS, & MJML Framework.",
          github: "https://github.com/alexkasongo",
          name: "Transactional"
        },
        {
          image:
            "https://apple-landing-page.s3.us-west-2.amazonaws.com/product1.jpeg",
          link: "/apple",
          about: "Responsive Apple Landing page using HTML, & CSS.",
          github: "https://github.com/alexkasongo",
          name: "Landing-page"
        },
        {
          image:
            "https://entertainment-newsletter-email.s3.us-west-2.amazonaws.com/product1.png",
          link: "/html/newsletter.html",
          about:
            "A newsletter email for Pitchfork using HTML, SASS, & MJML Framework.",
          github: "https://github.com/alexkasongo",
          name: "Newsletter"
        }
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
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 700px;
  margin: auto;
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
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
  transition: 0.8s all ease-in-out;
  min-height: 285px;
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

// ##################
// @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap");
// * {
//   box-sizing: border-box;
//   padding: 0;
//   margin: 0;
// }

// body {
//   font-family: "Montserrat", sans-serif;
//   max-width: 700px;
//   height: 100%;
//   margin: 0px auto;

//   main {
//     height: 95%;
//     display: flex;
//     flex-direction: column;
//     padding: 5% 0px 0px;

//     .section-profile {
//       height: 35%;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       row-gap: 8px;

//       .profile-image {
//         img {
//           width: 100px;
//           border-radius: 10px;
//         }
//       }

//       .profile-name {
//         font-size: 16px;
//         font-weight: bold;
//       }

//       .profile-location {
//         font-size: 10px;
//         color: #a9a9a9;
//       }

//       .profile-stat {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         column-gap: 15px;
//         margin-top: 5px;

//         div {
//           width: 80px;
//           border-radius: 10px;
//           background: #e5e5e5;
//           display: grid;
//           place-items: center;
//           padding: 10px;

//           h5 {
//             font-size: 12px;
//             color: #4e5150;
//           }

//           p {
//             font-size: 10px;
//             color: #a9a9a9;
//           }
//         }
//       }
//     }

//     .section-gallery > div {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }
//     .section-gallery > div > img {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//       border-radius: 10px;
//     }

//     .section-gallery {
//       display: grid;
//       grid-gap: 15px;
//       grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//       grid-auto-rows: 200px;
//       grid-auto-flow: dense;
//       padding: 30px 0px;
//     }
//     .section-gallery .wide {
//       grid-column: span 2;
//     }
//     .section-gallery .tall {
//       grid-row: span 2;
//     }
//   }
// }

// @media screen and (max-width: 768px) {
//   body {
//     width: 95%;
//   }
// }
// @media screen and (max-width: 425px) {
//   body {
//     width: 95%;

//     main {
//       .section-gallery {
//         grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
//         grid-auto-rows: 100px;
//         padding: 30px 0px 0px;
//       }
//     }
//   }
// }
</style>
