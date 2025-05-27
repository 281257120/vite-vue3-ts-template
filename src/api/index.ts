/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-02 10:00:08
 * @LastEditTime: 2024-12-10 16:06:21
 * @LastEditors: Liu Yang
 * @Description:
 * @FilePath: \spd-weather-guard\src\api\index.ts
 */

import { service, request, serviceForMock, requestForMock, mock } from './service'
import * as tools from './tools'
import commonApi from './modules/common'
import meteoApi from './modules/meteo'
import riskApi from './modules/risk'

const opts = { service, request, serviceForMock, requestForMock, mock, tools }
/**
 * 系统、用户、菜单 api
 */
const common = commonApi(opts)
const meteo = meteoApi(opts)
const risk = riskApi(opts)

export { common, risk, meteo }
export type RequestTools = typeof tools
