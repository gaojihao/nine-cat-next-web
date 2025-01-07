import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "九猫",
  description: "九猫社区是一个充满活力的猫咪爱好者社区，我们致力于打造一个全方位的猫咪生活服务平台。无论您是资深猫奴还是新手猫主，这里都有您需要的一切资源和支持",
  keywords: "九猫,猫咪,社区,宠物,健康,流浪猫,猫咪写真,猫咪动态,猫咪问答",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
