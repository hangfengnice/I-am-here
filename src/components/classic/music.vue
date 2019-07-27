<template>
  <div class="index">
    <img :src="img" alt="">
    <img :src="playSrc" alt="">
    <img src="./images/music@tag.png" alt="">
    <span></span>
  </div>
</template>

<script>
import {behavior} from './mixin'

export default {
  name: "music",
  mixins: [behavior],
  data() {
    return {
      playing: false,
      pauseSrc: require("images/player@pause.png"),
      playSrc: require("images/player@play.png")
    };
  }
};
</script>

<style lang='scss' scoped>
</style>