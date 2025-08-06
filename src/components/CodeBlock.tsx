'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({ code, language, showLineNumbers = true }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // 动态加载 Prism.js
    const loadPrism = async () => {
      if (typeof window !== 'undefined' && !window.Prism) {
        // 加载 Prism CSS
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = resolvedTheme === 'dark' 
          ? 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css'
          : 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css';
        document.head.appendChild(cssLink);

        // 加载 Prism JS
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
        script.onload = () => {
          // 加载语言支持
          const langScript = document.createElement('script');
          langScript.src = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-${language}.min.js`;
          langScript.onload = () => {
            if (window.Prism && codeRef.current) {
              window.Prism.highlightElement(codeRef.current);
            }
          };
          document.head.appendChild(langScript);
        };
        document.head.appendChild(script);
      } else if (window.Prism && codeRef.current) {
        window.Prism.highlightElement(codeRef.current);
      }
    };

    loadPrism();
  }, [language, resolvedTheme]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  const getLanguageIcon = (lang: string) => {
    const icons: Record<string, string> = {
      javascript: '🟨',
      typescript: '🔷',
      html: '🧡',
      css: '🎨',
      react: '⚛️',
      vue: '💚',
      python: '🐍',
      java: '☕',
      cpp: '⚡',
      csharp: '💜',
      php: '🐘',
      go: '🐹',
      rust: '🦀',
      swift: '🍎',
      kotlin: '🎯',
      dart: '🎯',
      shell: '🐚',
      bash: '🐚',
      json: '📄',
      xml: '📄',
      yaml: '📄',
      markdown: '📝',
      sql: '🗃️',
    };
    return icons[lang.toLowerCase()] || '📄';
  };

  return (
    <div className="relative rounded-lg overflow-hidden my-6 group border"
         style={{
           backgroundColor: 'var(--bgColor-muted)',
           borderColor: 'var(--borderColor-default)',
           boxShadow: 'var(--shadow-small)'
         }}>
      {/* GitHub 风格代码块头部 */}
      <div className="flex items-center justify-between px-4 py-3"
           style={{
             backgroundColor: 'var(--bgColor-muted)',
             borderBottom: '1px solid var(--borderColor-default)'
           }}>
        <div className="flex items-center space-x-3">
          {/* 语言标签 */}
          <div className="flex items-center space-x-2">
            <span className="text-base">{getLanguageIcon(language)}</span>
            <span className="text-xs font-mono font-semibold px-2 py-1 rounded"
                  style={{
                    backgroundColor: 'var(--bgColor-accent-muted)',
                    color: 'var(--fgColor-accent)'
                  }}>
              {language.toUpperCase()}
            </span>
          </div>
        </div>

        {/* GitHub 风格复制按钮 */}
        <button
          onClick={copyToClipboard}
          className="opacity-0 group-hover:opacity-100 transition-all duration-200 p-2 rounded-md hover:scale-105"
          style={{
            backgroundColor: 'var(--control-bgColor-rest)',
            border: '1px solid var(--borderColor-default)',
            color: 'var(--fgColor-default)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--control-bgColor-hover)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--control-bgColor-rest)';
          }}
        >
          {copied ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>

      {/* GitHub 风格代码内容 */}
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm leading-6 font-mono"
             style={{
               backgroundColor: 'var(--bgColor-default)',
               color: 'var(--fgColor-default)',
               margin: 0,
               fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace'
             }}>
          <code
            ref={codeRef}
            className={`language-${language}`}
          >
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}

// 声明全局 Prism 类型
declare global {
  interface Window {
    Prism: any;
  }
}
