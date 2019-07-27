<template>
  <div class="container">
    <i class="iconfont icon-weibiaoti- dash"></i>
    <span class="computer">computer</span>
    <i class="iconfont icon-wifi wifi"></i>
    <span class='time'>{{time}}</span>
    <span class='num'>100%</span>
    <i class="iconfont icon-dianchi charge"></i>
  </div>
</template>

<script>
import { setInterval, clearInterval } from "timers";
export default {
  name: "appheader",
  data(){
    return{
      time: "",
      timer: null
    }
  },
  created(){
    this.timeNow()
  },
  methods: {
    timeFormat(timeNow) {
      let time = new Date(timeNow);
      let hour = time.getHours();
      let min = time.getMinutes();
      hour = hour < 10 ? "0" + hour : hour;
      min = min < 10 ? "0" + min : min;
      this.time =  hour + ":" + min;
    },
    timeNow(){
      clearInterval(this.timer)
      this.timer = null
      this.timeFormat(new Date())
      this.timer = setInterval(this.timeNow,10*1000)
    }
  }
};
</script>

<style lang='scss' scoped>
.container {
  display: flex;
  align-items: center;
  width: 550px;
  .dash{
    font-size: 30px;
    padding-right: 10px;
  }
  .computer{
    padding-bottom: 5px;
    padding-right: 10px;
  }
  .time{
    flex: 1;
    text-align: center;
    padding-right: 64px;
  }
  .wifi{
    margin-bottom: 5px;
    font-size: 20px;
  }
  .num{
    padding-top: 5px;
    padding-right: 10px;
  }
  .charge{
    padding-top: 5px;
    font-size: 24px;
  }
}
</style>