<template>
  <div @click="onClick" class="book-container">
    <img :src="book.image" alt />
    <div class="description">
      <span class="title">{{book.title}}</span>
      <span class="author">{{book.author}}</span>
      <div class="foot">
        <span v-if='!show' class="footer">{{book.fav_nums}} 喜欢</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "com_book",
  props: {
    book: Object,
    show: Boolean
  },
  methods: {
    onClick(event) {
      const bid = this.book.id;
      this.$router.push(`/book-detail/${bid}`);
    }
  }
};
</script>

<style lang='scss' scoped>
.book-container {
  margin-top: 15px;
  display: flex;
  position: relative;
  box-shadow: 2px 2px 3px #e3e3e3;
  flex-direction: column;
  width: 160px;
  height: 240px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
  .description {
    width: 142px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    padding: 8px 8px 8px 10px;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    .title {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin-bottom: 3px;
    }

    .author {
      font-size: 10px;
      color: #999999;
      margin-top: -5rpx;
      margin-bottom: 5px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .foot {
      /* margin-top:3rpx; */
      font-size: 12px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
  }
}
</style>