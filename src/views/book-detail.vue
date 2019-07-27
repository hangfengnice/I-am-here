<template>
  <div class="book_com_container">
    <div class="head">
      <img :src="book.image || {}" alt />
      <span class="title">{{book.title}}</span>
      <span class="author">{{book.author[0]}}</span>
    </div>

    <div class="sub-container">
      <span class="headline">短评</span>
      <Tag v-for='(item, index) of comments.comments' :key='index' :text='item.content' />
    </div>
  </div>
</template>

<script>
import { BookModel } from "../models/book";
import { Promise } from "q";
import Tag from '../components/tag'

const bookModel = new BookModel();

export default {
  name: "book-detail",
  data() {
    return {
      comments: [],
      book: null,
      likeStatus: false,
      likeCount: 0
    };
  },
  components: {
    Tag
  },
  activated(e) {
    const bid = this.$route.params.bid;
    const detail = bookModel.getDetail(bid);
    const comments = bookModel.getComments(bid);
    const likeStatus = bookModel.getLikeStatus(bid);

    Promise.all([detail, comments, likeStatus]).then(res => {
      console.log(res);
      (this.book = res[0]),
        (this.comments = res[1].comments),
        (this.likeStatus = res[2].like_status),
        (this.likeCount = res[2].fav_nums);
    });
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
      margin-top: 6px;
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
  }

  .shadow {
    color: #999;
  }
  .comment-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .comment-container v-tag {
    margin-right: 15rpx;
    margin-bottom: 10rpx;
  }

  .content {
    text-indent: 58rpx;
    font-weight: 500;
  }

  .num {
    margin-left: 10rpx;
    font-size: 22rpx;
    color: #aaa;
  }

  /* 比较霸道 */
  /* .comment-container > v-tag:nth-child(1) > view{
  background-color: #fffbdd;
}

.comment-container > v-tag:nth-child(2) > view{
  background-color: #eefbff;
} */

  .ex-tag1 {
    background-color: #fffbdd !important;
  }
  .ex-tag2 {
    background-color: #eefbff !important;
  }

  .detail-container {
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

  .description {
    color: #999;
    margin-right: 30rpx;
  }

  .post-container {
    height: 100rpx;
    box-shadow: 1px -1px 1px #e3e3e3;
    position: fixed;
    width: 690rpx;
    background-color: #fff;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 30rpx;
    justify-content: space-between;
    /* z-index: 99; */
  }

  .post-fake {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60rpx;
    width: 460rpx;
    border: 1px solid #999;
    border-radius: 15px;
    font-size: 22rpx;
    padding-left: 20rpx;
  }

  .like {
    margin-right: 30rpx;
    margin-top: 10rpx;
  }

  .like-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    width: 100%;
    z-index: 999;
  }

  .like {
    margin-right: 30rpx;
    margin-top: 10rpx;
  }

  .like-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

  .posting-container .comment-container {
    width: 690rpx;
    padding: 0 30rpx;
  }

  .post {
    width: 690rpx;
    margin: 30rpx auto;
    height: 56rpx;
    background-color: #f5f5f5;
    border-radius: 15px;
    padding-left: 25rpx;
  }

  .post-header {
    width: 100%;
    border-bottom: 1px solid #f5f5f5;
    border-top: 1px solid #f5f5f5;
    height: 100rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .post-header > text:first-child {
    font-size: 28rpx;
    color: #bbb;
  }

  .cancel {
    color: #666;
  }

  .post-header text {
    padding: 25rpx;
  }

  .num {
    margin-left: 5px;
    font-size: 22rpx;
    color: #aaa;
  }

  .comment-container > tag-cmp:first-child view {
    background-color: #fffbdd;
  }

  /* .comment-container > tag-cmp:nth-child(2) view{
   background-color: #eefbff;
} */

  /* .tag view{
  border-radius: 15px;
} */

  .tag {
    margin-right: 15rpx;
    margin-bottom: 10rpx;
    border-radius: 15px !important;
  }

  .comment-container > tag-cmp:nth-child(2) view {
    background-color: #eefbff !important;
  }

  .posting-container .comment-container {
    padding: 40rpx 30rpx 0 30rpx;
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