/**
 * API 核心类型定义
 * @description 定义后端 API 请求和响应的通用类型
 */

/**
 * 后端 API 响应基础结构
 */
export interface ApiResponse<T = any> {
  /** 业务状态码 */
  status: number
  /** 响应消息 */
  message: string
  /** 响应数据 */
  data: T
}

/**
 * 通用分页响应
 */
export interface PaginationResponse<T> {
  /** 列表数据 */
  list: T[]
  /** 总记录数 */
  total: number
  /** 当前页码 */
  page?: number
  /** 每页数量 */
  pageSize?: number
}

/**
 * 分页请求参数
 */
export interface PaginationParams {
  /** 页码 */
  page?: number
  /** 每页数量 */
  pageSize?: number
}

/**
 * 微信登录请求参数
 */
export interface WechatLoginParams {
  /** 微信登录 code */
  code: string
  /** 用户信息（可选） */
  userInfo?: {
    /** 昵称 */
    nickName: string
    /** 头像 */
    avatarUrl: string
    /** 性别 */
    gender: number
    /** 国家 */
    country: string
    /** 省份 */
    province: string
    /** 城市 */
    city: string
    /** 语言 */
    language: string
  }
}

/**
 * 微信登录响应数据
 */
export interface WechatLoginData {
  /** 用户ID */
  userId: number
  /** 认证 Token */
  token: string
}

/**
 * 用户信息
 */
export interface UserInfo {
  /** 用户ID */
  userId: number
  /** 昵称 */
  nickname: string
  /** 头像 */
  headimgurl: string
  /** 手机号 */
  mobile?: string
  /** OpenID */
  openid: string
  /** UnionID */
  unionid?: string
}

/**
 * 用户资产信息
 */
export interface UserAsset {
  /** 账户余额 */
  balance: number
  /** 自助洗车券数量 */
  manualCouponCount: number
  /** 自动洗车券数量 */
  automaticCouponCount: number
  /** 核销券数量 */
  voucherCount: number
}

/**
 * API 请求方法类型
 */
export type RequestMethodType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

/**
 * API 请求配置
 */
export interface ApiRequestConfig {
  /** 请求方法 */
  method?: RequestMethodType
  /** 请求头 */
  headers?: Record<string, string>
  /** 请求超时时间（毫秒） */
  timeout?: number
  /** 是否显示 loading */
  showLoading?: boolean
  /** loading 提示文字 */
  loadingText?: string
  /** 是否显示错误提示 */
  showError?: boolean
}
