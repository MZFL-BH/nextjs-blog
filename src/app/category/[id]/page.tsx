'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ArticleCard from '@/components/ArticleCard';
import ThemeToggle from '@/components/ThemeToggle';
import { getCategoryById, getAllCategories } from '@/data/categories';
import { getArticlesByCategory } from '@/data/articles';
import { useLocale } from '@/hooks/useLocale';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.id as string;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { locale, t } = useLocale();

  const category = getCategoryById(categoryId);
  const articles = getArticlesByCategory(categoryId);
  const allCategories = getAllCategories();

  if (!category) {
    notFound();
  }

  // 获取子分类的文章
  const childCategories = allCategories.filter(cat => 
    cat.parent === categoryId || 
    (category.children && category.children.some(child => child.id === cat.id))
  );

  const allCategoryArticles = [
    ...articles,
    ...childCategories.flatMap(child => getArticlesByCategory(child.id))
  ];

  // 去重
  const uniqueArticles = allCategoryArticles.filter((article, index, self) =>
    index === self.findIndex(a => a.id === article.id)
  );

  const categoryName = locale === 'en' ? category.nameEn : category.name;

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

        {/* 主内容区域 */}
        <main className="flex-1 lg:ml-64">
          <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8">
            {/* 面包屑导航 */}
            <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <Link 
                href="/" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {locale === 'en' ? 'Home' : '首页'}
              </Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-gray-100 font-medium">
                {categoryName}
              </span>
            </nav>

            {/* 分类头部 */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{category.icon}</span>
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">
                    {categoryName}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                    {uniqueArticles.length} {t('category.articlesCount')}
                  </p>
                </div>
              </div>
            </div>

            {/* 子分类 */}
            {category.children && category.children.length > 0 && (
              <section className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {locale === 'en' ? 'Subcategories' : '子分类'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.children.map((subcategory) => {
                    const subcategoryArticles = getArticlesByCategory(subcategory.id);
                    return (
                      <Link
                        key={subcategory.id}
                        href={`/category/${subcategory.id}`}
                        className="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 hover:shadow-md p-4"
                      >
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{subcategory.icon}</span>
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {locale === 'en' ? subcategory.nameEn : subcategory.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {subcategoryArticles.length} {t('category.articlesCount')}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}

            {/* 文章列表 */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {locale === 'en' ? 'Articles' : '文章'}
                </h2>
                {uniqueArticles.length > 0 && (
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {locale === 'en' ? 'Showing' : '显示'} {uniqueArticles.length} {locale === 'en' ? 'articles' : '篇文章'}
                  </div>
                )}
              </div>

              {uniqueArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {uniqueArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                    {t('category.noArticles')}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    {locale === 'en' 
                      ? 'No articles have been published in this category yet.' 
                      : '该分类下暂时还没有发布文章。'
                    }
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {t('category.backToHome')}
                  </Link>
                </div>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
