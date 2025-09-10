"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/data/categories";
import { useLocale } from "@/hooks/useLocale";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { locale } = useLocale();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    "frontend-basics",
  ]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  const isActiveCategory = (categoryId: string) => {
    return pathname === `/category/${categoryId}`;
  };

  // const isActiveArticle = (articleId: string) => {
  //   return pathname === `/article/${articleId}`;
  // };

  return (
    <>
      {/* 移动端遮罩 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* 侧边栏 */}
      <div
        className={cn(
          "fixed top-0 left-0 h-screen z-50 transform transition-all duration-300 ease-in-out lg:fixed lg:translate-x-0 lg:z-auto flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
        style={{
          width: "256px", // 使用固定宽度确保与CSS变量一致
          backgroundColor: "var(--bgColor-muted)",
          borderRight: "1px solid var(--borderColor-default)",
          boxShadow: "var(--shadow-large)",
        }}
      >
        {/* GitHub 风格头部 */}
        <div
          className="flex items-center justify-between p-6"
          style={{ borderBottom: "1px solid var(--borderColor-default)" }}
        >
          <div className="flex items-center space-x-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: "var(--bgColor-emphasis)",
                color: "var(--fgColor-onEmphasis)",
              }}
            >
              <span className="font-bold text-lg">👨‍💻</span>
            </div>
            <div>
              <h1
                className="text-lg font-semibold"
                style={{ color: "var(--fgColor-default)" }}
              >
                MZFL
              </h1>
              <p className="text-sm" style={{ color: "var(--fgColor-muted)" }}>
                {locale === "en" ? "Frontend Learning" : "前端学习"}
              </p>
            </div>
          </div>

          {/* 移动端关闭按钮 */}
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* 导航内容 */}
        <div className="flex-1 overflow-y-auto py-6 min-h-0">
          <nav className="px-4 space-y-1">
            {/* GitHub 风格首页链接 */}
            <Link
              href="/"
              className={cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 group",
                pathname === "/" ? "font-semibold" : "hover:no-underline",
              )}
              style={{
                backgroundColor:
                  pathname === "/"
                    ? "var(--bgColor-accent-muted)"
                    : "transparent",
                color:
                  pathname === "/"
                    ? "var(--fgColor-accent)"
                    : "var(--fgColor-default)",
              }}
              onMouseEnter={(e) => {
                if (pathname !== "/") {
                  e.currentTarget.style.backgroundColor =
                    "var(--control-bgColor-hover)";
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== "/") {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
              onClick={onClose}
            >
              <span className="mr-3 text-base">🏠</span>
              <span>{locale === "en" ? "Home" : "首页"}</span>
            </Link>

            {/* 分类导航 */}
            {categories.map((category) => (
              <div key={category.id} className="space-y-1">
                {/* 主分类 */}
                <div className="flex items-center">
                  <Link
                    href={`/category/${category.id}`}
                    className={cn(
                      "flex-1 flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      isActiveCategory(category.id)
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                        : "text-gray-700 dark:text-gray-300 hover:bg-[color:var(--control-bgColor-hover)]",
                    )}
                    onClick={onClose}
                  >
                    <span className="mr-3 text-lg">{category.icon}</span>
                    <span className="flex-1">
                      {locale === "en" ? category.nameEn : category.name}
                    </span>
                    {category.children && (
                      <span className="ml-2 text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                        {category.children.length}
                      </span>
                    )}
                  </Link>

                  {/* 展开/收起按钮 */}
                  {category.children && (
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="ml-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <svg
                        className={cn(
                          "w-4 h-4 text-gray-500 dark:text-gray-400 transform transition-transform",
                          expandedCategories.includes(category.id)
                            ? "rotate-90"
                            : "",
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* 子分类 */}
                {category.children &&
                  expandedCategories.includes(category.id) && (
                    <div className="ml-6 space-y-1">
                      {category.children.map((subcategory) => (
                        <Link
                          key={subcategory.id}
                          href={`/category/${subcategory.id}`}
                          className={cn(
                            "flex items-center px-3 py-2 rounded-lg text-sm transition-colors",
                            isActiveCategory(subcategory.id)
                              ? "bg-[color:var(--bgColor-accent-muted)] text-[color:var(--fgColor-accent)]"
                              : "text-[color:var(--fgColor-muted)] hover:bg-[color:var(--bgColor-muted)] hover:text-[color:var(--fgColor-default)]",
                          )}
                          onClick={onClose}
                        >
                          <span className="mr-3 text-base">
                            {subcategory.icon}
                          </span>
                          <span>
                            {locale === "en"
                              ? subcategory.nameEn
                              : subcategory.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </nav>
        </div>

        {/* 底部信息 */}
        <div className="p-3 border-t border-gray-200 dark:border-gray-700 mt-auto">
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
            <p>© 2024 Frontend Learning</p>
            <p className="mt-1">
              {locale === "en"
                ? "Keep Learning, Keep Growing"
                : "持续学习，持续成长"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
