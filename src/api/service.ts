/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-02 10:12:49
 * @LastEditTime: 2025-05-27 09:58:03
 * @LastEditors: Liu Yang
 * @Description:
 * @FilePath: \shenfei-escort-guarantee\src\api\service.ts
 */
import Adapter from 'axios-mock-adapter'
import { get } from 'lodash'
// import { webStorage } from '@src/utils'
import axios from 'axios'
import { errorLog, errorCreate } from './tools'
import router from '@src/router'
import { pinia, store } from '@src/store'
// import smCrypto from 'sm-crypto'
// import { Loading, QSpinnerIos } from 'quasar'
const { CancelToken } = axios
let cancels = []
let loadingCount = 0
/**
 * @description 创建请求实例
 * @returns
 */
const createService = () => {
  // 创建一个 axios 实例
  const service = axios.create({})
  // const service = api
  // 请求拦截
  service.interceptors.request.use(
    config => {
      const myConfig = config as any
      myConfig.customConfig.isRequestLoading && openLoading()
      return myConfig
    },
    error => {
      // 发送失败
      errorLog(error)
      return Promise.reject(error)
    }
  )
  // 响应拦截
  service.interceptors.response.use(
    response => {
      const myConfig = response.config as any
      myConfig.customConfig.isRequestLoading && closeLoading()
      // dataAxios 是 axios 返回数据中的 data
      const dataAxios = response.data ? response.data || {} : response
      const key = 'sxqx@SmCryptoKey'
      const keyArray = utf8ToArray(key)
      const keyHex = ArrayToHex(keyArray)
      // 这个状态码是和后端约定的
      const { code, isCrypto } = dataAxios
      // if (isCrypto) {
      //   dataAxios.data = JSON.parse(smCrypto.sm4.decrypt(dataAxios.data, keyHex))
      // }
      // 根据 code 进行判断
      if (code === undefined) {
        // 如果没有 code 代表这是非约定返回 或者不是项目后端开发的接口
        return dataAxios
      } else {
        // 有 code 代表这是一个后端接口 可以进行进一步的判断
        switch (code) {
          case 0:
          case '0':
            // [ 示例 ] code === 0 代表没有错误
            // return dataAxios.data
            return dataAxios
          case 1:
            // [ 示例 ] code === 0 代表没有错误
            // return dataAxios.data
            return dataAxios
          case 200:
            // [ 示例 ] code === 0 代表没有错误
            // return dataAxios.data
            return dataAxios
          case 'xxx':
            // [ 示例 ] 其它和后台约定的 code
            errorCreate(`[ code: xxx ] ${dataAxios.msg}`)
            break
          default:
            // 不是正确的 code
            console.log(dataAxios)
            myConfig.customConfig.isErrorPop && dataAxios.msg && errorCreate(`${dataAxios.msg}`)
            return Promise.reject(dataAxios)
        }
      }
    },
    error => {
      const myConfig = error.config as any
      myConfig?.customConfig?.isRequestLoading && closeLoading()
      const status = get(error, 'response.status')
      switch (status) {
        case 400:
          error.message = '请求错误'
          break
        case 401:
          error.message = error?.response?.data?.error_description
            ? error?.response?.data?.error_description
            : '身份过期,请重新启动'
          window.localStorage.removeItem('token')
          // webStorage.removeLocalStorage('uuid')
          //Toast('身份过期,请重新启动')
          window.sessionStorage.removeItem('userInfo')
          window.sessionStorage.removeItem('userdetailInfo')
          window.sessionStorage.removeItem('ispos')
          // store.system.usePermissionStore(pinia).clear()
          cancels.map(c => {
            c.cancel()
          })
          cancels = []
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 413:
          error.message = '请求实体太大'
          break
        case 404:
          error.message = `请求地址出错`
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器内部错误'
          break
        case 501:
          error.message = '服务未实现'
          break
        case 502:
          error.message = '网关错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网关超时'
          break
        case 505:
          error.message = 'HTTP版本不受支持'
          break
        default:
          break
      }
      return Promise.reject(error)
      // errorLog(error)
    }
  )
  return service
}

/**
 * @description 创建请求方法
 * @param {Object} service axios 实例
 */
