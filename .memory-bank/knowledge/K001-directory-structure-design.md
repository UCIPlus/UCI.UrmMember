# [K001] - UCI Member 项目目录结构设计

**创建时间:** 2026年1月8日
**最后更新:** 2026年1月8日
**适用项目:** UCI Member (UrmMember)

## 设计理念

### 核心原则

1. **功能模块化**: 按业务功能划分目录，每个功能模块独立管理
2. **清晰的层次结构**: 将页面(pages)、组件(components)、逻辑(composables)、状态(store)分层管理
3. **可维护性优先**: 避免深层嵌套，保持扁平化，便于查找和维护
4. **代码复用**: 通用组件、工具函数、业务逻辑抽取复用
5. **性能优化**: 使用分包(subPages)减少主包体积
6. **类型安全**: 完整的 TypeScript 类型定义

### 与原项目的对应关系

```text
原项目(PHP View)                新项目(uni-app)
├── controller/                 ├── api/              (API接口层)
│   ├── Index.php          →   └── modules/          (按模块组织)
│   ├── Coupon.php         →       ├── user.ts
│   └── ...                →       ├── coupon.ts
│                                   └── ...
├── view/                       ├── pages/            (主包页面)
│   ├── index/             →   │   ├── index/        (个人中心)
│   ├── coupon/            →   │   ├── coupon/       (优惠券)
│   └── ...                →   │   └── ...
│                               ├── subPages/         (分包页面)
│                               │   ├── activity/     (营销活动)
│                               │   ├── device/       (设备管理)
│                               │   └── ...
│                               ├── components/       (组件库)
│                               ├── composables/      (组合式函数)
│                               ├── store/            (状态管理)
│                               └── utils/            (工具函数)
```

## 完整目录结构

