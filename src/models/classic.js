import {HTTP} from '../utils/http'

class ClassicModel extends HTTP{
  getLatest(sCallback){
    this.request({
      url: 'classic/latest',
      success: res => {
        sCallback(res)
        this._setLatestIndex(res.data.index)
      }
    })
  }

  getClassic(index, nextOrPrevious, sCallback){
    // 缓存 localStorage
    let key = nextOrPrevious == 'next' ? this._getKey(index + 1) : this._getKey(index - 1);
    let classic = JSON.parse(localStorage.getItem(key))
    if(!classic){
      this.request({
        url: `classic/${index}/${nextOrPrevious}`,
        success: res => {
          localStorage.setItem(this._getKey(res.data.index), JSON.stringify(res.data))
          sCallback(res.data)
        }
      })
    }else{
      sCallback(classic)
    }

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
