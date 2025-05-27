/*
 * @Description: daimai
 * @Author: Liu Yang
 * @Date: 2023-03-14 13:59:27
 * @LastEditTime: 2025-05-23 14:39:35
 * @LastEditors: Liu Yang
 * @FilePath: \shenfei-escort-guarantee\vite.config.ts
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import postCssPxToRem from 'postcss-pxtorem'
import defineOptions from 'unplugin-vue-define-options/vite'
// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    base: process.env.VITE_VUE_ROUTER_BASE,
    plugins: [vue(), defineOptions()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@src': resolve(__dirname, './src'),
        '#': resolve(__dirname, './src/types'),
        utils: resolve(__dirname, './src/utils'),
        api: resolve(__dirname, './src/api')
      }
    },
    css: {
      postcss: {
        plugins: [
          postCssPxToRem({
            // 自适应，px>rem转换
            rootValue: 10, //1rem等于几px
            propList: ['*'], // 除 border 外所有px 转 rem // 需要转换的属性，这里选择全部都进行转换
            selectorBlackList: ['norem'], // 过滤掉norem-开头的class，不进行rem转换，这个内容可以不写
            unitPrecision: 5, // 转换后的精度，即小数点位数
            replace: true, // 是否直接更换属性值而不添加备份属性
            mediaQuery: false, // 是否在媒体查询中也转换px为rem
            minPixelValue: 0 // 设置要转换的最小像素值
          })
        ]
      }
    },
    server: {
      host: '0.0.0.0',
      https: false,
      port: 4000,
      proxy: {
        '/traffictile': {
          target: 'https://tm.amap.com/trafficengine/mapabc/traffictile',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/traffictile/, '/')
        },
        '/v3': {
          target: 'https://restapi.amap.com/v3',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/v3/, '/')
        },
        '/geoserver': {
          target: 'http://47.111.68.226:8080/geoserver',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/geoserver/, '/')
        }
      }
    }
    // define: {
    //   __APP_VERSION__: JSON.stringify(packageJson.version)
    // }
  })
}
