'use client';

import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useLocale } from '@/hooks/useLocale';

export default function SettingsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const { locale, setLocale } = useLocale();

  // 点击外部关闭下拉菜单
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const themeOptions = [
    { value: 'light', label: '浅色模式', labelEn: 'Light Mode', icon: '☀️' },
    { value: 'dark', label: '深色模式', labelEn: 'Dark Mode', icon: '🌙' },
    { value: 'system', label: '跟随系统', labelEn: 'System', icon: '💻' }
  ];

  const languageOptions = [
    { value: 'zh', label: '中文', icon: '🇨🇳' },
    { value: 'en', label: 'English', icon: '🇺🇸' }
  ];

  const currentTheme = themeOptions.find(option => option.value === theme);
  const currentLanguage = languageOptions.find(option => option.value === locale);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* 触发按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg transition-all duration-200 flex items-center space-x-1 group"
        style={{
          backgroundColor: isOpen ? 'var(--control-bgColor-hover)' : 'transparent',
          color: 'var(--fgColor-default)',
          border: '1px solid transparent'
        }}
        onMouseEnter={(e) => {
          if (!isOpen) {
            e.currentTarget.style.backgroundColor = 'var(--control-bgColor-hover)';
            e.currentTarget.style.borderColor = 'var(--borderColor-default)';
            e.currentTarget.style.boxShadow = 'var(--shadow-small)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.backgroundColor = 'var(--control-bgColor-active)';
        }}
        onMouseUp={(e) => {
          if (!isOpen) {
            e.currentTarget.style.backgroundColor = 'var(--control-bgColor-hover)';
          }
        }}
        aria-label="Settings"
      >
        <svg
          className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>

      {/* 下拉菜单 */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg border z-50"
          style={{
            backgroundColor: 'var(--bgColor-default)',
            borderColor: 'var(--borderColor-default)',
            boxShadow: 'var(--shadow-large)'
          }}
        >
          <div className="py-2">
            {/* 主题设置 */}
            <div className="px-3 py-2">
              <div 
                className="text-xs font-medium uppercase tracking-wide mb-2"
                style={{ color: 'var(--fgColor-muted)' }}
              >
                {locale === 'en' ? 'Theme' : '主题'}
              </div>
              <div className="space-y-1">
                {themeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setTheme(option.value as 'light' | 'dark' | 'system');
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center px-2 py-1.5 rounded text-sm transition-colors"
                    style={{
                      backgroundColor: theme === option.value ? 'var(--bgColor-accent-muted)' : 'transparent',
                      color: theme === option.value ? 'var(--fgColor-accent)' : 'var(--fgColor-default)'
                    }}
                    onMouseEnter={(e) => {
                      if (theme !== option.value) {
                        e.currentTarget.style.backgroundColor = 'var(--bgColor-muted)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (theme !== option.value) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    <span className="mr-2">{option.icon}</span>
                    <span>{locale === 'en' ? option.labelEn : option.label}</span>
                    {theme === option.value && (
                      <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 分隔线 */}
            <div 
              className="my-2 h-px"
              style={{ backgroundColor: 'var(--borderColor-default)' }}
            />

            {/* 语言设置 */}
            <div className="px-3 py-2">
              <div 
                className="text-xs font-medium uppercase tracking-wide mb-2"
                style={{ color: 'var(--fgColor-muted)' }}
              >
                {locale === 'en' ? 'Language' : '语言'}
              </div>
              <div className="space-y-1">
                {languageOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setLocale(option.value as 'zh' | 'en');
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center px-2 py-1.5 rounded text-sm transition-colors"
                    style={{
                      backgroundColor: locale === option.value ? 'var(--bgColor-accent-muted)' : 'transparent',
                      color: locale === option.value ? 'var(--fgColor-accent)' : 'var(--fgColor-default)'
                    }}
                    onMouseEnter={(e) => {
                      if (locale !== option.value) {
                        e.currentTarget.style.backgroundColor = 'var(--bgColor-muted)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (locale !== option.value) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    <span className="mr-2">{option.icon}</span>
                    <span>{option.label}</span>
                    {locale === option.value && (
                      <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
