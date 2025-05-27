/*
 * @Description: 修改主题
 * @Author: Liu Yang
 * @Date: 2023-07-25 12:33:35
 * @LastEditTime: 2025-05-26 18:31:04
 * @LastEditors: Liu Yang
 * @FilePath: \shenfei-escort-guarantee\src\config\weatherTheme.ts
 */
import { themes } from './model'
import { store, pinia } from '@src/store'
import { ref } from 'vue'
import dayjs from 'dayjs'

export const changeStyle = (themeName: string) => {
  const themeConfig = themes[themeName]
  //存入主题类型
  store.system.useThemeStore(pinia).changeThemeType(themeName)
  for (const key in themeConfig) {
    document.getElementsByTagName('body')[0].style.setProperty(`--${key}`, themeConfig[key])
  }
}
