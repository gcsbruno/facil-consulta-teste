<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
};
</script>

<style>
.h1 {
  font-family: "Comfortaa";
  src: local("Comfortaa"), url(./assets/fonts/Comfortaa-VariableFont_wght.ttf);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
