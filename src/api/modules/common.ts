/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-03-17 12:10:48
 * @LastEditTime: 2023-06-21 16:14:39
 * @LastEditors: wei sir
 * @Description: 通用请求接口
 * @FilePath: \spd-\src\api\modules\common.ts
 */
import qs from 'qs'
export default ({ service, request, serviceForMock, requestForMock, mock, tools }) => ({
  /**
   * 获取静态资源（JSON）等
   * @param {*} fetchStr
   * @returns
   */
  getStaticData(fetchStr, baseURL?: string) {
    baseURL = baseURL || import.meta.env.BASE_URL
    const res = request({
      baseURL,
      url: fetchStr,
      method: 'get'
    })
    return res.then(data => {
      return {
        code: 0,
        data: data,
        msg: 'success'
      }
    })
  },
  /**
   * 百度 api 解析地址
   * @param query
   * @returns
   */
  inverseGeocode(query) {
    return request({
      baseURL: import.meta.env.MODE === 'development' ? '/' : 'https://api.map.baidu.com',
      url: '/reverse_geocoding/v3',
      method: 'get',
      params: query
    })
  },
  askByUrl(url) {
    return request({
      baseURL: './',
      url: url,
      method: 'get'
    })
  },
  /**
   * 插值服务
   * @param query
   * @returns
   */
  getInteropsToGeoJson(query) {
    return request(
      {
        baseURL: import.meta.env.VITE_VUE_APP_API,
        url: `/weather-map/interpolate/getIsoRegionAndContour`,
        method: 'post',
        data: query
      },
      { isRequestLoading: true, isErrorPop: false }
    )
  },
  /**
   * 测试接口
   */
  getTestData() {
    return request({
      url: 'http://192.168.2.112:8601/test/protobuf',
      method: 'get'
    })
  }
})
