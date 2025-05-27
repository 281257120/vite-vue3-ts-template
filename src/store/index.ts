/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-08-26 17:00:10
 * @LastEditTime: 2025-05-26 09:44:29
 * @LastEditors: Liu Yang
 * @Description:
 * @FilePath: \shenfei-escort-guarantee\src\store\index.ts
 */
import { createPinia } from 'pinia'
import { systemStore } from './system/index'
import { mapStore } from './map/index'
//pina持久化存储插件
// import piniaPersist from 'pinia-plugin-persist'
export const pinia = createPinia()
// pinia.use(piniaPersist)
/**
 * 项目全局 store。
 * 组件内使用不需要传 pinia，组件外使用需要传 pinia。
 */
export const store = {
  system: {
    ...systemStore
  },
  map: {
    ...mapStore
  }
}
