export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Alex Kasongo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Hi, my name is Alex Kasongo. I am a front-end engineer, passionate for the web, responsive design & typography"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lato:400,700,900,400italic,700italic"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#000" },

  /*
   ** Global CSS
   */
  css: ["~assets/scss/app.scss"],
  // css: ["@/assets/css/resetr.css", "@/assets/css/common.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // add pwa functionality
    "@nuxtjs/pwa",
    // mofules for full static before `nuxt export` (coming in v2.12)
    "@/modules/static",
    "@/modules/crawler",
    // https://prismic-nuxt.js.org/
    "@nuxtjs/prismic",
    // styles
    "@nuxtjs/style-resources",
    // dark mode
    ["@nuxtjs/color-mode"]
  ],
  styleResources: {
    scss: ["./assets/scss/*.scss"]
  },

  prismic: {
    endpoint: "https://alexkasongo-com.cdn.prismic.io/api/v2",
    linkResolver: "@/plugins/link-resolver",
    htmlSerializer: "@/plugins/html-serializer"
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // to transform link with <nuxt-link> for the htmlSerializer
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    }
  },

  generate: {
    fallback: true // Netlify reads a 404.html, Nuxt will load as an SPA
  }
  // Comment out if you need to test PWA
  // server: {
  //   port: 3000,
  //   host: "0.0.0.0"
  // }
};
