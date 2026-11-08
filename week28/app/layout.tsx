import Link from "next/link";
import "./globals.css";
import { Metadata } from "next";
import { albums } from "@/data/albums";

export const metadata: Metadata = {
  title: { default: "나의 앨범", template: "%s | 나의 앨범" },
  description: "요즘 내가 듣는 앨범들",
  openGraph: {
    siteName: "나의 앨범",
    title: "나의 앨범",
    description: "요즘 내가 듣는 앨범들",
    images: [albums[0].cover],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header className="site-header">
          <Link href="/" className="logo">
            나의 앨범
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}