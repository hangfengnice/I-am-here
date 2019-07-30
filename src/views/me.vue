<template>
  <div class="me_container">
    <h2>readme</h2>
    <section class="artice">
      <h4>{{article.title}}</h4>
      <div class="article_routes">
        <router-link
          v-for="(item, index) of article.routes"
          :key="index"
          :to="item.path"
          class="tab-item"
        >
          <div class="tab-item-lable">{{item.title}}</div>
        </router-link>
      </div>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "me",
  data() {
    return {
      article: {
        title: "项目重难点",
        routes: [
          {
            title: "组件的封装",
            path: "/me/http"
          },
          {
            title: "Promise",
            path: "/me/promise"
          },
          {
            title: "滑动",
            path: "/me/scroll"
          },
          {
            title: "slot",
            path: "/me/slot"
          }
        ]
      }
    };
  }
};
</script>

<style lang='scss' scoped>
.me_container {
  padding-top: 66px;
  h2 {
    font-size: 24px;
    margin-bottom: 4px;
    text-align: center;
  }
  header {
    display: flex;
    padding-right: 200px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 6px;
    ul {
      display: flex;
      min-width: 150px;
      margin-top: 4px;
      li {
        margin-right: 6px;
      }
    }
  }
  .artice {
    padding-top: 10px;
    .article_routes {
      padding-top: 10px;
      display: flex;
      justify-content: space-around;
    }
  }
  .container-tabbar {
    border-top: 1px solid #c3c3c3;
    display: flex;
    position: fixed;
    bottom: 0;
    background: #fff;
    width: 550px;
    padding-top: 6px;
    justify-content: space-around;
    .tab-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .tab-item-icon {
        width: 24px;
        height: 24px;
        margin: 0 auto 5px;
        i {
          font-size: 1.4rem;
        }
      }
      .tab-item-label {
        color: inherit;
        font-size: 12px;
        line-height: 1;
      }
    }
  }
  a {
    text-decoration: none;
    color: #888;
  }
  .router-link-active {
    color: #20af0e;
  }
}
</style>