function createRequestFunction(service) {
  return function (config, customConfig?) {
    const token = window.localStorage.getItem('token')
    const configDefault = {
      headers: {
        // Authorization: token,
        'Content-Type': get(config, 'headers.Content-Type', 'application/json')
      },
      timeout: 50000,
      baseURL: config.baseURL || import.meta.env.VITE_VUE_APP_API,
      data: {},
      cancelToken: new CancelToken(function (c) {
        // console.log(c);// 参数是一个函数 调用此函数就可以关闭本次请求
        // c()
        //console.log(router.currentRoute.value.path)
        cancels.push({
          path: router.currentRoute.value.path,
          cancel: c
        })
      })
    }
    const queryConfig = Object.assign(configDefault, config)
    // console.log(queryConfig)
    if (token) {
      queryConfig.headers.Authorization = 'Bearer ' + token
    }
    //请求头中携带Client_type
    queryConfig.headers['Client-Type'] = import.meta.env.VITE_VUE_APP_CLIENT_TYPE
    const customConfigs = {
      isRequestLoading: false, //接口是否需要加载loading窗口 默认全部为true 个别不需要单独传入参数配置
      loadingType: 'none',
      isErrorPop: true //接口是否需要弹出错误
    }
    customConfig && Object.assign(customConfigs, customConfig)
    return service(Object.assign({}, configDefault, config, { customConfig: customConfigs }))
  }
}
/**
 * 终止某页面cancel
 */
export const stopAskByPath = path => {
  cancels.map(c => {
    if (c.path == path) {
      c.cancel()
      c.isUsed = true
    }
  })
  cancels = cancels.filter(c => !c.isUsed)
}
// /**
//  * 开启loading的方法
//  */
function openLoading() {
  loadingCount++
  if (loadingCount === 1) {
    // Loading.show({
    //   delay: 400, // ms
    //   spinner: QSpinnerIos,
    //   spinnerSize: 30
    // })
  }
}
/**
 * 关闭loading的方法
 */
function closeLoading() {
  if (loadingCount > 0) {
    loadingCount--
  }
  if (loadingCount === 0) {
    // Loading.hide()
  }
}

/**
 * 字节数组转 16 进制串
 */
function ArrayToHex(arr) {
  return arr
    .map(item => {
      item = item.toString(16)
      return item.length === 1 ? '0' + item : item
    })
    .join('')
}

/**
 * utf8 串转字节数组
 */
function utf8ToArray(str) {
  const arr = []
  for (let i = 0, len = str.length; i < len; i++) {
    const point = str.codePointAt(i)
    if (point <= 0x007f) {
      // 单字节，标量值：00000000 00000000 0zzzzzzz
      arr.push(point)
    } else if (point <= 0x07ff) {
      // 双字节，标量值：00000000 00000yyy yyzzzzzz
      arr.push(0xc0 | (point >>> 6)) // 110yyyyy（0xc0-0xdf）
      arr.push(0x80 | (point & 0x3f)) // 10zzzzzz（0x80-0xbf）
    } else if (point <= 0xd7ff || (point >= 0xe000 && point <= 0xffff)) {
      // 三字节：标量值：00000000 xxxxyyyy yyzzzzzz
      arr.push(0xe0 | (point >>> 12)) // 1110xxxx（0xe0-0xef）
      arr.push(0x80 | ((point >>> 6) & 0x3f)) // 10yyyyyy（0x80-0xbf）
      arr.push(0x80 | (point & 0x3f)) // 10zzzzzz（0x80-0xbf）
    } else if (point >= 0x010000 && point <= 0x10ffff) {
      // 四字节：标量值：000wwwxx xxxxyyyy yyzzzzzz
      i++
      arr.push(0xf0 | ((point >>> 18) & 0x1c)) // 11110www（0xf0-0xf7）
      arr.push(0x80 | ((point >>> 12) & 0x3f)) // 10xxxxxx（0x80-0xbf）
      arr.push(0x80 | ((point >>> 6) & 0x3f)) // 10yyyyyy（0x80-0xbf）
      arr.push(0x80 | (point & 0x3f)) // 10zzzzzz（0x80-0xbf）
    } else {
      // 五、六字节，暂时不支持
      arr.push(point)
      throw new Error('input is not supported')
    }
  }
  return arr
}

// 用于真实网络请求的实例和请求方法
export const service = createService()
export const request = createRequestFunction(service)

// 用于模拟网络请求的实例和请求方法
export const serviceForMock = createService()
export const requestForMock = createRequestFunction(serviceForMock)

// 网络请求数据模拟工具
export const mock = new Adapter(serviceForMock)
