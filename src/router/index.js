import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

 const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, form, next) => {
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

export default router