'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ArticleCard from '@/components/ArticleCard';
import { getCategoryById, getAllCategories } from '@/data/categories';
import { getArticlesByCategory } from '@/data/articles';
import { useLocale } from '@/hooks/useLocale';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.id as string;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { locale } = useLocale();

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
          <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8">
            {/* 面包屑导航 */}
            <nav className="flex items-center space-x-2 text-sm mb-6">
              <Link
                href="/"
                className="transition-colors"
                style={{
                  color: 'var(--fgColor-muted)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--fgColor-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--fgColor-muted)';
                }}
              >
                {locale === 'en' ? 'Home' : '首页'}
              </Link>
              <span style={{ color: 'var(--fgColor-subtle)' }}>/</span>
              <span
                className="font-medium"
                style={{ color: 'var(--fgColor-default)' }}
              >
                {categoryName}
              </span>
            </nav>

            {/* 分类头部 */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{category.icon}</span>
                <div>
                  <h1
                    className="text-3xl lg:text-4xl font-bold"
                    style={{ color: 'var(--fgColor-default)' }}
                  >
                    {categoryName}
                  </h1>
                  <p
                    className="text-lg mt-2"
                    style={{ color: 'var(--fgColor-muted)' }}
                  >
                    {uniqueArticles.length} {locale === 'en' ? 'articles' : '篇文章'}
                  </p>
                </div>
              </div>
            </div>

            {/* 子分类 */}
            {category.children && category.children.length > 0 && (
              <section className="mb-8">
                <h2
                  className="text-xl font-semibold mb-4"
                  style={{ color: 'var(--fgColor-default)' }}
                >
                  {locale === 'en' ? 'Subcategories' : '子分类'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.children.map((subcategory) => {
                    const subcategoryArticles = getArticlesByCategory(subcategory.id);
                    return (
                      <Link
                        key={subcategory.id}
                        href={`/category/${subcategory.id}`}
                        className="group rounded-lg border transition-all duration-200 p-4"
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
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{subcategory.icon}</span>
                          <div>
                            <h3
                              className="font-medium transition-colors"
                              style={{ color: 'var(--fgColor-accent)' }}
                            >
                              {locale === 'en' ? subcategory.nameEn : subcategory.name}
                            </h3>
                            <p
                              className="text-sm"
                              style={{ color: 'var(--fgColor-muted)' }}
                            >
                              {subcategoryArticles.length} {locale === 'en' ? 'articles' : '篇文章'}
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
                <h2
                  className="text-xl font-semibold"
                  style={{ color: 'var(--fgColor-default)' }}
                >
                  {locale === 'en' ? 'Articles' : '文章'}
                </h2>
                {uniqueArticles.length > 0 && (
                  <div
                    className="text-sm"
                    style={{ color: 'var(--fgColor-muted)' }}
                  >
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
                  <h3
                    className="text-lg font-medium mb-2"
                    style={{ color: 'var(--fgColor-default)' }}
                  >
                    {locale === 'en' ? 'No articles yet' : '暂无文章'}
                  </h3>
                  <p
                    className="mb-6"
                    style={{ color: 'var(--fgColor-muted)' }}
                  >
                    {locale === 'en'
                      ? 'No articles have been published in this category yet.'
                      : '该分类下暂时还没有发布文章。'
                    }
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center px-4 py-2 rounded-lg transition-colors"
                    style={{
                      backgroundColor: 'var(--bgColor-emphasis)',
                      color: 'var(--fgColor-onEmphasis)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '0.9';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                  >
                    {locale === 'en' ? 'Back to Home' : '返回首页'}
                  </Link>
                </div>
              )}
            </section>
          </div>
        </main>
    </div>
  );
}
