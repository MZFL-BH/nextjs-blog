// 文章数据结构
export interface Article {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  category: string;
  tags: string[];
  author: string;
  publishDate: string;
  readTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  content: string;
  contentEn: string;
  featured: boolean;
  views: number;
  likes: number;
  rating?: number; // 1-5 stars
}

export const articles: Article[] = [
  // HTML 相关文章
  {
    id: 'html-semantics-guide',
    title: 'HTML语义化完全指南',
    titleEn: 'Complete Guide to HTML Semantics',
    description: '深入理解HTML语义化的重要性，学习如何编写更有意义的HTML代码',
    descriptionEn: 'Deep dive into the importance of HTML semantics and learn how to write more meaningful HTML code',
    category: 'html',
    tags: ['HTML', '语义化', '可访问性', 'SEO'],
    author: 'MZFL Team',
    publishDate: '2024-01-15',
    readTime: '8分钟',
    difficulty: 'beginner',
    featured: true,
    views: 1250,
    likes: 89,
    rating: 5,
    content: `
# HTML语义化完全指南

HTML语义化是现代Web开发的基础，它不仅能提高代码的可读性，还能改善SEO和可访问性。

## 什么是HTML语义化

HTML语义化是指使用恰当的HTML标签来描述内容的含义，而不仅仅是为了样式效果。

### 语义化标签示例

\`\`\`html
<!-- 好的语义化结构 -->
<article>
  <header>
    <h1>文章标题</h1>
    <time datetime="2024-01-15">2024年1月15日</time>
  </header>
  <main>
    <p>文章内容...</p>
  </main>
  <footer>
    <p>作者信息</p>
  </footer>
</article>
\`\`\`

## 常用语义化标签

### 结构标签
- \`<header>\` - 页面或区块的头部
- \`<nav>\` - 导航链接
- \`<main>\` - 主要内容
- \`<article>\` - 独立的文章内容
- \`<section>\` - 文档中的区块
- \`<aside>\` - 侧边栏内容
- \`<footer>\` - 页面或区块的底部

### 文本语义标签
- \`<strong>\` - 重要内容（加粗）
- \`<em>\` - 强调内容（斜体）
- \`<mark>\` - 标记文本
- \`<time>\` - 时间信息

## 语义化的好处

1. **提高可访问性** - 屏幕阅读器能更好地理解内容
2. **改善SEO** - 搜索引擎能更好地理解页面结构
3. **代码可维护性** - 代码更易读和维护
4. **团队协作** - 其他开发者更容易理解代码意图

## 最佳实践

1. 选择合适的标签而不是依赖CSS样式
2. 使用标题标签（h1-h6）建立清晰的层次结构
3. 为图片添加有意义的alt属性
4. 使用表单标签的label属性

语义化HTML是前端开发的基础技能，掌握它将让你的代码更专业、更易维护。
    `,
    contentEn: `
# Complete Guide to HTML Semantics

HTML semantics is the foundation of modern web development. It not only improves code readability but also enhances SEO and accessibility.

## What is HTML Semantics

HTML semantics means using appropriate HTML tags to describe the meaning of content, not just for styling purposes.

### Semantic Tag Examples

\`\`\`html
<!-- Good semantic structure -->
<article>
  <header>
    <h1>Article Title</h1>
    <time datetime="2024-01-15">January 15, 2024</time>
  </header>
  <main>
    <p>Article content...</p>
  </main>
  <footer>
    <p>Author information</p>
  </footer>
</article>
\`\`\`

## Common Semantic Tags

### Structural Tags
- \`<header>\` - Header of page or section
- \`<nav>\` - Navigation links
- \`<main>\` - Main content
- \`<article>\` - Independent article content
- \`<section>\` - Section in document
- \`<aside>\` - Sidebar content
- \`<footer>\` - Footer of page or section

### Text Semantic Tags
- \`<strong>\` - Important content (bold)
- \`<em>\` - Emphasized content (italic)
- \`<mark>\` - Marked text
- \`<time>\` - Time information

## Benefits of Semantics

1. **Improved Accessibility** - Screen readers can better understand content
2. **Better SEO** - Search engines can better understand page structure
3. **Code Maintainability** - Code is more readable and maintainable
4. **Team Collaboration** - Other developers can easily understand code intent

## Best Practices

1. Choose appropriate tags instead of relying on CSS styles
2. Use heading tags (h1-h6) to establish clear hierarchy
3. Add meaningful alt attributes to images
4. Use label attributes for form elements

Semantic HTML is a fundamental frontend development skill that will make your code more professional and maintainable.
    `
  },
  {
    id: 'css-modern-layout',
    title: 'CSS现代布局技术',
    titleEn: 'Modern CSS Layout Techniques',
    description: '掌握Flexbox、Grid和现代CSS布局方法，创建响应式设计',
    descriptionEn: 'Master Flexbox, Grid, and modern CSS layout methods to create responsive designs',
    category: 'css',
    tags: ['CSS', 'Flexbox', 'Grid', '响应式设计'],
    author: 'MZFL Team',
    publishDate: '2024-01-20',
    readTime: '12分钟',
    difficulty: 'intermediate',
    featured: true,
    views: 890,
    likes: 67,
    rating: 4,
    content: `
# CSS现代布局技术

现代CSS提供了强大的布局工具，让我们能够轻松创建复杂的响应式布局。

## Flexbox布局

Flexbox是一维布局方法，非常适合处理行或列的布局。

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.item {
  flex: 1;
}
\`\`\`

## Grid布局

Grid是二维布局系统，适合创建复杂的网格布局。

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

## 响应式设计

使用媒体查询创建适应不同屏幕的布局：

\`\`\`css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
\`\`\`

现代CSS布局技术让我们能够创建更灵活、更强大的用户界面。
    `,
    contentEn: `
# Modern CSS Layout Techniques

Modern CSS provides powerful layout tools that allow us to easily create complex responsive layouts.

## Flexbox Layout

Flexbox is a one-dimensional layout method, perfect for handling row or column layouts.

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.item {
  flex: 1;
}
\`\`\`

## Grid Layout

Grid is a two-dimensional layout system, suitable for creating complex grid layouts.

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

## Responsive Design

Use media queries to create layouts that adapt to different screens:

\`\`\`css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
\`\`\`

Modern CSS layout techniques enable us to create more flexible and powerful user interfaces.
    `
  },
  {
    id: 'javascript-async-programming',
    title: 'JavaScript异步编程深度解析',
    titleEn: 'Deep Dive into JavaScript Async Programming',
    description: '全面理解Promise、async/await和事件循环机制',
    descriptionEn: 'Comprehensive understanding of Promise, async/await, and event loop mechanisms',
    category: 'javascript',
    tags: ['JavaScript', 'Promise', 'async/await', '事件循环'],
    author: 'MZFL Team',
    publishDate: '2024-01-25',
    readTime: '15分钟',
    difficulty: 'advanced',
    featured: true,
    views: 2100,
    likes: 156,
    rating: 5,
    content: `
# JavaScript异步编程深度解析

异步编程是JavaScript的核心概念之一，理解它对于编写高效的现代JavaScript代码至关重要。

## Promise基础

Promise是处理异步操作的现代方式：

\`\`\`javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('数据获取成功');
    }, 1000);
  });
};

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

## async/await语法

async/await让异步代码看起来像同步代码：

\`\`\`javascript
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

## 事件循环机制

理解JavaScript的事件循环对于掌握异步编程至关重要：

1. 调用栈（Call Stack）
2. 任务队列（Task Queue）
3. 微任务队列（Microtask Queue）
4. 事件循环（Event Loop）

掌握异步编程将让你能够编写更高效、更可靠的JavaScript应用程序。
    `,
    contentEn: `
# Deep Dive into JavaScript Async Programming

Asynchronous programming is one of the core concepts in JavaScript, and understanding it is crucial for writing efficient modern JavaScript code.

## Promise Basics

Promise is the modern way to handle asynchronous operations:

\`\`\`javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully');
    }, 1000);
  });
};

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

## async/await Syntax

async/await makes asynchronous code look like synchronous code:

\`\`\`javascript
async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

## Event Loop Mechanism

Understanding JavaScript's event loop is crucial for mastering asynchronous programming:

1. Call Stack
2. Task Queue
3. Microtask Queue
4. Event Loop

Mastering asynchronous programming will enable you to write more efficient and reliable JavaScript applications.
    `
  },

  // HTML 进阶文章
  {
    id: 'html5-apis-guide',
    title: 'HTML5 现代 API 完全指南',
    titleEn: 'Complete Guide to Modern HTML5 APIs',
    description: '探索HTML5提供的强大API，包括Web Storage、Geolocation、Canvas等现代Web功能',
    descriptionEn: 'Explore powerful HTML5 APIs including Web Storage, Geolocation, Canvas and other modern web features',
    category: 'html',
    tags: ['HTML5', 'Web APIs', 'Canvas', 'Geolocation', 'Web Storage'],
    author: 'MZFL Team',
    publishDate: '2024-01-18',
    readTime: '12分钟',
    difficulty: 'intermediate',
    featured: false,
    views: 856,
    likes: 67,
    rating: 4,
    content: `
# HTML5 现代 API 完全指南

HTML5 不仅仅是标记语言的升级，它还引入了许多强大的 API，让 Web 应用具备了接近原生应用的能力。

## Web Storage API

### localStorage 和 sessionStorage

\`\`\`javascript
// localStorage - 持久化存储
localStorage.setItem('user', JSON.stringify({name: 'John', age: 30}));
const user = JSON.parse(localStorage.getItem('user'));

// sessionStorage - 会话存储
sessionStorage.setItem('tempData', 'temporary value');
\`\`\`

## Geolocation API

### 获取用户位置

\`\`\`javascript
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      console.log(\`位置: \${lat}, \${lng}\`);
    },
    (error) => {
      console.error('获取位置失败:', error);
    }
  );
}
\`\`\`

## Canvas API

### 2D 图形绘制

\`\`\`javascript
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 绘制矩形
ctx.fillStyle = '#FF0000';
ctx.fillRect(10, 10, 100, 100);

// 绘制圆形
ctx.beginPath();
ctx.arc(75, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
\`\`\`

## Web Workers API

### 后台线程处理

\`\`\`javascript
// main.js
const worker = new Worker('worker.js');
worker.postMessage({data: 'Hello Worker'});
worker.onmessage = (e) => {
  console.log('Worker 返回:', e.data);
};

// worker.js
self.onmessage = (e) => {
  const result = heavyComputation(e.data);
  self.postMessage(result);
};
\`\`\`

## Fetch API

### 现代网络请求

\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({key: 'value'})
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
\`\`\`

这些 HTML5 API 为现代 Web 开发提供了强大的功能基础。
    `,
    contentEn: `
# Complete Guide to Modern HTML5 APIs

HTML5 is not just an upgrade to markup language, it also introduces many powerful APIs that give web applications capabilities close to native applications.

## Web Storage API

### localStorage and sessionStorage

\`\`\`javascript
// localStorage - persistent storage
localStorage.setItem('user', JSON.stringify({name: 'John', age: 30}));
const user = JSON.parse(localStorage.getItem('user'));

// sessionStorage - session storage
sessionStorage.setItem('tempData', 'temporary value');
\`\`\`

## Geolocation API

### Getting User Location

\`\`\`javascript
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      console.log(\`Location: \${lat}, \${lng}\`);
    },
    (error) => {
      console.error('Failed to get location:', error);
    }
  );
}
\`\`\`

These HTML5 APIs provide a powerful foundation for modern web development.
    `
  },

  {
    id: 'web-accessibility-guide',
    title: 'Web 可访问性最佳实践',
    titleEn: 'Web Accessibility Best Practices',
    description: '学习如何创建对所有用户都友好的Web应用，包括残障用户的无障碍访问',
    descriptionEn: 'Learn how to create web applications that are friendly to all users, including accessibility for users with disabilities',
    category: 'html',
    tags: ['可访问性', 'ARIA', 'WCAG', '无障碍', 'Screen Reader'],
    author: 'MZFL Team',
    publishDate: '2024-01-22',
    readTime: '10分钟',
    difficulty: 'intermediate',
    featured: false,
    views: 642,
    likes: 45,
    rating: 4,
    content: `
# Web 可访问性最佳实践

Web 可访问性确保所有用户，包括残障用户，都能有效地使用 Web 应用。

## ARIA 属性

### 基本 ARIA 属性

\`\`\`html
<!-- 角色定义 -->
<div role="button" tabindex="0">自定义按钮</div>

<!-- 状态描述 -->
<button aria-expanded="false" aria-controls="menu">菜单</button>

<!-- 标签关联 -->
<input type="text" aria-labelledby="username-label">
<label id="username-label">用户名</label>
\`\`\`

## 键盘导航

### 焦点管理

\`\`\`javascript
// 焦点陷阱
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });
}
\`\`\`

## 语义化标签

### 正确的标签使用

\`\`\`html
<!-- 导航结构 -->
<nav aria-label="主导航">
  <ul>
    <li><a href="/" aria-current="page">首页</a></li>
    <li><a href="/about">关于</a></li>
  </ul>
</nav>

<!-- 内容结构 -->
<main>
  <article>
    <header>
      <h1>文章标题</h1>
      <time datetime="2024-01-22">2024年1月22日</time>
    </header>
    <section>
      <h2>章节标题</h2>
      <p>内容...</p>
    </section>
  </article>
</main>
\`\`\`

可访问性是现代 Web 开发的重要组成部分。
    `,
    contentEn: `
# Web Accessibility Best Practices

Web accessibility ensures that all users, including users with disabilities, can effectively use web applications.

## ARIA Attributes

### Basic ARIA Properties

\`\`\`html
<!-- Role definition -->
<div role="button" tabindex="0">Custom Button</div>

<!-- State description -->
<button aria-expanded="false" aria-controls="menu">Menu</button>

<!-- Label association -->
<input type="text" aria-labelledby="username-label">
<label id="username-label">Username</label>
\`\`\`

Accessibility is an important part of modern web development.
    `
  },

  // CSS 进阶文章
  {
    id: 'css-grid-mastery',
    title: 'CSS Grid 布局完全掌握',
    titleEn: 'Complete Mastery of CSS Grid Layout',
    description: '深入学习CSS Grid布局系统，掌握现代网页布局的最强工具',
    descriptionEn: 'Deep dive into CSS Grid layout system and master the most powerful tool for modern web layouts',
    category: 'css',
    tags: ['CSS Grid', '布局', '响应式', 'Grid Template'],
    author: 'MZFL Team',
    publishDate: '2024-01-20',
    readTime: '15分钟',
    difficulty: 'intermediate',
    featured: true,
    views: 1420,
    likes: 98,
    rating: 5,
    content: `
# CSS Grid 布局完全掌握

CSS Grid 是最强大的二维布局系统，让复杂布局变得简单直观。

## Grid 基础概念

### 网格容器和网格项

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px 100px;
  gap: 20px;
}

.grid-item {
  background: #f0f0f0;
  padding: 20px;
}
\`\`\`

## 高级网格技巧

### 命名网格线

\`\`\`css
.advanced-grid {
  display: grid;
  grid-template-columns:
    [sidebar-start] 250px
    [sidebar-end main-start] 1fr
    [main-end];
  grid-template-rows:
    [header-start] 80px
    [header-end content-start] 1fr
    [content-end footer-start] 60px
    [footer-end];
}

.header {
  grid-column: sidebar-start / main-end;
  grid-row: header-start / header-end;
}

.sidebar {
  grid-column: sidebar-start / sidebar-end;
  grid-row: content-start / content-end;
}

.main {
  grid-column: main-start / main-end;
  grid-row: content-start / content-end;
}
\`\`\`

### Grid Areas

\`\`\`css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 150px;
  grid-template-rows: 80px 1fr 60px;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
\`\`\`

## 响应式 Grid

### 自适应列数

\`\`\`css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

/* 媒体查询优化 */
@media (max-width: 768px) {
  .layout {
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "aside"
      "footer";
    grid-template-columns: 1fr;
  }
}
\`\`\`

## Grid 与 Flexbox 结合

\`\`\`css
.hybrid-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 20px;
}

.flex-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
\`\`\`

CSS Grid 让复杂布局变得简单而优雅。
    `,
    contentEn: `
# Complete Mastery of CSS Grid Layout

CSS Grid is the most powerful two-dimensional layout system that makes complex layouts simple and intuitive.

## Grid Fundamentals

### Grid Container and Grid Items

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px 100px;
  gap: 20px;
}

.grid-item {
  background: #f0f0f0;
  padding: 20px;
}
\`\`\`

CSS Grid makes complex layouts simple and elegant.
    `
  },

  {
    id: 'css-animations-performance',
    title: 'CSS 动画性能优化指南',
    titleEn: 'CSS Animation Performance Optimization Guide',
    description: '学习如何创建流畅的CSS动画，避免性能陷阱，提升用户体验',
    descriptionEn: 'Learn how to create smooth CSS animations, avoid performance pitfalls, and enhance user experience',
    category: 'css',
    tags: ['CSS动画', '性能优化', 'Transform', 'GPU加速'],
    author: 'MZFL Team',
    publishDate: '2024-01-25',
    readTime: '12分钟',
    difficulty: 'advanced',
    featured: false,
    views: 987,
    likes: 76,
    rating: 4,
    content: `
# CSS 动画性能优化指南

创建流畅的动画需要理解浏览器渲染机制和性能优化技巧。

## 浏览器渲染流程

### 重排、重绘和合成

\`\`\`css
/* 触发重排 - 避免 */
.bad-animation {
  animation: bad-move 1s ease-in-out;
}

@keyframes bad-move {
  from { left: 0; width: 100px; }
  to { left: 100px; width: 200px; }
}

/* 只触发合成 - 推荐 */
.good-animation {
  animation: good-move 1s ease-in-out;
}

@keyframes good-move {
  from { transform: translateX(0) scale(1); }
  to { transform: translateX(100px) scale(2); }
}
\`\`\`

## GPU 加速技巧

### will-change 属性

\`\`\`css
.optimized-element {
  will-change: transform, opacity;
  /* 动画完成后移除 */
}

.optimized-element.animation-done {
  will-change: auto;
}
\`\`\`

### 3D 变换强制 GPU 加速

\`\`\`css
.gpu-accelerated {
  transform: translateZ(0); /* 或 translate3d(0,0,0) */
  backface-visibility: hidden;
}
\`\`\`

## 高性能动画模式

### 淡入淡出

\`\`\`css
.fade-in {
  opacity: 0;
  animation: fadeIn 0.3s ease-out forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}
\`\`\`

### 滑动效果

\`\`\`css
.slide-in {
  transform: translateX(-100%);
  animation: slideIn 0.3s ease-out forwards;
}

@keyframes slideIn {
  to { transform: translateX(0); }
}
\`\`\`

### 弹性动画

\`\`\`css
.bounce-in {
  animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes bounceIn {
  0% { transform: scale(0); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
\`\`\`

## 性能监控

### 使用 DevTools

\`\`\`javascript
// 监控动画性能
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'measure') {
      console.log(\`动画耗时: \${entry.duration}ms\`);
    }
  }
});

observer.observe({entryTypes: ['measure']});

// 测量动画
performance.mark('animation-start');
// ... 动画代码
performance.mark('animation-end');
performance.measure('animation-duration', 'animation-start', 'animation-end');
\`\`\`

优化的动画能显著提升用户体验。
    `,
    contentEn: `
# CSS Animation Performance Optimization Guide

Creating smooth animations requires understanding browser rendering mechanisms and performance optimization techniques.

## Browser Rendering Pipeline

### Reflow, Repaint, and Composite

\`\`\`css
/* Triggers reflow - avoid */
.bad-animation {
  animation: bad-move 1s ease-in-out;
}

@keyframes bad-move {
  from { left: 0; width: 100px; }
  to { left: 100px; width: 200px; }
}

/* Only triggers composite - recommended */
.good-animation {
  animation: good-move 1s ease-in-out;
}

@keyframes good-move {
  from { transform: translateX(0) scale(1); }
  to { transform: translateX(100px) scale(2); }
}
\`\`\`

Optimized animations can significantly improve user experience.
    `
  },

  // JavaScript 进阶文章
  {
    id: 'javascript-design-patterns',
    title: 'JavaScript 设计模式实战',
    titleEn: 'JavaScript Design Patterns in Practice',
    description: '掌握常用的JavaScript设计模式，提升代码质量和可维护性',
    descriptionEn: 'Master common JavaScript design patterns to improve code quality and maintainability',
    category: 'javascript',
    tags: ['设计模式', '单例模式', '观察者模式', '工厂模式', '模块模式'],
    author: 'MZFL Team',
    publishDate: '2024-01-28',
    readTime: '18分钟',
    difficulty: 'advanced',
    featured: true,
    views: 1680,
    likes: 124,
    rating: 5,
    content: `
# JavaScript 设计模式实战

设计模式是解决常见编程问题的可复用解决方案。

## 单例模式 (Singleton)

### 确保类只有一个实例

\`\`\`javascript
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    this.data = {};
    Singleton.instance = this;
    return this;
  }

  setData(key, value) {
    this.data[key] = value;
  }

  getData(key) {
    return this.data[key];
  }
}

// 使用
const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // true
\`\`\`

### 模块单例

\`\`\`javascript
const ConfigManager = (() => {
  let instance;

  function createInstance() {
    return {
      apiUrl: 'https://api.example.com',
      timeout: 5000,
      setConfig(config) {
        Object.assign(this, config);
      }
    };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();
\`\`\`

## 观察者模式 (Observer)

### 事件发布订阅

\`\`\`javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }
}

// 使用
const emitter = new EventEmitter();

emitter.on('userLogin', (user) => {
  console.log(\`用户 \${user.name} 已登录\`);
});

emitter.emit('userLogin', { name: 'John' });
\`\`\`

## 工厂模式 (Factory)

### 创建对象的工厂

\`\`\`javascript
class UserFactory {
  static createUser(type, data) {
    switch (type) {
      case 'admin':
        return new AdminUser(data);
      case 'regular':
        return new RegularUser(data);
      case 'guest':
        return new GuestUser(data);
      default:
        throw new Error('Unknown user type');
    }
  }
}

class AdminUser {
  constructor(data) {
    this.name = data.name;
    this.permissions = ['read', 'write', 'delete'];
  }
}

class RegularUser {
  constructor(data) {
    this.name = data.name;
    this.permissions = ['read', 'write'];
  }
}

// 使用
const admin = UserFactory.createUser('admin', { name: 'Alice' });
\`\`\`

## 策略模式 (Strategy)

### 算法封装和切换

\`\`\`javascript
class PaymentStrategy {
  pay(amount) {
    throw new Error('pay method must be implemented');
  }
}

class CreditCardPayment extends PaymentStrategy {
  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
  }

  pay(amount) {
    console.log(\`使用信用卡 \${this.cardNumber} 支付 $\${amount}\`);
  }
}

class PayPalPayment extends PaymentStrategy {
  constructor(email) {
    super();
    this.email = email;
  }

  pay(amount) {
    console.log(\`使用 PayPal \${this.email} 支付 $\${amount}\`);
  }
}

class PaymentContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executePayment(amount) {
    this.strategy.pay(amount);
  }
}

// 使用
const payment = new PaymentContext(new CreditCardPayment('1234-5678'));
payment.executePayment(100);
\`\`\`

设计模式让代码更加优雅和可维护。
    `,
    contentEn: `
# JavaScript Design Patterns in Practice

Design patterns are reusable solutions to common programming problems.

## Singleton Pattern

### Ensure a class has only one instance

\`\`\`javascript
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    this.data = {};
    Singleton.instance = this;
    return this;
  }

  setData(key, value) {
    this.data[key] = value;
  }

  getData(key) {
    return this.data[key];
  }
}

// Usage
const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // true
\`\`\`

Design patterns make code more elegant and maintainable.
    `
  },

  // TypeScript 进阶文章
  {
    id: 'typescript-advanced-types',
    title: 'TypeScript 高级类型系统',
    titleEn: 'Advanced TypeScript Type System',
    description: '深入学习TypeScript的高级类型特性，包括泛型、条件类型、映射类型等',
    descriptionEn: 'Deep dive into advanced TypeScript type features including generics, conditional types, mapped types, etc.',
    category: 'typescript',
    tags: ['TypeScript', '泛型', '条件类型', '映射类型', '工具类型'],
    author: 'MZFL Team',
    publishDate: '2024-01-30',
    readTime: '20分钟',
    difficulty: 'advanced',
    featured: true,
    views: 1340,
    likes: 102,
    rating: 5,
    content: `
# TypeScript 高级类型系统

TypeScript 的类型系统非常强大，掌握高级类型能让代码更加安全和优雅。

## 泛型 (Generics)

### 基础泛型

\`\`\`typescript
// 泛型函数
function identity<T>(arg: T): T {
  return arg;
}

// 泛型接口
interface GenericIdentityFn<T> {
  (arg: T): T;
}

// 泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
\`\`\`

### 泛型约束

\`\`\`typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// 使用键约束
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let person = { name: "John", age: 30 };
let name = getProperty(person, "name"); // string
let age = getProperty(person, "age");   // number
\`\`\`

## 条件类型 (Conditional Types)

### 基础条件类型

\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>;  // true
type Test2 = IsString<number>;  // false

// 实用的条件类型
type NonNullable<T> = T extends null | undefined ? never : T;

type ApiResponse<T> = T extends string
  ? { message: T }
  : T extends number
  ? { code: T }
  : { data: T };
\`\`\`

### 分布式条件类型

\`\`\`typescript
type ToArray<T> = T extends any ? T[] : never;

type StrArrOrNumArr = ToArray<string | number>; // string[] | number[]

// 提取函数返回类型
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

function getString(): string { return "hello"; }
type StringReturn = ReturnType<typeof getString>; // string
\`\`\`

## 映射类型 (Mapped Types)

### 基础映射类型

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Required<T> = {
  [P in keyof T]-?: T[P];
};

interface User {
  name: string;
  age?: number;
}

type ReadonlyUser = Readonly<User>;
type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
\`\`\`

### 高级映射类型

\`\`\`typescript
// 键重映射
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

interface Person {
  name: string;
  age: number;
}

type PersonGetters = Getters<Person>;
// {
//   getName: () => string;
//   getAge: () => number;
// }

// 过滤类型
type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
};

type StringProps = PickByType<Person, string>; // { name: string }
\`\`\`

## 工具类型 (Utility Types)

### 常用工具类型

\`\`\`typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

// Pick - 选择属性
type TodoPreview = Pick<Todo, "title" | "completed">;

// Omit - 排除属性
type TodoInfo = Omit<Todo, "completed" | "createdAt">;

// Record - 构造记录类型
type PageInfo = Record<"home" | "about" | "contact", { title: string; url: string }>;

// Exclude - 排除联合类型
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"

// Extract - 提取联合类型
type T1 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
\`\`\`

### 自定义工具类型

\`\`\`typescript
// 深度只读
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// 可选链类型
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// 函数重载类型
type Overload = {
  (x: string): string;
  (x: number): number;
  (x: boolean): boolean;
};
\`\`\`

TypeScript 的类型系统让 JavaScript 开发更加安全可靠。
    `,
    contentEn: `
# Advanced TypeScript Type System

TypeScript's type system is very powerful, mastering advanced types makes code safer and more elegant.

## Generics

### Basic Generics

\`\`\`typescript
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Generic interface
interface GenericIdentityFn<T> {
  (arg: T): T;
}

// Generic class
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
\`\`\`

TypeScript's type system makes JavaScript development safer and more reliable.
    `
  },

  // React 进阶文章
  {
    id: 'react-hooks-advanced',
    title: 'React Hooks 高级用法与最佳实践',
    titleEn: 'Advanced React Hooks Usage and Best Practices',
    description: '深入学习React Hooks的高级用法，包括自定义Hook、性能优化和状态管理',
    descriptionEn: 'Deep dive into advanced React Hooks usage including custom hooks, performance optimization, and state management',
    category: 'react',
    tags: ['React', 'Hooks', '自定义Hook', '性能优化', '状态管理'],
    author: 'MZFL Team',
    publishDate: '2024-02-01',
    readTime: '16分钟',
    difficulty: 'advanced',
    featured: true,
    views: 1580,
    likes: 118,
    rating: 5,
    content: `
# React Hooks 高级用法与最佳实践

React Hooks 改变了我们编写 React 组件的方式，掌握高级用法能显著提升开发效率。

## 自定义 Hooks

### 数据获取 Hook

\`\`\`typescript
import { useState, useEffect } from 'react';

interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

function useApi<T>(url: string): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
}

// 使用
function UserProfile({ userId }: { userId: string }) {
  const { data: user, loading, error } = useApi<User>(\`/api/users/\${userId}\`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;

  return <div>{user.name}</div>;
}
\`\`\`

### 本地存储 Hook

\`\`\`typescript
import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(\`Error reading localStorage key "\${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(\`Error setting localStorage key "\${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}

// 使用
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  );
}
\`\`\`

## 性能优化 Hooks

### useMemo 和 useCallback

\`\`\`typescript
import { useMemo, useCallback, useState } from 'react';

interface Item {
  id: number;
  name: string;
  category: string;
}

function ItemList({ items }: { items: Item[] }) {
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'category'>('name');

  // 缓存过滤和排序后的数据
  const filteredAndSortedItems = useMemo(() => {
    return items
      .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }, [items, filter, sortBy]);

  // 缓存事件处理函数
  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);

  const handleSortChange = useCallback((newSortBy: 'name' | 'category') => {
    setSortBy(newSortBy);
  }, []);

  return (
    <div>
      <input value={filter} onChange={handleFilterChange} placeholder="Filter items..." />
      <button onClick={() => handleSortChange('name')}>Sort by Name</button>
      <button onClick={() => handleSortChange('category')}>Sort by Category</button>

      {filteredAndSortedItems.map(item => (
        <div key={item.id}>{item.name} - {item.category}</div>
      ))}
    </div>
  );
}
\`\`\`

### 防抖 Hook

\`\`\`typescript
import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// 使用
function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // 执行搜索
      console.log('Searching for:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
\`\`\`

## 状态管理 Hook

### useReducer 复杂状态管理

\`\`\`typescript
import { useReducer } from 'react';

interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
}

type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number }
  | { type: 'SET_FILTER'; payload: 'all' | 'active' | 'completed' };

function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload,
          completed: false
        }]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    filter: 'all'
  });

  const addTodo = (text: string) => {
    dispatch({ type: 'ADD_TODO', payload: text });
  };

  return (
    <div>
      {/* Todo 组件实现 */}
    </div>
  );
}
\`\`\`

React Hooks 让函数组件拥有了强大的状态管理能力。
    `,
    contentEn: `
# Advanced React Hooks Usage and Best Practices

React Hooks changed how we write React components, mastering advanced usage can significantly improve development efficiency.

## Custom Hooks

### Data Fetching Hook

\`\`\`typescript
import { useState, useEffect } from 'react';

interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

function useApi<T>(url: string): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
}
\`\`\`

React Hooks give functional components powerful state management capabilities.
    `
  },

  // Vue 3 进阶文章
  {
    id: 'vue3-composition-api',
    title: 'Vue 3 Composition API 深度解析',
    titleEn: 'Deep Dive into Vue 3 Composition API',
    description: '全面学习Vue 3 Composition API，掌握现代Vue开发的核心技能',
    descriptionEn: 'Comprehensive learning of Vue 3 Composition API, master core skills for modern Vue development',
    category: 'vue',
    tags: ['Vue 3', 'Composition API', 'Reactivity', 'Composables'],
    author: 'MZFL Team',
    publishDate: '2024-02-03',
    readTime: '14分钟',
    difficulty: 'intermediate',
    featured: true,
    views: 1260,
    likes: 94,
    rating: 5,
    content: `
# Vue 3 Composition API 深度解析

Vue 3 的 Composition API 提供了更灵活的组件逻辑组织方式。

## 基础响应式 API

### ref 和 reactive

\`\`\`typescript
import { ref, reactive, computed, watch } from 'vue';

// ref - 基本类型响应式
const count = ref(0);
const message = ref('Hello Vue 3');

// reactive - 对象响应式
const state = reactive({
  user: {
    name: 'John',
    age: 30
  },
  todos: []
});

// computed - 计算属性
const doubleCount = computed(() => count.value * 2);

// watch - 侦听器
watch(count, (newValue, oldValue) => {
  console.log(\`Count changed from \${oldValue} to \${newValue}\`);
});

// watchEffect - 自动追踪依赖
watchEffect(() => {
  console.log(\`Count is: \${count.value}\`);
});
\`\`\`

## 组合式函数 (Composables)

### 鼠标位置追踪

\`\`\`typescript
import { ref, onMounted, onUnmounted } from 'vue';

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  function update(event: MouseEvent) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  onMounted(() => {
    window.addEventListener('mousemove', update);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  });

  return { x, y };
}

// 在组件中使用
export default {
  setup() {
    const { x, y } = useMouse();

    return {
      x,
      y
    };
  }
};
\`\`\`

### 数据获取组合式函数

\`\`\`typescript
import { ref, watchEffect } from 'vue';

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null);
  const error = ref<string | null>(null);
  const loading = ref(true);

  const fetchData = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      data.value = await response.json();
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error';
    } finally {
      loading.value = false;
    }
  };

  watchEffect(() => {
    fetchData();
  });

  return {
    data: readonly(data),
    error: readonly(error),
    loading: readonly(loading),
    refetch: fetchData
  };
}

// 使用
export default {
  setup() {
    const { data: users, loading, error } = useFetch<User[]>('/api/users');

    return {
      users,
      loading,
      error
    };
  }
};
\`\`\`

## 高级响应式特性

### toRefs 和 toRef

\`\`\`typescript
import { reactive, toRefs, toRef } from 'vue';

const state = reactive({
  name: 'John',
  age: 30,
  email: 'john@example.com'
});

// toRefs - 将响应式对象转换为普通对象，每个属性都是 ref
const { name, age, email } = toRefs(state);

// toRef - 为响应式对象的单个属性创建 ref
const nameRef = toRef(state, 'name');

// 在模板中可以直接使用，无需 .value
export default {
  setup() {
    return {
      name,
      age,
      email
    };
  }
};
\`\`\`

### 自定义 ref

\`\`\`typescript
import { customRef } from 'vue';

function useDebouncedRef(value: string, delay = 200) {
  let timeout: number;

  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue: string) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      }
    };
  });
}

// 使用
export default {
  setup() {
    const searchText = useDebouncedRef('', 500);

    return {
      searchText
    };
  }
};
\`\`\`

## 生命周期钩子

### Composition API 生命周期

\`\`\`typescript
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured
} from 'vue';

export default {
  setup() {
    onBeforeMount(() => {
      console.log('组件即将挂载');
    });

    onMounted(() => {
      console.log('组件已挂载');
    });

    onBeforeUpdate(() => {
      console.log('组件即将更新');
    });

    onUpdated(() => {
      console.log('组件已更新');
    });

    onBeforeUnmount(() => {
      console.log('组件即将卸载');
    });

    onUnmounted(() => {
      console.log('组件已卸载');
    });

    onErrorCaptured((error, instance, info) => {
      console.log('捕获到错误:', error, info);
      return false; // 阻止错误继续传播
    });

    return {};
  }
};
\`\`\`

Vue 3 Composition API 让代码更加模块化和可复用。
    `,
    contentEn: `
# Deep Dive into Vue 3 Composition API

Vue 3's Composition API provides a more flexible way to organize component logic.

## Basic Reactivity API

### ref and reactive

\`\`\`typescript
import { ref, reactive, computed, watch } from 'vue';

// ref - primitive type reactivity
const count = ref(0);
const message = ref('Hello Vue 3');

// reactive - object reactivity
const state = reactive({
  user: {
    name: 'John',
    age: 30
  },
  todos: []
});

// computed - computed property
const doubleCount = computed(() => count.value * 2);
\`\`\`

Vue 3 Composition API makes code more modular and reusable.
    `
  },

  // 前端工程化文章
  {
    id: 'webpack-optimization-guide',
    title: 'Webpack 性能优化完全指南',
    titleEn: 'Complete Webpack Performance Optimization Guide',
    description: '深入学习Webpack优化技巧，提升构建速度和包体积优化',
    descriptionEn: 'Deep dive into Webpack optimization techniques to improve build speed and bundle size optimization',
    category: 'webpack',
    tags: ['Webpack', '性能优化', '代码分割', 'Tree Shaking', '构建优化'],
    author: 'MZFL Team',
    publishDate: '2024-02-05',
    readTime: '22分钟',
    difficulty: 'advanced',
    featured: true,
    views: 1890,
    likes: 142,
    rating: 5,
    content: `
# Webpack 性能优化完全指南

Webpack 是现代前端工程化的核心工具，掌握优化技巧能显著提升开发体验。

## 构建速度优化

### 缓存优化

\`\`\`javascript
// webpack.config.js
module.exports = {
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.webpack_cache'),
    buildDependencies: {
      config: [__filename]
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false
            }
          }
        ]
      }
    ]
  }
};
\`\`\`

### 多进程构建

\`\`\`javascript
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true, // 启用多进程
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true
          }
        }
      })
    ]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: require('os').cpus().length - 1
            }
          },
          'babel-loader'
        ]
      }
    ]
  }
};
\`\`\`

## 包体积优化

### 代码分割

\`\`\`javascript
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 5,
          reuseExistingChunk: true
        }
      }
    }
  }
};

// 动态导入
const LazyComponent = React.lazy(() => import('./LazyComponent'));

// 路由级别代码分割
const routes = [
  {
    path: '/home',
    component: () => import('./pages/Home')
  },
  {
    path: '/about',
    component: () => import('./pages/About')
  }
];
\`\`\`

### Tree Shaking

\`\`\`javascript
// webpack.config.js
module.exports = {
  mode: 'production',
  optimization: {
    usedExports: true,
    sideEffects: false
  }
};

// package.json
{
  "sideEffects": [
    "*.css",
    "*.scss",
    "./src/polyfills.js"
  ]
}

// 正确的导入方式
import { debounce } from 'lodash-es'; // ✅ 支持 tree shaking
import debounce from 'lodash/debounce'; // ✅ 只导入需要的函数

// 避免的导入方式
import _ from 'lodash'; // ❌ 导入整个库
\`\`\`

### Bundle 分析

\`\`\`javascript
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle-report.html'
    })
  ]
};

// 分析脚本
{
  "scripts": {
    "analyze": "webpack --config webpack.config.js --env analyze",
    "build:analyze": "npm run build && npx webpack-bundle-analyzer dist/static/js/*.js"
  }
}
\`\`\`

## 开发体验优化

### 热模块替换 (HMR)

\`\`\`javascript
// webpack.dev.js
module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    historyApiFallback: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

// 在代码中启用 HMR
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
\`\`\`

### 开发工具优化

\`\`\`javascript
module.exports = {
  devtool: process.env.NODE_ENV === 'development'
    ? 'eval-cheap-module-source-map'
    : 'source-map',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'components': path.resolve(__dirname, 'src/components'),
      'utils': path.resolve(__dirname, 'src/utils')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  }
};
\`\`\`

## 高级优化技巧

### 预加载和预获取

\`\`\`javascript
// 预加载关键资源
import(/* webpackPreload: true */ './CriticalComponent');

// 预获取可能需要的资源
import(/* webpackPrefetch: true */ './OptionalComponent');

// 在 HTML 中
<link rel="preload" href="/critical.js" as="script">
<link rel="prefetch" href="/optional.js" as="script">
\`\`\`

### 资源压缩

\`\`\`javascript
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 8192,
      minRatio: 0.8
    })
  ]
};
\`\`\`

### 模块联邦

\`\`\`javascript
const ModuleFederationPlugin = require('@module-federation/webpack');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        mfe1: 'mfe1@http://localhost:3001/remoteEntry.js',
        mfe2: 'mfe2@http://localhost:3002/remoteEntry.js'
      }
    })
  ]
};
\`\`\`

Webpack 优化是一个持续的过程，需要根据项目特点选择合适的策略。
    `,
    contentEn: `
# Complete Webpack Performance Optimization Guide

Webpack is the core tool for modern frontend engineering, mastering optimization techniques can significantly improve development experience.

## Build Speed Optimization

### Cache Optimization

\`\`\`javascript
// webpack.config.js
module.exports = {
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.webpack_cache'),
    buildDependencies: {
      config: [__filename]
    }
  }
};
\`\`\`

Webpack optimization is a continuous process that requires choosing appropriate strategies based on project characteristics.
    `
  },

  // 性能优化文章
  {
    id: 'web-performance-optimization',
    title: 'Web 性能优化终极指南',
    titleEn: 'Ultimate Web Performance Optimization Guide',
    description: '全面掌握Web性能优化技巧，从加载速度到运行时性能的完整优化方案',
    descriptionEn: 'Comprehensive mastery of web performance optimization techniques, complete optimization solutions from loading speed to runtime performance',
    category: 'performance-optimization',
    tags: ['性能优化', 'Core Web Vitals', '懒加载', '缓存策略', 'CDN'],
    author: 'MZFL Team',
    publishDate: '2024-02-08',
    readTime: '25分钟',
    difficulty: 'advanced',
    featured: true,
    views: 2150,
    likes: 168,
    rating: 5,
    content: `
# Web 性能优化终极指南

Web 性能直接影响用户体验和业务指标，掌握系统性的优化方法至关重要。

## Core Web Vitals 优化

### Largest Contentful Paint (LCP)

\`\`\`html
<!-- 预加载关键资源 -->
<link rel="preload" href="/hero-image.jpg" as="image">
<link rel="preload" href="/critical.css" as="style">
<link rel="preload" href="/main.js" as="script">

<!-- 优化图片加载 -->
<img
  src="/hero-image.jpg"
  alt="Hero Image"
  loading="eager"
  fetchpriority="high"
  width="800"
  height="600"
>
\`\`\`

\`\`\`css
/* 关键 CSS 内联 */
.hero {
  background-image: url('/hero-image.jpg');
  background-size: cover;
  height: 100vh;
  /* 避免布局偏移 */
  aspect-ratio: 16/9;
}
\`\`\`

### First Input Delay (FID) / Interaction to Next Paint (INP)

\`\`\`javascript
// 代码分割减少主线程阻塞
const heavyTask = async () => {
  const { processData } = await import('./heavy-processing');
  return processData();
};

// 使用 Web Workers 处理计算密集型任务
const worker = new Worker('/worker.js');
worker.postMessage({ data: largeDataSet });
worker.onmessage = (e) => {
  console.log('处理结果:', e.data);
};

// 优化事件处理
const debouncedHandler = debounce((e) => {
  // 处理逻辑
}, 16); // 60fps

element.addEventListener('scroll', debouncedHandler, { passive: true });
\`\`\`

### Cumulative Layout Shift (CLS)

\`\`\`css
/* 为图片预留空间 */
.image-container {
  aspect-ratio: 16/9;
  background-color: #f0f0f0;
}

/* 为字体加载预留空间 */
@font-face {
  font-family: 'CustomFont';
  src: url('/font.woff2') format('woff2');
  font-display: swap;
  size-adjust: 100%;
}

/* 避免动态内容导致的布局偏移 */
.dynamic-content {
  min-height: 200px;
  contain: layout;
}
\`\`\`

## 资源优化

### 图片优化

\`\`\`html
<!-- 响应式图片 -->
<picture>
  <source
    media="(min-width: 800px)"
    srcset="/large.webp 1x, /large@2x.webp 2x"
    type="image/webp"
  >
  <source
    media="(min-width: 400px)"
    srcset="/medium.webp 1x, /medium@2x.webp 2x"
    type="image/webp"
  >
  <img
    src="/small.jpg"
    srcset="/small.jpg 1x, /small@2x.jpg 2x"
    alt="Responsive Image"
    loading="lazy"
    decoding="async"
  >
</picture>

<!-- 现代图片格式 -->
<img
  src="/image.jpg"
  srcset="/image.avif 1x, /image@2x.avif 2x"
  type="image/avif"
  loading="lazy"
>
\`\`\`

### 懒加载实现

\`\`\`javascript
// Intersection Observer 懒加载
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
}, {
  rootMargin: '50px 0px',
  threshold: 0.01
});

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});

// 组件懒加载
const LazyComponent = React.lazy(() =>
  import('./HeavyComponent').then(module => ({
    default: module.HeavyComponent
  }))
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

## 缓存策略

### HTTP 缓存

\`\`\`javascript
// Service Worker 缓存策略
const CACHE_NAME = 'app-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js'
];

// 安装时缓存关键资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 网络优先策略
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const responseClone = response.clone();
        caches.open(CACHE_NAME)
          .then(cache => cache.put(event.request, responseClone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
\`\`\`

### 浏览器缓存

\`\`\`javascript
// 设置缓存头
app.use('/static', express.static('public', {
  maxAge: '1y',
  etag: true,
  lastModified: true
}));

// 版本化资源
const manifest = {
  'main.js': 'main.abc123.js',
  'main.css': 'main.def456.css'
};
\`\`\`

## 网络优化

### 资源预加载

\`\`\`html
<!-- DNS 预解析 -->
<link rel="dns-prefetch" href="//cdn.example.com">

<!-- 预连接 -->
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>

<!-- 预加载关键资源 -->
<link rel="preload" href="/critical.css" as="style">
<link rel="preload" href="/hero.jpg" as="image">

<!-- 预获取下一页资源 -->
<link rel="prefetch" href="/next-page.js">

<!-- 模块预加载 -->
<link rel="modulepreload" href="/modules/app.js">
\`\`\`

### CDN 优化

\`\`\`javascript
// 多 CDN 策略
const cdnUrls = [
  'https://cdn1.example.com',
  'https://cdn2.example.com',
  'https://cdn3.example.com'
];

function loadResource(path) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    function tryLoad() {
      const url = \`\${cdnUrls[attempts]}\${path}\`;
      const script = document.createElement('script');

      script.onload = resolve;
      script.onerror = () => {
        attempts++;
        if (attempts < cdnUrls.length) {
          tryLoad();
        } else {
          reject(new Error('All CDN attempts failed'));
        }
      };

      script.src = url;
      document.head.appendChild(script);
    }

    tryLoad();
  });
}
\`\`\`

## 性能监控

### 性能指标收集

\`\`\`javascript
// Web Vitals 监控
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  fetch('/analytics', {
    method: 'POST',
    body: JSON.stringify(metric),
    headers: { 'Content-Type': 'application/json' }
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);

// 自定义性能监控
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'navigation') {
      console.log('页面加载时间:', entry.loadEventEnd - entry.fetchStart);
    }
  }
});

observer.observe({ entryTypes: ['navigation', 'resource', 'paint'] });
\`\`\`

性能优化是一个持续的过程，需要结合实际业务场景制定优化策略。
    `,
    contentEn: `
# Ultimate Web Performance Optimization Guide

Web performance directly affects user experience and business metrics, mastering systematic optimization methods is crucial.

## Core Web Vitals Optimization

### Largest Contentful Paint (LCP)

\`\`\`html
<!-- Preload critical resources -->
<link rel="preload" href="/hero-image.jpg" as="image">
<link rel="preload" href="/critical.css" as="style">
<link rel="preload" href="/main.js" as="script">
\`\`\`

Performance optimization is a continuous process that requires developing optimization strategies based on actual business scenarios.
    `
  }
];

// 根据分类获取文章
export const getArticlesByCategory = (categoryId: string): Article[] => {
  return articles.filter(article => article.category === categoryId);
};

// 根据ID获取文章
export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

// 获取特色文章
export const getFeaturedArticles = (): Article[] => {
  return articles.filter(article => article.featured);
};

// 搜索文章
export const searchArticles = (query: string, locale: 'zh' | 'en' = 'zh'): Article[] => {
  const searchTerm = query.toLowerCase();
  return articles.filter(article => {
    const title = locale === 'en' ? article.titleEn : article.title;
    const description = locale === 'en' ? article.descriptionEn : article.description;
    const content = locale === 'en' ? article.contentEn : article.content;
    
    return title.toLowerCase().includes(searchTerm) ||
           description.toLowerCase().includes(searchTerm) ||
           content.toLowerCase().includes(searchTerm) ||
           article.tags.some(tag => tag.toLowerCase().includes(searchTerm));
  });
};
