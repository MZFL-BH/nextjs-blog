'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ArticleCard from '@/components/ArticleCard';

import { categories } from '@/data/categories';
import { articles, getFeaturedArticles, getArticlesByCategory } from '@/data/articles';
import { useLocale } from '@/hooks/useLocale';
import Link from 'next/link';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { locale, t } = useLocale();

  const featuredArticles = getFeaturedArticles();
  const latestArticles = articles.slice(0, 6);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* 侧边栏 */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* 头部导航 */}
      <Header onMenuClick={() => setSidebarOpen(true)} />

      {/* 主内容区域 */}
      <main
        className="flex-1"
        style={{
          marginLeft: 'var(--sidebar-width, 0)'
        }}
      >


          <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
            {/* GitHub 风格欢迎区域 */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 border"
                   style={{
                     backgroundColor: 'var(--bgColor-accent-muted)',
                     color: 'var(--fgColor-accent)',
                     borderColor: 'var(--borderColor-emphasis)'
                   }}>
                ✨ 前端学习平台
              </div>
              <h1
                className="text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                style={{ color: 'var(--fgColor-default)' }}
              >
                {t('home.welcome')}
              </h1>
              <p
                className="text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
                style={{ color: 'var(--fgColor-muted)' }}
              >
                {t('home.subtitle')}
              </p>
            </div>

            {/* GitHub 风格分类概览 */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: 'var(--fgColor-default)' }}
              >
                {t('home.allCategories')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.id}`}
                    className="group rounded-lg transition-all duration-200 p-6 border"
                    style={{
                      backgroundColor: 'var(--bgColor-default)',
                      borderColor: 'var(--borderColor-default)',
                      boxShadow: 'var(--shadow-small)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
                      e.currentTarget.style.borderColor = 'var(--borderColor-emphasis)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'var(--shadow-small)';
                      e.currentTarget.style.borderColor = 'var(--borderColor-default)';
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                           style={{
                             backgroundColor: 'var(--bgColor-accent-muted)',
                             color: 'var(--fgColor-accent)'
                           }}>
                        <span className="text-xl">{category.icon}</span>
                      </div>
                      <div>
                        <h3
                          className="text-lg font-semibold group-hover:underline transition-all mb-1"
                          style={{ color: 'var(--fgColor-accent)' }}
                        >
                          {locale === 'en' ? category.nameEn : category.name}
                        </h3>
                        <div className="space-y-1">
                          {category.children && (
                            <p
                              className="text-sm"
                              style={{ color: 'var(--fgColor-muted)' }}
                            >
                              {category.children.length} {locale === 'en' ? 'topics' : '个主题'}
                            </p>
                          )}
                          <p
                            className="text-sm"
                            style={{ color: 'var(--fgColor-muted)' }}
                          >
                            {(() => {
                              // 计算该分类及其子分类的文章总数
                              let totalArticles = getArticlesByCategory(category.id).length;
                              if (category.children) {
                                category.children.forEach(child => {
                                  totalArticles += getArticlesByCategory(child.id).length;
                                });
                              }
                              return totalArticles;
                            })()} {locale === 'en' ? 'articles' : '篇文章'}
                          </p>
                        </div>
                      </div>
                    </div>
                    {category.children && (
                      <div className="flex flex-wrap gap-2">
                        {category.children.slice(0, 3).map((child) => (
                          <span
                            key={child.id}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor: 'var(--bgColor-accent-muted)',
                              color: 'var(--fgColor-accent)'
                            }}
                          >
                            {child.icon} {locale === 'en' ? child.nameEn : child.name}
                          </span>
                        ))}
                        {category.children.length > 3 && (
                          <span
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor: 'var(--bgColor-accent-muted)',
                              color: 'var(--fgColor-accent)'
                            }}
                          >
                            +{category.children.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </section>

            {/* 精选文章 */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {t('home.featuredArticles')}
                </h2>
                <Link
                  href="/articles"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
                >
                  {t('common.more')} →
                </Link>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {featuredArticles.slice(0, 4).map((article) => (
                  <ArticleCard key={article.id} article={article} featured />
                ))}
              </div>
            </section>

            {/* 最新文章 */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {t('home.latestArticles')}
                </h2>
                <Link
                  href="/articles"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
                >
                  {t('common.more')} →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
  );
}
