"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { useLocale } from "@/hooks/useLocale";
import { Category } from "@/data/categories";
import { Article } from "@/data/articles";
import { formatDate, getDifficultyColor, getDifficultyText } from "@/lib/utils";

export default function ArticleClient({
  article,
  category,
  relatedArticles,
}: {
  article: Article;
  category?: Category;
  relatedArticles: Article[];
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { locale, t } = useLocale();

  const title = locale === "en" ? article.titleEn : article.title;
  const content = locale === "en" ? article.contentEn : article.content;
  const description =
    locale === "en" ? article.descriptionEn : article.description;

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--background)" }}
    >
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <main
        className="flex-1"
        style={{ marginLeft: "var(--sidebar-width, 0)" }}
      >
        <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8">
          {/* 面包屑 */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <Link
              href="/"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {locale === "en" ? "Home" : "首页"}
            </Link>
            <span>/</span>
            {category && (
              <>
                <Link
                  href={`/category/${category.id}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {locale === "en" ? category.nameEn : category.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-gray-900 dark:text-gray-100 font-medium truncate">
              {title}
            </span>
          </nav>

          {/* 头部 */}
          <header className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-sm">👨‍💻</span>
                </div>
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <time dateTime={article.publishDate}>
                  {formatDate(article.publishDate, locale)}
                </time>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{article.readTime}</span>
              </div>
              <span
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(article.difficulty)}`}
              >
                {getDifficultyText(article.difficulty, locale)}
              </span>
            </div>
          </header>

          <article className="prose prose-lg max-w-none mb-12">
            <MarkdownRenderer content={content} />
          </article>

          {relatedArticles.length > 0 && (
            <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                {t("article.relatedArticles")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((ra) => (
                  <Link
                    key={ra.id}
                    href={`/article/${ra.id}`}
                    className="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 hover:shadow-md p-4"
                  >
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
                      {locale === "en" ? ra.titleEn : ra.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
                      {locale === "en" ? ra.descriptionEn : ra.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>{ra.readTime}</span>
                      <span
                        className={`px-2 py-1 rounded-full ${getDifficultyColor(ra.difficulty)}`}
                      >
                        {getDifficultyText(ra.difficulty, locale)}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
