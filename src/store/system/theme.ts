/*
 * @Author: tanghuang-liu 916650458@qq.com
 * @Date: 2022-05-13 17:06:55
 * @LastEditors: Liu Yang
 * @LastEditTime: 2025-05-26 18:31:55
 * @FilePath: \shenfei-escort-guarantee\src\store\system\theme.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { acceptHMRUpdate, defineStore } from 'pinia'

const oldThemeName = ''
export const useThemeStore = defineStore('theme', {
  state: () => {
    return {
      themeType: 'default'
    }
  },
  getters: {},
  actions: {
    //存储天气主题类型
    changeThemeType(themeType: any) {
      this.themeType = themeType
    }
  }
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
}
