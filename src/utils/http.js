import axios from 'axios'
import {config} from '../config'
import {Message} from 'element-ui'

const tips = {
  1: "抱歉,出现一个错误"
}

class HTTP {
  request(params){
    // url, data, method
    if(!params.method){
      params.method = "GET"
    }
    axios({
      url:  '/api' + params.url,
      method: params.method,
      data: params.data,
      headers: {
        'content-type': "application/json",
        "appkey": config.appkey
      }
    })
    .then(res => {
      let code = res.status.toString()
      if(code.startsWith('2')){
        params.success && params.success(res)
        Message({
          type: "success",
          message: "信息获取成功", 
        })
      }
    },
      err => {
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
