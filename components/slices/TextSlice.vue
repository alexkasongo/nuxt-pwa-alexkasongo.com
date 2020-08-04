<template>
  <prismic-rich-text
    class="text-slice"
    :class="'text-section-' + slice.slice_label"
    :field="slice.primary.rich_text"
  />
</template>

<script>
export default {
  props: ["slice"],
  name: "text-slice"
};
</script>

<style lang="scss" scoped></style>
