import type { Metadata } from "next";
import { Jua, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const jua = Jua({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jua",
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "포켓몬 탐험대 - 오늘, 어떤 포켓몬을 만나 볼래?",
  description: "서로 다른 모습과 특별한 능력을 가진 포켓몬을 만나 보세요. 새로운 포켓몬과 함께 신나는 모험을 시작해요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${jua.variable} ${notoSansKr.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-poke-bg text-gray-800">
        {children}
      </body>
    </html>
  );
}

