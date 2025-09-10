import { getCategoryById, getAllCategories } from "@/data/categories";
import { getArticlesByCategory } from "@/data/articles";
import { notFound } from "next/navigation";
import CategoryClient from "./Client";

interface PageProps {
  params: { id: string };
}

export default function CategoryPage({ params }: PageProps) {
  const id = params.id;
  const category = getCategoryById(id);
  if (!category) {
    notFound();
  }
  const articles = getArticlesByCategory(id);
  const allCategories = getAllCategories();

  const childCategories = allCategories.filter(
    (cat) =>
      cat.parent === id ||
      (category.children &&
        category.children.some((child) => child.id === cat.id)),
  );

  const allCategoryArticles = [
    ...articles,
    ...childCategories.flatMap((child) => getArticlesByCategory(child.id)),
  ];
  const uniqueArticles = allCategoryArticles.filter(
    (article, index, self) =>
      index === self.findIndex((a) => a.id === article.id),
  );
  const subcategoryArticles = (category.children || []).map((sc) => ({
    id: sc.id,
    name: sc.name,
    nameEn: sc.nameEn,
    icon: sc.icon,
    count: getArticlesByCategory(sc.id).length,
  }));

  return (
    <CategoryClient
      category={category}
      uniqueArticles={uniqueArticles}
      subcategoryArticles={subcategoryArticles}
    />
  );
}

export const revalidate = 60;

export async function generateStaticParams() {
  const all = getAllCategories();
  return all.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const category = getCategoryById(params.id);
  if (!category) return {};
  return {
    title: `${category.name} | Frontend Learning`,
    description: `${category.name} - 学习路径与文章集合`,
  };
}
