<template>
  <section>
    <!-- Slices block component -->
    <!-- <slices-block :slices="slices" /> -->
    <main>
      <section class="section-profile">
        <div class="profile-image">
          <img
            src="https://images.prismic.io/alexkasongo-com/7f687cba-a8e5-4954-baac-d45bb6752e80_aleko.jpg?auto=compress,format"
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
      </section>

      <!-- <section class="section-gallery">
        <div>
          <img
            src="https://promotional-email.s3.us-west-2.amazonaws.com/main.png"
            alt=""
          />
        </div>
        <div class="wide">
          <img
            src="https://images.prismic.io/alexkasongo-com/7f687cba-a8e5-4954-baac-d45bb6752e80_aleko.jpg?auto=compress,format"
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
  </section>
</template>

<script>
// Imports for Prismic Slice components
import SlicesBlock from "~/components/SlicesBlock.vue";

export default {
  name: "page",
  components: {
    SlicesBlock
  },
  data() {
    return {
      title: "Alex Kasongo",
      description:
        "Hi, my name is Alex Kasongo. I am a front-end engineer, passionate for the web & solution archicture",
      info: ""
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: "description", name: "description", content: this.description }
      ]
    };
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const document = (await $prismic.api.getByUID("page", params.uid)).data;
      console.log(`_uid.vue - 101 - 🔥`, document.page_content[0].items);
      // this.info.push(document.page_content[0].items);

      return {
        // Set slices as variable
        slices: document.page_content
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style lang="scss" scoped>
// ##################
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap");
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  // font-family: "Montserrat", sans-serif;
  // max-width: 700px;
  // height: 100%;
  // margin: 0px auto;

  main {
    height: 95%;
    display: flex;
    flex-direction: column;
    padding: 5% 0px 0px;
    max-width: 700px;
    margin: 0px auto;

    .section-profile {
      height: 35%;
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 8px;

      .profile-image {
        img {
          width: 100px;
          border-radius: 10px;
        }
      }

      .profile-name {
        font-size: 16px;
        font-weight: bold;
      }

      .profile-location {
        font-size: 10px;
        color: #a9a9a9;
      }

      .profile-stat {
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 15px;
        margin-top: 5px;

        div {
          width: 80px;
          border-radius: 10px;
          background: #e5e5e5;
          display: grid;
          place-items: center;
          padding: 10px;

          h5 {
            font-size: 12px;
            color: #4e5150;
          }

          p {
            font-size: 10px;
            color: #a9a9a9;
          }
        }
      }
    }

    .section-gallery > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .section-gallery > div > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }

    .section-gallery {
      display: grid;
      grid-gap: 15px;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-auto-rows: 200px;
      grid-auto-flow: dense;
      padding: 30px 0px;
    }
    .section-gallery .wide {
      grid-column: span 2;
    }
    .section-gallery .tall {
      grid-row: span 2;
    }
  }
}

@media screen and (max-width: 768px) {
  body {
    width: 95%;
  }
}
@media screen and (max-width: 425px) {
  body {
    width: 95%;

    main {
      .section-gallery {
        grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
        grid-auto-rows: 100px;
        padding: 30px 0px 0px;
      }
    }
  }
}
</style>
