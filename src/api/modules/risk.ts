/*
 * @Autor: caolei
 * @Date: 2023-07-28 14:03:00
 * @LastEditors: Liu Yang
 * @LastEditTime: 2025-05-27 10:00:42
 * @Description:
 * @FilePath: \shenfei-escort-guarantee\src\api\modules\risk.ts
 */
const baseURL = import.meta.env.VITE_VUE_APP_API

export default ({ request }) => ({
  riskListByLevel(data) {
    return request({
      baseURL,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      url: '/risk/tenantWarn/list',
      method: 'post',
      data: data
    })
  },
  //资产文件类型网格精度列表
  gisTypeGridSizeList(data) {
    return request({
      baseURL,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      url: '/risk/gis-object-file/gisTypeGridSizeList',
      method: 'post',
      params: data
    })
  },

  //获取场景下用户列表
  getUserList(params) {
    return request({
      baseURL,
      url: '/risk/sceneVisibleRange/getUserList',
      method: 'get',
      params: params
    })
  },

  //查询场景列表
  getSceneList(params) {
    return request({
      baseURL,
      url: '/risk/sceneManage/getSceneList',
      method: 'get',
      params: params
    })
  },
  //获取场景产品（分页）
  getSceneProductPage(params) {
    return request({
      baseURL,
      url: '/risk/sceneRelation/getSceneProductPage',
      method: 'get',
      params: params
    })
  },
  //获取场景资产类型（分页）
  getSceneGisTypePage(params) {
    return request({
      baseURL,
      url: '/risk/sceneRelation/getSceneGisTypePage',
      method: 'get',
      params: params
    })
  },
  //获取场景设备类型（分页）
  getSceneDeviceTypePage(params) {
    return request({
      baseURL,
      url: '/risk/sceneRelation/getSceneDeviceTypePage',
      method: 'get',
      params: params
    })
  },
  //获取场景致灾因素树
  getSceneRiskEleTree(params) {
    return request({
      baseURL,
      url: '/risk/sceneRelation/getSceneRiskEleTree',
      method: 'get',
      params: params
    })
  },

  //获取场景绑定资产列表
  getSceneGisList(params) {
    return request({
      baseURL,
      url: '/risk/sceneRelation/getSceneGisList',
      method: 'get',
      params: params
    })
  },

  //获取场景绑定设备列表
  getSceneDeviceList(params) {
    return request({
      baseURL,
      url: '/risk/sceneRelation/getSceneDeviceList',
      method: 'get',
      params: params
    })
  },

  //获取高度风
  getHeightWind(data) {
    return request({
      baseURL: 'http://8.141.3.49:5000',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      url: '/cfd/wind',
      method: 'post',
      params: data
    })
  }
})
