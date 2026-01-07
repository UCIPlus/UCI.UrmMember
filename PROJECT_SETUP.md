# UCI 成员端项目配置说明

## 项目概述

- **项目名称**: UCI Member（优迪邦成员端）
- **项目位置**: `frontend/member`
- **技术栈**: Wot Starter + Wot UI + Vue3 + TypeScript
- **目标平台**: 微信小程序、支付宝小程序、H5

## 环境要求

- Node.js: >= 20.19.0 || >= 22.12.0 || >= 24.0.0
- pnpm: 10.24.0+
- Volta: 2.0.2+（用于 Node.js 版本管理）

## 快速开始

### 1. 安装依赖

```bash
cd frontend/member
pnpm install
```

### 2. 配置环境变量

编辑 `.env.development` 文件，配置开发环境的 API 地址：

```dotenv
# API 基础 URL - 开发环境
VITE_API_BASE_URL=http://your-backend-api.com/api

# 环境名称
VITE_ENV_NAME=development
```

编辑 `.env.production` 文件，配置生产环境的 API 地址：

```dotenv
# API 基础 URL - 生产环境
VITE_API_BASE_URL=https://api.yourapp.com

# 环境名称
VITE_ENV_NAME=production
```

### 3. 启动开发服务器

#### H5 开发

```bash
pnpm dev
# 或
pnpm dev:h5
```

开发服务器运行在: http://localhost:5173/

#### 微信小程序开发

```bash
pnpm dev:mp-weixin
```

编译后的文件在 `dist/dev/mp-weixin` 目录，使用微信开发者工具打开。

#### 支付宝小程序开发

```bash
pnpm dev:mp-alipay
```

编译后的文件在 `dist/dev/mp-alipay` 目录，使用支付宝开发者工具打开。

### 4. 构建生产版本

#### H5 构建

```bash
pnpm build:h5
```

#### 微信小程序构建

```bash
pnpm build:mp-weixin
```

#### 支付宝小程序构建

```bash
pnpm build:mp-alipay
```

## 项目结构

```
frontend/member/
├── .env.development          # 开发环境变量
├── .env.production           # 生产环境变量
├── .env.staging              # 预发布环境变量
├── package.json              # 项目依赖配置
├── pages.config.ts           # 页面配置
├── vite.config.ts            # Vite 构建配置
├── tsconfig.json             # TypeScript 配置
├── uno.config.ts             # UnoCSS 配置
├── alova.config.ts           # Alova 网络请求配置
├── src/
│   ├── api/                  # API 接口定义
│   │   ├── core/            # Alova 核心配置
│   │   │   ├── instance.ts  # Alova 实例
│   │   │   ├── handlers.ts  # 响应处理
│   │   │   └── middleware.ts # 中间件
│   │   ├── mock/            # Mock 数据
│   │   ├── apiDefinitions.ts # API 定义
│   │   └── createApis.ts    # API 生成器
│   ├── components/          # 全局组件
│   ├── composables/         # 组合式函数
│   ├── layouts/             # 布局组件
│   ├── pages/               # 页面
│   │   ├── index/          # 首页
│   │   └── about/          # 关于页面
│   ├── router/              # 路由配置
│   ├── store/               # Pinia 状态管理
│   ├── static/              # 静态资源
│   ├── theme.json           # 主题配置
│   ├── App.vue              # 根组件
│   └── main.ts              # 入口文件
└── manifest.json            # uni-app 清单文件
```

## 核心技术栈

### 1. Wot UI 组件库

