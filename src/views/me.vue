<template>
  <div class="me-container">
    <img src="../assets/images/my/my@bg.png" alt class="bg" />
    <div class="avatar avatar-position"></div>
    <div class="about-container">
      <div class="about-us">
        <img src="../assets/images/my/about.png" alt />
        <span class="description">关于我</span>
      </div>

      <div class="about-us">
        <span class="book-num">{{bookCount}}</span>
        <span class="description">喜欢的书</span>
      </div>
    </div>

    <div class="like-container">
      <img src="../assets/images/my/like.png" alt class="headline" />
      <div class="preview-container">
        <Preview v-for="(item, index) of classics" :key="index" :classic="item" class="preview"></Preview>
      </div>
    </div>
    <TabBar />
  </div>
</template>

<script>
import TabBar from "../components/tabBar";
import Preview from "../components/preview";
import { BookModel } from "../models/book";
import { ClassicModel } from "../models/classic";

const bookModel = new BookModel();
const classicModel = new ClassicModel();
export default {
  name: "index",
  data() {
    return {
      bookCount: 0,
      classics: null
    };
  },
  created() {
    this.getMyBookCount();
    this.getMyFavor();
  },
  methods: {
    getMyBookCount() {
      bookModel.getMyBookCount().then(res => {
        this.bookCount = res.count;
      });
    },
    getMyFavor() {
      classicModel.getMyFavor().then(res => {
        this.classics = res;
      });
    }
  },
  components: {
    TabBar,
    Preview
  }
};
</script>

<style lang='scss' scoped>
.me-container {
  padding-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .bg {
    width: 550px;
    height: 350px;
  }
  .avatar {
    background-color: #000;
    width: 60px;
    height: 60px;
    // overflow: hidden;
    border-radius: 50%;
    /* margin-bottom: 10rpx; */
  }
  .avatar-position {
    position: absolute;
    top: 224px;
  }
  .about-container {
    padding: 0 20px;
    width: 350px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    top: 300px;
    .about-us {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      img {
        width: 30px;
        height: 30px;
      }
      .description {
        margin-top: 3px;
        font-size: 14px;
        color: #999999;
      }
      .book-num {
        margin-top: 15px;
        font-size: 16px;
        color: #000000;
      }
    }
  }
  .like-container {
    margin-top: 14px;
    width: 100%;
    margin-top: -8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    .headline {
      margin-top: 16px;
      width: 60px;
      height: 26px;
    }
    .preview-container {
      margin-top: 15px;
      display: flex;
      flex-direction: row;
      padding: 0 15px;
      flex-wrap: wrap;
      justify-content: space-between;
      .preview {
        margin-bottom: 12px;
      }
    }
  }
}
</style>