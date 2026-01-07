---
name: project-overview
description: UCI Member 项目开发总览和快速参考指南
applyTo: '**'
---
# UCI Member 项目开发指南

## 项目概述
这是一个基于 uni-app + Vue 3 + TypeScript 的跨平台应用项目，使用 wot-design-uni 组件库构建现代化的移动应用界面。

## 规则文档索引

### 🏗️ [项目结构规则](project-structure.instructions.md)
- 项目整体架构和目录结构规范
- 核心技术栈介绍
- 文件组织和命名规范

### 🛣️ [路由开发规则](route.instructions.md)
- 基于文件的路由系统
- 布局框架使用
- 路由跳转方法

### 🎨 [UI组件开发规则](ui-library.instructions.md)
- 组件使用优先级
- wot-design-uni 组件库使用
- 自定义组件开发规范

### 🌐 [API开发规则](api-development.instructions.md)
- Alova 请求库使用规范
- Mock数据管理
- API生成和配置

### 💄 [样式开发规则](styling.instructions.md)
- UnoCSS 使用规范
- 主题系统和深色模式
- 响应式设计

### 📦 [状态管理规则](state-management.instructions.md)
- Pinia Store 使用规范
- 持久化配置
- 最佳实践

### ⚡ [开发工作流规则](development-workflow.instructions.md)
- 开发环境配置
- 代码规范和Git工作流
- 构建部署流程

## 快速开始

### 开发环境启动
```bash
# 安装依赖
pnpm install

# 启动H5开发
pnpm dev

# 启动微信小程序开发
pnpm dev:mp-weixin
```

### 常用命令
```bash
# 代码检查和修复
pnpm lint:fix

# 生成API接口
pnpm alova-gen

# 规范化提交
pnpm commit
```

## 核心特性
- ✅ 跨平台支持 (H5/小程序/App)
- ✅ TypeScript 全面支持
- ✅ 基于文件的路由系统
- ✅ 组件化开发
- ✅ 响应式设计和主题切换
- ✅ 状态管理和持久化
- ✅ Mock数据和API管理
- ✅ 代码规范和自动化工作流

## 开发原则
1. **类型安全**: 全面使用 TypeScript
2. **组件化**: 优先复用，合理抽象
3. **响应式**: 适配多端和多主题
4. **规范化**: 遵循代码规范和提交规范
5. **性能优先**: 关注加载速度和用户体验

## 技术支持
- [uni-app 官网](https://uniapp.dcloud.net.cn)
- [wot-design-uni 文档](https://wot-ui.cn)
- [Vue 3 文档](https://vuejs.org)
- [UnoCSS 文档](https://unocss.dev)
- [Alova 文档](https://alova.js.org)