[文档地址](https://wot-ui.cn/)

提供 70+ 高质量组件，支持：
- 国际化（内置多语言包）
- 暗黑模式
- CSS 变量主题定制

### 2. Alova 网络请求

[文档地址](https://alova.js.org/zh-CN/)

极高效的请求工具集，支持：
- 请求缓存
- 请求重试
- 状态管理
- Mock 数据

### 3. @wot-ui/router 路由管理

轻量级路由库，适用于 uni-app & Vue3。

### 4. Pinia 状态管理

[文档地址](https://pinia.vuejs.org/zh/)

Vue3 官方推荐的状态管理工具，支持：
- TypeScript 支持
- 持久化存储
- 模块化

### 5. UnoCSS 样式系统

[文档地址](https://unocss.dev/)

高性能原子化 CSS 引擎。

## 开发工具推荐

### VS Code 插件

- **Volar** - Vue 3 语法高亮和智能提示
- **wot-ui-intellisense** - Wot UI 代码提示插件
- **UnoCSS** - UnoCSS 智能提示
- **ESLint** - 代码检查
- **Prettier** - 代码格式化

### 微信开发者工具

开发微信小程序必备工具：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

### 支付宝开发者工具

开发支付宝小程序必备工具：https://opendocs.alipay.com/mini/ide/download

## 常用命令

### 开发

```bash
pnpm dev                  # H5 开发
pnpm dev:mp-weixin        # 微信小程序开发
pnpm dev:mp-alipay        # 支付宝小程序开发
```

### 构建

```bash
pnpm build                # H5 构建
pnpm build:mp-weixin      # 微信小程序构建
pnpm build:mp-alipay      # 支付宝小程序构建
```

### 代码检查

```bash
pnpm lint                 # 运行 ESLint
pnpm lint:fix             # 自动修复 ESLint 问题
pnpm type-check           # TypeScript 类型检查
```

### API 生成

```bash
pnpm alova-gen            # 生成 API 接口代码
```

## 配置后端 API

### 1. 修改环境变量

编辑 `.env.development` 或 `.env.production`：

```dotenv
VITE_API_BASE_URL=http://localhost:8000/api
```

### 2. 定义 API 接口

在 `src/api/apiDefinitions.ts` 中定义 API 接口：

```typescript
export const apiDefinitions = {
  // 用户相关
  user: {
    login: {
      method: 'POST',
      url: '/user/login',
    },
    getInfo: {
      method: 'GET',
      url: '/user/info',
    },
  },
  // 券相关
  coupon: {
    list: {
      method: 'GET',
      url: '/coupon/list',
    },
    receive: {
      method: 'POST',
      url: '/coupon/receive',
    },
  },
}
```

### 3. 生成 API 代码

```bash
pnpm alova-gen
```

### 4. 使用 API

```vue
<script setup lang="ts">
import { useRequest } from 'alova/client'

const { data, loading, error, send } = useRequest(Apis.user.login, {
  immediate: false,
})

const handleLogin = async () => {
  try {
    const result = await send({ username, password })
    console.log('登录成功', result)
  } catch (err) {
    console.error('登录失败', err)
  }
}
</script>
```

## 路由配置

路由配置在 `src/router/index.ts` 中，使用 `@wot-ui/router`：

```typescript
import { createRouter } from '@wot-ui/router'

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/index/index.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/pages/about/index.vue'),
    },
  ],
})

export default router
```

## 状态管理

状态管理使用 Pinia，在 `src/store/` 目录下创建 store：

```typescript
// src/store/user.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const userInfo = ref<any>(null)

  const login = (newToken: string) => {
    token.value = newToken
  }

  const logout = () => {
    token.value = ''
    userInfo.value = null
  }

  return {
    token,
    userInfo,
    login,
    logout,
  }
})
```

## 样式主题

主题配置在 `src/theme.json` 中：

```json
{
  "navBgColor": "#ffffff",
  "navTxtStyle": "black",
  "bgColor": "#f5f5f5",
  "bgTxtStyle": "light",
  "bgColorTop": "#ffffff",
  "bgColorBottom": "#f5f5f5",
  "tabColor": "#999999",
  "tabSelectedColor": "#1989fa",
  "tabBgColor": "#ffffff",
  "tabBorderStyle": "black"
}
```

## 多端适配

### 条件编译

使用 `#ifdef` 指令进行多端适配：

```vue
<!-- 仅在 H5 中显示 -->
<view v-if="#ifdef H5">仅 H5 可见</view>

<!-- 仅在微信小程序中显示 -->
<view v-if="#ifdef MP-WEIXIN">仅微信小程序可见</view>

<!-- 仅在支付宝小程序中显示 -->
<view v-if="#ifdef MP-ALIPAY">仅支付宝小程序可见</view>
```

### API 条件编译

```typescript
// #ifdef H5
import { H5Storage } from './h5-storage'
// #endif

// #ifdef MP-WEIXIN
import { WxStorage } from './wx-storage'
// #endif
```

## 参考文档

- [Wot Starter 官方文档](https://starter.wot-ui.cn/)
- [Wot UI 组件库文档](https://wot-ui.cn/)
- [uni-app 官方文档](https://uniapp.dcloud.net.cn/)
- [Alova 文档](https://alova.js.org/zh-CN/)
- [Pinia 文档](https://pinia.vuejs.org/zh/)
- [UnoCSS 文档](https://unocss.dev/)

## 常见问题

### Q: 为什么开发服务器启动很慢？

A: 第一次启动会编译所有页面，后续按需编译，速度会很快。生产构建会预先编译所有页面。

### Q: 如何查看编译后的文件？

A: 编译后的文件在 `dist/` 目录下，根据平台不同分别在不同子目录。

### Q: 如何调试小程序？

A: 使用对应平台的开发者工具打开 `dist/dev/mp-xxx` 目录。

### Q: 网络请求报错怎么办？

A: 检查环境变量 `VITE_API_BASE_URL` 是否正确，查看浏览器控制台的网络请求日志。

## 联系方式

如有问题，请联系开发团队或查阅相关文档。
