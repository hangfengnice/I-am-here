<template>
  <div class="classic">
    <div class="header">
      <Episode class="episode" />
      <Like class="like" @like="onLike" :likeStatus="Boolean(likeStatus)" :likeCount="likeCount" />
    </div>

    <Movie :img='classic.image' :content='classic.content' v-if="classic.type == 100" />
    <Music :img='classic.image' :content='classic.content' v-if="classic.type == 200" />
    <Essay :img='classic.image' :content='classic.content' v-if="classic.type == 300" />

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

      console.log(res)
      // if(res.data){
      
      // this._getLikeStatus(res.data.id, res.data.type);
      // this.classic = res.data;
      // (this.likeStatus = res.data.like_status);
      // (this.likeCount = res.data.fav_nums);
      // this.likeStatus = true
      // this.likeCount = 42
      // }
    }
    )
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
      let index = this.classic.index;
      classicModel.getClassic(index, nextOrPrevious, res => {
        this._getLikeStatus(res.id, res.type);
        this.classic = res;
        this.latest = classicModel.isLatest(res.index);
        this.first = classicModel.isFirst(res.index);
      });
    },

    _getLikeStatus(artID, category) {
      likeModel.getClassicLikeStatus(artID, category, res => {
        (this.likeStatus = res.data.like_status);
        (this.likeCount = res.data.fav_nums);
      });
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