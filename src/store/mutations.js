
export const mutations = {
  [types.SET_USER](state, user){
    if(user)state.user = user
    else state.user = {}
  },
  [types.SET_TARGET_USER](state, targetUser){
    if(targetUser)state.targetUser = targetUser
    else state.targetUser = {}
  }
}