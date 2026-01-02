import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "병원 맞춤 키워드 광고 | 광고비는 그대로, 성과는 2배로",
  description: "키워드 광고 성과가 떨어지셨나요? 병원 전문 컨설턴트가 데이터 기반으로 광고 효율을 극대화해 드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}