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
    // let key = nextOrPrevious == 'next' ? this._getKey(index + 1) : this._getKey(index - 1);
    // let classic = JSON.parse(localStorage.getItem(key))
    // if(!classic){
     
    // }else{
    //   sCallback(classic)
    // }

  }

  isFirst(index){
    return index == 1 ? true : false
   }

  isLatest(index){
    let latestIndex = this._getLatestIndex()
    return latestIndex == index ? true : false
  }

  _setLatestIndex(index){
    localStorage.setItem('latest',index)
  }

  _getLatestIndex(){
   return localStorage.getItem('latest')
  }

  _getKey(index){
    let key = 'classic' + index
    return key
  }
}

export {ClassicModel}
