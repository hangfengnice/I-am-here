<template>
  <div class="container">
    <img @click='onLeft' class="icon" :src="latest ? disLeftSrc : leftSrc" alt />
    <span class="title">{{title}}</span>
    <img @click='onRight' class="icon" :src="first ? disRightSrc : rightSrc" alt />
  </div>
</template>

<script>
export default {
  name: "navi",
  props: {
    latest: Boolean,
    first: Boolean
  },
  data() {
    return {
      disLeftSrc: require("./images/triangle.dis@left.png"),
      leftSrc: require("./images/triangle@left.png"),
      disRightSrc: require("./images/triangle.dis@right.png"),
      rightSrc: require("./images/triangle@right.png")
    };
  },
  computed: {
    lastest1(){
      let latest = this.$store.state.classic
    },
    first1(){

    },
    title(){
      return this.$store.state.classic.title
    }
  },
  components: {},
  methods: { 
    onLeft(e){
      if(!this.latest){
        this.$emit('left')
      }
    },
    onRight(e){
      if(!this.first){
        this.$emit('right')
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.container {
  width: 360px;
  height: 40px;
  background-color: #f7f7f7;
  border-radius: 3px;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.icon {
  height: 40px;
  width: 40px;
}
.title {
  font-size: 14px;
}
</style>  