/*
 * @Description: 主题颜色具体配置文件
 * @Author: Liu Yang
 * @Date: 2023-07-25 12:34:12
 * @LastEditTime: 2025-05-26 13:16:11
 * @LastEditors: Liu Yang
 * @FilePath: \shenfei-escort-guarantee\src\config\model.ts
 */

//定义首页背景图片，天气现象只要includes(weatherThemeName)就是用对应的图片
export const weatherBgs: any = [
  {
    weatherThemeName: '冰',
    backgroundImg: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/weatherBg/冰雹.webp)`
  },
  // {
  //   weatherThemeName: '雨夹雪',
  //   backgroundImg: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/weatherBg/雨加雪.webp)`,
  // },
  {
    weatherThemeName: '雨夹雪',
    backgroundImg: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/weatherBg/雪3.webp)`
  },

  // { weatherThemeName: '雪', backgroundImg: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/weatherBg/下雪.webp)` },
  // { weatherThemeName: '雪', backgroundImg: `url(http://sns-webpic-qc.xhscdn.com/202402051018/32a04c9bd0f2684f27289ea6ce24ce7f/1000g00823r6jhmafs0105n1g8f01m8e3vq4lfb8!nd_dft_wlteh_webp_3)` },
  { weatherThemeName: '雪', backgroundImg: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/weatherBg/雪3.webp)` },

  { weatherThemeName: '雾', backgroundImg: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/weatherBg/雾.webp)` },
  {
    weatherThemeName: '沙尘暴',
    backgroundImg: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/weatherBg/沙尘暴.webp)`
  },
  {
    weatherThemeName: '浮尘',
    backgroundImg: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/weatherBg/浮尘、扬沙.webp)`
  },
  {
    weatherThemeName: '扬沙',
    backgroundImg: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/weatherBg/浮尘、扬沙.webp)`
  },
  // {
  //   weatherThemeName: '雷',
  //   backgroundImg: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/weatherBg/打雷下雨.webp)`
  // },
  // {
  //   weatherThemeName: '雷',
  //   backgroundImg: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/weatherBg/雷.png)`
  // },
  { weatherThemeName: '雷', backgroundImg: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/weatherBg/雨1.webp)` },

  // { weatherThemeName: '雨', backgroundImg: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/weatherBg/雨.webp)` },
  { weatherThemeName: '雨', backgroundImg: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/weatherBg/雨1.webp)` },

  // { weatherThemeName: '阴', backgroundImg: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/weatherBg/阴.webp)` },
  { weatherThemeName: '默认', backgroundImg: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/weatherBg/晴.webp)` }
]

// 定义主题色变量值
// 默认使用default(蓝色);  '雾'使用rain(灰色);
// 在mandatoryUsageTime[开始时间，第二天结束时间]之间使用dark
export const themes: any = {
  defaultTabbar: {
    backgroundCard: 'rgba(35,115,191,0.8)',
    backgroundTab: 'rgba(76, 140, 201,1)',
    textColorStyle: '#FFDE3D',
    specialSubjectColor: '#1A6CAA'
  },

  default: {
    backgroundImg: `url(${import.meta.env.VITE_VUE_ROUTER_BASE}public/images/tempImg/底图.png)`,
    btnClolor: '#333333',
    btnBgClolor: '#D0E0FC',
    btnActiveColor: '#fff',
    btnActiveBgColor: '#1055CD'
  },
  dark: {
    backgroundImg: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/weatherBg/夜晚.webp)`,
    backgroundMsgImg: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/bg/bubble-dark.webp)`,
    backgroundMsgBtn: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/bg/bubble-btn.png)`,
    backgroundMsgInfoImg: `url(${import.meta.env.VITE_VUE_APP_FYSB_STATIC}/img/bg/插图紫色.svg)`,
    backgroundCard: 'rgba(16, 4, 77, 0.80)',
    backgroundTab: '#10044D',
    backgroundDeep: '#281A72',
    backgroundDeepTextColor: '#D9D9D9',
    backgroundDeepTextColor2: '#4F3EA7',
    backgroundPrecipitation: 'rgba(16, 4, 77, 0.80)',
    textColorStyle: '#EB6ECC',
    textColorStyle2: '#EB6ECC',
    backgroundCardLine: 'rgba(255,255,255,.2)',
    textColorStyleBottom: '#918ca9',
    colorStopsOffset1: 'rgba(235, 110, 204,1)',
    colorStopsOffset2: 'rgba(255,255,255,0)',
    lineStyleClor: '#EB6ECC',
    minlineStyleClor: '#91D8FF',
    specialSubjectColor: '#1D1052'
  }
}

//后台返回的所有天气现象
// Map < String, String > dic = new HashMap<>();
// dic.put("0", "晴");
// dic.put("1", "多云");
// dic.put("2", "阴");
// dic.put("3", "阵雨");
// dic.put("4", "雷阵雨");
// dic.put("5", "雷阵雨伴有冰雹");
// dic.put("6", "雨夹雪");
// dic.put("7", "小雨");
// dic.put("8", "中雨");
// dic.put("9", "大雨");
// dic.put("10", "暴雨");
// dic.put("11", "大暴雨");
// dic.put("12", "特大暴雨");
// dic.put("13", "阵雪");
// dic.put("14", "小雪");
// dic.put("15", "中雪");
// dic.put("16", "大雪");
// dic.put("17", "暴雪");
// dic.put("18", "雾");
// dic.put("19", "冻雨");
// dic.put("20", "沙尘暴");
// dic.put("21", "小到中雨");
// dic.put("22", "中到大雨");
// dic.put("23", "大到暴雨");
// dic.put("24", "暴雨到大暴雨");
// dic.put("25", "大暴雨到特大暴雨");
// dic.put("26", "小到中雪");
// dic.put("27", "中到大雪");
// dic.put("28", "大到暴雪");
// dic.put("29", "浮尘");
// dic.put("30", "扬沙");
// dic.put("31", "强沙尘暴");
