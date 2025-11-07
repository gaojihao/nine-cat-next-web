import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "九猫",
  description:
    "九猫社区是一个充满活力的猫咪爱好者社区，我们致力于打造一个全方位的猫咪生活服务平台。无论您是资深猫奴还是新手猫主，这里都有您需要的一切资源和支持",
  keywords: "九猫,猫咪,社区,宠物,健康,流浪猫,猫咪写真,猫咪动态,猫咪问答",
  applicationName: "九猫",
  openGraph: {
    title: "九猫",
    description:
      "九猫社区是一个充满活力的猫咪爱好者社区，我们致力于打造一个全方位的猫咪生活服务平台。无论您是资深猫奴还是新手猫主，这里都有您需要的一切资源和支持",
    url: "https://e08trip.cn",
    siteName: "九猫",
    images: [
      {
        url: "https://e08trip.cn/_next/image?url=%2Flogo.png&w=64&q=75",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
