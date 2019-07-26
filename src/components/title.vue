<template>
  <div class="container">
    <i v-if='back' class="iconfont icon-left-wide back"></i>
    <span class="title">小样</span>
    <div class='title_icon'>
      <i class="iconfont icon-sandian dash"></i>
      <i class="iconfont icon-quan circle"></i>
    </div>
  </div>
</template>

<script>
import { setInterval, clearInterval } from "timers";
export default {
  name: "apptitle",
  props: {
    back: Boolean
  },
  data() {
    return {};
  }
};
</script>

<style lang='scss' scoped>
.container {
  display: flex;
  align-items: center;
  margin-top: 5px;
  .title{
    flex: 1;
    text-align: center;
    padding-left: 40px;
  }
  .back{
    font-size: 22px;
    width: 22px;
  }
  .dash{
    font-size: 22px;
    padding-right: 18px;
  }
  .circle{
    font-size: 20px;
    padding-right: 2px;
  }
}
</style>