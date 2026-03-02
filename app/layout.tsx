import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/cn";
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

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={cn(inter.variable)}>
      <body className={cn("page-shell font-sans")}>
        <div className="mx-auto flex min-h-screen max-w-page flex-col px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pt-10">
          {children}
        </div>
      </body>
    </html>
  );
}
