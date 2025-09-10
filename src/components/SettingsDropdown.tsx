"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useLocale } from "@/hooks/useLocale";

export default function SettingsDropdown() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 active:scale-95 border"
        style={{
          backgroundColor: "var(--bgColor-default)",
          color: "var(--fgColor-default)",
          borderColor: "var(--borderColor-default)",
          boxShadow: "var(--shadow-small)",
        }}
        title={t("common.more")}
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M10 2a1.5 1.5 0 011.5 1.5V5a1.5 1.5 0 01-3 0V3.5A1.5 1.5 0 0110 2zm0 12a1.5 1.5 0 011.5 1.5V17a1.5 1.5 0 01-3 0v-1.5A1.5 1.5 0 0110 14zm0-6a1.5 1.5 0 011.5 1.5V11a1.5 1.5 0 01-3 0V9.5A1.5 1.5 0 0110 8z" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-56 rounded-lg overflow-hidden border z-50"
          style={{
            backgroundColor: "var(--bgColor-default)",
            color: "var(--fgColor-default)",
            borderColor: "var(--borderColor-default)",
            boxShadow: "var(--shadow-large)",
          }}
        >
          <div
            className="p-2 text-xs font-medium"
            style={{ color: "var(--fgColor-muted)" }}
          >
            主题
          </div>
          <div className="px-2 pb-2 space-y-1">
            {(
              [
                { key: "light", label: t("theme.light") },
                { key: "dark", label: t("theme.dark") },
                { key: "system", label: t("theme.system") },
              ] as const
            ).map((item) => (
              <button
                key={item.key}
                role="menuitemradio"
                aria-checked={
                  theme === item.key ||
                  (item.key !== "system" &&
                    resolvedTheme === item.key &&
                    theme === "system")
                }
                onClick={() => setTheme(item.key)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md transition-colors"
                style={{
                  backgroundColor:
                    theme === item.key
                      ? "var(--bgColor-accent-muted)"
                      : "transparent",
                  color:
                    theme === item.key
                      ? "var(--fgColor-accent)"
                      : "var(--fgColor-default)",
                }}
              >
                <span>{item.label}</span>
                {theme === item.key && (
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L8.5 11.086l6.543-6.543a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>

          <div
            className="px-2 py-2 border-t"
            style={{ borderColor: "var(--borderColor-default)" }}
          >
            <div
              className="mb-2 text-xs font-medium"
              style={{ color: "var(--fgColor-muted)" }}
            >
              语言
            </div>
            <div className="grid grid-cols-2 gap-2">
              {(
                [
                  { key: "zh", label: t("language.zh") },
                  { key: "en", label: t("language.en") },
                ] as const
              ).map((item) => (
                <button
                  key={item.key}
                  role="menuitemradio"
                  aria-checked={locale === item.key}
                  onClick={() => setLocale(item.key)}
                  className="px-3 py-2 rounded-md text-sm transition-colors"
                  style={{
                    backgroundColor:
                      locale === item.key
                        ? "var(--bgColor-accent-muted)"
                        : "transparent",
                    color:
                      locale === item.key
                        ? "var(--fgColor-accent)"
                        : "var(--fgColor-default)",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
