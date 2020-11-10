/*
 * @Author: your name
 * @Date: 2020-11-10 16:16:15
 * @LastEditTime: 2020-11-10 16:58:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \下拉\dome\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home/index.vue'
import Detail from '@/view/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: Home
    }, {
      path: '/detail',
      component: Detail
    }
  ]
})
