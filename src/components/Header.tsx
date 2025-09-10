"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "@/hooks/useLocale";
import { searchArticles } from "@/data/articles";
import { searchCategories } from "@/data/categories";
import { debounce } from "@/lib/utils";
import Link from "next/link";
import dynamic from "next/dynamic";
const SettingsDropdown = dynamic(() => import("./SettingsDropdown"), {
  ssr: false,
});
const SearchDropdown = dynamic(() => import("./SearchDropdown"), {
  ssr: false,
});

interface HeaderProps {
  onMenuClick: () => void;
}

interface SearchResult {
  type: "article" | "category";
  id: string;
  title: string;
  description?: string;
  category?: string;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const { locale, t } = useLocale();
  const [searchQuery, setSearchQuery] = useState("");
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
      ...articles.map((article) => ({
        type: "article" as const,
        id: article.id,
        title: locale === "en" ? article.titleEn : article.title,
        description:
          locale === "en" ? article.descriptionEn : article.description,
        category: article.category,
      })),
      ...categories.map((category) => ({
        type: "category" as const,
        id: category.id,
        title: locale === "en" ? category.nameEn : category.name,
      })),
    ];

    setSearchResults(results.slice(0, 8)); // 限制结果数量
    // 只有在输入框聚焦时才显示结果
    if (document.activeElement === searchRef.current?.querySelector("input")) {
      setShowSearchResults(true);
    }
  }, 300);

  useEffect(() => {
    performSearch(searchQuery);
  }, [searchQuery, locale, performSearch]);

  // 点击外部关闭搜索结果
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSearchResults(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowSearchResults(false);
        // 如果搜索框有焦点，移除焦点
        if (
          document.activeElement === searchRef.current?.querySelector("input")
        ) {
          (document.activeElement as HTMLElement).blur();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSearchResultClick = () => {
    setShowSearchResults(false);
    setSearchQuery("");
  };

  if (!mounted) {
    return null;
  }

  return (
    <header
      className="sticky top-0 z-30 backdrop-blur-md border-b"
      style={{
        backgroundColor: "rgba(var(--background-rgb), 0.8)",
        borderColor: "var(--borderColor-default)",
        boxShadow: "var(--shadow-small)",
        marginLeft: "var(--sidebar-width, 0)",
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 lg:px-6">
        {/* 左侧：菜单按钮 */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95 hover:bg-[color:var(--control-bgColor-hover)]"
            style={{ color: "var(--fgColor-default)" }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* 桌面端 Logo */}
          <Link
            href="/"
            className="hidden lg:flex items-center space-x-2 transition-all duration-200 hover:scale-105"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">👨‍💻</span>
            </div>
            <span
              className="text-xl font-bold"
              style={{ color: "var(--fgColor-default)" }}
            >
              MZFL
            </span>
          </Link>
        </div>

        {/* 中间：搜索框 */}
        <div className="flex-1 max-w-2xl mx-4 relative" ref={searchRef}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: "var(--fgColor-muted)" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* 清空按钮 */}
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setShowSearchResults(false);
                  searchRef.current?.querySelector("input")?.focus();
                }}
                className="absolute inset-y-0 right-0 pr-3 flex items-center transition-colors text-[color:var(--fgColor-muted)] hover:text-[color:var(--fgColor-default)]"
              >
                <svg
                  className="h-4 w-4"
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
            )}
            <input
              type="text"
              placeholder={t("search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 py-2 rounded-lg transition-all duration-200 focus:outline-none border focus:border-[color:var(--borderColor-emphasis)] focus:shadow-[0_0_0_3px_rgba(31,111,235,0.1)]"
              style={{
                paddingRight: searchQuery ? "2.5rem" : "1rem",
                backgroundColor: "var(--control-bgColor-rest)",
                borderColor: "var(--borderColor-default)",
                color: "var(--fgColor-default)",
              }}
              onFocus={() => {
                if (searchQuery.trim()) setShowSearchResults(true);
              }}
              onBlur={() => {
                setTimeout(() => setShowSearchResults(false), 150);
              }}
            />
          </div>

          <SearchDropdown
            open={showSearchResults}
            results={searchResults.map((r) => ({
              type: r.type,
              id: r.id,
              title: r.title,
              description: r.description,
            }))}
            onSelect={handleSearchResultClick}
            t={t}
          />
        </div>

        {/* 右侧：设置 */}
        <div className="flex items-center space-x-2">
          <SettingsDropdown />
        </div>
      </div>
    </header>
  );
}