```text
frontend/member/
├── .husky/                          # Git hooks
├── .vscode/                         # VSCode 配置
├── .memory-bank/                    # 记忆库
├── docs/                            # 项目文档
│
├── src/                             # 源代码目录
│   ├── api/                         # API 接口层
│   │   ├── core/                    # Alova 核心配置
│   │   │   ├── instance.ts          # Alova 实例配置
│   │   │   ├── handlers.ts          # 响应处理器
│   │   │   ├── interceptors.ts      # 请求/响应拦截器
│   │   │   └── types.ts             # API 类型定义
│   │   │
│   │   ├── modules/                 # 按功能模块组织的 API
│   │   │   ├── auth.ts              # 认证授权 (Passport, Register)
│   │   │   ├── user.ts              # 用户信息 (Index)
│   │   │   ├── coupon.ts            # 优惠券 (Coupon)
│   │   │   ├── recharge.ts          # 充值购券 (Combine, Recharge)
│   │   │   ├── consume.ts           # 消费记录 (Consume)
│   │   │   ├── referee.ts           # 推荐返佣 (Referee)
│   │   │   ├── activity.ts          # 营销活动 (Active)
│   │   │   ├── daily-card.ts        # 权益卡 (DailyCard)
│   │   │   ├── park-coupon.ts       # 停车券 (ParkCoupon, FHParkCoupon)
│   │   │   ├── station.ts           # 站点地图 (Station)
│   │   │   ├── device.ts            # 设备管理 (devices/*)
│   │   │   ├── redeem.ts            # 兑换码 (Redeem)
│   │   │   ├── douyin.ts            # 抖音券 (DouyinCoupon)
│   │   │   ├── report.ts            # 数据报表 (Report)
│   │   │   ├── wechat.ts            # 微信接口 (Wechat, OfficialAccount)
│   │   │   └── payment.ts           # 支付相关
│   │   │
│   │   └── mock/                    # Mock 数据 (开发环境)
│   │       ├── user.ts
│   │       ├── coupon.ts
│   │       └── ...
│   │
│   ├── pages/                       # 主包页面 (核心功能)
│   │   ├── index/                   # 个人中心 [tabBar]
│   │   │   ├── index.vue            # 首页 (Index.php → index/)
│   │   │   ├── components/          # 首页专属组件
│   │   │   │   ├── UserProfile.vue  # 用户信息卡片
│   │   │   │   ├── BalanceCard.vue  # 余额卡片
│   │   │   │   ├── QuickActions.vue # 快捷入口
│   │   │   │   └── CouponSummary.vue# 券包概览
│   │   │   └── types.ts             # 页面类型定义
│   │   │
│   │   ├── coupon/                  # 优惠券管理 [tabBar]
│   │   │   ├── index.vue            # 券包列表 (Coupon.php → coupon/)
│   │   │   ├── manual.vue           # 自助洗车券
│   │   │   ├── automatic.vue        # 自动洗车券
│   │   │   ├── voucher.vue          # 核销券
│   │   │   ├── detail.vue           # 券详情
│   │   │   ├── components/          # 优惠券专属组件
│   │   │   │   ├── CouponCard.vue   # 券卡片
│   │   │   │   ├── CouponFilter.vue # 券筛选
│   │   │   │   └── CouponTabs.vue   # 券分类标签
│   │   │   └── types.ts
│   │   │
│   │   ├── recharge/                # 充值购券
│   │   │   ├── index.vue            # 充值套餐列表 (Combine.php → combine/)
│   │   │   ├── cashier.vue          # 收银台
│   │   │   ├── order-detail.vue     # 订单详情
│   │   │   ├── tutorial.vue         # 使用教程
│   │   │   ├── rules.vue            # 使用规则
│   │   │   ├── components/
│   │   │   │   ├── PackageCard.vue  # 套餐卡片
│   │   │   │   ├── PaymentMethods.vue # 支付方式
│   │   │   │   └── OrderStatus.vue  # 订单状态
│   │   │   └── types.ts
│   │   │
│   │   ├── consume/                 # 消费记录
│   │   │   ├── index.vue            # 消费记录列表 (Consume.php → consume/)
│   │   │   ├── detail.vue           # 消费详情
│   │   │   ├── components/
│   │   │   │   ├── ConsumeItem.vue  # 消费项
│   │   │   │   └── ConsumeFilter.vue # 筛选器
│   │   │   └── types.ts
│   │   │
│   │   ├── auth/                    # 认证授权
│   │   │   ├── login.vue            # 登录 (Passport.php → passport/)
│   │   │   ├── register.vue         # 注册 (Register.php → register/)
│   │   │   ├── bind-phone.vue       # 绑定手机
│   │   │   ├── change-password.vue  # 修改密码
│   │   │   ├── wechat-auth.vue      # 微信授权
│   │   │   ├── components/
│   │   │   │   └── PhoneInput.vue   # 手机号输入组件
│   │   │   └── types.ts
│   │   │
│   │   └── error/                   # 错误页面
│   │       ├── 404.vue
│   │       ├── 500.vue
│   │       └── network-error.vue
│   │
│   ├── subPages/                    # 分包页面 (扩展功能)
│   │   ├── activity/                # 营销活动分包
│   │   │   ├── index.vue            # 活动列表 (Active.php → active/)
│   │   │   ├── detail.vue           # 活动详情
│   │   │   ├── qr-receive.vue       # 扫码领券
│   │   │   ├── components/
│   │   │   │   ├── ActivityCard.vue # 活动卡片
│   │   │   │   └── ActivityBanner.vue # 活动横幅
│   │   │   └── types.ts
│   │   │
│   │   ├── referee/                 # 推荐返佣分包
│   │   │   ├── index.vue            # 推荐首页 (Referee.php → referee/)
│   │   │   ├── referenced.vue       # 已推荐列表
│   │   │   ├── withdraw.vue         # 提现
│   │   │   ├── withdraw-history.vue # 提现记录
│   │   │   ├── components/
│   │   │   │   ├── ReferralCode.vue # 推荐码
│   │   │   │   ├── ReferralPoster.vue # 推荐海报
│   │   │   │   └── EarningsCard.vue # 收益卡片
│   │   │   └── types.ts
│   │   │
│   │   ├── daily-card/              # 权益卡分包
│   │   │   ├── index.vue            # 权益卡详情 (DailyCard.php → daily_card/)
│   │   │   ├── coupon-logs.vue      # 领券记录
│   │   │   ├── components/
│   │   │   │   ├── CardInfo.vue     # 卡片信息
│   │   │   │   └── DailyReceive.vue # 每日领取
│   │   │   └── types.ts
│   │   │
│   │   ├── station/                 # 站点地图分包
│   │   │   ├── map.vue              # 站点地图 (Station.php → station/)
│   │   │   ├── list.vue             # 站点列表
│   │   │   ├── detail.vue           # 站点详情
│   │   │   ├── components/
│   │   │   │   ├── StationMarker.vue # 站点标记
│   │   │   │   ├── StationCard.vue  # 站点卡片
│   │   │   │   └── StationFilter.vue # 站点筛选
│   │   │   └── types.ts
│   │   │
│   │   ├── device/                  # 设备管理分包
│   │   │   ├── scan.vue             # 扫码洗车 (devices/*)
│   │   │   ├── monitor.vue          # 设备监控
│   │   │   ├── control.vue          # 设备控制
│   │   │   ├── components/
│   │   │   │   ├── ScanResult.vue   # 扫码结果
│   │   │   │   ├── DeviceStatus.vue # 设备状态
│   │   │   │   └── WashProgress.vue # 洗车进度
│   │   │   └── types.ts
│   │   │
│   │   ├── park-coupon/             # 停车券分包
│   │   │   ├── index.vue            # 停车券领取 (ParkCoupon.php)
│   │   │   ├── fh-park.vue          # 凤凰停车场 (FHParkCoupon.php)
│   │   │   ├── components/
│   │   │   │   └── ParkCouponCard.vue
│   │   │   └── types.ts
│   │   │
│   │   ├── redeem/                  # 兑换码分包
│   │   │   ├── index.vue            # 兑换码输入 (Redeem.php → redeem/)
│   │   │   ├── components/
│   │   │   │   └── RedeemInput.vue  # 兑换码输入框
│   │   │   └── types.ts
│   │   │
│   │   ├── douyin/                  # 抖音券分包
│   │   │   ├── index.vue            # 抖音券兑换 (DouyinCoupon.php)
│   │   │   ├── components/
│   │   │   │   └── DouyinCodeInput.vue
│   │   │   └── types.ts
│   │   │
│   │   ├── report/                  # 数据报表分包
│   │   │   ├── index.vue            # 门店列表 (Report.php → report/)
│   │   │   ├── station-detail.vue   # 门店详情
│   │   │   ├── components/
│   │   │   │   ├── StationChart.vue # 门店图表
│   │   │   │   └── DataCard.vue     # 数据卡片
│   │   │   └── types.ts
│   │   │
│   │   └── common/                  # 通用分包页面
│   │       ├── protocol.vue         # 服务协议
│   │       ├── privacy.vue          # 隐私政策
│   │       ├── about.vue            # 关于我们
│   │       └── webview.vue          # 网页容器
│   │
│   ├── components/                  # 全局组件库
│   │   ├── common/                  # 通用组件
│   │   │   ├── UButton.vue          # 按钮
│   │   │   ├── UCard.vue            # 卡片
│   │   │   ├── UModal.vue           # 模态框
│   │   │   ├── UPopup.vue           # 弹出层
│   │   │   ├── ULoading.vue         # 加载中
│   │   │   ├── UEmpty.vue           # 空状态
│   │   │   ├── UNavbar.vue          # 导航栏
│   │   │   ├── UTabbar.vue          # 底部导航
│   │   │   ├── UTabs.vue            # 标签页
│   │   │   ├── UList.vue            # 列表
│   │   │   ├── UCell.vue            # 单元格
│   │   │   ├── UForm.vue            # 表单
│   │   │   ├── UInput.vue           # 输入框
│   │   │   ├── USearch.vue          # 搜索框
│   │   │   ├── USwiper.vue          # 轮播图
│   │   │   ├── UImage.vue           # 图片
│   │   │   ├── UIcon.vue            # 图标
│   │   │   ├── UBadge.vue           # 徽章
│   │   │   ├── UTag.vue             # 标签
│   │   │   ├── UDivider.vue         # 分割线
│   │   │   └── ...
│   │   │
│   │   ├── business/                # 业务组件
│   │   │   ├── CouponCard/          # 优惠券卡片
│   │   │   │   ├── index.vue
│   │   │   │   ├── types.ts
│   │   │   │   └── styles.scss
│   │   │   ├── OrderItem/           # 订单项
│   │   │   ├── ConsumeRecord/       # 消费记录
│   │   │   ├── BalanceDisplay/      # 余额展示
│   │   │   ├── QRScanner/           # 二维码扫描
│   │   │   ├── PaymentPanel/        # 支付面板
│   │   │   ├── SharePoster/         # 分享海报
│   │   │   ├── StationMap/          # 站点地图
│   │   │   └── ...
│   │   │
│   │   └── layout/                  # 布局组件
│   │       ├── PageContainer.vue    # 页面容器
│   │       ├── ContentWrapper.vue   # 内容包装器
│   │       ├── SafeArea.vue         # 安全区域
│   │       └── FixedFooter.vue      # 固定底部
│   │
│   ├── composables/                 # 组合式函数 (Composition API)
│   │   ├── core/                    # 核心 composables
│   │   │   ├── useRequest.ts        # 请求封装
│   │   │   ├── useRouter.ts         # 路由封装
│   │   │   ├── useStorage.ts        # 存储封装
│   │   │   ├── useModal.ts          # 模态框
│   │   │   ├── useToast.ts          # 提示
│   │   │   ├── useLoading.ts        # 加载状态
│   │   │   └── usePage.ts           # 页面生命周期
│   │   │
│   │   ├── auth/                    # 认证相关
│   │   │   ├── useAuth.ts           # 认证状态
│   │   │   ├── useLogin.ts          # 登录逻辑
│   │   │   ├── useWechatAuth.ts     # 微信授权
│   │   │   └── useToken.ts          # Token 管理
│   │   │
│   │   ├── user/                    # 用户相关
│   │   │   ├── useUser.ts           # 用户信息
│   │   │   ├── useProfile.ts        # 个人资料
│   │   │   └── useBalance.ts        # 余额管理
│   │   │
│   │   ├── coupon/                  # 优惠券相关
│   │   │   ├── useCoupon.ts         # 优惠券逻辑
│   │   │   ├── useCouponList.ts     # 券列表
│   │   │   └── useCouponDetail.ts   # 券详情
│   │   │
│   │   ├── payment/                 # 支付相关
│   │   │   ├── usePayment.ts        # 支付逻辑
│   │   │   ├── useWxPay.ts          # 微信支付
│   │   │   └── useOrderStatus.ts    # 订单状态
│   │   │
│   │   ├── location/                # 定位相关
│   │   │   ├── useLocation.ts       # 获取位置
│   │   │   └── useMap.ts            # 地图操作
│   │   │
│   │   └── utils/                   # 工具类 composables
│   │       ├── useClipboard.ts      # 剪贴板
│   │       ├── useShare.ts          # 分享
│   │       ├── useQRCode.ts         # 二维码
│   │       └── useDebounce.ts       # 防抖节流
│   │
│   ├── store/                       # 状态管理 (Pinia)
│   │   ├── index.ts                 # Store 入口
│   │   ├── modules/                 # Store 模块
│   │   │   ├── user.ts              # 用户状态
│   │   │   ├── auth.ts              # 认证状态
│   │   │   ├── coupon.ts            # 优惠券状态
│   │   │   ├── recharge.ts          # 充值状态
│   │   │   ├── consume.ts           # 消费记录状态
│   │   │   ├── referee.ts           # 推荐状态
│   │   │   ├── cart.ts              # 购物车状态
│   │   │   └── app.ts               # 应用全局状态
│   │   └── types.ts                 # Store 类型定义
│   │
│   ├── router/                      # 路由管理
│   │   ├── index.ts                 # 路由入口
│   │   ├── routes.ts                # 路由定义
│   │   ├── guards.ts                # 路由守卫
│   │   │   ├── authGuard.ts         # 登录验证
│   │   │   ├── permissionGuard.ts   # 权限验证
│   │   │   └── ...
│   │   └── types.ts                 # 路由类型
│   │
│   ├── utils/                       # 工具函数库
│   │   ├── request/                 # 网络请求
│   │   │   ├── index.ts             # 请求封装
│   │   │   ├── interceptors.ts      # 拦截器
│   │   │   └── types.ts
│   │   │
│   │   ├── storage/                 # 本地存储
│   │   │   ├── index.ts             # 存储封装
│   │   │   ├── constants.ts         # 存储键常量
│   │   │   └── types.ts
│   │   │
│   │   ├── format/                  # 格式化工具
│   │   │   ├── date.ts              # 日期格式化
│   │   │   ├── number.ts            # 数字格式化
│   │   │   ├── currency.ts          # 货币格式化
│   │   │   └── phone.ts             # 手机号格式化
│   │   │
│   │   ├── validator/               # 验证工具
│   │   │   ├── phone.ts             # 手机号验证
│   │   │   ├── email.ts             # 邮箱验证
│   │   │   ├── idcard.ts            # 身份证验证
│   │   │   └── common.ts            # 通用验证
│   │   │
│   │   ├── wechat/                  # 微信相关工具
│   │   │   ├── auth.ts              # 微信授权
│   │   │   ├── pay.ts               # 微信支付
│   │   │   ├── share.ts             # 微信分享
│   │   │   └── jssdk.ts             # JSSDK 配置
│   │   │
│   │   ├── platform/                # 平台判断
│   │   │   ├── index.ts             # 平台工具
│   │   │   └── types.ts
│   │   │
│   │   ├── permission/              # 权限工具
│   │   │   ├── index.ts             # 权限判断
│   │   │   └── constants.ts         # 权限常量
│   │   │
│   │   ├── crypto/                  # 加密解密
│   │   │   ├── md5.ts
│   │   │   ├── base64.ts
│   │   │   └── aes.ts
│   │   │
│   │   ├── logger/                  # 日志工具
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   │
│   │   └── common/                  # 通用工具
│   │       ├── index.ts
│   │       ├── env.ts               # 环境判断
│   │       ├── url.ts               # URL 处理
│   │       ├── object.ts            # 对象工具
│   │       ├── array.ts             # 数组工具
│   │       └── string.ts            # 字符串工具
│   │
│   ├── types/                       # 全局类型定义
│   │   ├── index.ts                 # 类型入口
│   │   ├── api.ts                   # API 类型
│   │   ├── models/                  # 数据模型
│   │   │   ├── user.ts              # 用户模型
│   │   │   ├── coupon.ts            # 优惠券模型
│   │   │   ├── order.ts             # 订单模型
│   │   │   ├── consume.ts           # 消费记录模型
│   │   │   ├── station.ts           # 站点模型
│   │   │   └── ...
│   │   ├── enums/                   # 枚举类型
│   │   │   ├── coupon.ts            # 优惠券枚举
│   │   │   ├── order.ts             # 订单枚举
│   │   │   └── ...
│   │   └── global.d.ts              # 全局类型声明
│   │
│   ├── constants/                   # 常量定义
│   │   ├── index.ts                 # 常量入口
│   │   ├── api.ts                   # API 常量
│   │   ├── storage.ts               # 存储键常量
│   │   ├── routes.ts                # 路由常量
│   │   ├── coupon.ts                # 优惠券常量
│   │   ├── payment.ts               # 支付常量
│   │   └── ...
│   │
│   ├── styles/                      # 全局样式
│   │   ├── variables/               # 样式变量
│   │   │   ├── colors.scss          # 颜色变量
│   │   │   ├── sizes.scss           # 尺寸变量
│   │   │   ├── fonts.scss           # 字体变量
│   │   │   └── z-index.scss         # 层级变量
│   │   ├── mixins/                  # 样式混合
│   │   │   ├── layout.scss          # 布局混合
│   │   │   ├── text.scss            # 文本混合
│   │   │   └── animation.scss       # 动画混合
│   │   ├── common.scss              # 通用样式
│   │   ├── reset.scss               # 重置样式
│   │   └── theme.scss               # 主题样式
│   │
│   ├── static/                      # 静态资源
│   │   ├── images/                  # 图片资源
│   │   │   ├── common/              # 通用图片
│   │   │   ├── icons/               # 图标
│   │   │   ├── avatars/             # 头像
│   │   │   └── backgrounds/         # 背景图
│   │   ├── fonts/                   # 字体文件
│   │   └── media/                   # 媒体文件
│   │
│   ├── layouts/                     # 页面布局
│   │   ├── default.vue              # 默认布局
│   │   ├── tabbar.vue               # 带底部导航布局
│   │   ├── blank.vue                # 空白布局
│   │   └── custom-navbar.vue        # 自定义导航栏布局
│   │
│   ├── App.vue                      # 根组件
│   ├── App.ku.vue                   # 跨端适配 (可选)
│   ├── main.ts                      # 应用入口
│   ├── manifest.json                # 应用配置
│   ├── pages.json                   # 页面配置
│   ├── theme.json                   # 主题配置
│   ├── uni.scss                     # uni-app 样式变量
│   └── env.d.ts                     # 环境类型声明
│
├── .env.development                 # 开发环境变量
├── .env.production                  # 生产环境变量
├── .env.staging                     # 测试环境变量
├── .editorconfig                    # 编辑器配置
├── .eslintrc.js                     # ESLint 配置
├── .gitignore                       # Git 忽略文件
├── .prettierrc                      # Prettier 配置
├── alova.config.ts                  # Alova 配置
├── commitlint.config.js             # Commit 规范配置
├── manifest.config.ts               # 应用配置
├── package.json                     # 项目依赖
├── pages.config.ts                  # 页面配置
├── pnpm-lock.yaml                   # 依赖锁定文件
├── tsconfig.json                    # TypeScript 配置
├── uno.config.ts                    # UnoCSS 配置
├── vite.config.ts                   # Vite 配置
├── README.md                        # 项目说明
└── PROJECT_SETUP.md                 # 项目配置说明
```

