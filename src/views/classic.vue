<template>
  <div class="classic">
    <div class="header">
      <Episode class='episode' />
      <Like class='like' @like='onLike' />
    </div>
    <Movie />
    <Navi @left='onNext' @right='onPrevious' class='navi' :first='first' :latest='latest' />
  </div>
</template>

<script>
import Like from '../components/like'
import Movie from '../components/classic/movie'
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
    Navi
  },
  data(){
    return {
      first: false,
      latest: true
    }
  },
   created(){
    classicModel.getLatest(res => {
      // this.classic = res.data && res.data
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
        // console.log(res)
        this.$store.commit('updateClassic', res.data)
        this.latest = classicModel.isLatest(res.data.index)
        this.first = classicModel.isFirst(res.data.index)
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