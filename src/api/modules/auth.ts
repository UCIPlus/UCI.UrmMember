/**
 * 认证模块 API
 * @description 用户认证相关的 API 接口
 */
import type {
  ApiResponse,
  WechatLoginParams,
  WechatLoginData,
  ApiRequestConfig,
} from '../core/types'
import alovaInstance from '../core/instance'

/**
 * 微信小程序登录
 * @param params 登录参数
 * @param config 请求配置
 * @returns 登录成功返回用户ID和Token
 */
export function loginWxMini(params: WechatLoginParams, config?: ApiRequestConfig) {
  return alovaInstance.Post<ApiResponse<WechatLoginData>>(
    'passport/loginWxMini',
    params,
    config,
  )
}

/**
 * 微信公众号快捷登录
 * @param params 登录参数
 * @param config 请求配置
 * @returns 登录成功返回用户ID和Token
 */
export function loginWxOfficial(params: WechatLoginParams, config?: ApiRequestConfig) {
  return alovaInstance.Post<ApiResponse<WechatLoginData>>(
    'passport/loginWxOfficial',
    params,
    config,
  )
}

/**
 * 刷新 Token
 * @param config 请求配置
 * @returns 刷新成功返回新的 Token
 */
export function refreshToken(config?: ApiRequestConfig) {
  return alovaInstance.Post<ApiResponse<{ token: string }>>(
    'passport/refreshToken',
    {},
    config,
  )
}

/**
 * 退出登录
 * @param config 请求配置
 * @returns 退出登录成功
 */
export function logout(config?: ApiRequestConfig) {
  return alovaInstance.Post<ApiResponse<null>>(
    'passport/logout',
    {},
    config,
  )
}
