<template>
  <div class="classic">
    <div class="header">
      <Episode class="episode" />
      <Like class="like" @like="onLike" :likeStatus="Boolean(likeStatus)" :likeCount="likeCount" />
    </div>

    <Movie :img="classic.image" :content="classic.content" v-if="classic.type == 100" />
    <Music :img="classic.image" :content="classic.content" v-if="classic.type == 200" />
    <Essay :img="classic.image" :content="classic.content" v-if="classic.type == 300" />

    <Navi @left="onNext" @right="onPrevious" class="navi" :first="first" :latest="latest" />

    <TabBar />
  </div>
</template>

<script>
import Like from "../components/like";
import Movie from "../components/classic/movie";
import Music from "../components/classic/music";
import Essay from "../components/classic/essay";
import Navi from "../components/navi";
import TabBar from "../components/tabBar";
import Episode from "../components/episode";
import { ClassicModel } from "../models/classic";
import { LikeModel } from "../models/like";

let classicModel = new ClassicModel();
let likeModel = new LikeModel();

export default {
  name: "classic",
  components: {
    Like,
    Movie,
    Episode,
    Navi,
    Music,
    Essay,
    TabBar
  },
  data() {
    return {
      first: false,
      latest: true,
      likeCount: 0,
      likeStatus: false,
      classic: {}
    };
  },
  created() {
    classicModel.getLatest().then(res => {
      console.log(res);
      this._setLatestIndex(res.index);
      // 缓存
      let key = this._getKey(res.index);
      localStorage.setItem(key, JSON.stringify(res));

      this._getLikeStatus(res.id, res.type);
      this.classic = res;
      this.likeStatus = res.like_status;
      this.likeCount = res.fav_nums;
    });
  },
  methods: {
    onLike(e) {
      likeModel.like(e, this.classic.id, this.classic.type);
    },
    onNext(e) {
      this._updateClassic("next");
    },
    onPrevious(e) {
      this._updateClassic("previous");
    },

    _updateClassic(nextOrPrevious) {
      // 取得当前编号
      let index = this.classic.index;
      // key 确定 key
      let key =
        nextOrPrevious == "next" ? this._getKey(index + 1) : this._getKey(index - 1);
      let classic = JSON.parse(localStorage.getItem(key));
      if (!classic) {
        classicModel.getClassic(index, nextOrPrevious).then(res => {
          // 将新的值存入缓存
          localStorage.setItem(this._getKey(res.index),JSON.stringify(res))
          this._getLikeStatus(res.id, res.type);
          this.classic = res;
          this.latest = classicModel.isLatest(res.index);
          this.first = classicModel.isFirst(res.index);
        });
      } else {
        // 缓存中读取
        this._getLikeStatus(classic.id, classic.type);
        this.classic = classic;
        this.latest = this.isLatest(classic.index);
        this.first = this.isFirst(classic.index);
      }
    },

    _getLikeStatus(artID, category) {
      likeModel.getClassicLikeStatus(artID, category)
      .then(res => {
        this.likeStatus = res.like_status;
        this.likeCount = res.fav_nums;
      });
    },

    // 存到localstorage
    // 把当前期刊 值 存到 Storage
    _setLatestIndex(index) {
      localStorage.setItem("latest", index);
    },
    // 取值
    _getLatestIndex() {
      let index = localStorage.getItem("latest");
      return index;
    },

    _getKey(index) {
      let key = "classic-" + index;
      return key;
    },
    // 当前是什么位置
    isFirst(index) {
      return index == 1 ? true : false;
    },
    isLatest(index) {
      let latestIndex = this._getLatestIndex();
      return index == latestIndex ? true : false;
    }
  }
};
</script>

<style lang='scss' scoped>
.classic {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 55px;
}
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  margin-top: 4px;
  padding-top: 4px;
  margin-bottom: -6px;
  width: 100%;
  .episode {
    padding-left: 6px;
  }
  .like {
    margin-top: -6px;
    margin-right: 4px;
  }
}
.navi {
  position: absolute;
  bottom: 66px;
}
</style>