/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2023-06-27 09:43:35
 * @Description: Do not edit
 * @LastEditors: Liu Yang
 * @LastEditTime: 2025-05-09 10:42:59
 * @FilePath: \spd-weather-guard\src\store\map\layer.ts
 */
import { acceptHMRUpdate, defineStore } from 'pinia'
import { store, pinia } from '@/store/index'

export const useLayerStore = defineStore('layer', {
  state: () => ({
    selectedBaseLayer: ''
  }),
  getters: {},
  actions: {}
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLayerStore, import.meta.hot))
}
