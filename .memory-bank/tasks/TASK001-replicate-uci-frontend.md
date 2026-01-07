# [TASK001] - 复刻 UCI 前端项目

**状态:** In Progress
**创建时间:** 2026年1月8日
**最后更新:** 2026年1月8日（下午）

## 任务目标

将原基于 PHP View 模版渲染的前端项目，完整复刻为基于 uni-app 的现代化小程序应用，实现前后端分离架构，支持微信小程序、支付宝小程序、H5 多端。

## 进展日志

### 2026年1月8日（下午）

**基础架构开发完成**：

- ✅ 完成环境配置（.env.development、.env.staging、.env.production）
  - 开发环境 API：<http://localhost/api/miniapp>
  - 测试环境 API：<http://test.uci.com/api/miniapp>
  - 生产环境 API：<https://api.uci.com/api/miniapp>
  - 配置 API 超时时间：30秒
- ✅ 完成 Alova 实例配置（`src/api/core/instance.ts`）
  - 使用 uni-app 适配器
  - 配置全局拦截器
  - 实现 Token 认证（Bearer Token 方式）
  - 实现自动添加 Token 到请求头
  - 实现统一错误处理
  - 实现 401/403 自动跳转登录页
  - 实现业务状态码处理（200/401/403/500）
- ✅ 完成 API 类型定义（`src/api/core/types.ts`）
  - 定义后端响应结构（ApiResponse<T>）
  - 定义分页响应结构（PaginationResponse<T>）
  - 定义认证相关类型（WechatLoginParams、WechatLoginData）
  - 定义用户相关类型（UserInfo、UserAsset）
- ✅ 完成 API 模块定义
  - 创建 `src/api/modules/auth.ts`（认证模块）
    - 微信小程序登录 API
    - 微信公众号登录 API
    - 用户注册 API
  - 创建 `src/api/modules/user.ts`（用户模块）
    - 获取用户信息 API
    - 更新用户信息 API
    - 获取用户资产 API

**知识文档更新**：

- ✅ 创建 K001：目录结构设计文档
  - 详细的目录结构说明
  - 各目录和文件的职责说明
  - 命名规范和最佳实践

**计划调整**：

- ⏳ 暂缓认证系统开发（等待公众号测试环境就绪）
- ⏳ 调整开发优先级：先实现不需要用户认证的页面
- ⏳ 重点开发：站点查询、营销活动、帮助文档等公开功能

## 目录结构

详见知识文档：[K001-directory-structure-design.md](../knowledge/K001-directory-structure-design.md)

## 实施策略

### 阶段划分

| 阶段 | 工期 | 主要内容 |
| ----- | ----- | ---------- |
| 阶段 1 | 1周 | 基础架构：环境配置、API 层、通用组件、认证系统 |
| 阶段 2 | 2-3周 | 核心功能：个人中心、优惠券、充值、消费记录 |
| 阶段 3 | 2-3周 | 扩展功能：推荐返佣、活动、权益卡、站点、设备 |
| 阶段 4 | 1-2周 | 辅助功能：特殊券类、报表、通用页面 |
| 阶段 5 | 1周 | 测试优化：功能测试、性能优化、上线准备 |

## 开发计划

### 阶段 1: 基础架构 ✅ **已完成**

#### 1.1 环境配置 ✅

- [x] 配置 API 地址（开发/测试/生产）
- [x] 配置 Alova 实例和拦截器
- [x] 配置微信小程序 AppID

**1.2 API 层** ✅ → `src/api/`

- [x] 核心配置 (`core/instance.ts`, `core/handlers.ts`, `core/types.ts`)
- [x] 认证模块 API (`modules/auth.ts`)
- [x] 用户模块 API (`modules/user.ts`)

**1.3 通用组件** → `src/components/common/`

- [ ] 基础组件 (Button, Card, Modal 等)
- [ ] 布局组件 (Navbar, Tabbar)
- [ ] 状态组件 (Loading, Empty)

