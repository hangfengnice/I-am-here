<template>
  <div class="book_com_container">
    <div class="head">
      <img :src="book.image" alt="this a book image" />
      <span class="title">{{book.title}}</span>
      <span class="author">{{author}}</span>
    </div>
    <!-- 短评 -->
    <div class="sub-container">
      <span class="headline" v-if="comments.length > 0">短评</span>
      <span class="shadow" v-else>还没有短评</span>
      <div class="comment_container">
        <Tag class="com_tag" v-for="(item, index) of comments" :key="index" :text="item.content">
          <template v-slot:after>
            <span class="num">{{"+" + item.nums}}</span>
          </template>
        </Tag>
      </div>
    </div>
    <!-- 内容简介 -->
    <div class="sub-container">
      <span class="headline">内容简介</span>
      <div class="content" v-html="$options.filters.format(book.summary)"></div>
    </div>

    <!-- 书本信息 -->
    <div class="sub-container">
      <span class="headline">书本信息</span>
      <div class="detail-container">
        <div class="vertical description">
          <span>出版社</span>
          <span>出版年</span>
          <span>页数</span>
          <span>定价</span>
          <span>装帧</span>
        </div>

        <div class="vertical">
          <span>{{book.publisher}}</span>
          <span>{{book.pubdate}}</span>
          <span>{{book.pages}}</span>
          <span>{{book.price}}</span>
          <span>{{book.binding}}</span>
        </div>
      </div>
    </div>

    <!-- 输入短评 -->
    <div class="post-container" v-if="!posting">
      <div @click="onFakePost" class="post-fake">
        <span>输入短评</span>
      </div>
      <!-- like 组件 -->
      <div class="like-container">
        <Like @like="onLike" class="like" :likeStatus="Boolean(likeStatus)" :likeCount="likeCount" />
      </div>
    </div>

    <!-- 点击出现的区域 真正的评论框 -->
    <div class="posting-container" v-else>
      <div class="post-header">
        <span v-if="comments.length > 0">点击可以 +1</span>
        <span v-else>暂无标签</span>
        <span @click="onCancel" class="cancel">取消</span>
      </div>
      <div class="comment_container">
        <Tag
          @tapping="onTagPost"
          class="com_tag"
          v-for="(item, index) of limit(comments, 3)"
          :key="index"
          :text="item.content"
        >
          <template v-slot:after>
            <span class="num">{{"+" + item.nums}}</span>
          </template>
        </Tag>
      </div>
      <input
        @keyup.enter="onInputPost"
        v-model="inputValue"
        type="text"
        placeholder="评论最多12字符"
        class="post"
      />
    </div>
    <!-- mask 蒙层  -->
    <MaskFull v-if="posting" />
  </div>
</template>

<script>
import { BookModel } from "../models/book";
import { LikeModel } from "../models/like";
import { Loading } from "element-ui";
import Tag from "../components/tag";
import Like from "../components/like";
import MaskFull from "../components/mask";

