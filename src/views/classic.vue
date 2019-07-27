<template>
  <div class="classic">
    <div class="header">
      <Episode class='episode' />
      <Like class='like' @like='onLike' />
    </div>

    <Movie v-if='classic.type == 100' />
    <Music v-if='classic.type == 200' />
    <Essay v-if='classic.type == 300' />

    <Navi @left='onNext' @right='onPrevious' class='navi' :first='first' :latest='latest' />
  </div>
</template>

<script>
import Like from '../components/like'
import Movie from '../components/classic/movie'
import Music from '../components/classic/music'
import Essay from '../components/classic/essay'
import Navi from '../components/navi'
import Episode from '../components/episode'
import {ClassicModel} from '../models/classic'
import {LikeModel} from '../models/like'

let classicModel = new ClassicModel()
let likeModel = new LikeModel()

export default {
  name: "classic",
  components: {
    Like,
    Movie,
    Episode,
    Navi,
    Music,
    Essay
  },
  data(){
    return {
      first: false,
      latest: true,
    }
  },
   created(){
    classicModel.getLatest(res => {
      // this.classic = res.data && res.data
      this._getLikeStatus(res.data.id, res.data.type)
      this.$store.dispatch('getClassic', res.data)
    })
  },
  computed: {
    classic(){
     return this.$store.state.classic
    }
  },
  methods: {
    onLike(e){
      likeModel.like(e, this.classic.id, this.classic.type)
    },
    onNext(e){
      this._updateClassic('next')
    },
    onPrevious(e){
      this._updateClassic('previous')
    },

    _updateClassic(nextOrPrevious){
      let index = this.classic.index
      classicModel.getClassic(index, nextOrPrevious, res => {
        this._getLikeStatus(res.id, res.type)
        this.$store.commit('updateClassic', res)
        this.latest = classicModel.isLatest(res.index)
        this.first = classicModel.isFirst(res.index)
      })
    },

    _getLikeStatus(artID, category){
      likeModel.getClassicLikeStatus(artID, category, res => {
        this.$store.commit('changeLikeCount',{
          like_status : res.data.like_status,
          fav_nums : res.data.fav_nums
        })
      })
    }
  }
};
</script>

<style lang='scss' scoped>
.classic{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header{
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
  .episode{
    padding-left: 6px;
  }
  .like{
    margin-top: -6px;
    margin-right: 4px;
  }
}
.navi{
  position: absolute;
  bottom: 40px;
}

</style>