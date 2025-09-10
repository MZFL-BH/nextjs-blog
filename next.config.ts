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
  // 如果您的仓库不是在根域名下，请修改为您的仓库名称
  // 例如：如果仓库是 https://github.com/username/my-blog，则设置为 '/my-blog/'
  basePath: "",
  assetPrefix: "",
};

export default nextConfig;
