<template>
  <div @click="onLike" class="container">
    <img :src="like1 ? yesSrc : noSrc" alt />
    <span>{{count1}}</span>
  </div>
</template>

<script>
export default {
  name: "like",
  data(){
    return {
      count: 0,
      like: false,
      yesSrc: require('./images/like.png'),
      noSrc: require('./images/like@dis.png')
    }
  },
  created(){
    console.log()
  },
  computed: {
    like1(){
      let like = this.$store.getters.classic.like_status
      this.like = like
      return like
    },
    count1(){
      let count = this.$store.getters.classic.fav_nums
      this.count = count
      return count
    }
  },

  methods: {
    onLike(e){
      let count = this.count
      let like = this.like
      this.count = like ? count - 1 : count + 1
      this.like = !like
      this.$store.commit('changeLikeCount',{
        fav_nums: this.count,
        like_status: this.like
      })
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