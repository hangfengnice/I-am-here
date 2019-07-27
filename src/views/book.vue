<template>
  <div>
    <div class="container">
      <div class="header">
        <div class="box">
          <img src="../../src/assets/images/icon/search.png" alt />
          <span>搜索书籍</span>
        </div>
      </div>

      <div class="sub-container">
        <img src="../../src/assets/images/book/quality.png" alt class="head-img" />
        <div class="books-container">
          <Book class='com-book' v-for="(item,index) of books" :key="index" :book="item || {}" />
        </div>
      </div>
    </div>
    <TabBar />
  </div>
</template>

<script>
import TabBar from "../components/tabBar";
import Book from "../components/book";
import { BookModel } from "../models/book";

let bookModel = new BookModel();
export default {
  name: "tabbar",
  components: {
    TabBar,
    Book
  },
  data() {
    return {
      books: []
    };
  },
  created() {
    bookModel.getHotList().then(res => {
      console.log(res);
      this.books = res;
    });
  }
};
</script>

<style lang='scss' scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 55px;
  width: 550px;
  .header {
    position: fixed;
    background-color: #ffffff;
    height: 46px;
    width: 550px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 2;
    .box {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      background-color: #f5f5f5;
      height: 34px;
      width: 100%;
      color: #999999;
      img {
        margin-right: 10px;
        width: 20px;
        height: 20px;
        margin-bottom: -2px;
      }
    }
  }
  .sub-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    margin-top: 35px;
    /* z-index:0;  */
    .head-img {
      width: 64px;
      height: 20px;
      margin-top: 20px;
    }
    .books-container {
      margin-top: -8px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 0 54px;
      justify-content: space-around;
    }
    .com-book{
      margin-bottom: 8px;
    }
  }
}
</style>