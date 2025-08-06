'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ArticleCard from '@/components/ArticleCard';
import ThemeToggle from '@/components/ThemeToggle';
import ThemeDebug from '@/components/ThemeDebug';

import { categories } from '@/data/categories';
import { articles, getFeaturedArticles } from '@/data/articles';
import { useLocale } from '@/hooks/useLocale';
import Link from 'next/link';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { locale, t } = useLocale();

  const featuredArticles = getFeaturedArticles();
  const latestArticles = articles.slice(0, 6);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* 头部导航 */}
      <Header onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex">
        {/* 侧边栏 */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* 主题切换按钮 */}
        <ThemeToggle />

        {/* 主题调试信息 */}
        <ThemeDebug />

        {/* 主内容区域 */}
        <main className="flex-1 lg:ml-80">


          <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8">
            {/* 欢迎区域 */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {t('home.welcome')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t('home.subtitle')}
              </p>
            </div>

            {/* 分类概览 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                {t('home.allCategories')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.id}`}
                    className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 hover:shadow-lg dark:hover:shadow-xl p-6"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">{category.icon}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {locale === 'en' ? category.nameEn : category.name}
                        </h3>
                        {category.children && (
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {category.children.length} {locale === 'en' ? 'topics' : '个主题'}
                          </p>
                        )}
                      </div>
                    </div>
                    {category.children && (
                      <div className="flex flex-wrap gap-2">
                        {category.children.slice(0, 3).map((child) => (
                          <span
                            key={child.id}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                          >
                            {child.icon} {locale === 'en' ? child.nameEn : child.name}
                          </span>
                        ))}
                        {category.children.length > 3 && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
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
    </div>
  );
}
