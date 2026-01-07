# UCI 成员端（UrmMember）

<p align="center">
  <img alt="UCI Logo" src="https://www.uxiche.com.cn/logo.png" width="200">
</p>

<p align="center">
  优迪邦智能洗车平台成员端 - 基于 Wot Starter 构建的跨平台小程序应用
</p>

<p align="center">
  <a href="https://www.uxiche.com.cn/">🌐 官网</a>
  <a href="./PROJECT_SETUP.md">📖 项目文档</a>
  <a href="https://github.com/UCIPlus/UCI.UrmMember">💻 GitHub</a>
</p>

## 项目简介

UCI 成员端是优迪邦智能洗车平台的用户端小程序应用，为用户提供便捷的洗车服务、优惠券管理、订单查询等功能。基于 **Wot Starter** 构建，支持微信小程序、支付宝小程序和 H5 多端部署。

## 核心功能

### 用户服务
- 📱 **扫码启动** - 扫描设备二维码即可启动洗车服务
- 🎫 **优惠券管理** - 查看和使用各类优惠券
- 💳 **会员服务** - 充值卡、组合卡管理
- 📊 **订单查询** - 实时查看洗车订单状态
- 🎁 **活动参与** - 参与砍价、秒杀等营销活动

### 平台支持
- 📲 微信小程序
- 💰 支付宝小程序
- 🌐 H5 网页

## 技术栈

### 核心框架
- ⚡️ **Vue 3.4.38** - 渐进式 JavaScript 框架
- 🔷 **TypeScript 5.5.4** - JavaScript 的超集
- 🚀 **Vite 5.2.8** - 下一代前端构建工具
- 📦 **pnpm** - 快速、节省磁盘空间的包管理器
- 🏗️ **uni-app** - 跨平台应用开发框架

### UI 组件库
- 🐂 **Wot UI 1.14.0** - 基于 Vue3 + TypeScript 的 uni-app 组件库
  - 70+ 高质量组件
  - 支持国际化（内置多语言包）
  - 支持暗黑模式
  - CSS 变量主题定制

### 功能库
- 🔄 **Pinia 2.3.1** - Vue3 官方推荐的状态管理库
- 🌐 **Alova 3.3.4** - 极致高效的请求工具集
- 🚦 **@wot-ui/router** - 适用于 uni-app & Vue3 的轻量级路由库
- 🗣️ **vue-i18n 9.14.0** - Vue.js 国际化插件
- 📊 **uni-echarts** - 适用于 uni-app 的 Apache ECharts 组件
- 🎨 **UnoCSS** - 高性能原子化 CSS 引擎

### 开发工具
- 📥 **API 自动加载** - 直接使用 Composition API 无需引入
- 🔥 **<script setup>** - Vue 3 推荐的组合式 API 语法
- 🦾 **ESLint** - 代码质量检查工具

## 快速开始

### 环境要求

- **Node.js**: >= 20.19.0 || >= 22.12.0 || >= 24.0.0
- **pnpm**: 推荐最新版本
- **VS Code**: 推荐使用 Volar 插件

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/UCIPlus/UCI.UrmMember.git
cd UrmMember

# 安装依赖
pnpm install
```

### 配置环境变量

复制环境变量模板并根据实际情况修改：

```bash
# 复制开发环境配置
cp .env.development.example .env.development

# 复制生产环境配置
cp .env.production.example .env.production
```

编辑 `.env.development`：

```dotenv
# API 基础 URL - 开发环境
VITE_API_BASE_URL=http://your-backend-api.com/api

# 环境名称
VITE_ENV_NAME=development
```

### 启动开发服务器

#### H5 开发

```bash
pnpm dev
# 或
pnpm dev:h5
```

访问：http://localhost:5173/

#### 微信小程序开发

```bash
pnpm dev:mp-weixin
```

使用微信开发者工具打开 `dist/dev/mp-weixin` 目录。

#### 支付宝小程序开发

```bash
pnpm dev:mp-alipay
```

使用支付宝开发者工具打开 `dist/dev/mp-alipay` 目录。

### 构建生产版本

```bash
# H5 构建
pnpm build:h5

