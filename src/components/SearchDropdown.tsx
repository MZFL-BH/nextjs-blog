"use client";

import Link from "next/link";

export interface SearchResultItem {
  type: "article" | "category";
  id: string;
  title: string;
  description?: string;
}

export default function SearchDropdown({
  open,
  results,
  onSelect,
  t,
}: {
  open: boolean;
  results: SearchResultItem[];
  onSelect: () => void;
  t: (key: string) => string;
}) {
  if (!open) return null;
  if (!results.length) {
    return (
      <div
        className="absolute top-full left-0 right-0 mt-2 rounded-lg z-50"
        style={{
          backgroundColor: "var(--bgColor-default)",
          border: "1px solid var(--borderColor-default)",
          boxShadow: "var(--shadow-large)",
        }}
      >
        <div
          className="p-4 text-center"
          style={{ color: "var(--fgColor-muted)" }}
        >
          <div className="text-2xl mb-2">🔍</div>
          <div className="text-sm">{t("search.noResults")}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute top-full left-0 right-0 mt-2 rounded-lg max-h-96 overflow-y-auto z-50"
      style={{
        backgroundColor: "var(--bgColor-default)",
        border: "1px solid var(--borderColor-default)",
        boxShadow: "var(--shadow-large)",
      }}
    >
      <div className="p-2">
        <div
          className="text-xs font-medium px-3 py-2"
          style={{ color: "var(--fgColor-muted)" }}
        >
          {t("search.results")} ({results.length})
        </div>
        {results.map((result) => (
          <Link
            key={`${result.type}-${result.id}`}
            href={
              result.type === "article"
                ? `/article/${result.id}`
                : `/category/${result.id}`
            }
            onClick={onSelect}
            className="flex items-start p-3 rounded-lg transition-all duration-200 hover:bg-[color:var(--control-bgColor-hover)]"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-3 shadow-sm">
              <span className="text-white text-sm">
                {result.type === "article" ? "📄" : "📁"}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div
                className="text-sm font-medium truncate"
                style={{ color: "var(--fgColor-default)" }}
              >
                {result.title}
              </div>
              {result.description && (
                <div
                  className="text-xs mt-1 line-clamp-2"
                  style={{ color: "var(--fgColor-muted)" }}
                >
                  {result.description}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
