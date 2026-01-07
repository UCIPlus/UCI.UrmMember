# 技术上下文

## 技术栈总览

### 核心框架

- **Vue 3.4.38**：渐进式 JavaScript 框架，使用 Composition API
- **TypeScript 5.5.4**：提供类型安全和更好的开发体验
- **uni-app 3.0**：跨平台应用开发框架，支持编译到微信小程序、支付宝小程序、H5

### 构建工具

- **Vite 5.2.8**：下一代前端构建工具，提供快速的开发服务器和优化的生产构建
- **pnpm**：快速、节省磁盘空间的包管理器

### UI 组件库

- **Wot Design Uni 1.14.0**：基于 Vue3 + TypeScript 的 uni-app 组件库
  - 70+ 高质量组件
  - 支持暗黑模式
  - 支持主题定制（CSS 变量）
  - 支持国际化（vue-i18n）

### 状态管理

- **Pinia 2.3.1**：Vue 3 官方推荐的状态管理库
  - 类型安全
  - 支持组合式 API
  - 支持状态持久化

### 网络请求

- **Alova 3.3.4**：极致高效的请求工具集
  - 支持 uni-app 适配器
  - 内置请求缓存
  - 支持乐观更新
  - 自动重试机制
- **@alova/adapter-uniapp 2.0.14**：Alova 的 uni-app 适配器
- **@alova/mock 2.0.17**：Mock 数据支持

### 路由管理

- **@wot-ui/router 1.1.2**：适用于 uni-app & Vue3 的轻量级路由库
  - 支持路由守卫
  - 支持路由参数
  - 支持编程式导航

### 国际化

- **vue-i18n 9.14.0**：Vue.js 国际化插件
  - 支持多语言
  - 支持动态切换
  - 支持消息格式化

### 样式方案

- **UnoCSS**：高性能原子化 CSS 引擎
  - 按需生成
  - 零运行时
  - 灵活的预设和规则

### 图表库

- **uni-echarts 2.2.5**：适用于 uni-app 的 Apache ECharts 组件
- **echarts 6.0.0**：数据可视化图表库

### 工具库

- **@vueuse/core 11.0.3**：Vue 组合式 API 工具集
  - 提供大量实用的组合式函数
  - 类型安全
  - 支持 SSR

## 开发工具

### 编辑器

- **VS Code**：推荐的开发编辑器
- **必装插件**：
  - Volar：Vue 3 语法高亮和类型检查
  - wot-ui-intellisense：Wot UI 代码提示
  - UnoCSS：原子化 CSS 智能提示
  - ESLint：代码质量检查
  - Prettier：代码格式化

### 代码质量

- **ESLint**：代码质量检查工具
  - 使用 `@antfu/eslint-config` 配置
  - 支持 Vue3、TypeScript、UnoCSS
- **Commitlint**：Git 提交信息规范检查
- **Husky**：Git Hooks 工具，在提交前执行检查

### 版本管理

- **Git**：版本控制
- **Conventional Commits**：提交信息规范
- **Standard Version**：自动化版本发布和 CHANGELOG 生成

## 环境配置

### Node.js 版本

- **要求**：>= 20.19.0 || >= 22.12.0 || >= 24.0.0
- **版本管理**：使用 Volta 2.0.2+ 管理 Node.js 版本

### 环境变量

#### 开发环境（.env.development）

```dotenv
# API 基础 URL - 开发环境
VITE_API_BASE_URL=http://localhost:8080/api

# 环境名称
VITE_ENV_NAME=development
```

#### 预发布环境（.env.staging）

```dotenv
# API 基础 URL - 预发布环境
VITE_API_BASE_URL=https://staging-api.yourapp.com

# 环境名称
VITE_ENV_NAME=staging
```

#### 生产环境（.env.production）

```dotenv
# API 基础 URL - 生产环境
VITE_API_BASE_URL=https://api.yourapp.com

# 环境名称
VITE_ENV_NAME=production
```

### 环境变量使用

```typescript
// 在代码中使用
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
const envName = import.meta.env.VITE_ENV_NAME
```

## 项目配置文件

### package.json

