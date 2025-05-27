<!--
 * @Description: daimai
 * @Author: Liu Yang
 * @Date: 2023-03-09 17:13:20
 * @LastEditTime: 2025-05-26 09:49:47
 * @LastEditors: Liu Yang
 * @FilePath: \shenfei-escort-guarantee\src\App.vue
-->

<template>
  <router-view class="mWrapper" :class="{ isDark: false }" />
</template>

<script lang="ts" setup>
import { store, pinia } from '@/store/index'
import { changeStyle } from '@/config/weatherTheme'

changeStyle('default')
</script>

<style lang="scss" scoped>
.mWrapper {
  box-sizing: border-box;
  // padding: 10px;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  position: relative;
}

.isDark {
  background-image: url('/images/bg-mask.png');
}
</style>
