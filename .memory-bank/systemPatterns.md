# 系统架构与模式

## 整体架构

### 架构设计原则

```
┌─────────────────────────────────────────┐
│         UCI Member 小程序                │
│   (微信小程序 / 支付宝小程序 / H5)       │
└─────────────────────────────────────────┘
                    ↓ HTTPS
┌─────────────────────────────────────────┐
│          后端 API 服务                   │
│      (PHP ThinkPHP 框架)                │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│         数据库 & 业务逻辑                │
└─────────────────────────────────────────┘
```

### 前后端分离原则

1. **职责分离**：前端负责展示和交互，后端负责业务逻辑和数据
2. **接口驱动**：所有数据交互通过 RESTful API
3. **独立部署**：前端和后端独立开发、测试、部署
4. **版本管理**：前端版本号独立于后端

## 前端架构

### 目录结构模式

```
src/
├── api/                    # API 接口层
│   ├── core/              # Alova 核心配置
│   │   ├── instance.ts    # Alova 实例（单例模式）
│   │   ├── handlers.ts    # 响应处理器
│   │   └── middleware.ts  # 请求中间件
│   ├── mock/              # Mock 数据（开发环境）
│   ├── apiDefinitions.ts  # API 定义（通过 Alova 生成）
│   └── createApis.ts      # API 创建器
│
├── pages/                 # 页面组件
│   ├── index/            # 个人中心首页
│   ├── coupon/           # 优惠券管理
│   ├── recharge/         # 充值相关
│   ├── consume/          # 消费记录
│   ├── referee/          # 推荐返佣
│   └── ...
│
├── subPages/             # 分包页面（优化加载）
│   ├── activity/         # 营销活动
│   ├── station/          # 站点查询
│   └── ...
│
├── components/           # 全局组件
│   ├── common/          # 通用组件（按钮、卡片等）
│   ├── business/        # 业务组件（优惠券卡片、订单项等）
│   └── layout/          # 布局组件
│
├── composables/          # 组合式函数（Composition API）
│   ├── useUser.ts       # 用户相关逻辑
│   ├── useCoupon.ts     # 优惠券相关逻辑
│   ├── usePayment.ts    # 支付相关逻辑
│   └── ...
│
├── store/                # 状态管理（Pinia）
│   ├── modules/
│   │   ├── user.ts      # 用户状态
│   │   ├── coupon.ts    # 优惠券状态
│   │   └── ...
│   └── index.ts         # Store 入口
│
├── router/               # 路由配置
│   ├── guards.ts        # 路由守卫（登录验证等）
│   └── routes.ts        # 路由定义
│
├── utils/                # 工具函数
│   ├── request.ts       # 网络请求封装
│   ├── storage.ts       # 本地存储封装
│   ├── format.ts        # 格式化工具
│   └── validators.ts    # 验证工具
│
├── layouts/              # 布局组件
│   ├── default.vue      # 默认布局
│   ├── tabbar.vue       # 底部导航布局
│   └── blank.vue        # 空白布局
│
├── static/               # 静态资源
│   ├── images/          # 图片资源
│   ├── icons/           # 图标
│   └── fonts/           # 字体
│
├── theme.json            # 主题配置
├── App.vue               # 根组件
└── main.ts               # 入口文件
```

### 架构分层

#### 1. 表现层（Presentation Layer）

**职责**：UI 展示和用户交互

**组成**：

- Vue 组件（pages + components）
- Wot UI 组件库
- UnoCSS 样式

**原则**：

- 只负责展示，不包含业务逻辑
- 通过 props 接收数据，通过 emit 发送事件
- 使用 Composition API 组织逻辑

#### 2. 业务逻辑层（Business Logic Layer）

**职责**：封装业务逻辑，提供给表现层使用

**组成**：

- Composables（可复用的组合式函数）
- Pinia Store（全局状态管理）

**模式**：

- **Composable 模式**：封装可复用的业务逻辑
- **Store 模式**：管理全局共享状态
- **单一职责**：每个 composable 只负责一个业务领域

**示例**：

```typescript
// composables/useUser.ts
export function useUser() {
  const userStore = useUserStore()

  const login = async (code: string) => {
    // 登录逻辑
  }

  const logout = async () => {
    // 登出逻辑
  }

  return {
    user: userStore.user,
    login,
    logout
  }
}
```

