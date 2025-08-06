// 简单的类名合并函数
export function cn(...inputs: (string | undefined | null | boolean)[]) {
  return inputs.filter(Boolean).join(' ');
}

// 格式化日期
export function formatDate(date: string, locale: 'zh' | 'en' = 'zh'): string {
  const d = new Date(date);
  
  if (locale === 'en') {
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
  
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// 获取难度标签颜色
export function getDifficultyColor(difficulty: 'beginner' | 'intermediate' | 'advanced'): string {
  switch (difficulty) {
    case 'beginner':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'intermediate':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'advanced':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
}

// 获取难度文本
export function getDifficultyText(difficulty: 'beginner' | 'intermediate' | 'advanced', locale: 'zh' | 'en' = 'zh'): string {
  const texts = {
    zh: {
      beginner: '初级',
      intermediate: '中级',
      advanced: '高级'
    },
    en: {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced'
    }
  };
  
  return texts[locale][difficulty];
}

// 渲染星级评分
export function renderStars(rating: number): string {
  return '⭐'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '⭐' : '');
}

// 简单的 Markdown 渲染器
export function renderMarkdown(content: string): string {
  return content
    // 标题
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mb-3 mt-6 text-gray-900 dark:text-gray-100">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mb-4 mt-8 text-gray-900 dark:text-gray-100">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">$1</h1>')
    
    // 代码块
    .replace(/```(\w+)?\n([\s\S]*?)```/gim, (match, language, code) => {
      const lang = language || 'text';
      const trimmedCode = code.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
      return `
        <div class="relative rounded-2xl overflow-hidden my-8 group" style="background: var(--card-background); border: 1px solid var(--card-border); box-shadow: var(--shadow-md);">
          <div class="flex items-center justify-between px-6 py-4" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-bottom: 1px solid rgba(255,255,255,0.1);">
            <div class="flex items-center space-x-3">
              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span class="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-lg font-mono font-medium">
                ${lang.toUpperCase()}
              </span>
            </div>
            <button class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-3 py-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm rounded-lg font-mono" onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.textContent)">
              复制
            </button>
          </div>
          <pre class="p-6 overflow-x-auto text-sm leading-relaxed" style="background: var(--card-background); color: var(--foreground);"><code class="font-mono">${trimmedCode}</code></pre>
        </div>
      `;
    })
    
    // 行内代码
    .replace(/`([^`]+)`/gim, '<code class="px-2 py-1 rounded-lg text-sm font-mono font-medium" style="background: rgba(59, 130, 246, 0.1); color: #3b82f6; border: 1px solid rgba(59, 130, 246, 0.2);">$1</code>')
    
    // 粗体和斜体
    .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>')
    
    // 列表
    .replace(/^\d+\. (.*$)/gim, '<li class="mb-2 ml-6 list-decimal">$1</li>')
    .replace(/^- (.*$)/gim, '<li class="mb-2 ml-6 list-disc">$1</li>')
    
    // 段落
    .replace(/\n\n/gim, '</p><p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">')
    .replace(/^(?!<[h|l|p|d|c])(.*$)/gim, '<p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">$1</p>');
}

// 防抖函数
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// 节流函数
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
