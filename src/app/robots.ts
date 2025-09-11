import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // 根据环境动态设置baseUrl
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://mzfl-bh.github.io/nextjs-blog"
      : "http://localhost:3000";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
