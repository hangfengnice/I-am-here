<template>
  <div class="preview-container">
    <div class="head">
      <Tag :text="typeText" class="tag" />
      <Like class="like" :readonly="true" :likeStatus="true" :likeCount="classic.fav_nums" />
    </div>

    <img
      :class="{'music-img': classic.type == 200,'other-img': classic.type != 200}"
      :src="classic.image"
      alt
    />
    <div class="text">{{classic.content}}</div>
  </div>
</template>

<script>
import Tag from "../components/tag";
import Like from "../components/like";

export default {
  name: "preview",
  props: {
    classic: Object
  },
  data() {
    return {
      typeText: ""
    };
  },
  watch: {
    classic: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          let typeText = {
            100: "电影",
            200: "音乐",
            300: "句子"
          }[newVal.type];
          this.typeText = typeText;
        }
      },
      deep: true
    }
  },
  components: {
    Tag,
    Like
  }
};
</script>

<style lang='scss' scoped>
.preview-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 210px;
  background-color: #fff;
  .head {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    .tag {
      margin-left: 16px;
      margin-top: -2px;
      height: 22px;
      width: 36px;
      font-size: 14px;
      background-color: #f7f7f7;
    }
    .like {
      margin-top: 2px;
    }
  }
  .music-img {
    border-radius: 50%;
    width: 160px;
    height: 160px;
    margin: 16px auto;
  }
  .other-img {
    width: 100%;
    height: 160px;
  }
  .text {
    padding: 30px;
    font-size: 13px;
    height: 40px;
    color: #666666;
    overflow: hidden;
  }
}
</style>