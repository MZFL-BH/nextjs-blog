'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Locale = 'zh' | 'en';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

// 翻译文本
const translations = {
  zh: {
    // 导航
    'nav.quickStart': '快速开始',
    'nav.frontendBasics': '前端基础',
    'nav.frontendEngineering': '前端工程化',
    'nav.advancedTopics': '进阶主题',
    'nav.toolsResources': '工具与资源',
    
    // 搜索
    'search': '搜索文章、教程...',
    'search.noResults': '没有找到相关内容',
    'search.results': '搜索结果',
    
    // 文章
    'article.readTime': '阅读时间',
    'article.difficulty': '难度',
    'article.author': '作者',
    'article.publishDate': '发布日期',
    'article.views': '阅读量',
    'article.likes': '点赞',
    'article.tags': '标签',
    'article.relatedArticles': '相关文章',
    
    // 难度
    'difficulty.beginner': '初级',
    'difficulty.intermediate': '中级',
    'difficulty.advanced': '高级',
    
    // 通用
    'common.loading': '加载中...',
    'common.error': '出错了',
    'common.retry': '重试',
    'common.more': '更多',
    'common.less': '收起',
    'common.expand': '展开',
    'common.collapse': '折叠',
    
    // 主题
    'theme.light': '浅色模式',
    'theme.dark': '深色模式',
    'theme.system': '跟随系统',
    
    // 语言
    'language.zh': '中文',
    'language.en': 'English',
    
    // 首页
    'home.welcome': '欢迎来到前端学习平台',
    'home.subtitle': '系统学习前端开发技术，从基础到进阶',
    'home.featuredArticles': '精选文章',
    'home.latestArticles': '最新文章',
    'home.allCategories': '所有分类',
    
    // 分类页面
    'category.articlesCount': '篇文章',
    'category.noArticles': '暂无文章',
    'category.backToHome': '返回首页',
    
    // 404
    'notFound.title': '页面未找到',
    'notFound.description': '抱歉，您访问的页面不存在',
    'notFound.backHome': '返回首页'
  },
  en: {
    // Navigation
    'nav.quickStart': 'Quick Start',
    'nav.frontendBasics': 'Frontend Basics',
    'nav.frontendEngineering': 'Frontend Engineering',
    'nav.advancedTopics': 'Advanced Topics',
    'nav.toolsResources': 'Tools & Resources',
    
    // Search
    'search': 'Search articles, tutorials...',
    'search.noResults': 'No results found',
    'search.results': 'Search Results',
    
    // Article
    'article.readTime': 'Read Time',
    'article.difficulty': 'Difficulty',
    'article.author': 'Author',
    'article.publishDate': 'Published',
    'article.views': 'Views',
    'article.likes': 'Likes',
    'article.tags': 'Tags',
    'article.relatedArticles': 'Related Articles',
    
    // Difficulty
    'difficulty.beginner': 'Beginner',
    'difficulty.intermediate': 'Intermediate',
    'difficulty.advanced': 'Advanced',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error occurred',
    'common.retry': 'Retry',
    'common.more': 'More',
    'common.less': 'Less',
    'common.expand': 'Expand',
    'common.collapse': 'Collapse',
    
    // Theme
    'theme.light': 'Light Mode',
    'theme.dark': 'Dark Mode',
    'theme.system': 'System',
    
    // Language
    'language.zh': '中文',
    'language.en': 'English',
    
    // Home
    'home.welcome': 'Welcome to Frontend Learning Platform',
    'home.subtitle': 'Systematically learn frontend development from basics to advanced',
    'home.featuredArticles': 'Featured Articles',
    'home.latestArticles': 'Latest Articles',
    'home.allCategories': 'All Categories',
    
    // Category
    'category.articlesCount': 'articles',
    'category.noArticles': 'No articles yet',
    'category.backToHome': 'Back to Home',
    
    // 404
    'notFound.title': 'Page Not Found',
    'notFound.description': 'Sorry, the page you are looking for does not exist',
    'notFound.backHome': 'Back to Home'
  }
};

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('zh');

  useEffect(() => {
    // 从 localStorage 获取保存的语言设置
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'zh' || savedLocale === 'en')) {
      setLocaleState(savedLocale);
    } else {
      // 检测浏览器语言
      const browserLocale = navigator.language.toLowerCase();
      if (browserLocale.startsWith('zh')) {
        setLocaleState('zh');
      } else {
        setLocaleState('en');
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: Record<string, unknown> = translations[locale];

    for (const k of keys) {
      value = value?.[k] as Record<string, unknown>;
    }

    return (value as unknown as string) || key;
  };

  return React.createElement(
    LocaleContext.Provider,
    { value: { locale, setLocale, t } },
    children
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
