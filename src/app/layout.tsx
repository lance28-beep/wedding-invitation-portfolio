import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingMessenger from "@/components/FloatingMessenger";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wedding Templates - Beautiful Wedding Website Templates",
  description: "Discover our collection of elegant and customizable wedding website templates. Perfect for showcasing your special day with style and sophistication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FloatingMessenger />
      </body>
    </html>
  );
}
