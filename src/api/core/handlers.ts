/*
 * @Author: weisheng
 * @Date: 2025-04-17 15:58:11
 * @LastEditTime: 2025-06-15 21:47:22
 * @LastEditors: weisheng
 * @Description: Alova response and error handlers
 * @FilePath: /wot-starter/src/api/core/handlers.ts
 */
import type { Method } from 'alova'
import router from '@/router'

// Custom error class for API errors
export class ApiError extends Error {
  code: number
  data?: any

  constructor(message: string, code: number, data?: any) {
    super(message)
    this.name = 'ApiError'
    this.code = code
    this.data = data
  }
}

// 后端 API 响应结构
interface ApiResponse {
  status: number
  message: string
  data?: any
}

// 后端状态码常量
export const API_STATUS = {
  SUCCESS: 200, // 成功
  NOT_LOGGED: 401, // 未登录
  NOT_PERMISSION: 403, // 没有权限
  ERROR: 500, // 服务器错误
}

// 清除用户认证信息
const clearAuthAndRedirect = () => {
  try {
    // 清除本地存储的认证信息
    uni.removeStorageSync('auth_data')
    uni.removeStorageSync('user_info')

    // 清除 Pinia store 中的认证信息（如果有）
    // TODO: 集成 Pinia store 后取消注释
    // const authStore = useAuthStore()
    // const userStore = useUserStore()
    // authStore.logout()
    // userStore.clearUserInfo()
  } catch (error) {
    console.error('清除认证信息失败:', error)
  }

  // 延迟跳转到登录页
  const timer = setTimeout(() => {
    clearTimeout(timer)
    router.replaceAll({ name: 'login' })
  }, 500)
}

// 处理业务状态码错误
const handleBusinessStatusError = (status: number, message: string, data: any) => {
  const globalToast = useGlobalToast()

  // 处理未登录错误
  if (status === API_STATUS.NOT_LOGGED) {
    globalToast.error({ msg: message || '登录已过期，请重新登录！', duration: 500 })
    clearAuthAndRedirect()
    throw new ApiError(message || '登录已过期，请重新登录！', status, data)
  }

  // 处理权限错误
  if (status === API_STATUS.NOT_PERMISSION) {
    globalToast.error({ msg: message || '没有权限访问！', duration: 2000 })
    throw new ApiError(message || '没有权限访问！', status, data)
  }

  // 处理其他业务错误
  globalToast.error({ msg: message || '请求失败', duration: 2000 })
  throw new ApiError(message || '请求失败', status, data)
}

// Handle successful responses
export async function handleAlovaResponse(
  response: UniApp.RequestSuccessCallbackResult | UniApp.UploadFileSuccessCallbackResult | UniApp.DownloadSuccessData,
) {
  // Extract status code and data from UniApp response
  const { statusCode, data } = response as UniNamespace.RequestSuccessCallbackResult

  // Log response in development
  if (import.meta.env.MODE === 'development') {
    console.log('[Alova Response]', data)
  }

  // Handle HTTP error status codes (before parsing JSON)
  if (statusCode >= 400) {
    throw new ApiError(`HTTP Error: ${statusCode}`, statusCode, data)
  }

  // Parse response data
  const json = data as ApiResponse

  // 处理业务状态码错误
  if (json.status !== API_STATUS.SUCCESS) {
    handleBusinessStatusError(json.status, json.message, json.data)
  }

  // Return data for successful responses
  return json.data
}

// Handle request errors
export function handleAlovaError(error: any, method: Method) {
  const globalToast = useGlobalToast()
  // Log error in development
  if (import.meta.env.MODE === 'development') {
    console.error('[Alova Error]', error, method)
  }

  // 处理业务错误（已在 handleAlovaResponse 中抛出的 ApiError）
  if (error instanceof ApiError) {
    // 如果是认证相关错误，已经在 handleBusinessStatusError 中处理过
    // 这里不再重复处理，只是确保错误被正确抛出
    throw error
  }

  // Handle different types of errors
  if (error.name === 'NetworkError') {
    globalToast.error('网络错误，请检查您的网络连接')
  }
  else if (error.name === 'TimeoutError') {
    globalToast.error('请求超时，请重试')
  }
  else if (error.name === 'CancelError') {
    // 请求被取消，不显示错误提示
    console.log('请求已取消')
  }
  else {
    globalToast.error('请求失败，请稍后重试')
  }

  throw error
}
