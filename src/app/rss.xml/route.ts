import { NextResponse } from "next/server";
import { articles } from "@/data/articles";

export const revalidate = 3600;

export async function GET() {
  const site =
    process.env.NODE_ENV === "production"
      ? "https://mzfl-bh.github.io/nextjs-blog"
      : "http://localhost:3000";

  const items = articles
    .map(
      (a) => `
    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>${site}/article/${a.id}</link>
      <guid isPermaLink="true">${site}/article/${a.id}</guid>
      <pubDate>${new Date(a.publishDate).toUTCString()}</pubDate>
      <description><![CDATA[${a.description}]]></description>
    </item>
  `,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Frontend Learning</title>
      <link>${site}</link>
      <description>前端学习平台 RSS</description>
      ${items}
    </channel>
  </rss>`;

  return new NextResponse(xml, {
    status: 200,
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
