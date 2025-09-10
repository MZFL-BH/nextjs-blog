import { getArticleById, articles } from "@/data/articles";
import { getCategoryById } from "@/data/categories";
import { notFound } from "next/navigation";
import ArticleClient from "./Client";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { id } = await params;
  const article = getArticleById(id);
  if (!article) {
    notFound();
  }
  const category = getCategoryById(article.category);
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <ArticleClient
      article={article}
      category={category}
      relatedArticles={relatedArticles}
    />
  );
}

export const revalidate = 60;

export async function generateStaticParams() {
  // 文章数据在本地，直接静态化所有 id
  return articles.map((a) => ({ id: a.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = getArticleById(id);
  if (!article) return {};
  return {
    title: `${article.title} | Frontend Learning`,
    description: article.description,
  };
}
