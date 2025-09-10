import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  experimental: {
    optimizePackageImports: ["react", "react-dom"],
  },
  // 为 GitHub Pages 配置
  images: {
    unoptimized: true,
  },
  // 配置静态导出
  output: "export",
  // GitHub Pages 配置 - 请根据您的仓库名称修改
  // 如果仓库是 https://github.com/username/repository-name，则设置为 '/repository-name'
  basePath: "/nextjs-blog",
  assetPrefix: "/nextjs-blog",
};

export default nextConfig;
