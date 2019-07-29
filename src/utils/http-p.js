import axios from 'axios'
import {config} from '../config'
import {Message} from 'element-ui'

const tips = {
  1: "抱歉,出现一个错误"
}

class HTTP {
  // 传参的明确
  request({url, data={}, method="GET"}){
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method)
    })
  }
  _request(url, resolve, reject, data={}, method="GET"){
    axios({
      url:  '/api' + url,
      method,
      headers: {
        'content-type': "application/json",
        "appkey": config.appkey
      },
      data
    })
    .then(res => {
      console.log(res)
      const code = res.status.toString()
      if(code.startsWith('2')){
        resolve(res.data)
      }
    },
      err => {
        reject()
        this._show_error(err)
    }) 
  }

  _show_error(err){
    Message({
      type: "error",
      title: "小提示",
      message: err,
      duration: 2000,
    })
  }
}

export {HTTP}
