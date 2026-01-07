/**
 * 用户模块 API
 * @description 用户信息相关的 API 接口
 */
import type {
  ApiResponse,
  UserInfo,
  UserAsset,
  ApiRequestConfig,
  PaginationParams,
  PaginationResponse,
} from '../core/types'
import alovaInstance from '../core/instance'

/**
 * 获取用户信息
 * @param config 请求配置
 * @returns 用户信息
 */
export function getUserInfo(config?: ApiRequestConfig) {
  return alovaInstance.Get<ApiResponse<UserInfo>>(
    'user/info',
    config,
  )
}

/**
 * 更新用户信息
 * @param params 用户信息
 * @param config 请求配置
 * @returns 更新成功
 */
export function updateUserInfo(params: Partial<UserInfo>, config?: ApiRequestConfig) {
  return alovaInstance.Post<ApiResponse<null>>(
    'user/update',
    params,
    config,
  )
}

/**
 * 获取用户资产信息
 * @param config 请求配置
 * @returns 用户资产信息
 */
export function getUserAsset(config?: ApiRequestConfig) {
  return alovaInstance.Get<ApiResponse<UserAsset>>(
    'user/asset',
    config,
  )
}

/**
 * 绑定手机号
 * @param params 绑定参数
 * @param config 请求配置
 * @returns 绑定成功
 */
export function bindMobile(params: { mobile: string; smsCode: string }, config?: ApiRequestConfig) {
  return alovaInstance.Post<ApiResponse<null>>(
    'user/bindMobile',
    params,
    config,
  )
}

/**
 * 发送短信验证码
 * @param params 发送参数
 * @param config 请求配置
 * @returns 发送成功
 */
export function sendSmsCode(params: { mobile: string; scene: string }, config?: ApiRequestConfig) {
  return alovaInstance.Post<ApiResponse<null>>(
    'user/sendSmsCode',
    params,
    config,
  )
}

/**
 * 获取消费记录列表
 * @param params 分页参数
 * @param config 请求配置
 * @returns 消费记录列表
 */
export function getConsumeList(params: PaginationParams & { type?: string }, config?: ApiRequestConfig) {
  return alovaInstance.Get<ApiResponse<PaginationResponse<any>>>(
    'user/consumeList',
    {
      params,
      ...config,
    },
  )
}

/**
 * 获取消费记录详情
 * @param id 记录ID
 * @param config 请求配置
 * @returns 消费记录详情
 */
export function getConsumeDetail(id: number, config?: ApiRequestConfig) {
  return alovaInstance.Get<ApiResponse<any>>(
    'user/consumeDetail',
    {
      params: { id },
      ...config,
    },
  )
}
