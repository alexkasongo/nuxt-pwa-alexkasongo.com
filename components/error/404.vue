<template>
  <div>
    <h1>404</h1>
    <span>Not found</span>
  </div>
</template>
<script>
export default {
  name: "error-404",
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  font-size: 16px;
  user-select: none;
  background-image: url("https://media.giphy.com/media/l3q2K5jinAlChoCLS/source.gif");
}

h1 {
  color: transparent;
  font-size: 4rem;
  margin: 0;
  -webkit-text-stroke: 2px white;
}
</style>
