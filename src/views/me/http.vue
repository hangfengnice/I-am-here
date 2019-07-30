<template>
  <div class="wrapper">
      <h3 class='title'>{{title}}</h3>
      <span v-for='(item, index) of list' :key='index'>{{item}}</span>
  </div>
</template>

<script>
export default {
  name: "http",
  data(){
    return {
      title: "杂谈组件注意点",
      list: [
        "1. 组件的封装大小",
        "2. 组件的调用时机(父调用还是组件自己调用)",
        "3. 参数 (父传参 还是 组件自己私有)"
      ]
    }
  }
};
</script>

<style lang='scss' scoped>
.wrapper {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  padding-left: 150px;
  .title{
    margin-left: 80px;
    margin-bottom: 30px;
  }
  span{
    margin-bottom: 14px;
  }
}
</style>