- **项目元信息**：名称、版本、许可证
- **脚本命令**：开发、构建、测试、代码检查
- **依赖管理**：生产依赖和开发依赖

### tsconfig.json

- **编译选项**：严格模式、目标版本、模块系统
- **路径映射**：`@/` → `src/`
- **类型声明**：包含自定义类型声明文件

### vite.config.ts

- **插件配置**：Uni、UnoCSS、AutoImport 等
- **构建优化**：代码分割、压缩、Tree Shaking
- **开发服务器**：端口、代理等

### uno.config.ts

- **UnoCSS 配置**：预设、规则、快捷方式
- **主题定制**：颜色、字体、间距等

### pages.config.ts

- **页面配置**：路由、标题、导航栏样式
- **分包配置**：子包路径和页面

### manifest.config.ts

- **应用配置**：名称、版本、图标
- **平台配置**：微信小程序、支付宝小程序、H5 特定配置
- **权限配置**：网络、存储、定位等

### alova.config.ts

- **Alova 配置**：API 文档地址、输出路径
- **代码生成**：TypeScript 类型生成

### eslint.config.mjs

- **ESLint 规则**：基于 `@antfu/eslint-config`
- **自定义规则**：项目特定的代码规范

### commitlint.config.js

- **提交信息规范**：基于 Conventional Commits
- **允许的类型**：feat、fix、docs、style、refactor、perf、test、chore

## 依赖管理

### 主要生产依赖

| 包名 | 版本 | 用途 |
|------|------|------|
| vue | ~3.4.38 | 核心框架 |
| @dcloudio/uni-app | 3.0.0-4080520251106001 | uni-app 核心 |
| wot-design-uni | ^1.14.0 | UI 组件库 |
| pinia | ^2.3.1 | 状态管理 |
| alova | ^3.3.4 | 网络请求 |
| @wot-ui/router | ^1.1.2 | 路由管理 |
| vue-i18n | ^9.14.0 | 国际化 |
| @vueuse/core | ^11.0.3 | 组合式工具库 |
| echarts | ^6.0.0 | 图表库 |
| uni-echarts | ^2.2.5 | uni-app echarts 适配 |

### 主要开发依赖

| 包名 | 版本 | 用途 |
|------|------|------|
| vite | ^5.2.8 | 构建工具 |
| typescript | ^5.5.4 | 类型系统 |
| @uni-helper/vite-plugin-uni-pages | ^0.8.4 | 页面路由生成 |
| @uni-helper/vite-plugin-uni-layouts | ^0.2.2 | 布局系统 |
| @uni-helper/vite-plugin-uni-manifest | ^0.3.4 | manifest 配置 |
| @uni-helper/vite-plugin-uni-components | ^0.0.14 | 组件自动导入 |
| unocss | ^0.64.0 | 原子化 CSS |
| unplugin-auto-import | ^0.18.3 | API 自动导入 |
| eslint | ^9.10.0 | 代码检查 |
| @antfu/eslint-config | ^3.10.0 | ESLint 配置 |

## 构建配置

### 开发构建

```bash
# H5 开发
pnpm dev:h5

# 微信小程序开发
pnpm dev:mp-weixin

# 支付宝小程序开发
pnpm dev:mp-alipay
```

### 生产构建

```bash
# H5 构建
pnpm build:h5

# 微信小程序构建
pnpm build:mp-weixin

# 支付宝小程序构建
pnpm build:mp-alipay
```

### 构建产物

- **H5**：`dist/build/h5/` - 可直接部署到 Web 服务器
- **微信小程序**：`dist/build/mp-weixin/` - 使用微信开发者工具上传
- **支付宝小程序**：`dist/build/mp-alipay/` - 使用支付宝开发者工具上传

## API 集成

### 后端 API 规范

- **协议**：HTTPS
- **格式**：JSON
- **认证**：Token（存储在请求头）

### 统一响应格式

```typescript
interface ApiResponse<T = any> {
  code: number        // 状态码（0 表示成功）
  message: string     // 提示信息
  data: T            // 响应数据
  timestamp: number   // 时间戳
}
```

### Alova 实例配置

