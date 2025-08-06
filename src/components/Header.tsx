'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from '@/hooks/useLocale';
import { searchArticles } from '@/data/articles';
import { searchCategories } from '@/data/categories';
import { cn, debounce } from '@/lib/utils';
import Link from 'next/link';

interface HeaderProps {
  onMenuClick: () => void;
}

interface SearchResult {
  type: 'article' | 'category';
  id: string;
  title: string;
  description?: string;
  category?: string;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const { locale, setLocale, t } = useLocale();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [mounted, setMounted] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 搜索功能
  const performSearch = debounce((query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const articles = searchArticles(query, locale);
    const categories = searchCategories(query, locale);

    const results: SearchResult[] = [
      ...articles.map(article => ({
        type: 'article' as const,
        id: article.id,
        title: locale === 'en' ? article.titleEn : article.title,
        description: locale === 'en' ? article.descriptionEn : article.description,
        category: article.category
      })),
      ...categories.map(category => ({
        type: 'category' as const,
        id: category.id,
        title: locale === 'en' ? category.nameEn : category.name,
      }))
    ];

    setSearchResults(results.slice(0, 8)); // 限制结果数量
    setShowSearchResults(true);
  }, 300);

  useEffect(() => {
    performSearch(searchQuery);
  }, [searchQuery, locale, performSearch]);

  // 点击外部关闭搜索结果
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchResultClick = () => {
    setShowSearchResults(false);
    setSearchQuery('');
  };

  if (!mounted) {
    return null;
  }

  return (
    <header
      className="sticky top-0 z-30 backdrop-blur-md lg:ml-80 border-b"
      style={{
        backgroundColor: 'rgba(var(--background-rgb), 0.8)',
        borderColor: 'var(--borderColor-default)',
        boxShadow: 'var(--shadow-small)'
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 lg:px-6">
        {/* 左侧：菜单按钮 */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* 桌面端 Logo */}
          <Link href="/" className="hidden lg:flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">👨‍💻</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
              MZFL
            </span>
          </Link>
        </div>

        {/* 中间：搜索框 */}
        <div className="flex-1 max-w-2xl mx-4 relative" ref={searchRef}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder={t('search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery && setShowSearchResults(true)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>

          {/* 搜索结果下拉框 */}
          {showSearchResults && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
              <div className="p-2">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 px-3 py-2">
                  {t('search.results')} ({searchResults.length})
                </div>
                {searchResults.map((result) => (
                  <Link
                    key={`${result.type}-${result.id}`}
                    href={result.type === 'article' ? `/article/${result.id}` : `/category/${result.id}`}
                    onClick={handleSearchResultClick}
                    className="flex items-start p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-3">
                      <span className="text-white text-sm">
                        {result.type === 'article' ? '📄' : '📁'}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                        {result.title}
                      </div>
                      {result.description && (
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                          {result.description}
                        </div>
                      )}
                      <div className="flex items-center mt-1">
                        <span className={cn(
                          "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                          result.type === 'article' 
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        )}>
                          {result.type === 'article' ? (locale === 'en' ? 'Article' : '文章') : (locale === 'en' ? 'Category' : '分类')}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 无搜索结果 */}
          {showSearchResults && searchQuery && searchResults.length === 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                {t('search.noResults')}
              </div>
            </div>
          )}
        </div>

        {/* 右侧：语言切换 */}
        <div className="flex items-center space-x-2">
          {/* 语言切换 */}
          <button
            onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title={locale === 'zh' ? 'Switch to English' : '切换到中文'}
          >
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {locale === 'zh' ? 'EN' : '中'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
