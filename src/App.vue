<template>
  <div id="app" v-bind:style="{backgroundColor: color}">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&display=swap");

h1,
h2,
h3
 {
  font-family: "Comfortaa", cursive;
  color: #483698;
}

body {
  background-color: #FFe766;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
