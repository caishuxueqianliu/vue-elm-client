/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
 import axios from 'axios'

//const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'
// //query ？后   parmas 路径


// // 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => axios.get(`${BASE_URL}/position/${geohash}`)

// // 2、获取食品分类列表
export const reqFoodCategorys = () => axios.get(BASE_URL+'/index_category')
// // 3、根据经纬度获取商铺列表
 export const reqShops = (longitude, latitude) => axios.get(BASE_URL+'/shops', {longitude, latitude})
// // 4、根据经纬度和关键字搜索商铺列表
// export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL+'/search_shops', {geohash, keyword})
// // 6、用户名密码登陆
  export const reqPwdLogin = (name, pwd, captcha) => axios.post(BASE_URL+'/login_pwd',{name, pwd, captcha})
  // export const reqPwdLogin = (name, pwd, captcha) => axios.post(BASE_URL+'/login',{name, pwd, captcha})
// // 7、发送短信验证码
// export const reqSendCode = (phone) => axios.get(BASE_URL+'/sendcode'+'?phone='+phone)
export const reqSendCode = (phone) => axios.get(BASE_URL+'/sendcode',{params:{phone:phone}})
// // 8、手机号验证码登陆
 export const reqSmsLogin = (phone, code) => axios.post(BASE_URL+'/login_sms',{phone, code})
// // 9、根据会话获取用户信息
 export const reqUserInfo = () => axios.get(BASE_URL+'/userinfo')
// // 10、用户登出
 export const reqLogout = () => axios.get(BASE_URL+'/logout')

// /**
//  * 获取商家信息
//  */
 export const reqShopInfo = () => axios.get('/info')

// /**
//  * 获取商家评价数组
//  */
 export const reqShopRatings = () => axios.get('/ratings')

// /**
//  * 获取商家商品数组
//  */
 export const reqShopGoods = () => axios.get('/goods')