```typescript
// src/api/core/instance.ts
import { createAlova } from 'alova'
import AdapterUniapp from '@alova/adapter-uniapp'

const alovaInstance = createAlova({
  baseURL: import.meta.env.VITE_API_BASE_URL,

  // 使用 uni-app 适配器
  requestAdapter: AdapterUniapp(),

  // 超时时间
  timeout: 30000,

  // 请求拦截器
  beforeRequest(method) {
    // 添加 Token
    const userStore = useUserStore()
    if (userStore.token) {
      method.config.headers.Authorization = `Bearer ${userStore.token}`
    }
  },

  // 响应拦截器
  responded: {
    // 成功响应
    onSuccess(response) {
      const { code, message, data } = response.data
      if (code === 0) {
        return data
      } else {
        showErrorToast(message)
        throw new Error(message)
      }
    },

    // 错误响应
    onError(error) {
      if (error.statusCode === 401) {
        // 未授权，跳转登录
        navigateToLogin()
      } else {
        showErrorToast('网络错误，请稍后再试')
      }
      throw error
    }
  }
})
```

## 多端差异处理

### 条件编译

```typescript
// 平台判断
// #ifdef MP-WEIXIN
console.log('微信小程序')
// #endif

// #ifdef MP-ALIPAY
console.log('支付宝小程序')
// #endif

// #ifdef H5
console.log('H5')
// #endif
```

### 平台特定 API

```typescript
// 微信小程序
// #ifdef MP-WEIXIN
wx.scanCode({
  success: (res) => {
    console.log(res.result)
  }
})
// #endif

// 支付宝小程序
// #ifdef MP-ALIPAY
my.scan({
  success: (res) => {
    console.log(res.code)
  }
})
// #endif
```

## 性能优化

### 代码分割

- 路由懒加载
- 组件异步加载
- 分包加载

### 资源优化

- 图片压缩
- 图标使用 SVG 或 IconFont
- 静态资源 CDN

### 缓存策略

- HTTP 缓存
- Alova 请求缓存
- 本地存储缓存

### 包体积优化

- Tree Shaking
- 按需引入
- 压缩混淆

## 调试工具

### Vue DevTools

- 组件树查看
- 状态调试
- 事件追踪

### uni-app 调试

- 微信开发者工具
- 支付宝开发者工具
- Chrome DevTools（H5）

### 网络调试

- Alova DevTools
- 网络面板
- 抓包工具（Charles、Fiddler）

## 技术约束

### 浏览器兼容性

- **微信小程序**：基于微信内置浏览器
- **支付宝小程序**：基于支付宝内置浏览器
- **H5**：现代浏览器（Chrome、Safari、Edge）

### 包体积限制

- **微信小程序**：
  - 主包 <= 2MB
  - 总包 <= 20MB（含分包）
- **支付宝小程序**：
  - 主包 <= 2MB
  - 总包 <= 8MB（含分包）

### API 限制

- **请求并发限制**：小程序最多同时 10 个请求
- **本地存储限制**：小程序最多 10MB

## 安全考虑

### 数据安全

- HTTPS 传输
- 敏感数据加密
- Token 安全存储

### 代码安全

- 代码混淆
- 防止 XSS 攻击
- 输入验证

### 隐私保护

- 用户授权管理
- 数据最小化原则
- 隐私政策合规

## 部署方案

### H5 部署

1. 执行 `pnpm build:h5`
2. 将 `dist/build/h5/` 目录上传到 Web 服务器
3. 配置 Nginx 或 Apache

### 微信小程序部署

1. 执行 `pnpm build:mp-weixin`
2. 使用微信开发者工具打开 `dist/build/mp-weixin/`
3. 上传代码到微信平台
4. 提交审核

### 支付宝小程序部署

1. 执行 `pnpm build:mp-alipay`
2. 使用支付宝开发者工具打开 `dist/build/mp-alipay/`
3. 上传代码到支付宝平台
4. 提交审核

## 技术演进计划

### 短期（1-3 个月）

- 完成核心功能迁移
- 优化性能和体验
- 完善单元测试

### 中期（3-6 个月）

- 引入 SSR（服务端渲染）
- 增强离线能力（PWA）
- 优化构建流程

### 长期（6-12 个月）

- 微前端架构探索
- 跨端能力增强（App）
- AI 功能集成
