<template>
  <div id="app">
    <Header />
    <Title :back='true' />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header'
import Title from './components/title'

export default {
  name: "app",
  components: {
    Header,
    Title
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
