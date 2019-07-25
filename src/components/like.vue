<template>
  <div @click="onLike" class="container">
    <img src="./images/like.png" alt />
    <span>9</span>
  </div>
</template>

<script>
export default {
  name: "like",
  methods: {
    onLike(e){
      console.log(e)
    }
  }
};
</script>

<style lang='scss' scoped>
.container {
  display: inline-flex;
  flex-direction: row;
  padding: 10px;
  image {
    width: 32px;
    height: 28px;
  }
  span {
    font-size: 24px;
    line-height: 24px;
    color: #bbb;
    position: relative;
    left: 6px;
    bottom: 10px;
  }
}
</style>