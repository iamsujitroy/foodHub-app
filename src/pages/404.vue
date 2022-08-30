<template>
  <NavBar />
  <div>
    <span>Oops!</span>
    <h1>404 - Page Not Found</h1>
  </div>
</template>

<script>
// import components here
import NavBar from "../components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
<style scoped>
span {
  font-size: 7rem;
}
#app > div:nth-child(2) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red;
}
#app > div:nth-child(2) > h1:nth-child(2) {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 6px;
}
</style>
