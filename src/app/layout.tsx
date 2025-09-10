import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/hooks/useLocale";
import { ThemeProvider } from "@/hooks/useTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Learning Platform - 前端学习平台",
  description:
    "A comprehensive platform for learning frontend development technologies from basics to advanced topics. 系统学习前端开发技术，从基础到进阶。",
  keywords:
    "frontend, web development, JavaScript, React, Vue, CSS, HTML, TypeScript, 前端开发, 网页开发",
  authors: [{ name: "dev-zuo" }],
  creator: "dev-zuo",
  publisher: "Frontend Learning Platform",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://frontend-learning.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/zh",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://frontend-learning.dev",
    title: "Frontend Learning Platform - 前端学习平台",
    description:
      "A comprehensive platform for learning frontend development technologies from basics to advanced topics.",
    siteName: "Frontend Learning Platform",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Learning Platform - 前端学习平台",
    description:
      "A comprehensive platform for learning frontend development technologies from basics to advanced topics.",
    creator: "@dev-zuo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('theme');
                const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = (saved === 'light' || saved === 'dark') ? saved : (systemDark ? 'dark' : 'light');
                const root = document.documentElement;
                root.classList.remove('light','dark');
                root.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
