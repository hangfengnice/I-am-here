<template>
  <div class="search_container">
    <div class="header">
      <div class="search-container">
        <img src="./images/search.png" alt class="icon" />
        <input
          @keyup.enter="onConfirm"
          v-model="inputValue"
          placeholder="书籍名"
          type="text"
          class="bar"
          autofocus
        />
        <img @click="onDelete" src="./images/cancel.png" alt class="cancel-img" />
      </div>
      <div @click="onCancel" class="cancel">取消</div>
    </div>

    <div v-if="!searching">
      <div class="history">
        <div class="title">
          <div class="chunk"></div>
          <span>历史搜索</span>
        </div>
        <div class="tags">
          <Tag
            @tapping="onConfirm"
            class="tag"
            v-for="(item, index) of historyWords"
            :key="index"
            :text="item"
          />
        </div>
      </div>

      <div class="history hot-search">
        <div class="title">
          <div class="chunk"></div>
          <span>热门搜索</span>
        </div>
        <div class="tags">
          <Tag
            @tapping="onConfirm"
            class="tag"
            v-for="(item, index) of hotWords"
            :key="index"
            :text="item"
          />
        </div>
      </div>
    </div>

    <div class="books-container" v-else ref="sBook">
      <Book v-for="(item, index) of dataArray" :key="index" :book="item" class="book"></Book>
    </div>

    <LoadingCss class='loading' v-if='loading' />

  </div>
</template>

<script>
import { KeywordModel } from "../models/keyword";
import { BookModel } from "../models/book";
import { Loading } from "element-ui";
import { paginationBev } from "./behaviors/pagination";
import Tag from "../components/tag";
import Book from "../components/book";
import LoadingCss from '../components/loading'

const keywordModel = new KeywordModel();
const bookModel = new BookModel();
export default {
  mixins: [paginationBev],
  name: "search",
  data() {
    return {
      inputValue: "",
      historyWords: [],
      hotWords: [],
      searching: false,
      q: "",
      loading: false
    };
  },
  components: {
    Tag,
    Book,
    LoadingCss
  },
  created() {
    this.historyWords = keywordModel.getHistory();
    keywordModel.getHot().then(res => {
      this.hotWords = res.hot;
    });
  },
  methods: {
    onCancel() {
      this.$emit("cancel");
    },
    onConfirm(e) {
      this._showResult()
      this.initialize();
      const q = this.inputValue || e;
      let loadingInstance = Loading.service({
        text: `loading... ${q} 的相关作品 @..@.`
      });
      this.inputValue = q;
      bookModel.search(0, q).then(res => {
        this.$nextTick(() => loadingInstance.close());
        // this.dataArray = res.books;
        this.setMoreData(res.books);
        this.setTotal(res.total);
        keywordModel.addToHistory(q);
        this.q = q;
      });
    },
    _showResult(){
      this.searching = true;
    },
    _closeResult(){
      this.searching = false;
    },
    onDelete() {
      this._closeResult()
      this.inputValue = "";
    },
    handleScroll() {
      let clientHeight = document.documentElement.clientHeight;
      let clientBottom =
        this.$refs.sBook && this.$refs.sBook.getBoundingClientRect().bottom;
      if (clientBottom == clientHeight) {
        this.loadMore();
      }
    },
    loadMore() {
      if (!this.q) {
        return;
      }
      if (this._isLocked()) {
        return;
      }
      if (this.hasMore()) {
        this._locked()
        bookModel.search(this.getCurrentStart(), this.q).then(res => {
          this.setMoreData(res.books);
          this._unLocked()
        },() => {
          this._unLocked()  // 请求失败也解锁
        });
      }
    },

    _isLocked(){
      return this.loading ? true : false
    },

    _locked(){
      this.loading = true
    },

    _unLocked(){
      this.loading = false
    }

  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang='scss' scoped>
.search_container {
  padding-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  /* padding-left:15px; */ /* padding-right:15px; */
  .header {
    background-color: #ffffff;
    position: fixed;
    height: 40px;
    padding: 0 50px;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    flex-direction: row;
    width: 550px;
    align-items: center;
    z-index: 1;
    /* padding-left:15px;  */ /* padding-right:5px; */
    .search-container {
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      background-color: #f5f5f5;
      border-radius: 50px;
      margin-left: 12px;
      /* margin-left: */
      .icon {
        width: 16px;
        height: 16px;
        margin-left: 12px;
        margin-right: 8px;
      }
      .bar {
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        display: inline-block;
        height: 34px;
        /* width:100%; */
        width: 400px;
        font-size: 14px;
        outline: none;
        border: none;
        background-color: #f5f5f5;
      }
      .cancel-img {
        width: 16px;
        height: 16px;
        padding: 8px 12px;
      }
    }
    .cancel {
      line-height: 34px;
      width: 60px;
      /* margin-left:10px; */
      text-align: center;
      display: inline-block;
      border: none;
    }
  }
  .history {
    width: 450px;
    margin: 20px 0 10px 0;
    display: flex;
    font-size: 14px;
    margin-top: 95px;
    flex-direction: column;
    .tags {
      /* padding-left:15px; */
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      /* justify-content: flex-start;  */
      padding-left: 15px;
      .tag {
        margin-right: 10px;
        margin-top: 10px;
        /* padding-bottom: 10px; */ /* margin-right:6px; */
      }
    }
  }
  .hot-search {
    margin-top: 90px;
  }
  .books-container {
    width: 400px;
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // padding: 0 9px 0 90rpx;
    justify-content: space-between;
    .book {
      margin-bottom: 15px;
    }
  }
}

.title {
  line-height: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin-left:100px; */
}

.loading {
  margin: 50rpx 0 50rpx 0;
}

.loading-center {
  position: absolute;
  top: 50%;
  left: 50%;
}

.empty-tip {
  display: inline-block;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  /* left: 275rpx; */
}

.chunk {
  height: 15px;
  width: 5px;
  background-color: #000;
  display: inline-block;
  margin-right: 10px;
}

.test {
  background-color: #000;
}
</style>