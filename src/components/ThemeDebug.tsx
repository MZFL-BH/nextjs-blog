'use client';

import { useTheme } from '@/hooks/useTheme';
import { useEffect, useState } from 'react';

export default function ThemeDebug() {
  const { theme, resolvedTheme } = useTheme();
  const [htmlClasses, setHtmlClasses] = useState<string>('');
  const [cssVars, setCssVars] = useState<{ background: string; foreground: string }>({
    background: '',
    foreground: ''
  });

  useEffect(() => {
    // 获取 HTML 元素的类名
    setHtmlClasses(document.documentElement.className);
    
    // 获取 CSS 变量值
    const computedStyle = getComputedStyle(document.documentElement);
    setCssVars({
      background: computedStyle.getPropertyValue('--background'),
      foreground: computedStyle.getPropertyValue('--foreground')
    });
  }, [theme, resolvedTheme]);

  return (
    <div className="fixed bottom-4 left-4 z-50 p-4 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg text-sm">
      <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">主题调试信息</h3>
      <div className="space-y-1 text-gray-700 dark:text-gray-300">
        <div>主题设置: {theme}</div>
        <div>解析主题: {resolvedTheme}</div>
        <div>HTML 类名: {htmlClasses}</div>
        <div>--background: {cssVars.background}</div>
        <div>--foreground: {cssVars.foreground}</div>
      </div>
    </div>
  );
}
