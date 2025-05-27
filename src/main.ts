/*
 * @Description:
 * @Author: Liu Yang
 * @Date: 2023-03-09 17:13:20
 * @LastEditTime: 2025-05-26 09:48:34
 * @LastEditors: Liu Yang
 * @FilePath: \shenfei-escort-guarantee\src\main.ts
 */

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
//ElementPlus配置为中文
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@/assets/style/animate/animate.min.css'
import '@/assets/style/index.scss'

import VueCesium from 'vue-cesium'
import 'vue-cesium/dist/index.css'

import App from './App.vue'
import { store, pinia } from '@/store/index'
import { setupRouter } from './router'

//适配rem 以1920宽度为基准设置跟标签的font-size。 1920下font-size为10px；即：1rem=10px
;(function (doc, win) {
  const docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      const clientWidth = docEl.clientWidth
      if (!clientWidth) return
      // console.log(10 * (clientWidth / 1920) + 'px')
      docEl.style.fontSize = 10 * (clientWidth / 1920) + 'px'
    }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(VueCesium)
app.use(pinia)
// 安装初始化路由
setupRouter(app)
app.mount('#app')
