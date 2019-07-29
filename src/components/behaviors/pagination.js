const paginationBev = {
  data(){
    return{
      dataArray: [],
      total: null
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
    }
  }
}

export {paginationBev}
