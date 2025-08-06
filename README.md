# Frontend Learning Platform - 前端学习平台

一个现代化的前端技术学习平台，基于 Next.js 15 和 Tailwind CSS 4 构建。

## ✨ 特性

- 🎨 **现代化设计** - 简洁美观的用户界面
- 🌓 **主题切换** - 支持浅色/深色模式
- 🌍 **多语言支持** - 中文/英文双语切换
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🔍 **智能搜索** - 实时搜索文章和分类
- 📚 **分类管理** - 清晰的知识体系结构
- ⭐ **精选内容** - 高质量的学习资源

## 🚀 技术栈

- **框架**: Next.js 15 (App Router)
- **样式**: Tailwind CSS 4
- **语言**: TypeScript
- **字体**: Inter (Google Fonts)
- **开发工具**: Turbopack

## 📖 内容分类

### 🚀 快速开始
- 个人AI编程方向
- 前端实习练线
- AI技术栈

### 📚 前端基础
- HTML 语义化
- CSS 样式
- JavaScript
- TypeScript
- Vue
- React
- Svelte
- HTTP/前后端交互
- Git代码版本控制

### ⚙️ 前端工程化
- Webpack
- Vite
- ESLint
- Prettier
- 测试

### 🎯 进阶主题
- 性能优化
- 前端安全
- PWA
- 微前端

### 🛠️ 工具与资源
- VS Code
- Chrome DevTools
- 设计工具
- 在线工具

## 🛠️ 开发

### 环境要求

- Node.js 18+
- npm/yarn/pnpm

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本

```bash
npm run build
npm start
```

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── article/[id]/      # 文章详情页
│   ├── category/[id]/     # 分类页面
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── not-found.tsx      # 404页面
│   └── page.tsx           # 首页
├── components/            # React组件
│   ├── ArticleCard.tsx    # 文章卡片
│   ├── Header.tsx         # 头部导航
│   └── Sidebar.tsx        # 侧边栏
├── data/                  # 数据文件
│   ├── articles.ts        # 文章数据
│   └── categories.ts      # 分类数据
├── hooks/                 # 自定义Hooks
│   ├── useLocale.ts       # 国际化Hook
│   └── useTheme.ts        # 主题Hook
└── lib/                   # 工具函数
    └── utils.ts           # 通用工具
```

## 🎨 功能特色

### 智能搜索
- 实时搜索文章标题、描述和内容
- 支持分类搜索
- 搜索结果高亮显示

### 主题切换
- 浅色/深色模式切换
- 自动跟随系统主题
- 主题状态持久化

### 多语言支持
- 中文/英文界面切换
- 文章内容双语支持
- 语言偏好记忆

### 响应式设计
- 移动端优先设计
- 平板和桌面端适配
- 触摸友好的交互

## 📝 内容管理

### 添加新文章

在 `src/data/articles.ts` 中添加新的文章对象：

```typescript
{
  id: 'unique-article-id',
  title: '文章标题',
  titleEn: 'Article Title',
  description: '文章描述',
  descriptionEn: 'Article Description',
  category: 'category-id',
  tags: ['标签1', '标签2'],
  author: 'author-name',
  publishDate: '2024-01-01',
  readTime: '5分钟',
  difficulty: 'beginner',
  content: '文章内容...',
  contentEn: 'Article content...',
  featured: false,
  views: 0,
  likes: 0,
  rating: 5
}
```

### 添加新分类

在 `src/data/categories.ts` 中添加新的分类：

```typescript
{
  id: 'category-id',
  name: '分类名称',
  nameEn: 'Category Name',
  icon: '🎯',
  children: [
    // 子分类...
  ]
}
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🙏 致谢

感谢所有为前端技术发展做出贡献的开发者们！
