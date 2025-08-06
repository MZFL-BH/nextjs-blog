'use client';

import Link from 'next/link';
import { Article } from '@/data/articles';
import { useLocale } from '@/hooks/useLocale';
import { formatDate, getDifficultyColor, getDifficultyText, renderStars } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const { locale, t } = useLocale();

  const title = locale === 'en' ? article.titleEn : article.title;
  const description = locale === 'en' ? article.descriptionEn : article.description;

  return (
    <Link href={`/article/${article.id}`}>
      <article className={cn(
        "group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 hover:shadow-lg dark:hover:shadow-xl overflow-hidden",
        featured && "ring-2 ring-blue-100 dark:ring-blue-900"
      )}>
        {/* 文章头部 */}
        <div className="p-6">
          {/* 标题和评分 */}
          <div className="flex items-start justify-between mb-3">
            <h3 className={cn(
              "font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2",
              featured ? "text-lg" : "text-base"
            )}>
              {title}
            </h3>
            {article.rating && (
              <div className="flex items-center ml-3 flex-shrink-0">
                <span className="text-sm text-yellow-500">
                  {renderStars(article.rating)}
                </span>
              </div>
            )}
          </div>

          {/* 描述 */}
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          {/* 标签 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              >
                {tag}
              </span>
            ))}
            {article.tags.length > 3 && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                +{article.tags.length - 3}
              </span>
            )}
          </div>

          {/* 元信息 */}
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-4">
              {/* 难度 */}
              <span className={cn(
                "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                getDifficultyColor(article.difficulty)
              )}>
                {getDifficultyText(article.difficulty, locale)}
              </span>

              {/* 阅读时间 */}
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {article.readTime}
              </span>
            </div>

            {/* 发布日期 */}
            <time dateTime={article.publishDate} className="text-xs">
              {formatDate(article.publishDate, locale)}
            </time>
          </div>
        </div>

        {/* 文章底部统计 */}
        <div className="px-6 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-4">
              {/* 作者 */}
              <span className="flex items-center">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-xs">
                    👨‍💻
                  </span>
                </div>
                {article.author}
              </span>
            </div>

            <div className="flex items-center space-x-4">
              {/* 阅读量 */}
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {article.views.toLocaleString()}
              </span>

              {/* 点赞数 */}
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {article.likes}
              </span>
            </div>
          </div>
        </div>

        {/* 特色文章标识 */}
        {featured && (
          <div className="absolute top-4 right-4">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              ⭐ {locale === 'en' ? 'Featured' : '精选'}
            </div>
          </div>
        )}
      </article>
    </Link>
  );
}
