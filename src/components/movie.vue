<template>
  <div class="container">
    <img class="class-img" :src="img" alt />
    <img class="tag" src="./images/movie@tag.png" alt />
    <span class="content">{{content}}</span>
  </div>
</template>

<script>
export default {
  name: "movie",
  data() {
    return {};
  },
  computed: {
    img(){
      return this.$store.getters.classic.image
    },
    content(){
      return this.$store.getters.classic.content
    }
  }
};
</script>

<style lang='scss' scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .class-img {
    width: 550px;
    height: 350px;
  }
  .tag {
    width: 23px;
    height: 72px;
    position: relative;
    right: 240px;
    bottom: 30px;
  }
  .content {
    font-size: 18px;
    max-width: 420px;
  }
}
</style>