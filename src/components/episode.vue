<template>
  <div class="container">
    <div class="index-container">
      <span class='plain' >No.</span>
      <span class='index'>{{index}}</span>
      <span class='line'></span>
    </div>
    <div class="date-container">
      <span class='month'>{{month}}</span>
      <span class='year'>{{year}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "episode",
  props: {
    classic: Object
  },
  data() {
    return {
      months: [
        "一月","二月","三月","四月","五月","六月",
        "七月","八月","九月","十月","十一月","十二月"
      ],
      month: "",
      year: ""
    };
  },
  created() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();

    this.year = year;
    this.month = this.months[month];
  },
  computed: {
    index () {
      const index = this.classic.index
      return index < 10 ? "0" + index : index;
    }
  }
};
</script>

<style lang='scss' scoped>
.container{
  height: 35px;
  display: inline-flex;
  .index-container{
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
  .plain{
    font-size: 16px;

  }
  .index{
    font-size: 26px;
    line-height: 26px;
    font-weight: 800;
    margin-right: 7px;
  }
  .line{
    height: 20px;
    margin-right: 7px;
    border-left: 1px solid #000;
  }
  .date-container{
    display: flex;
    flex-direction: column;
  }
  .month{
    font-size: 12px;
    line-height: 12px;
  }
  .year{
    font-size: 10px;
  }
}
</style>