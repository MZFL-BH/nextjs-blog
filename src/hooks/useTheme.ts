"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 从 localStorage 获取保存的主题设置
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
      setThemeState(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const applyTheme = (next: "light" | "dark") => {
      setResolvedTheme(next);
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(next);
    };

    const update = () => {
      if (theme === "system") {
        const next = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
        applyTheme(next);
      } else {
        applyTheme(theme);
      }
    };

    update();

    // 监听系统主题变化
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => update();
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return React.createElement(
    ThemeContext.Provider,
    { value: { theme, setTheme, resolvedTheme } },
    // 防止服务端渲染不匹配
    !mounted
      ? React.createElement(
          "div",
          { style: { visibility: "hidden" } },
          children,
        )
      : children,
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
