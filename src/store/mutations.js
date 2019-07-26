
export default {
  updatClassic(state, data){
    state.classic = data
  },
  changeLikeCount(state, data){
    state.classic.like_status = data.like_status
    state.classic.fav_nums = data.fav_nums
  }
}