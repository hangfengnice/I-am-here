
module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/api': {
      target: "http://bl.7yue.pro/v1",
      ws: true,
      changeOrigin: true,
      pathRewrite:{
        '/api':''
      }
      }
    }
 
  }
}