const paginationBev = {
  data(){
    return{
      dataArray: [],
      total: null,
      noResult: false,
      loading: false
    }
  },
  methods: {
    setMoreData(dataArray){
      this.dataArray = this.dataArray.concat(dataArray)
    },

    getCurrentStart(){
      return this.dataArray.length
    },

    setTotal(total){ 
      this.total = total
      if(this.total == 0){
        this.noResult = true
      }
    },

    hasMore(){
      if(this.dataArray.length == this.total){
        return false
      }else{
        return true
      }
    },

    initialize(){
      this.dataArray = []
      this.total = null
      this.noResult = false
      this.loading = false
    },

    isLocked(){
      return this.loading ? true : false
    },

    locked(){
      this.loading = true
    },

    unLocked(){
      this.loading = false
    }

  }
}

export {paginationBev}