## 功能模块与目录对应表

| 原功能模块 | 原 Controller | 新目录位置 | 说明 |
| ---------- | ------------- | ----------- | ----- |
| **个人中心** | Index.php | `pages/index/` | 主包，TabBar 页面 |
| **优惠券管理** | Coupon.php | `pages/coupon/` | 主包，TabBar 页面 |
| **充值购券** | Combine.php, Recharge.php | `pages/recharge/` | 主包，核心功能 |
| **消费记录** | Consume.php | `pages/consume/` | 主包，核心功能 |
| **认证登录** | Passport.php, Register.php | `pages/auth/` | 主包，核心功能 |
| **营销活动** | Active.php | `subPages/activity/` | 分包，扩展功能 |
| **推荐返佣** | Referee.php | `subPages/referee/` | 分包，扩展功能 |
| **权益卡** | DailyCard.php | `subPages/daily-card/` | 分包，扩展功能 |
| **站点地图** | Station.php | `subPages/station/` | 分包，扩展功能 |
| **设备管理** | devices/* | `subPages/device/` | 分包，扩展功能 |
| **停车券** | ParkCoupon.php, FHParkCoupon.php | `subPages/park-coupon/` | 分包，扩展功能 |
| **兑换码** | Redeem.php | `subPages/redeem/` | 分包，扩展功能 |
| **抖音券** | DouyinCoupon.php | `subPages/douyin/` | 分包，扩展功能 |
| **数据报表** | Report.php | `subPages/report/` | 分包，扩展功能 |
| **通用页面** | - | `subPages/common/` | 分包，通用页面 |

## 分包策略

### 主包 (pages/)

**原则**: 放置核心功能和高频访问的页面

- 个人中心首页
- 优惠券管理
- 充值购券
- 消费记录
- 认证登录

### 分包 (subPages/)

**原则**: 按业务模块划分，低频或独立功能

- **activity**: 营销活动相关
- **referee**: 推荐返佣系统
- **daily-card**: 权益卡管理
- **station**: 站点查询和地图
- **device**: 设备扫码和控制
- **park-coupon**: 停车券领取
- **redeem**: 兑换码兑换
- **douyin**: 抖音券相关
- **report**: 数据报表
- **common**: 通用页面

## API 模块化设计

### 按功能模块组织 API

```typescript
// api/modules/coupon.ts
export const couponApi = {
  // 获取自助洗车券列表
  getManualList: () => alovaInstance.Get('/api/coupon/manual'),

  // 获取自动洗车券列表
  getAutomaticList: () => alovaInstance.Get('/api/coupon/automatic'),

  // 获取核销券列表
  getVoucherList: () => alovaInstance.Get('/api/coupon/voucher'),

  // 使用优惠券
  useCoupon: (couponId: string) =>
    alovaInstance.Post('/api/coupon/use', { couponId }),

  // 获取券详情
  getCouponDetail: (couponId: string) =>
    alovaInstance.Get(`/api/coupon/detail/${couponId}`),
}
```

### API 模块清单

- **auth.ts**: 认证授权 (登录、注册、微信授权)
- **user.ts**: 用户信息 (个人资料、余额)
- **coupon.ts**: 优惠券 (列表、详情、使用)
- **recharge.ts**: 充值购券 (套餐、支付、订单)
- **consume.ts**: 消费记录 (洗车记录查询)
- **referee.ts**: 推荐返佣 (推荐关系、提现)
- **activity.ts**: 营销活动 (活动列表、参与)
- **daily-card.ts**: 权益卡 (卡信息、领券)
- **park-coupon.ts**: 停车券 (领取资格、领券)
- **station.ts**: 站点地图 (站点列表、详情)
- **device.ts**: 设备管理 (扫码、控制、监控)
- **redeem.ts**: 兑换码 (兑换提交)
- **douyin.ts**: 抖音券 (券码兑换)
- **report.ts**: 数据报表 (门店数据)
- **wechat.ts**: 微信接口 (JSSDK 配置)
- **payment.ts**: 支付相关 (微信支付、订单查询)

## 组件分类设计

### Common Components (通用组件)

**特点**: 无业务逻辑，高度可复用

- UButton, UCard, UModal, UPopup
- ULoading, UEmpty, UNavbar, UTabbar
- UTabs, UList, UCell, UForm, UInput
- 等基础 UI 组件

### Business Components (业务组件)

**特点**: 包含特定业务逻辑

- **CouponCard**: 优惠券卡片展示
- **OrderItem**: 订单项展示
- **ConsumeRecord**: 消费记录项
- **BalanceDisplay**: 余额展示
- **QRScanner**: 二维码扫描
- **PaymentPanel**: 支付面板
- **SharePoster**: 分享海报生成
- **StationMap**: 站点地图组件

### Layout Components (布局组件)

**特点**: 页面结构和布局

- **PageContainer**: 页面容器
- **ContentWrapper**: 内容包装器
- **SafeArea**: 安全区域处理
- **FixedFooter**: 固定底部

## Composables 组织

### Core Composables (核心)

- `useRequest`: HTTP 请求封装
- `useRouter`: 路由导航封装
- `useStorage`: 本地存储封装
- `useModal`: 模态框管理
- `useToast`: 提示管理
- `useLoading`: 加载状态管理

### Feature Composables (功能)

按业务功能分类:

- **auth/**: 认证相关 (useAuth, useLogin, useWechatAuth)
- **user/**: 用户相关 (useUser, useProfile, useBalance)
- **coupon/**: 优惠券相关 (useCoupon, useCouponList)
- **payment/**: 支付相关 (usePayment, useWxPay)
- **location/**: 定位相关 (useLocation, useMap)

### Utility Composables (工具)

- `useClipboard`: 剪贴板操作
- `useShare`: 分享功能
- `useQRCode`: 二维码生成/扫描
- `useDebounce`: 防抖节流

## Store 模块设计

### 模块划分

- **user**: 用户基本信息
- **auth**: 认证状态和 Token
- **coupon**: 优惠券缓存
- **recharge**: 充值和购券状态
- **consume**: 消费记录缓存
- **referee**: 推荐返佣数据
- **cart**: 购物车 (购券时使用)
- **app**: 应用全局状态 (网络状态、配置等)

### 使用原则

1. 只存储需要跨页面共享的状态
2. 避免过度使用，优先使用组件内部状态
3. 使用 `persist` 插件持久化关键数据

## 工具函数组织

### 按功能分类

- **request/**: 网络请求相关
- **storage/**: 本地存储相关
- **format/**: 格式化工具 (日期、数字、货币)
- **validator/**: 验证工具 (手机号、邮箱、身份证)
- **wechat/**: 微信相关 (授权、支付、分享、JSSDK)
- **platform/**: 平台判断工具
- **permission/**: 权限判断
- **crypto/**: 加密解密
- **logger/**: 日志工具
- **common/**: 通用工具 (环境、URL、对象、数组、字符串)

### 工具函数使用原则

1. 每个工具函数单独文件
2. 提供完整的 TypeScript 类型
3. 编写单元测试
4. 提供使用示例

## 类型定义组织

### models/ (数据模型)

定义后端 API 返回的数据结构:

- `user.ts`: 用户模型
- `coupon.ts`: 优惠券模型
- `order.ts`: 订单模型
- `consume.ts`: 消费记录模型
- `station.ts`: 站点模型

### enums/ (枚举类型)

定义业务相关的枚举:

- `coupon.ts`: 优惠券类型、状态枚举
- `order.ts`: 订单状态枚举
- `payment.ts`: 支付方式、支付状态枚举

### 类型定义使用原则

1. 所有 API 响应都要定义类型
2. 枚举优先使用 `const enum`
3. 共享类型放在 `types/` 目录
4. 页面内部类型放在页面目录下的 `types.ts`

## 样式组织

### 变量管理 (variables/)

- `colors.scss`: 颜色变量 (主题色、状态色)
- `sizes.scss`: 尺寸变量 (间距、字号、圆角)
- `fonts.scss`: 字体变量
- `z-index.scss`: 层级管理

### 混合 (mixins/)

- `layout.scss`: 布局相关混合 (flex, grid)
- `text.scss`: 文本相关混合 (单行/多行省略)
- `animation.scss`: 动画相关混合

### 全局样式

- `reset.scss`: 样式重置
- `common.scss`: 通用样式类
- `theme.scss`: 主题样式

## 最佳实践

### 命名规范

1. **文件命名**:
   - 组件: PascalCase (UserProfile.vue)
   - 页面: kebab-case (user-profile.vue)
   - 工具函数: camelCase (formatDate.ts)
   - 常量: UPPER_SNAKE_CASE (API_BASE_URL)

2. **变量命名**:
   - 普通变量: camelCase
   - 常量: UPPER_SNAKE_CASE
   - 私有变量: _camelCase 或使用 TypeScript private

3. **函数命名**:
   - 事件处理: handle + 事件名 (handleClick)
   - 请求函数: get/post/put/delete + 名词 (getUserInfo)
   - 工具函数: 动词开头 (formatDate, validatePhone)

### 代码组织

1. **导入顺序**:

   ```typescript
   // 1. Vue 相关
   import { ref, computed } from 'vue'

   // 2. 第三方库
   import { storeToRefs } from 'pinia'

   // 3. 项目内部模块 (按层级)
   import { useUserStore } from '@/store'
   import { getUserInfo } from '@/api/modules/user'
   import { formatDate } from '@/utils/format/date'

   // 4. 类型
   import type { User } from '@/types/models/user'

   // 5. 组件
   import UserProfile from './components/UserProfile.vue'
   ```

2. **组件内部顺序**:

   ```vue
   <script setup lang="ts">
   // 1. 导入
   // 2. 类型定义
   // 3. Props / Emits
   // 4. 响应式数据
   // 5. 计算属性
   // 6. 方法
   // 7. 生命周期
   // 8. 监听器
   </script>

   <template>
     <!-- 模板 -->
   </template>

   <style scoped lang="scss">
     /* 样式 */
   </style>
   ```

### 文件大小控制

1. 单个文件不超过 500 行
2. 单个函数不超过 50 行
3. 复杂组件拆分为多个子组件
4. 复杂逻辑抽取为 composables

### 注释规范

1. 文件头部添加说明注释
2. 复杂逻辑添加详细注释
3. 公共函数使用 JSDoc 注释
4. TODO/FIXME 标记待完成事项

## 目录结构优势

### 1. 清晰的职责划分

- **pages/subPages**: 页面层，只负责页面组装和路由
- **components**: 组件层，负责 UI 展示
- **composables**: 逻辑层，负责业务逻辑复用
- **api**: 接口层，负责数据请求
- **store**: 状态层，负责跨页面状态管理
- **utils**: 工具层，负责通用功能

### 2. 易于查找和维护

- 按功能模块组织，相关代码集中管理
- 命名规范统一，见名知意
- 目录层级适中，避免过深嵌套

### 3. 支持团队协作

- 模块独立，减少代码冲突
- 职责清晰，便于分工协作
- 代码复用性高，避免重复开发

### 4. 性能优化友好

- 合理分包，减少主包体积
- 组件按需加载
- 静态资源分类管理

### 5. 可扩展性强

- 新增功能按模块添加
- 不影响现有结构
- 易于重构和优化

## 迁移建议

### 阶段 1: 搭建基础架构

1. 创建目录结构
2. 配置开发环境
3. 搭建 API 层和 Store
4. 实现通用组件

### 阶段 2: 核心功能迁移

按 TASK001 计划的顺序:

1. 认证系统 (pages/auth/)
2. 个人中心 (pages/index/)
3. 优惠券系统 (pages/coupon/)

### 阶段 3: 扩展功能迁移

1. 充值购券 (pages/recharge/)
2. 消费记录 (pages/consume/)
3. 分包功能逐步迁移

### 阶段 4: 优化和完善

1. 性能优化
2. 用户体验优化
3. 错误处理完善
4. 测试和文档

## 总结

这套目录结构设计:

- ✅ **模块化**: 按功能模块清晰划分
- ✅ **可维护**: 代码组织清晰，易于维护
- ✅ **可扩展**: 支持功能扩展，不破坏现有结构
- ✅ **高性能**: 合理分包，优化加载性能
- ✅ **类型安全**: 完整的 TypeScript 类型定义
- ✅ **团队友好**: 规范统一，便于协作

相比原项目混乱的目录结构，新结构具有更好的可维护性和扩展性，为项目的长期发展奠定坚实基础。
