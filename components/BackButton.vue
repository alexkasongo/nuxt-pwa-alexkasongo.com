<template>
  <div class="mode-toggle" @click="$router.go(-1)">Back</div>
</template>
<script>
export default {
  name: "BackButton",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scope>
.mode-toggle {
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  position: fixed;
  left: 20px;
  top: 45vh;
  @include button;
  background-color: #000;
  color: var(--color-primary);
  z-index: 2;
}
// .mode-toggle::first-letter {
//   text-transform: capitalize;
// }
.mode-toggle::before {
  content: "←";
  margin: 0 0 10px 0;
}
</style>
