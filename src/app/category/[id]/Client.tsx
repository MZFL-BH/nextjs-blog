"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ArticleCard from "@/components/ArticleCard";
import { useLocale } from "@/hooks/useLocale";
import { Category } from "@/data/categories";
import { Article } from "@/data/articles";

export default function CategoryClient({
  category,
  uniqueArticles,
  subcategoryArticles,
}: {
  category: Category;
  uniqueArticles: Article[];
  subcategoryArticles: {
    id: string;
    name: string;
    nameEn: string;
    icon: string;
    count: number;
  }[];
}) {
  const { locale } = useLocale();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const categoryName = locale === "en" ? category.nameEn : category.name;

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
        <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm mb-6">
            <Link
              href="/"
              className="transition-colors text-[color:var(--fgColor-muted)] hover:text-[color:var(--fgColor-accent)]"
            >
              {locale === "en" ? "Home" : "首页"}
            </Link>
            <span style={{ color: "var(--fgColor-subtle)" }}>/</span>
            <span
              className="font-medium"
              style={{ color: "var(--fgColor-default)" }}
            >
              {categoryName}
            </span>
          </nav>

          <div className="mb-8">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{category.icon}</span>
              <div>
                <h1
                  className="text-3xl lg:text-4xl font-bold"
                  style={{ color: "var(--fgColor-default)" }}
                >
                  {categoryName}
                </h1>
                <p
                  className="text-lg mt-2"
                  style={{ color: "var(--fgColor-muted)" }}
                >
                  {uniqueArticles.length}{" "}
                  {locale === "en" ? "articles" : "篇文章"}
                </p>
              </div>
            </div>
          </div>

          {subcategoryArticles.length > 0 && (
            <section className="mb-8">
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: "var(--fgColor-default)" }}
              >
                {locale === "en" ? "Subcategories" : "子分类"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {subcategoryArticles.map((sc) => (
                  <Link
                    key={sc.id}
                    href={`/category/${sc.id}`}
                    className="group rounded-lg border transition-all duration-200 p-4 hover:shadow-[var(--shadow-medium)] hover:border-[color:var(--borderColor-emphasis)]"
                    style={{
                      backgroundColor: "var(--bgColor-default)",
                      borderColor: "var(--borderColor-default)",
                    }}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{sc.icon}</span>
                      <div>
                        <h3
                          className="font-medium transition-colors"
                          style={{ color: "var(--fgColor-accent)" }}
                        >
                          {locale === "en" ? sc.nameEn : sc.name}
                        </h3>
                        <p
                          className="text-sm"
                          style={{ color: "var(--fgColor-muted)" }}
                        >
                          {sc.count} {locale === "en" ? "articles" : "篇文章"}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2
                className="text-xl font-semibold"
                style={{ color: "var(--fgColor-default)" }}
              >
                {locale === "en" ? "Articles" : "文章"}
              </h2>
              {uniqueArticles.length > 0 && (
                <div
                  className="text-sm"
                  style={{ color: "var(--fgColor-muted)" }}
                >
                  {locale === "en" ? "Showing" : "显示"} {uniqueArticles.length}{" "}
                  {locale === "en" ? "articles" : "篇文章"}
                </div>
              )}
            </div>
            {uniqueArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uniqueArticles.map((a) => (
                  <ArticleCard key={a.id} article={a} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📝</div>
                <h3
                  className="text-lg font-medium mb-2"
                  style={{ color: "var(--fgColor-default)" }}
                >
                  {locale === "en" ? "No articles yet" : "暂无文章"}
                </h3>
                <p className="mb-6" style={{ color: "var(--fgColor-muted)" }}>
                  {locale === "en"
                    ? "No articles have been published in this category yet."
                    : "该分类下暂时还没有发布文章。"}
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center px-4 py-2 rounded-lg transition-colors"
                  style={{
                    backgroundColor: "var(--bgColor-emphasis)",
                    color: "var(--fgColor-onEmphasis)",
                  }}
                >
                  {locale === "en" ? "Back to Home" : "返回首页"}
                </Link>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
