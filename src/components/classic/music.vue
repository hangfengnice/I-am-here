<template>
  <div class="container">
    <img :class="{'classic-img': true, rotation:playing}" :src="img" alt />
    <img class="player-img" @click="onPlay" :src="!playing ? playSrc : pauseSrc" alt />
    <img class="tag" src="./images/music@tag.png" alt />
    <audio ref='audio' v-show='playing' class='audio' :src="src" controls>
      
    </audio>
    <span class="content">{{content}}</span>
  </div>
</template>

<script>
import { behavior } from "./mixin";

export default {
  name: "music",
  mixins: [behavior],
  props: {
    src: String
  },
  data() {
    return {
      playing: false,
      pauseSrc: require("./images/player@pause.png"),
      playSrc: require("./images/player@play.png")
    };
  },
  created(){
    console.log(this.src)
  },
  methods: {
    onPlay() {
      this.playing = !this.playing;
      if(this.playing){
        this.$refs.audio.play()
      }else{
        this.$refs.audio.pause()
      }
      
    }
  },
};
</script>

<style lang='scss' scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.classic-img {
  width: 222px;
  height: 222px;
  margin-top: 40px;
  border-radius: 50%;
}
.player-img {
  width: 60px;
  height: 60px;
  position: relative;
  bottom: 140px;
}
.tag {
  width: 22px;
  height: 64px;
  position: relative;
  bottom: 80px;
  right: 150px;
}
.audio{
  height: 45px;
  position: absolute;
  bottom: 240px;
}

.rotation{
  transform: rotate(360deg);
  animation: rotation 12s linear infinite;
}

@keyframes rotation{
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
}
</style>