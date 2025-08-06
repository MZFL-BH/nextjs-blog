// 前端学习分类数据
export interface Category {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  children?: Category[];
  count?: number;
  parent?: string;
}

export const categories: Category[] = [
  {
    id: 'quick-start',
    name: '快速开始',
    nameEn: 'Quick Start',
    icon: '🚀',
    children: [
      { id: 'personal-ai-guide', name: '个人AI编程方向', nameEn: 'Personal AI Programming Guide', icon: '🤖' },
      { id: 'frontend-practice', name: '前端实习练线', nameEn: 'Frontend Practice', icon: '💼' },
      { id: 'ai-tech-stack', name: 'AI技术栈', nameEn: 'AI Tech Stack', icon: '🧠' }
    ]
  },
  {
    id: 'frontend-basics',
    name: '前端基础',
    nameEn: 'Frontend Basics',
    icon: '📚',
    children: [
      { id: 'html', name: 'HTML 语义化', nameEn: 'HTML Semantics', icon: '🏗️' },
      { id: 'css', name: 'CSS 样式', nameEn: 'CSS Styling', icon: '🎨' },
      { id: 'javascript', name: 'JavaScript', nameEn: 'JavaScript', icon: '⚡' },
      { id: 'typescript', name: 'TypeScript', nameEn: 'TypeScript', icon: '📘' },
      { id: 'vue', name: 'Vue', nameEn: 'Vue', icon: '💚' },
      { id: 'react', name: 'React', nameEn: 'React', icon: '⚛️' },
      { id: 'svelte', name: 'Svelte', nameEn: 'Svelte', icon: '🔥' },
      { id: 'http', name: 'HTTP/前后端交互', nameEn: 'HTTP/Frontend-Backend', icon: '🌐' },
      { id: 'git', name: 'Git代码版本控制', nameEn: 'Git Version Control', icon: '📝' }
    ]
  },
  {
    id: 'frontend-engineering',
    name: '前端工程化',
    nameEn: 'Frontend Engineering',
    icon: '⚙️',
    children: [
      { id: 'webpack', name: 'Webpack', nameEn: 'Webpack', icon: '📦' },
      { id: 'vite', name: 'Vite', nameEn: 'Vite', icon: '⚡' },
      { id: 'eslint', name: 'ESLint', nameEn: 'ESLint', icon: '🔍' },
      { id: 'prettier', name: 'Prettier', nameEn: 'Prettier', icon: '✨' },
      { id: 'testing', name: '测试', nameEn: 'Testing', icon: '🧪' }
    ]
  },
  {
    id: 'advanced-topics',
    name: '进阶主题',
    nameEn: 'Advanced Topics',
    icon: '🎯',
    children: [
      { id: 'performance', name: '性能优化', nameEn: 'Performance Optimization', icon: '🚀' },
      { id: 'security', name: '前端安全', nameEn: 'Frontend Security', icon: '🔒' },
      { id: 'pwa', name: 'PWA', nameEn: 'Progressive Web Apps', icon: '📱' },
      { id: 'micro-frontend', name: '微前端', nameEn: 'Micro Frontend', icon: '🏗️' }
    ]
  },
  {
    id: 'tools-resources',
    name: '工具与资源',
    nameEn: 'Tools & Resources',
    icon: '🛠️',
    children: [
      { id: 'vscode', name: 'VS Code', nameEn: 'VS Code', icon: '📝' },
      { id: 'chrome-devtools', name: 'Chrome DevTools', nameEn: 'Chrome DevTools', icon: '🔧' },
      { id: 'design-tools', name: '设计工具', nameEn: 'Design Tools', icon: '🎨' },
      { id: 'online-tools', name: '在线工具', nameEn: 'Online Tools', icon: '🌐' }
    ]
  }
];

// 获取所有分类（扁平化）
export const getAllCategories = (): Category[] => {
  const allCategories: Category[] = [];
  
  const flatten = (cats: Category[], parent?: Category) => {
    cats.forEach(cat => {
      allCategories.push({
        ...cat,
        parent: parent?.id
      });
      if (cat.children) {
        flatten(cat.children, cat);
      }
    });
  };
  
  flatten(categories);
  return allCategories;
};

// 根据ID获取分类
export const getCategoryById = (id: string): Category | undefined => {
  const allCategories = getAllCategories();
  return allCategories.find(cat => cat.id === id);
};

// 搜索分类
export const searchCategories = (query: string, locale: 'zh' | 'en' = 'zh'): Category[] => {
  const allCategories = getAllCategories();
  const searchTerm = query.toLowerCase();
  
  return allCategories.filter(cat => {
    const name = locale === 'en' ? cat.nameEn : cat.name;
    return name.toLowerCase().includes(searchTerm);
  });
};
