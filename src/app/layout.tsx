import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UI Lab",
  description: "GOV.UK Design System 기반 UI/UX 학습 저장소",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
