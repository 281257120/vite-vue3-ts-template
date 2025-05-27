/*
 * @Author: tanghuang-liu 916650458@qq.com
 * @Date: 2022-05-16 09:21:24
 * @LastEditors: Liu Yang
 * @LastEditTime: 2025-05-26 09:44:02
 * @FilePath: \shenfei-escort-guarantee\src\store\system\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Pinia } from 'pinia'
import { useThemeStore } from './theme'

// 组件内使用不需要传pinia，组件外使用需要传pinia
export const systemStore = {
  useThemeStore: (pinia?: Pinia) => useThemeStore(pinia)
}
