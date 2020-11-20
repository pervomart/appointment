<template>
  <div id="app">
    <make-appoinment />
  </div>
</template>

<script>
import MakeAppoinment from "./components/MakeAppoinment.vue";

export default {
  components: {
    MakeAppoinment,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ymap-container {
  height: 500px;
}
</style>
