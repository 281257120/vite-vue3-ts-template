<!--
* @Description: 布局
* @Author: Liu Yang
* @Date: 2023-03-17 14:02:49
 * @LastEditTime: 2025-05-26 14:41:39
 * @LastEditors: Liu Yang
-->
<template>
  <div class="wrapper">
    <div class="header-wrap">
      <div class="title">
        <el-image :src="imgSrc" />
        <span class="text"> 沈飞集团护航保障气象一体化平台</span>
      </div>

      <div class="header-right">
        <div class="m-menu">
          <div
            v-for="(item, index) in menuLs"
            :key="index"
            class="menu-btn"
            :class="{ active: item.isActive }"
            @click="toLink(item)"
          >
            <el-image v-if="item.meta.icon" :src="item.meta.icon" />
            {{ item.name }}
          </div>
        </div>

        <div class="user-wrap">
          <el-dropdown ref="dropdown1" trigger="contextmenu">
            <div class="m-el-dropdown-link" @click="showClick">
              <el-image :src="imgSrc2" />
              <div class="name">张帆</div>
              <el-icon><ArrowDown /></el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <router-view class="content" />
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import UserSetting from '@/components/UserSetting.vue'
import routes from '@/router/routes/modules/common'
import { useRoute, useRouter } from 'vue-router'
import type { DropdownInstance } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'

const imgSrc = `${import.meta.env.VITE_VUE_ROUTER_BASE}images/tempImg/logo.svg`
const imgSrc2 = `${import.meta.env.VITE_VUE_ROUTER_BASE}images/飞机场2.svg`

const route = useRoute()
defineOptions({
  name: ''
})

const router = useRouter()

const menuLs: any = reactive([])

const dropdown1 = ref<DropdownInstance>()

function showClick() {
  if (!dropdown1.value) return
  dropdown1.value.handleOpen()
}
// 获取modules中的路由规则
routes[0]?.children?.forEach((ele: any, index) => {
  let obj = {
    ...ele,
    name: ele.meta.title,
    path: ele.path,
    isActive: route.fullPath.includes(ele.path)
  }
  menuLs.push(obj)
})
const toLink = (item: any) => {
  menuLs.map((ele: any) => (ele.isActive = false))
  item.isActive = true
  router.push(item.path)
}
const loginOut = () => {
  console.log('退出登录')
}
console.log(menuLs)
</script>
<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';

.wrapper {
  background-color: rgb(183, 211, 250);
  background-image: var(--backgroundImg);
  // background-size: 100%, 100%;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  @include flex();
  flex-wrap: wrap;
  position: relative;
  .header-wrap {
    @include flex();
    width: 100%;
    height: 80px;

    .title {
      @include flex();
      width: 800px;
      margin-left: 20px;
      justify-content: start;
      font-size: 32px;
      .text {
        font-family: YouSheBiaoTiHei;
        font-size: 32px;
        color: #1055cd;
        line-height: 42px;
        letter-spacing: 1px;
        font-style: normal;
      }
      .el-image {
        width: 41px;
        margin-right: 10px;
      }
    }

    .header-right {
      @include flex();
      height: 100%;
      background: linear-gradient(46deg, #9fc1fc 0%, #1656ff 100%);
      border-radius: 40px 0px 0px 40px;
      padding-left: 40px;
      .m-menu {
        height: 100%;
        @include flex();
        justify-content: flex-end;

        .menu-btn {
          @include topMenuBtn;
        }
        .active {
          @include topMenuBtnActive;
        }

        .el-image {
          height: 20px;
          margin-right: 2px;
        }
      }
      .user-wrap {
        @include flex();
        justify-content: flex-end;
        margin-right: 20px;
        min-width: 120px;
        margin-left: 20px;
        :deep(.m-el-dropdown-link) {
          @include flex();
          color: var(--btnActiveColor);
          .name {
            font-size: 12px;
            color: var(--btnActiveColor);
            @include flex();
            width: auto;
            margin-right: 8px;
          }
          .el-image {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            margin-right: 8px;
          }
        }
      }
    }
  }
  .line {
    width: 100vw;
    height: 2px;
    background: #1a5dfe;
    filter: blur(4px);
  }
  .content {
    width: 100%;
    height: calc(100% - 82px);
  }
  :deep(.el-sub-menu) {
    display: none;
  }
}

// .setting {
//   position: absolute;
//   right: 10px;
//   top: 0px;
//   height: 100%;
//   display: flex;
//   align-items: center;
// }
</style>