**1.4 认证系统** → `src/pages/auth/` ⏸️ **暂缓**

- [ ] 微信授权登录 (`login.vue`)
- [ ] 用户注册 (`register.vue`)
- [ ] Token 管理 (composables/auth/)
- [ ] 状态管理 (store/modules/auth.ts, user.ts)
- [ ] 路由守卫 (router/guards.ts)

**备注**：认证系统开发已暂缓，等待公众号测试环境就绪后再继续。

### 阶段 2: 核心功能 ⏳

**2.1 个人中心** → `src/pages/index/`

- [ ] TabBar 首页 (`index.vue`)
- [ ] 用户信息展示
- [ ] 余额和券数量
- [ ] 快捷入口

**2.2 优惠券系统** → `src/pages/coupon/`

- [ ] TabBar 券包页 (`index.vue`)
- [ ] 自助券 (`manual.vue`)
- [ ] 自动券 (`automatic.vue`)
- [ ] 核销券 (`voucher.vue`)
- [ ] 券详情 (`detail.vue`)
- [ ] Store (store/modules/coupon.ts)
- [ ] API (api/modules/coupon.ts)

**2.3 充值购券** → `src/pages/recharge/`

- [ ] 套餐列表 (`index.vue`)
- [ ] 收银台 (`cashier.vue`)
- [ ] 微信支付集成
- [ ] 订单详情 (`order-detail.vue`)
- [ ] 使用教程和规则
- [ ] API (api/modules/recharge.ts)

**2.4 消费记录** → `src/pages/consume/`

- [ ] 记录列表 (`index.vue`)
- [ ] 消费详情 (`detail.vue`)
- [ ] 筛选功能
- [ ] API (api/modules/consume.ts)

### 阶段 3: 扩展功能 ⏳

**3.1 推荐返佣** → `src/subPages/referee/`

- [ ] 推荐首页 (`index.vue`)
- [ ] 推荐列表 (`referenced.vue`)
- [ ] 提现功能 (`withdraw.vue`)
- [ ] 推荐海报
- [ ] API (api/modules/referee.ts)

**3.2 营销活动** → `src/subPages/activity/`

- [ ] 活动列表 (`index.vue`)
- [ ] 活动详情 (`detail.vue`)
- [ ] 扫码领券 (`qr-receive.vue`)
- [ ] API (api/modules/activity.ts)

**3.3 权益卡** → `src/subPages/daily-card/`

- [ ] 权益卡详情 (`index.vue`)
- [ ] 领券记录 (`coupon-logs.vue`)
- [ ] 每日领券功能
- [ ] API (api/modules/daily-card.ts)

**3.4 站点地图** → `src/subPages/station/`

- [ ] 地图展示 (`map.vue`)
- [ ] 站点列表 (`list.vue`)
- [ ] 站点详情 (`detail.vue`)
- [ ] 地图组件集成
- [ ] API (api/modules/station.ts)

**3.5 设备管理** → `src/subPages/device/`

- [ ] 扫码洗车 (`scan.vue`)
- [ ] 设备监控 (`monitor.vue`)
- [ ] 洗车流程
- [ ] API (api/modules/device.ts)

### 阶段 4: 辅助功能 ⏳

#### 4.1 特殊券类

- [ ] 停车券 (`subPages/park-coupon/`)
- [ ] 抖音券 (`subPages/douyin/`)
- [ ] 兑换码 (`subPages/redeem/`)

**4.2 数据报表** → `src/subPages/report/`

- [ ] 门店列表 (`index.vue`)
- [ ] 门店详情 (`station-detail.vue`)
- [ ] 数据图表

**4.3 通用页面** → `src/subPages/common/`

- [ ] 服务协议 (`protocol.vue`)
- [ ] 隐私政策 (`privacy.vue`)
- [ ] 关于我们 (`about.vue`)

### 阶段 5: 测试优化 ⏳

#### 5.1 功能测试

- [ ] 完整流程测试
- [ ] 多端兼容性测试
- [ ] 支付流程测试
- [ ] 授权流程测试

