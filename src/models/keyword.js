import {HTTP} from '../utils/http'

class KeywordModel extends HTTP{
  key = 'q'
  maxLength = 10
  getHistory(){
    const words = JSON.parse(localStorage.getItem(this.key))
    if(!words){
      return []
    }
    return words
  }

  getHot(){
    return this.request({
      url: '/book/hot_keyword'
    })
  }

  addToHistory(keyword){
    let words = this.getHistory()
    console.log(words)
    const has = words.includes(keyword)
    if(!has){
      const length = words.length
      if(length >= this.maxLength){
        words.pop()
      }
      words.unshift(keyword)
      localStorage.setItem(this.key, JSON.stringify(words))
    }
  }
}

export {KeywordModel}
