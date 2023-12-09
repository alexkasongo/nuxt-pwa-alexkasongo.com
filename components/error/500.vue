<template>
  <div class="error-500">
    <h1>This page doesn’t exist</h1>
    <p>The link you clicked on may be broken or no longer exist.</p>
  </div>
</template>
<script>
export default {
  name: "error-500",
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
