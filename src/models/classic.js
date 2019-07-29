import {HTTP} from '../utils/http'

class ClassicModel extends HTTP{
  getLatest(){
   return this.request({
      url: 'classic/latest'
    })
  }

  getClassic(index, nextOrPrevious){
    // 缓存 localStorage
    return this.request({
      url: `classic/${index}/${nextOrPrevious}`
    })

  }

  isFirst(index){
    return index == 1 ? true : false
   }

  isLatest(index){
    let latestIndex = this._getLatestIndex()
    return latestIndex == index ? true : false
  }

  getMyFavor(){
    return this.request({
      url: '/classic/favor'
    })
  }
}

export {ClassicModel}