#### 3. 数据访问层（Data Access Layer）

**职责**：与后端 API 交互，获取和提交数据

**组成**：

- Alova 请求实例
- API 定义文件
- 请求/响应拦截器

**模式**：

- **单例模式**：Alova 实例全局唯一
- **工厂模式**：通过 createApis 生成 API 方法
- **拦截器模式**：统一处理请求和响应

**示例**：

```typescript
// api/core/instance.ts
const alovaInstance = createAlova({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  requestAdapter: AdapterUniapp(),
  responded: {
    onSuccess: (response) => {
      // 统一响应处理
    },
    onError: (error) => {
      // 统一错误处理
    }
  }
})
```

## 核心设计模式

### 1. Composition API 模式

**使用场景**：所有组件和业务逻辑

**优势**：

- 逻辑复用性强
- 类型推导友好
- 代码组织清晰

**示例**：

```typescript
// 优惠券管理 composable
export function useCoupon() {
  const coupons = ref<Coupon[]>([])
  const loading = ref(false)

  const fetchCoupons = async (type: CouponType) => {
    loading.value = true
    try {
      const data = await Apis.coupon.list({ type })
      coupons.value = data
    } finally {
      loading.value = false
    }
  }

  const useCoupon = async (couponId: string) => {
    // 使用券逻辑
  }

  return {
    coupons,
    loading,
    fetchCoupons,
    useCoupon
  }
}
```

### 2. 状态管理模式（Pinia）

**使用场景**：全局共享状态（用户信息、购物车等）

**原则**：

- 状态最小化：只存储必要的全局状态
- 本地优先：页面级状态放在组件内
- 持久化：关键状态持久化到本地存储

**示例**：

```typescript
// store/modules/user.ts
export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null)
  const token = ref<string>('')

  const setUser = (userData: User) => {
    user.value = userData
  }

  const clearUser = () => {
    user.value = null
    token.value = ''
  }

  return {
    user,
    token,
    setUser,
    clearUser
  }
}, {
  persist: true // 持久化
})
```

### 3. 路由守卫模式

**使用场景**：登录验证、权限控制

**实现**：

```typescript
// router/guards.ts
export function setupRouterGuards(router) {
  // 登录验证守卫
  router.beforeEach((to, from, next) => {
    const userStore = useUserStore()

    if (to.meta.requiresAuth && !userStore.token) {
      // 未登录，跳转到登录页
      next({ name: 'login', query: { redirect: to.fullPath } })
    } else {
      next()
    }
  })

  // 页面标题守卫
  router.afterEach((to) => {
    if (to.meta.title) {
      uni.setNavigationBarTitle({ title: to.meta.title })
    }
  })
}
```

### 4. API 自动生成模式

**使用场景**：根据后端接口自动生成前端 API 调用代码

**工具**：Alova Code Generator

**优势**：

- 减少手写代码
- 类型安全
- 与后端接口保持同步

**配置**：

```typescript
// alova.config.ts
export default defineConfig({
  input: 'http://api.yourapp.com/docs', // 后端 API 文档地址
  output: 'src/api/apiDefinitions.ts',
  generator: 'typescript'
})
```

### 5. 分包加载模式

**使用场景**：优化小程序包体积

**策略**：

- **主包**：核心页面（个人中心、优惠券列表）
- **分包**：低频页面（营销活动、站点查询）

**配置**：

```typescript
// pages.config.ts
export default defineUniPages({
  pages: [
    // 主包页面
    { path: 'pages/index/index', type: 'home' },
    { path: 'pages/coupon/list', type: 'page' }
  ],
  subPackages: [
    {
      root: 'subPages/activity',
      pages: [
        { path: 'signin/index', type: 'page' },
        { path: 'bargain/index', type: 'page' }
      ]
    }
  ]
})
```

## 数据流模式

### 单向数据流

```
用户操作 → 触发 Action → 调用 API → 更新 State → 重新渲染 UI
```

**示例流程**：用户点击"购买套餐"按钮

