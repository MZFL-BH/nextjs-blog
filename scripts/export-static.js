const fs = require("fs");
const path = require("path");

// 确保 out 目录存在
const outDir = path.join(__dirname, "..", "out");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 复制文件的函数
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    fs.readdirSync(src).forEach(function (childItemName) {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName),
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// 复制静态文件
const nextDir = path.join(__dirname, "..", ".next");
const serverAppDir = path.join(nextDir, "server", "app");
const staticDir = path.join(nextDir, "static");

console.log("Copying static export files...");

// 复制 HTML 文件和静态资源
if (fs.existsSync(serverAppDir)) {
  copyRecursiveSync(serverAppDir, outDir);
  console.log("Copied server app directory");
}

// 复制静态资源
if (fs.existsSync(staticDir)) {
  copyRecursiveSync(staticDir, path.join(outDir, "_next", "static"));
  console.log("Copied static resources");
}

// 复制公共目录文件
const publicDir = path.join(__dirname, "..", "public");
if (fs.existsSync(publicDir)) {
  copyRecursiveSync(publicDir, outDir);
  console.log("Copied public directory");
}

console.log("Static export completed successfully!");
