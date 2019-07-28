<template>
  <div @click="onLike" class="container">
    <img :src="like ? yesSrc : noSrc" alt />
    <span>{{count}}</span>
  </div>
</template>

<script>
export default {
  name: "like",
  props: {
    likeStatus: Boolean,
    likeCount: Number
  },
  data(){
    return {
      count: 0,
      like: false,
      yesSrc: require('./images/like.png'),
      noSrc: require('./images/like@dis.png')
    }
  },
  created(){
    // this.like = true
    // this.count = 40
  },
  methods: {
    onLike(e){
      let count = this.count
      let like = this.like
      this.count = like ? count - 1 : count + 1
      this.like = !like
      let behavior = this.like ? 'like' : 'cancel'
      this.$emit('like', behavior)
    }
  },
  
};
</script>

<style lang='scss' scoped>
.container {
  display: inline-flex;
  flex-direction: row;
  padding: 10px;
  img {
    width: 16px;
    height: 14px;
  }
  span {
    font-size: 14px;
    line-height: 14px;
    color: #bbb;
    position: relative;
    left: 4px;
    bottom: 4px;
  }
}
</style>