1. 组件触发 `handleBuy` 方法
2. 调用 `usePurchase` composable 的 `buyPlan` 方法
3. composable 调用 `Apis.combine.submitPlan` API
4. API 返回结果，更新 Store 中的订单状态
5. 组件响应状态变化，显示购买成功

### 状态同步策略

**本地状态 ↔ 服务器状态**：

- **乐观更新**：先更新本地，失败后回滚（如点赞、收藏）
- **悲观更新**：等待服务器响应后更新（如支付、提现）
- **定时同步**：定期从服务器拉取最新数据（如券数量）

## 错误处理模式

### 分层错误处理

#### 1. API 层错误处理

```typescript
// api/core/handlers.ts
export const errorHandler = (error: any) => {
  if (error.statusCode === 401) {
    // 未授权，跳转登录
    navigateToLogin()
  } else if (error.statusCode === 500) {
    // 服务器错误
    showErrorToast('服务器繁忙，请稍后再试')
  } else {
    // 其他错误
    showErrorToast(error.message || '操作失败')
  }
  throw error
}
```

#### 2. 业务层错误处理

```typescript
// composables/usePurchase.ts
export function usePurchase() {
  const buyPlan = async (planId: string) => {
    try {
      const result = await Apis.combine.submitPlan({ planId })
      showSuccessToast('购买成功')
      return result
    } catch (error) {
      // API 层已经显示通用错误，这里处理业务特定错误
      if (error.code === 'INSUFFICIENT_BALANCE') {
        showErrorToast('余额不足，请先充值')
      }
      throw error
    }
  }

  return { buyPlan }
}
```

#### 3. 组件层错误处理

```typescript
// 组件中捕获最终错误，防止应用崩溃
const handleBuy = async () => {
  try {
    await buyPlan(selectedPlanId.value)
    // 跳转到支付页面
  } catch (error) {
    console.error('Purchase failed:', error)
    // 错误已在上层处理，这里可以做一些清理工作
  }
}
```

## 性能优化模式

### 1. 按需加载

- 路由懒加载
- 组件异步加载
- 图片懒加载

### 2. 缓存策略

- API 响应缓存（Alova 内置）
- 静态资源缓存
- 计算属性缓存

### 3. 虚拟列表

- 长列表使用虚拟滚动（如优惠券列表）

### 4. 节流防抖

- 搜索输入防抖
- 按钮点击节流

## 多端适配模式

### 条件编译

```typescript
// #ifdef MP-WEIXIN
// 微信小程序特有代码
// #endif

// #ifdef MP-ALIPAY
// 支付宝小程序特有代码
// #endif

// #ifdef H5
// H5 特有代码
// #endif
```

### API 差异处理

```typescript
// utils/platform.ts
export const getPlatform = () => {
  // #ifdef MP-WEIXIN
  return 'weixin'
  // #endif

  // #ifdef MP-ALIPAY
  return 'alipay'
  // #endif

  // #ifdef H5
  return 'h5'
  // #endif
}

export const scanCode = () => {
  const platform = getPlatform()
  if (platform === 'weixin') {
    return wx.scanCode()
  } else if (platform === 'alipay') {
    return my.scan()
  }
}
```

## 测试策略

### 测试金字塔

```
      E2E 测试
     (少量关键流程)
    ────────────

     集成测试
   (API + Store)
  ──────────────────

      单元测试
  (Utils + Composables)
─────────────────────────
```

### 测试重点

1. **单元测试**：工具函数、composables
2. **集成测试**：API 交互、状态管理
3. **E2E 测试**：核心业务流程（登录、购买、支付）

## 关键决策记录

### 为什么选择 Wot Starter？

- 成熟的 uni-app 脚手架，减少配置工作
- 内置最佳实践和工具链
- 社区活跃，文档完善

### 为什么选择 Alova 而不是 Axios？

- 专为前端设计，支持 uni-app
- 内置请求缓存、重试、乐观更新
- 类型推导更友好

### 为什么使用 Composition API？

- 逻辑复用更简单
- 类型推导更强大
- 代码组织更灵活

### 为什么前后端分离？

- 提升开发效率（前后端并行开发）
- 提升用户体验（客户端渲染更快）
- 降低耦合度（易于维护和扩展）
- 支持多端部署（小程序、H5）
