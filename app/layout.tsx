import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tran Tien Anh · Frontend Developer",
  description:
    "Portfolio of Tran Tien Anh, frontend developer specialising in scalable React architecture, large-scale e-commerce platforms, and performance-focused UI.",
  icons: {
    icon: "/favicon.ico"
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body className="page-shell">
        <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pt-10">
          {children}
        </div>
      </body>
    </html>
  );
}
