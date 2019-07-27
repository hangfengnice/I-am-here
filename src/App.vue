<template>
  <div id="app">
    <div class="wrap">
      <Header />
      <Title :back="true" />
    </div>

    <keep-alive>
      <router-view />
    </keep-alive>

  </div>
</template>

<script>
import Header from "./components/header";
import Title from "./components/title";
import { ClassicModel } from "./models/classic";

const classicModel = new ClassicModel();

export default {
  name: "app",
  components: {
    Header,
    Title
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .wrap {
    position: fixed;
    height: 55px;
    width: 100%;
    background-color: #fff;
    z-index: 1;
  }
  .content {
    margin-top: 55px;
  }
}
</style>
