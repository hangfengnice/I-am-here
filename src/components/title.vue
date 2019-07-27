<template>
  <div class="container">
    <span class="title">坐看云起时</span>
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
  width: 550px;
  margin-top: 2px;
  .title{
    flex: 1;
    text-align: center;
    padding-left: 62px;
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