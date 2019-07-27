
export default {
   getClassic({commit},data){
     commit('updateClassic', data)
   },
   changeLikeCount({commit}, data){
     commit('changeLikeCount', data)
   }
}
