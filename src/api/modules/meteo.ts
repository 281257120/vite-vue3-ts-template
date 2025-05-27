const baseURL = import.meta.env.VITE_VUE_APP_API

export default ({ service, request, serviceForMock, requestForMock, mock, tools }) => ({
  //查询标签管理列表tree
  getTagManageTree(data) {
    return request({
      baseURL,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      url: `/tenant-user/tagManage/getTagManageTree`,
      method: 'POST',
      data
    })
  },

  /**
   * 获取用户信息
   */
  getUserInfoById(data: object) {
    return request({
      baseURL,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      url: '/tenant-user/user/getUserInfoById',
      method: 'post',
      params: data
    })
  },
  /**
   * 预报数据获取
   */
  getForecastData(data) {
    return request({
      // baseURL:"",
      baseURL,
      headers: {
        'Content-Type': 'application/json'
      },
      url: '/meteo/forecast/getForeCastDataByParam',
      method: 'post',
      data
    })
  },
  queryRiskElementTree(params) {
    return request({
      baseURL,
      url: '/meteo/riskElement/queryRiskElementTree',
      method: 'get',
      params: params
    })
  }
})
