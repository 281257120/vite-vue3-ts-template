<!--
 * @Description: vscode默认配置
 * @Author: Liu Yang
 * @Date: 2025-05-23 16:37:54
 * @LastEditTime: 2025-05-26 11:57:29
 * @LastEditors: Liu Yang
 * @FilePath: \shenfei-escort-guarantee\src\components\common-qe-map\Index.vue
-->
<template>
  <div :id="`map-${domId}`" class="leaflet-com"></div>
</template>

<script setup lang="ts">
import { onMounted, computed, nextTick, reactive, ref, watch, PropType } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import {
  getJSON,
  CimissStationFeatureProvider,
  TracingService,
  GridDataGLFillMode,
  IGridDataOptions,
  consts,
  ensureGridDataOptions,
  init,
  predefinedImageTiles,
  resourceService,
  BitmapColorScaleGL,
  getJSONZip
} from '@quickearth/core'
import { LMap, LPixelLayer, createTileLayer } from '@quickearth/leaflet'

defineOptions({
  name: ''
})

console.log(LMap)

const props = defineProps({
  center: {
    type: Array as unknown as PropType<[number, number]>,
    default: () => [138.9, 22.4]
  },
  zoom: {
    type: Number,
    default: 6
  },
  domId: {
    type: String,
    default: '1'
  }
})

const emits = defineEmits(['mapReady'])
let map = null

const initMap = () => {
  map = new LMap(`map-${props.domId}`, {
    crs: L.CRS.EPSG3857,
    zoomControl: false,
    preferCanvas: true,
    zoomSnap: 0, // 设置为0.5，允许更细的缩放步进
    minZoom: 3, // 最小缩放级别
    maxZoom: 18, // 最大缩放级别
    renderer: L.canvas() // 全局使用 Canvas 渲染器
  }).setView([props.center[1], props.center[0]], props.zoom)

  // 底图
  const riverLayerSource = new L.TileLayer.WMS('http://devapi.weatherone.com.cn:8605/geoserver/map/wms', {
    layers: 'map:15水系',
    styles: '',
    format: 'image/png',
    transparent: true
    // tiled: false
  })

  const tileLayer = createTileLayer(predefinedImageTiles.windy, {
    pane: consts.customPanes.topmap.name
  })
  map.addLayer(tileLayer)

  riverLayerSource.addTo(map)
}

onMounted(() => {
  initMap()
})
</script>
<style lang="scss" scoped>
.leaflet-com {
  width: 100%;
  height: 100%;
  background: transparent;
  background: #fff;

  :deep(.leaflet-bottom) {
    display: none;
  }
}
</style>
