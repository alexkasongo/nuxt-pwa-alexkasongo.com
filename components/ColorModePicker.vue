<template>
  <div class="color-mode">
    <ul class="color-mode__modes">
      <li
        :style="setActiveColor"
        class="color-mode__click"
        v-for="color of colors"
        :key="color"
        @click="$colorMode.preference = color"
      >
        <!-- :class="{ change_color: scrollPosition > 50 }" -->
        <div :class="getClasses(color)">
          {{ color }}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colors: ["system", "light", "dark", "sepia"],
      scrollPosition: null,
    };
  },
  created() {
    this.setActiveRouteName();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    getClasses(color) {
      // Does not set classes on SSR when preference is system (because we don't know the preference until client-side loads)
      if (this.$colorMode.unknown) {
        return {};
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value,
      };
    },
    setActiveRouteName() {
      // set active route name
      this.ActiveRouteName = this.$route.fullPath;
      // set active color if active route name is the same as the route name
      if (
        this.ActiveRouteName === "/page/archive" ||
        this.ActiveRouteName === "/page/me"
      ) {
        this.setActiveColor = "backgroundColor: #000;";
      } else {
        this.setActiveColor = "";
      }
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  watch: {
    // keep watch of route changes to and from. Us this to set active background color of current page
    $route(to, from) {
      this.setActiveRouteName();
    },
  },
};
</script>

<style lang="scss" scope>
// Change on scroll
.change_color {
  display: none;
}
// Change on scroll

.color-mode {
  // writing-mode: vertical-rl;
  // transform: rotate(180deg);
  // position: fixed;
  // left: 20px;
  // top: 4rem;
  // height: 90px;
  z-index: 2;
  &__click {
    cursor: pointer;
    width: max-content;
    @include custom-text-two($size: 20px);
    margin: 0 0px 0 5px;
    height: max-content;
  }
}

.preferred {
  transition: 0.3s ease-in;
}
.selected {
  transition: 0.3s ease-in;
}

.preferred::after {
  content: "●";
  color: var(--color-primary);
}
.selected::after {
  content: "●";
  color: var(--color-primary);
}
</style>
