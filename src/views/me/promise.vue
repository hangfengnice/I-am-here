<template>
  <div class="wrapper">
      <h3 class='title'>{{title}}</h3>
      <span v-for='(item, index) of list' :key='index'>{{item}}</span>
  </div>
</template>

<script>
export default {
  name: "promise",
  data(){
    return{
      title: "promise 以及 async await",
      list: [
        "1. 避免函数回调",
        "2. 若使用 async await 更美观(会阻塞线程)"
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