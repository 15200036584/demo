import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/home/home';
import Mine from '../view/mine/mine';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },{
      path:'/home',
      component:Home
    },{
      path:'/mine',
      component:Mine
    }
  ]
})
