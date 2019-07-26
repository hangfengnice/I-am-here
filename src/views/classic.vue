<template>
  <div class="classic">
    <Like  @like='onLike' />
    <Movie />
  </div>
</template>

<script>
import Like from '../components/like'
import Movie from '../components/movie'
import {ClassicModel} from '../models/classic'
import {LikeModel} from '../models/like'

let classicModel = new ClassicModel()
let likeModel = new LikeModel()


export default {
  name: "classic",
  components: {
    Like,
    Movie
  },
  data(){
    return {
      classic: null
    }
  },
  mounted(){
    classicModel.getLatest(res => {
      console.log(res.data)
      this.classic = res.data && res.data
      this.$store.dispatch('getClassic', res.data)
    })
    
  },
  methods: {
    onLike(e){
      likeModel.like(e, this.classic.id, this.classic.type)
    }
    
  }
};
</script>

<style lang='scss' scoped>

</style>