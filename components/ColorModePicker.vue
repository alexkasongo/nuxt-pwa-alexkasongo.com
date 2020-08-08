<template>
  <div class="color-mode">
    <ul>
      <li
        class="color-mode__click"
        v-for="color of colors"
        :key="color"
        @click="$colorMode.preference = color"
      >
        {{ color }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colors: ["system", "light", "dark", "sepia"]
    };
  }
};
</script>

<style lang="scss" scope>
.color-mode {
  padding: 100px;
  &__click {
    cursor: pointer;
    width: max-content;
  }
}
</style>
