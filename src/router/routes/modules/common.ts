/*
 * @Description:
 * @Author: Liu Yang
 * @Date: 2023-03-20 10:37:04
 * @LastEditTime: 2025-05-26 14:39:11
 * @LastEditors: Liu Yang
 * @FilePath: \shenfei-escort-guarantee\src\router\routes\modules\common.ts
 */
import type { RouteRecordRaw } from 'vue-router'

// 路由规则
const routes: RouteRecordRaw[] = [
  {
    path: '/index',
    name: 'index',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '/liveAnalysis',
        name: 'liveAnalysis',
        meta: {
          title: '实况分析',
          icon: `${import.meta.env.VITE_VUE_ROUTER_BASE}images/tempImg/实况分析.svg`
        },
        component: () => import('@/pages/liveAnalysis/Index.vue'),
        redirect: '/liveAnalysis/groundObs',
        children: [
          {
            path: '/liveAnalysis/groundObs',
            name: 'groundObs',
            component: () => import('@/pages/liveAnalysis/groundObs/Index.vue')
          },
          {
            path: '/liveAnalysis/highObs',
            name: 'highObs',
            component: () => import('@/pages/liveAnalysis/highObs/Index.vue')
          }
        ]
      },
      {
        path: '/aviationHazardWeather',
        name: 'aviationHazardWeather',
        meta: { title: '航危天气', icon: `${import.meta.env.VITE_VUE_ROUTER_BASE}images/tempImg/航危天气.svg` },
        component: () => import('@/pages/aviationHazardWeather/Index.vue')
      },

      {
        path: '/modelForecast',
        name: 'modelForecast',
        meta: {
          title: '多模式预报',
          icon: `${import.meta.env.VITE_VUE_ROUTER_BASE}images/tempImg/多模式预报.svg`
        },
        component: () => import('@/pages/modelForecast/Index.vue')
      },
      {
        path: '/forecastTest',
        name: 'forecastTest',
        meta: { title: '预报检验', icon: `${import.meta.env.VITE_VUE_ROUTER_BASE}images/tempImg/预报检验.svg` },
        component: () => import('@/pages/forecastTest/Index.vue')
      },

      {
        path: '/objectiveForecast',
        name: 'objectiveForecast',
        meta: { title: '客观预报', icon: `${import.meta.env.VITE_VUE_ROUTER_BASE}images/tempImg/客观预报.svg` },
        component: () => import('@/pages/objectiveForecast/Index.vue')
      },
      {
        path: '/informationDelivery',
        name: 'informationDelivery',
        meta: { title: '信息发布', icon: `${import.meta.env.VITE_VUE_ROUTER_BASE}images/tempImg/信息发布.svg` },
        component: () => import('@/pages/informationDelivery/Index.vue')
      },
      {
        path: '/historicalSearch',
        name: 'historicalSearch',
        meta: {
          title: '历史检索',
          icon: `${import.meta.env.VITE_VUE_ROUTER_BASE}images/tempImg/历史检索-导航.svg`
        },
        component: () => import('@/pages/historicalSearch/Index.vue')
      },
      {
        path: '/systemManagement',
        name: 'systemManagement',
        meta: { title: '系统管理', icon: `${import.meta.env.VITE_VUE_ROUTER_BASE}images/tempImg/系统管理.svg` },
        component: () => import('@/pages/systemManagement/Index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue')
  }
]

export default routes
