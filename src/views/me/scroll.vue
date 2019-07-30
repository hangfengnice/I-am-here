<template>
  <div class="wrapper">
      <h3 class='title'>{{title}}</h3>
      <span v-for='(item, index) of list' :key='index'>{{item}}</span>
      <a href="http://www.ruanyifeng.com/blog/2009/09/find_element_s_position_using_javascript.html">阮老师的博文</a>
  </div>
</template>

<script>
export default {
  name: "scroll",
  data(){
    return{
      title: "scroll 部分",
      list: [
        "该方面使用不多,推荐下方链接 @ @"
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
  align-items: center;
  .title{
    margin-bottom: 30px;
  }
  span{
    margin-bottom: 14px;
  }
  a{
    color: lightblue;
  }
}
</style>