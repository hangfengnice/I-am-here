# I am here

## 项目启动

```javascript
// npm
git clone git@github.com:hangfengnice/I-am-here.git
// 安装依赖
npm i
// 启动
npm start
```

## 参数

- node v10.16.0
- npm v6.10.2
- vue-cli 3.9.2

## 项目细节

- 实时显示时间
  - setInterval

  ```javascript
  timeNow(){
      clearInterval(this.timer)  // 清除定时器  
      this.timer = null
      this.timeFormat(new Date())
      this.timer = setInterval(this.timeNow,10*1000)
    }
  ```

- img 动态引入
 `<img :src="false ? require('./images/like.png') : require('./images/like@dis.png')" alt />`

- axios

- mixins
  - 解决重复问题

- 封装函数 理解 变相的注释 易读

- Promise

- flex 布局 && 绝对定位 fixed 定位

- 组件传参
  - `this.$router.push({ name: "book-detail", params: { bid } });`
  - 组件中接受 `this.$route`

- keep-alive
  - activated(每一次页面进入都会执行)
