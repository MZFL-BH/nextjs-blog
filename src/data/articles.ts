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
