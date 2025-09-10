/** @type {import('next').NextConfig} */
const nextConfig = {
  // 基本配置
  reactStrictMode: true,
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
  // 确保静态导出时正确处理 basePath
  trailingSlash: false,
  // 在静态导出时确保正确的路径处理
  distDir: ".next",
};

module.exports = nextConfig;
