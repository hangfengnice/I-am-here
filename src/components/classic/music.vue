<template>
  <div class='container'>
    <img class='classic-img' :src="img" alt="">
    <img class='player-img' :src="playSrc" alt="">
    <img class='tag' src="./images/music@tag.png" alt="">
    <span class='content'>{{content}}</span>
  </div>
</template>

<script>
import {behavior} from './mixin'

export default {
  name: "music",
  mixins: [behavior],
  props: {
    src:String
  },
  data() {
    return {
      
      playing: false,
      pauseSrc: require("./images/player@pause.png"),
      playSrc: require("./images/player@play.png")
    };
  }
};
</script>

<style lang='scss' scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.classic-img{
  width: 222px;
  height: 222px;
  margin-top: 40px;
  border-radius: 50%;
}
.player-img{
  width: 60px;
  height: 60px;
  position: relative;
  bottom: 140px;
}
.tag{
  width: 22px;
  height: 64px;
  position: relative;
  bottom: 80px;
  right: 150px;
}

</style>