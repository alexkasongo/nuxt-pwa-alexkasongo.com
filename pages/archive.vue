<template>
  <div class="archive--container">
    <ul class="cards">
      <li class="cards__item" v-for="(item, i) in cards" :key="i">
        <div class="card">
          <NuxtLink :to="{ path: `/html/${item.link}.html` }" target="_blank">
            <div
              class="card__image"
              v-bind:style="{
                'background-image': 'url(' + item.image + ')'
              }"
            ></div>
          </NuxtLink>
          <div class="card__content">
            <div class="card__title">{{ item.link }}</div>
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

    <main>
      <!-- <section class="section-profile">
        <div class="profile-image">
          <img
            src="https://vetri-suriya.web.app/devchallenges/my-gallery/profilePhoto.png"
            alt=""
          />
        </div>
        <h5 class="profile-name">Alex Kasongo</h5>
        <p class="profile-location">Edmonds, Washington, WA, 98026</p>
        <div class="profile-stat">
          <div class="post-stat">
            <h5>HTML</h5>
            <p>Posts</p>
          </div>
          <div class="follower-stat">
            <h5>CSS</h5>
            <p>Follower</p>
          </div>
          <div class="following-stat">
            <h5>MJML</h5>
            <p>Following</p>
          </div>
        </div>
      </section> -->

      <!-- <section class="section-gallery">
        <div>
          <img
            src="https://promotional-email.s3.us-west-2.amazonaws.com/main.png"
            alt=""
          />
        </div>
        <div class="wide">
          <img
            src="https://entertainment-newsletter-email.s3.us-west-2.amazonaws.com/product1.png"
            alt=""
          />
        </div>
        <div class="wide">
          <img
            src="https://transactional-email.s3.us-west-2.amazonaws.com/new.png"
            alt=""
          />
        </div>
        <div class="tall">
          <img
            src="https://vetri-suriya.web.app/devchallenges/my-gallery/photo_4.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://vetri-suriya.web.app/devchallenges/my-gallery/photo6.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://vetri-suriya.web.app/devchallenges/my-gallery/photo5.png"
            alt=""
          />
        </div>
      </section> -->
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      html: "<p>Hello Aleko</p>",
      cards: [
        {
          image:
            "https://promotional-email.s3.us-west-2.amazonaws.com/main.png",
          link: "promotional",
          about:
            "A promotional email for Bottega Veneta using HTML, SASS, & MJML Framework.",
          github: "https://github.com/alexkasongo"
        },
        {
          image:
            "https://transactional-email.s3.us-west-2.amazonaws.com/new.png",
          link: "transactional",
          about:
            "A transactional email for Bottega Veneta using HTML, SASS, & MJML Framework.",
          github: "https://github.com/alexkasongo"
        },
        {
          image:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-2022-gallery-3?wid=2824&hei=2400&fmt=jpeg&qlt=90&.v=1645810647598",
          link: "landing-page",
          about: "Responsive Apple Landing page by using HTML, & CSS.",
          github: "https://github.com/alexkasongo"
        },
        {
          image:
            "https://entertainment-newsletter-email.s3.us-west-2.amazonaws.com/product1.png",
          link: "newsletter",
          about:
            "A newsletter email for Pitchfork using HTML, SASS, & MJML Framework.",
          github: "https://github.com/alexkasongo"
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
  margin: 50px 115px;
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
