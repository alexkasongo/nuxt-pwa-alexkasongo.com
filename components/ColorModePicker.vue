<template>
  <div class="color-mode">
    <ul class="color-mode__modes">
      <li
        class="color-mode__click"
        v-for="color of colors"
        :key="color"
        @click="$colorMode.preference = color"
        :class="getClasses(color)"
      >
        {{ color }}
      </li>
      <!-- <ColorScheme placeholder="..." tag="span">
        Color mode: <b>{{ $colorMode.preference }}</b>
      </ColorScheme> -->
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colors: ["system", "light", "dark", "sepia"]
    };
  },
  methods: {
    getClasses(color) {
      // Does not set classes on ssr when preference is system (because we don't know the preference until client-side)
      if (this.$colorMode.unknown) {
        return {};
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      };
    }
  }
};
</script>

<style lang="scss" scope>
.color-mode {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  position: fixed;
  left: 20px;
  top: 4rem;
  height: 72px;
  z-index: 2;
  &__click {
    cursor: pointer;
    width: max-content;
    @include para;
  }
}

.preferred {
  transition: 2s ease-in-out;
}
.selected {
  transition: 2s ease-in-out;
}

.preferred::after {
  content: "●";
}
.selected::after {
  content: "←";
}
</style>