#### 5.2 性能优化

- [ ] 页面加载优化
- [ ] 分包配置优化
- [ ] 图片资源优化
- [ ] 请求缓存策略

#### 5.3 上线准备

- [ ] 生产环境配置
- [ ] 小程序提审准备
- [ ] 用户文档编写

## 进度跟踪

| 阶段 | 状态 | 进度 | 更新时间 |
| ----- | ---- | ----- | ---------- |
| 阶段 0: 项目分析 | ✅ Completed | 100% | 2026-01-08 |
| 阶段 1: 基础架构 | ⏳ In Progress | 50% | 2026-01-08 |
| 阶段 2: 核心功能 | ⏳ Pending | 0% | 2026-01-08 |
| 阶段 3: 扩展功能 | ⏳ Pending | 0% | 2026-01-08 |
| 阶段 4: 辅助功能 | ⏳ Pending | 0% | 2026-01-08 |
| 阶段 5: 测试优化 | ⏳ Pending | 0% | 2026-01-08 |

## 关键决策

### 架构设计

- ✅ 功能模块化组织
- ✅ 主包 + 分包策略
- ✅ API 按业务模块划分（16 个模块）
- ✅ 组件分类：common/business/layout
- ✅ 完整 TypeScript 类型定义

### 技术选型

- **前端框架**: uni-app (Vue3 + TypeScript)
- **状态管理**: Pinia
- **请求库**: Alova
- **UI 组件**: Wot Design Uni
- **认证方式**: Token 认证（存储在 Redis，30天有效期）
- **支付集成**: 微信支付 (优先)

### 风险管理

1. **API 依赖**: 需后端同步提供接口，提前梳理接口清单
2. **支付集成**: 微信支付优先，支付宝后续接入
3. **多端兼容**: 优先保证微信小程序，及早多端测试

## 进度日志

### 2026年1月8日

**上午**：

- ✅ 完成原项目结构深度分析（25+ Controller，完整功能清单）
- ✅ 完成新目录结构设计（[K001 知识文档](../knowledge/K001-directory-structure-design.md)）
- ✅ 简化 TASK001 开发计划，与新目录结构对齐

**下午**：

- ✅ 完成环境配置（开发/测试/生产 API 地址）
- ✅ 配置 Alova 实例和 uni-app 适配器
- ✅ 实现请求拦截器（自动添加 Bearer Token）
- ✅ 实现响应拦截器（统一错误处理）
- ✅ 实现业务状态码处理（200/401/403/500）
- ✅ 实现 401/403 自动跳转登录页
- ✅ 创建 API 核心类型定义（`src/api/core/types.ts`）
- ✅ 创建认证模块 API（`src/api/modules/auth.ts`）
- ✅ 创建用户模块 API（`src/api/modules/user.ts`）
- ✅ 更新技术决策：使用 Token 认证（非 JWT）

**技术决策**：

- ✅ 确认使用 Token 认证方式（存储在 Redis，30天有效期）
- ✅ Token 格式：`md5("{$storeId}_{$timeStamp}_{$userId}_{$guid}_{$salt}")`
- ✅ 后端 API 路径：`/miniapp/`（新模块，保持与 `/uci/` 共存）
- ✅ 后端响应格式：`{ status, message, data }`
- ✅ 状态码：200(成功)、401(未登录)、403(无权限)、500(错误)

- 🎯 **下一步**: 开始阶段 1.3 - 通用组件开发 & 阶段 1.4 - 认证系统开发

## 相关资源

### 文档

- [目录结构设计](../knowledge/K001-directory-structure-design.md)
- [项目简介](../projectbrief.md)
- [系统架构](../systemPatterns.md)
- [技术上下文](../techContext.md)

### 外部参考

- [uni-app 官方文档](https://uniapp.dcloud.net.cn/)
- [Wot Design Uni](https://wot-design-uni.pages.dev/)
- [Alova 请求库](https://alova.js.org/)
- [微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
