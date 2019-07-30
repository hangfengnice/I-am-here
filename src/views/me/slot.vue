<template>
  <div class="wrapper">
    <h3 class="title">{{title}}</h3>
    <span v-for="(item, index) of list" :key="index">{{item}}</span>
    <a href="https://cn.vuejs.org/v2/api/#slot">vue slot</a>
  </div>
</template>

<script>
export default {
  name: "me_slot",
  data() {
    return {
      title: "插槽尬聊",
      list: ["slot 个人也用的不熟, 以下链接直达官网"]
    };
  }
};
</script>

<style lang='scss' scoped>
.wrapper {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    margin-bottom: 30px;
  }
  span {
    margin-bottom: 14px;
  }
  a {
    color: lightblue;
  }
}
</style>