const bookModel = new BookModel();
const likeModel = new LikeModel();
export default {
  name: "book-detail",
  data() {
    return {
      comments: [],
      book: {},
      author: "author",
      likeStatus: false,
      likeCount: 0,
      posting: false,
      inputValue: ""
    };
  },
  components: {
    Tag,
    Like,
    MaskFull
  },
  activated() {
    let loadingInstance = Loading.service({
      text: 'loading... @ @'
    });
    const bid = this.$route.params.bid;
    const detail = bookModel.getDetail(bid);
    const comments = bookModel.getComments(bid);
    const likeStatus = bookModel.getLikeStatus(bid);

    Promise.all([detail, comments, likeStatus]).then(res => {
      this.$nextTick(() => {
        // 以服务的方式调用的 Loading 需要异步关闭
        loadingInstance.close();
      });
      (this.book = res[0]),
        (this.author = res[0].author[0]),
        (this.comments = res[1].comments),
        (this.likeStatus = res[2].like_status),
        (this.likeCount = res[2].fav_nums);
    });
  },
  methods: {
    onLike(e) {
      likeModel.like(e, this.book.id, 400);
    },
    onFakePost() {
      this.posting = true;
    },
    onCancel() {
      this.posting = false;
    },
    limit(array, length) {
      return array.slice(0, length);
    },
    onTagPost(e) {
      this.onPost(e);
    },
    onInputPost() {
      this.onPost(this.inputValue);
    },
    onPost(val) {
      const comment = val;
      if (!comment) {
        return;
      }
      if (comment.length > 12) {
        this.$notify.warning({
          title: "温馨小提示",
          duration: 2000,
          message: "最多只能填写12个字符 @ @"
        });
        return;
      }
      this.$notify.success({
        title: "温馨小提示",
        duration: 2000,
        message: "信息提交中 请稍后"
      });

      bookModel.postComment(this.book.id, comment).then(res => {
        this.comments.unshift({
          content: comment,
          nums: 1
        });
        this.posting = false;
        this.$notify.success({
          title: "温馨小提示",
          duration: 2000,
          message: "信息添加成功 +1 @ @"
        });
      });
    }
  },
  filters: {
    format(val) {
      if (val) {
        // 向服务器请求数据 会有延迟 直接使用 会报错
        return val.replace(
          /\\n/g,
          "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        );
      }
      return "hello there is summary later";
    }
  }
};
</script>

<style lang='scss' scoped>
.book_com_container {
  padding-top: 55px;
  background-color: #f5f5f5;
  width: 550px;
  .head {
    background-color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      color: #2f2f2f;
      margin-top: 3px;
      margin-bottom: 3px;
      font-size: 16px;
      font-weight: 600;
    }
    img {
      width: 160px;
      height: 240px;
      box-shadow: 2px 2px 3px #e3e3e3;
    }

    .author {
      font-size: 14px;
      color: #999;
      /* margin-bottom: 30rpx; */
    }
  }

  .sub-container {
    width: 550px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12px;
    background-color: #fff;
    padding: 10px;
    .headline {
      font-size: 14px;
      font-weight: 600;
      color: #2f2f2f;
      margin-bottom: 12px;
    }
    .shadow {
      color: #999;
    }
    .comment_container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .com_tag {
        // z-index: 2;
        margin-right: 10px;
        margin-bottom: 10px;
        .num {
          margin-left: 4px;
          font-size: 14px;
          color: #aaa;
        }
      }
      /* 比较霸道 */
      .com_tag:nth-child(1) {
        background-color: #fffbdd;
      }

      .com_tag:nth-child(2) {
        background-color: #eefbff;
      }
    }
    .content {
      text-indent: 2rem;
      font-weight: 500;
    }
  }

  .detail-container {
    width: 100%;
    display: flex;
    padding-left: 80px;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 30px;
    font-size: 14px;
    color: #666;
    .vertical {
      display: flex;
      flex-direction: column;
    }
    .description {
      color: #999;
      margin-right: 12px;
    }
  }

  .post-container {
    height: 40px;
    box-shadow: 1px -1px 1px #e3e3e3;
    position: fixed;
    width: 550px;
    box-sizing: border-box;
    background-color: #fff;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    /* z-index: 99; */
    .post-fake {
      height: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 350px;
      border: 1px solid #999;
      border-radius: 15px;
      font-size: 13px;
      padding-left: 12px;
    }
    .like-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .like {
        margin-right: 16px;
        margin-top: 4px;
      }
    }
  }
  /* 下方输入框 positing */
  .posting-container {
    bottom: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width:690rpx; */
    background-color: #fff;
    width: 550px;
    box-sizing: border-box;
    z-index: 2;
    .post-header {
      width: 100%;
      border-bottom: 1px solid #f5f5f5;
      border-top: 1px solid #f5f5f5;
      height: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      text:first-child {
        font-size: 14px;
        color: #bbb;
      }
      .cancel {
        color: #666;
      }
    }
    .comment_container {
      width: 550px;
      padding: 16px 30px;
      .com_tag {
        margin-right: 8px;
        padding: 3px 3px;
      }
      .num {
        margin-left: 4px;
        font-size: 14px;
        color: #aaa;
      }
      .com_tag:nth-child(1) {
        background-color: #fffbdd;
      }

      .com_tag:nth-child(2) {
        background-color: #eefbff;
      }
    }
    .post {
      box-sizing: border-box;
      width: 450px;
      margin: 14px auto;
      height: 40px;
      background-color: #f5f5f5;
      border-radius: 15px;
      padding: 0 20px;
      outline: none;
      border: none;
    }
  }

  .share-btn {
    margin-top: 28rpx;
    margin-left: 10rpx;
  }

  .share {
    /* padding:10rpx; */
    width: 40rpx;
    height: 40rpx;
  }

  .post-header text {
    padding: 25rpx;
  }

  .detail-contaner {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 100rpx;
    font-size: 28rpx;
    color: #666;
  }

  .vertical {
    display: flex;
    flex-direction: column;
  }

  .vertical-1 {
    align-items: flex-end;
  }

  .description {
    color: #999;
    margin-right: 30rpx;
  }

  .tip {
    margin-top: 20rpx;
    width: 694rpx;
    height: 130rpx;
    margin-bottom: 30rpx;
  }
}
</style>
