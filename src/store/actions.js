

export default {
  setUser: ({commit},user) => {
    commit(types.SET_USER,user)
  },
  setTargetUser: ({commit},targetUser) => {
    commit(types.SET_TARGET_USER,targetUser)
  },
  
}
