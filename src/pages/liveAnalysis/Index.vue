<!--
* @Description:
* @Author: Liu Yang
* @Date: 2023-03-17 14:02:49
 * @LastEditTime: 2025-05-26 18:28:41
 * @LastEditors: Liu Yang
-->
<template>
  <div class="content-wrap">
    <div class="menu_wrap">
      <div
        v-for="(item, index) in menuBtns"
        :key="index"
        :class="['menu_item', activeMenu == item.path ? 'menu_item_active' : '']"
        @click="toLink(item)"
      >
        <div :class="item.icon"></div>
        <div>{{ item.name }}</div>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, nextTick, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const activeMenu = ref('1')

const menuBtns = ref([
  {
    name: '地面观测',
    path: '/liveAnalysis/groundObs',
    icon: `iconfont icon-dimianguance`
  },
  { name: '高空观测', path: '/liveAnalysis/highObs', icon: `iconfont icon-gaokongguance` }
])

const toLink = (item: any) => {
  router.push(item.path)
}

watch(
  () => route.fullPath,
  val => {
    activeMenu.value = val
  },
  {
    immediate: true
  }
)
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';
.content-wrap {
  @include flex();
  padding: 20px;
  .menu_wrap {
    width: 60px;
    height: 100%;
    margin-right: 10px;

    .menu_item {
      @include leftMenuBtn();
      flex-wrap: wrap;
      padding: 5px 0;
      .iconfont {
        font-size: 28px;
      }
    }
    .menu_item_active {
      @include leftMenuBtnActive();
    }
  }
  .content {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 2px 2px 20px 0px rgba(0, 43, 104, 0.2);
    border-radius: 8px;
    padding: 20px 10px;
    overflow: hidden;
  }
}
</style>
