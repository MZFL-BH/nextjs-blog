'use client';

import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 lg:top-6 lg:right-6 z-50 p-2 rounded-lg transition-all duration-200 group border"
      style={{
        backgroundColor: 'var(--bgColor-default)',
        borderColor: 'var(--borderColor-default)',
        boxShadow: 'var(--shadow-small)',
        color: 'var(--fgColor-default)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--control-bgColor-hover)';
        e.currentTarget.style.borderColor = 'var(--borderColor-emphasis)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--bgColor-default)';
        e.currentTarget.style.borderColor = 'var(--borderColor-default)';
      }}
      title={`切换到${resolvedTheme === 'dark' ? '浅色' : '暗色'}模式`}
      aria-label={`切换到${resolvedTheme === 'dark' ? '浅色' : '暗色'}模式`}
    >
      {resolvedTheme === 'dark' ? (
        // GitHub 风格太阳图标
        <svg
          className="w-5 h-5 transition-transform duration-200 group-hover:rotate-12"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg>
      ) : (
        // GitHub 风格月亮图标
        <svg
          className="w-5 h-5 transition-transform duration-200 group-hover:-rotate-12"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        </svg>
      )}
    </button>
  );
}