# 微信小程序构建
pnpm build:mp-weixin

# 支付宝小程序构建
pnpm build:mp-alipay
```

## 项目结构

```
UrmMember/
├── .env.development          # 开发环境变量
├── .env.production           # 生产环境变量
├── .env.staging              # 预发布环境变量
├── package.json              # 项目依赖配置
├── pages.config.ts           # 页面配置
├── vite.config.ts            # Vite 构建配置
├── tsconfig.json             # TypeScript 配置
├── uno.config.ts             # UnoCSS 配置
├── alova.config.ts           # Alova 网络请求配置
├── PROJECT_SETUP.md          # 项目配置说明
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
│   │   ├── modules/        # 状态模块
│   │   └── index.ts        # Store 入口
│   ├── static/              # 静态资源
│   ├── theme.json           # 主题配置
│   ├── App.vue              # 根组件
│   └── main.ts              # 入口文件
├── manifest.json            # uni-app 清单文件
└── .gitignore               # Git 忽略文件
```

## 开发指南

### VS Code 插件推荐

- **Volar** - Vue 3 语法高亮和智能提示
- **wot-ui-intellisense** - Wot UI 代码提示插件
- **UnoCSS** - UnoCSS 智能提示
- **ESLint** - 代码检查
- **Prettier** - 代码格式化

### 代码规范

项目使用 ESLint 和 Prettier 进行代码规范检查：

```bash
# 运行 ESLint 检查
pnpm lint

# 自动修复 ESLint 问题
pnpm lint:fix

# TypeScript 类型检查
pnpm type-check
```

### 提交规范

项目使用 Commitizen 进行代码提交，遵循 Conventional Commits 规范：

```bash
# 使用交互式提交
pnpm commit
```

### API 开发

1. 在 `src/api/apiDefinitions.ts` 中定义 API 接口
2. 运行 `pnpm alova-gen` 生成 API 代码
3. 在组件中使用生成的 API

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

### 状态管理

使用 Pinia 进行状态管理：

```typescript
// src/store/modules/user.ts
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

### 平台差异处理

不同平台的 API 差异使用条件编译处理：

```typescript
// #ifdef MP-WEIXIN
uni.login({
  provider: 'weixin',
  success: (res) => {
    console.log('微信登录', res)
  },
})
// #endif

// #ifdef MP-ALIPAY
my.getAuthCode({
  success: (res) => {
    console.log('支付宝登录', res)
  },
})
// #endif
```

## 文档

详细文档请参考：

- [项目配置说明](./PROJECT_SETUP.md)
- [Wot Starter 官方文档](https://starter.wot-ui.cn/)
- [Wot UI 组件库文档](https://wot-ui.cn/)
- [uni-app 官方文档](https://uniapp.dcloud.net.cn/)
- [Alova 文档](https://alova.js.org/zh-CN/)

## 相关项目

| 项目 | 描述 |
|------|------|
| [UCI.UrmServer](https://github.com/UCIPlus/UCI.UrmServer) | 优迪邦智能洗车平台后端服务 |
| [UCI.UrmStore](https://github.com/UCIPlus/UCI.UrmStore) | 优迪邦智能洗车平台商城前端 |
| [UCI.UrmAdmin](https://github.com/UCIPlus/UCI.UrmAdmin) | 优迪邦智能洗车平台后台管理 |

## 技术支持

- **官方网站**: https://www.uxiche.com.cn/
- **问题反馈**: [GitHub Issues](https://github.com/UCIPlus/UCI.UrmMember/issues)
- **Wot UI 社区**: [加群沟通](https://wot-ui.cn/guide/join-group.html)

## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。

---

**Made with ❤️ by 苏州优迪邦智能科技有限公司**
