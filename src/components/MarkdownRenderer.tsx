'use client';

import { useEffect, useState } from 'react';
import CodeBlock from './CodeBlock';

interface MarkdownRendererProps {
  content: string;
}

interface ParsedContent {
  type: 'text' | 'code';
  content: string;
  language?: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [parsedContent, setParsedContent] = useState<ParsedContent[]>([]);

  useEffect(() => {
    // 解析 Markdown 内容，分离代码块和普通文本
    const parseContent = (markdown: string): ParsedContent[] => {
      const parts: ParsedContent[] = [];
      const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
      let lastIndex = 0;
      let match;

      while ((match = codeBlockRegex.exec(markdown)) !== null) {
        // 添加代码块前的文本
        if (match.index > lastIndex) {
          const textContent = markdown.slice(lastIndex, match.index);
          if (textContent.trim()) {
            parts.push({
              type: 'text',
              content: textContent
            });
          }
        }

        // 添加代码块
        parts.push({
          type: 'code',
          content: match[2].trim(),
          language: match[1] || 'text'
        });

        lastIndex = match.index + match[0].length;
      }

      // 添加最后剩余的文本
      if (lastIndex < markdown.length) {
        const textContent = markdown.slice(lastIndex);
        if (textContent.trim()) {
          parts.push({
            type: 'text',
            content: textContent
          });
        }
      }

      return parts;
    };

    setParsedContent(parseContent(content));
  }, [content]);

  // 渲染普通文本（非代码块）
  const renderText = (text: string): string => {
    return text
      // 标题
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mb-3 mt-6" style="color: var(--foreground);">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mb-4 mt-8" style="color: var(--foreground);">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-6" style="color: var(--foreground);">$1</h1>')
      
      // 行内代码
      .replace(/`([^`]+)`/gim, '<code class="px-2 py-1 rounded-lg text-sm font-mono font-medium" style="background: var(--bgColor-accent-muted); color: var(--fgColor-accent); border: 1px solid var(--borderColor-emphasis);">$1</code>')
      
      // 粗体和斜体
      .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>')
      
      // 列表
      .replace(/^\d+\. (.*$)/gim, '<li class="mb-2 ml-6 list-decimal">$1</li>')
      .replace(/^- (.*$)/gim, '<li class="mb-2 ml-6 list-disc">$1</li>')
      
      // 链接
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" class="underline transition-colors" style="color: var(--fgColor-accent);">$1</a>')
      
      // 段落
      .replace(/\n\n/gim, '</p><p class="mb-4 leading-relaxed" style="color: var(--foreground);">')
      .replace(/^(?!<[h|l|p|d|c|a])(.*$)/gim, '<p class="mb-4 leading-relaxed" style="color: var(--foreground);">$1</p>');
  };

  return (
    <div className="markdown-content">
      {parsedContent.map((part, index) => {
        if (part.type === 'code') {
          return (
            <CodeBlock
              key={index}
              code={part.content}
              language={part.language || 'text'}
            />
          );
        } else {
          return (
            <div
              key={index}
              dangerouslySetInnerHTML={{
                __html: renderText(part.content)
              }}
            />
          );
        }
      })}
    </div>
  );
}
