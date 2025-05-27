<!--
* @Description:
* @Author: Liu Yang
* @Date: 2023-03-17 14:02:49
 * @LastEditTime: 2025-05-27 10:08:07
 * @LastEditors: Liu Yang
-->
<template>
  <QeMap :center="[105.19, 37.8]" :zoom="4.5" />
</template>

<script setup lang="ts">
import { onMounted, computed, nextTick, reactive, ref, watch } from 'vue'
import QeMap from '@src/components/common-qe-map/Index.vue'
import * as api from '@src/api'

// console.log(api.meteo.getTagManageTree())
</script>
<style lang="scss" scoped></style>
