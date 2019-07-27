<template>
  <div class='container-tabbar'>
    <router-link v-for="(item, index) of data" :key="index"  :to="item.path" class="tab-item">
      <div class="tab-item-icon">
        <i :class="'iconfont ' + item.icon "></i>
      </div>
      <div class="tab-item-lable">{{item.title}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      data: [
        { title: "流行", icon: "icon-liuxing", path: "/classic" },
        { title: "书籍", icon: "icon-shuji", path: "/book" },
        { title: "喜欢", icon: "icon-me", path: "/me" },
      ]
    };
  }
};
</script>

<style scoped lang='scss'>

.container-tabbar{
  display: flex;
  position: fixed;
  background: #fff;
  bottom: 0;
  width: 550px;
  justify-content: space-around;
  .tab-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.tab-item {
  display: block;
  padding: 7px 0;
  flex: 1;
}
.tab-item-icon {
  width: 24px;
  height: 24px;
  margin: 0 auto 5px;
}
.tab-item-icon i {
  font-size: 1.3rem;
}
.tab-item-label {
  color: inherit;
  font-size: 12px;
  line-height: 1;
}
a {
  text-decoration: none;
  color: #888;
}
.router-link-active {
  color: #20af0e;
}
</style>
